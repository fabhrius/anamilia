<?php
/**
 * Initial Setup.
 *
 * @package WOPB\Notice
 * @since v.2.4.4
 */
namespace WOPB;

use Plugin_Upgrader;
use WP_Ajax_Upgrader_Skin;

defined( 'ABSPATH' ) || exit;

class InitialSetup {

	public function __construct() {
		add_action( 'rest_api_init', array($this, 'wopb_register_route') );
	}

	/**
	 * REST API Action
	 *  * @since 3.0.0
	 * @return NULL
	 */
	public function wopb_register_route() {
        register_rest_route(
			'wopb/v2', 
			'/wizard_site_status/',
			array(
				array(
					'methods'  => 'POST', 
					'callback' => array( $this, 'wizard_site_status_callback'),
					'permission_callback' => function () {
						return current_user_can( 'edit_posts' );
					},
					'args' => array()
				)
			)
        );
        register_rest_route(
			'wopb/v2', 
			'/send_initial_plugin_data/',
			array(
				array(
					'methods'  => 'POST', 
					'callback' => array( $this, 'send_initial_plugin_data_callback'),
					'permission_callback' => function () {
						return current_user_can( 'edit_posts' );
					},
					'args' => array()
				)
			)
        );
        register_rest_route(
			'wopb/v2', 
			'/initial_setup_complete/',
			array(
				array(
					'methods'  => 'POST', 
					'callback' => array( $this, 'initial_setup_complete_callback'),
					'permission_callback' => function () {
						return current_user_can( 'edit_posts' );
					},
					'args' => array()
				)
			)
        );
	}

	/**
	 * Send Plugin Data When Initial Setup
	 *
	 * * @since 3.0.0
	 *
	 * @return STRING
	 */
	public function send_initial_plugin_data_callback( $server ) {
		$post = $server->get_params();
        if ( ! wp_verify_nonce( $post['wpnonce'], 'wopb-nonce' ) ) {
			die();
		}

        $site = isset($post['site']) ? sanitize_text_field( $post['site'] ) : '';

		require_once WOPB_PATH . 'classes/Deactive.php';
		$obj = new \WOPB\Deactive();
		$obj->send_plugin_data( 'productx_wizard' , $site);
	}

	/**
	 * Initial Plugin Setup Complete
	 *
	 * * @since 3.0.0
	 *
	 * @return STRING
	 */
	public static function initial_setup_complete_callback($server) {
		$post = $server->get_params();
        if ( !wp_verify_nonce( $post['wpnonce'], 'wopb-nonce' ) ) {
			die();
		}

		update_option( '_wopb_initial_setup', true );
		return rest_ensure_response([
            'success' => true, 
            'redirect' => admin_url('admin.php?page=wopb-settings'),
        ]);
	}

	/**
	 * Plugin Install
	 *
	 * @param string $plugin Plugin Slug.
	 * @return boolean
	 * @since 3.0.0
	 */
	public function plugin_install( $plugin ) {

		require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
		include_once ABSPATH . 'wp-admin/includes/plugin-install.php';

		$api = plugins_api(
			'plugin_information',
			array(
				'slug'   => $plugin,
				'fields' => array(
					'sections' => false,
				),
			)
		);

		if ( is_wp_error( $api ) ) {
			return $api->get_error_message();
		}

		$skin     = new WP_Ajax_Upgrader_Skin();
		$upgrader = new Plugin_Upgrader( $skin );
		$result   = $upgrader->install( $api->download_link );

		return $result;
	}

	/**
	 * Save General Settings Data.
	 *
	 * @return void
	 * @since 3.0.0
	 */
	public function wizard_site_status_callback() {
		if ( !wp_verify_nonce( $_POST['wpnonce'], 'wopb-nonce' ) ) {
			die();
		}
		if ( isset( $_FILES['siteIcon'] ) ) {
            $file_extension     = strtolower( pathinfo( $_FILES['siteIcon']['name'], PATHINFO_EXTENSION ) );
			$allowed_extenstion = array( 'jpg', 'jpeg', 'png', 'gif', 'webp', 'ico' );
			if ( in_array( $file_extension, $allowed_extenstion ) ) {
                require_once ABSPATH . 'wp-admin/includes/image.php';
				require_once ABSPATH . 'wp-admin/includes/file.php';
				require_once ABSPATH . 'wp-admin/includes/media.php';
				$file_id = media_handle_upload( 'siteIcon', 0 );
				if ( $file_id ) {
                    update_option( 'site_icon', $file_id );
				}
			}
		}
		if ( isset( $_POST['siteName'] ) ) {
            $site_name = sanitize_text_field( $_POST['siteName'] );
			update_option( 'blogname', $site_name );
		}
		if ( isset( $_POST['siteType'] ) ) {
            $site_type = sanitize_text_field( $_POST['siteType'] );
			update_option( '__wopb_site_type', $site_type );
		}

		$woocommerce_installed = file_exists( WP_PLUGIN_DIR . '/woocommerce/woocommerce.php' );
		$wholesalex_installed  = file_exists( WP_PLUGIN_DIR . '/wholesalex/wholesalex.php' );
		if ( isset( $_POST['install_woocommerce'] ) && 'yes' === $_POST['install_woocommerce'] ) {
			if ( $woocommerce_installed ) {
					$is_wc_active = is_plugin_active( 'woocommerce/woocommerce.php' );
				if ( ! $is_wc_active ) {
					$activate_status = activate_plugin( 'woocommerce/woocommerce.php', '', false, true );
					if ( is_wp_error( $activate_status ) ) {
						wp_send_json_error( array( 'message' => __( 'WooCommerce Activation Failed!', 'wholesalex' ) ) );
					}
				}
			}
		}
		if ( isset( $_POST['install_wholesalex'] ) && 'yes' === $_POST['install_wholesalex'] ) {
			if ( ! $wholesalex_installed ) {
				$status = $this->plugin_install( 'wholesalex' );
				if ( $status && ! is_wp_error( $status ) ) {
					$activate_status = activate_plugin( 'wholesalex/wholesalex.php', '', false, true );
					if ( is_wp_error( $activate_status ) ) {
						wp_send_json_error( array( 'message' => __( 'WholesaleX Activation Failed!', 'wholesalex' ) ) );
					}
				} else {
					wp_send_json_error( array( 'message' => __( 'WholesaleX Installation Failed!', 'wholesalex' ) ) );
				}
			} else {
				$is_wc_active = is_plugin_active( 'wholesalex/wholesalex.php' );
				if ( ! $is_wc_active ) {
					$activate_status = activate_plugin( 'wholesalex/wholesalex.php', '', false, true );
					if ( is_wp_error( $activate_status ) ) {
						wp_send_json_error( array( 'message' => __( 'WholesaleX Activation Failed!', 'wholesalex' ) ) );
					}
				}
			}
		}
		
		return rest_ensure_response( ['success' => true ]);
	}
}
