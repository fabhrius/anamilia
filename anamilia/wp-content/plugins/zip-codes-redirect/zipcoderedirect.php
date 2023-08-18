<?php

/**
 * Plugin Name: Zip Code Redirect
 * Plugin URI: https://www.zipcode-redirect.com/
 * Description: Redirect A User To A Website URL Based On A ZIP Code. Redirect To Different URL's. Between Two And Unlimited URL's 
 * Requires at least: 5.8
 * Requires PHP: 5.7.2
 * Version: 5.1.1
 * Author: Paul Glover
 * Author URI: https://www.zipcode-redirect.com/
 * License: GPL2
 * License URI:https://www.gnu.org/licenses/gpl-2.0.html
 
 Zip Code Redirect is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 2 of the License, or
 any later version.
 
 Zip Code Redirect is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.
 You should have received a copy of the GNU General Public License
 along with Zip Code Redirect. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/

if ( !defined( 'ABSPATH' ) ) {
    header( 'HTTP/1.0 403 Forbidden' );
    exit;
}


if ( function_exists( 'zcr_fs' ) ) {
    zcr_fs()->set_basename( false, __FILE__ );
} else {
    // DO NOT REMOVE THIS IF, IT IS ESSENTIAL FOR THE `function_exists` CALL ABOVE TO PROPERLY WORK.
    
    if ( !function_exists( 'zcr_fs' ) ) {
        //  Create a helper function for easy SDK access.
        function zcr_fs()
        {
            global  $zcr_fs ;
            
            if ( !isset( $zcr_fs ) ) {
                // Include Freemius SDK.
                require_once dirname( __FILE__ ) . '/freemius/start.php';
                $zcr_fs = fs_dynamic_init( array(
                    'id'             => '7791',
                    'slug'           => 'zip-codes-redirect',
                    'type'           => 'plugin',
                    'public_key'     => 'pk_e114c9d9e3ccacd7707345a340ff3',
                    'is_premium'     => false,
                    'has_addons'     => false,
                    'has_paid_plans' => true,
                    'trial'          => array(
                    'days'               => 14,
                    'is_require_payment' => false,
                ),
                    'menu'           => array(
                    'slug'    => 'zipcode-redirect',
                    'support' => false,
                ),
                    'is_live'        => true,
                ) );
            }
            
            return $zcr_fs;
        }
        
        // Init Freemius.
        zcr_fs();
        // Signal that SDK was initiated.
        do_action( 'zcr_fs_loaded' );
    }
    
    // ... Your plugin's main file logic ...
    if ( !class_exists( 'zipcode_redirect' ) ) {
        //class zipcode_Redirect
        class zipcode_redirect
        {
            public function __construct()
            {
                add_action( 'admin_init', 'zipcode_redirect_settings' );
                add_action( 'admin_menu', 'zipcode_redirect_menu' );
                add_action( 'wp_enqueue_scripts', 'zipcode_scripts' );
                add_action( 'admin_enqueue_scripts', 'admin_data_scripts' );
                // needed for css and javascript
                add_action( 'wp_ajax_zipredirect_ajax_call', 'zip_ajax_call' );
                // for admins only
                add_action( 'wp_ajax_nopriv_zipredirect_ajax_call', 'zip_ajax_call' );
                // for ALL users
                add_action( 'wp_ajax_admin_datasearch_ajax_call', 'admin_data_ajax_call' );
                // for admins only
                add_action( 'wp_ajax_datasearch_ajax_call', 'data_ajax_call' );
                // for admins only
                add_action( 'wp_ajax_nopriv_datasearch_ajax_call', 'data_ajax_call' );
                // for ALL users
                add_shortcode( 'zipcoderedirect', 'zipcode_shortcode' );
                add_shortcode( 'dataredirect', 'data_shortcode' );
                register_activation_hook( __FILE__, 'zipcode_activate' );
                zcr_fs()->add_action( 'after_uninstall', 'zcr_fs_uninstall_cleanup' );
                function zipcode_redirect_menu()
                {
                    // Create WordPress admin menu
                    $page_title = 'Zip Code Redirect Settings';
                    $menu_title = 'Zip Code Redirect';
                    $capability = 'activate_plugins';
                    $menu_slug = 'zipcode-redirect';
                    $function = 'zipcode_redirect_admin';
                    $icon_url = plugin_dir_url( __FILE__ ) . 'images/zipcode.ico';
                    $position = 8;
                    add_menu_page(
                        $page_title,
                        $menu_title,
                        $capability,
                        $menu_slug,
                        $function,
                        $icon_url,
                        $position
                    );
                    add_submenu_page(
                        'zipcode-redirect',
                        'Data Redirect Settings',
                        'Data Redirect',
                        'activate_plugins',
                        'data-redirect',
                        'zipcode_redirect_adminsub',
                        '8'
                    );
                }
                
                function zipcode_redirect_admin()
                {
                    include plugin_dir_path( __FILE__ ) . "/admin/admin.php";
                    if ( !function_exists( 'zcr_fs' ) ) {
                        delete_option( 'zipcodes11' );
                    }
                }
                
                function zipcode_redirect_adminsub()
                {
                    include plugin_dir_path( __FILE__ ) . "/admin/adminsub.php";
                    if ( !function_exists( 'zcr_fs' ) ) {
                        delete_option( 'zipcodes11' );
                    }
                }
                
                function zipcode_redirect_settings()
                {
                    // register default settings these have to be set here
                    register_setting( 'zipcode_redirect_settings', 'zipcodes1' );
                    register_setting( 'zipcode_redirect_settings', 'zipcodes2' );
                    register_setting( 'zipcode_redirect_settings', 'zipcodes3' );
                    register_setting( 'zipcode_redirect_settings', 'zipcodes4' );
                    register_setting( 'zipcode_redirect_settings', 'zipcodes11' );
                    register_setting( 'zipcode_redirect_settings', 'zipcodesask' );
                    register_setting( 'zipcode_redirect_settings', 'zipcodesneg' );
                    register_setting( 'zipcode_redirect_settings', 'zipcodesuse' );
                    register_setting( 'zipcode_redirect_settings', 'zipcodeswait' );
                    register_setting( 'zipcode_redirect_settings', 'zipcodeswrong' );
                    register_setting( 'zipcode_redirect_settings', 'zipcodescheck' );
                    register_setting( 'zipcode_redirect_settings', 'zipsubmitcheck' );
                }
                
                function zipcode_activate()
                {
                    add_filter( 'upload_dir', 'zipcode_redirect' );
                    //add default ZipCodes and messages
                    if ( !file_exists( wp_upload_dir()['path'] ) ) {
                        //make our dir
                        mkdir( wp_upload_dir['path'], 0755, true );
                    }
                    // if it doesnt exist
                    $data = array(
                        "redirectask"  => "Please Type Your Search Term",
                        "redirectneg"  => "We Are Sorry We Cannot Redirect You",
                        "redirectsize" => "230px",
                    );
                    add_option( 'dataredirect', $data );
                    add_option( 'zipcodes1', "http://www.example.com 001 002 003 004 005 006 007 008 009 010 011 012" );
                    add_option( 'zipcodes2', "http://www.example.com 001 002 003 004 005 006 007 008 009 010 011 012" );
                    add_option( 'zipcodesask', "Please Enter Your Full Zip Code." );
                    add_option( 'zipcodesneg', "We Are Sorry But We Cannot Redirect The Zip Code user input." );
                    add_option( 'zipcodesuse', "Please Use The 4, 5, 6 Digit Or The UK System" );
                    add_option( 'zipcodeswait', "Please Wait While We Check The Zip Code user input." );
                    add_option( 'zipcodeswrong', "The Zip Code user input Is Not Correct Format. Please Try Again." );
                    add_option( 'zipcodescheck', "5" );
                    add_option( 'zipcodeswon', "" );
                    add_option( 'zipcodeslost', "" );
                    add_option( 'zipsubmitcheck', "" );
                    add_option( 'zipcodestime', "1.000" );
                    copy( plugin_dir_url( __FILE__ ) . '/includes/redirects.xml', wp_upload_dir()['path'] . "/redirects.xml" );
                    copy( plugin_dir_url( __FILE__ ) . '/includes/ZipCodes.docx', wp_upload_dir()['path'] . "/ZipCodes.docx" );
                    copy( plugin_dir_url( __FILE__ ) . '/includes/PostCodes.docx', wp_upload_dir()['path'] . "/PostCodes.docx" );
                    remove_filter( 'upload_dir', 'zipcode_redirect' );
                }
                
                function zipcode_redirect( $uploads )
                {
                    $uploads['path'] = $uploads['basedir'] . '/zipcode-redirect';
                    // change upload path to zipcode_redirect
                    $uploads['url'] = $uploads['baseurl'] . '/zipcode-redirect';
                    // change upload dir to zipcode_redirect
                    return $uploads;
                }
                
                function zcr_fs_uninstall_cleanup()
                {
                    add_filter( 'upload_dir', 'zipcode_redirect' );
                    delete_option( 'zipcodes1' );
                    delete_option( 'zipcodes2' );
                    delete_option( 'zipcodes3' );
                    delete_option( 'zipcodes4' );
                    delete_option( 'zipcodes11' );
                    delete_option( 'zipcodesask' );
                    delete_option( 'zipcodesneg' );
                    delete_option( 'zipcodesuse' );
                    delete_option( 'zipcodeswait' );
                    delete_option( 'zipcodeswrong' );
                    delete_option( 'zipcodescheck' );
                    delete_option( 'zipcodeswon' );
                    delete_option( 'zipcodeslost' );
                    delete_option( 'zipsubmitcheck' );
                    delete_option( 'zipcodestime' );
                    delete_option( 'zipver' );
                    delete_option( 'dataredirect' );
                    unlink( wp_upload_dir()['path'] . "/redirects.xml" );
                    unlink( wp_upload_dir()['path'] . "/ZipCodes.docx" );
                    unlink( wp_upload_dir()['path'] . "/PostCodes.docx" );
                    rmdir( wp_upload_dir()['path'] );
                    remove_filter( 'upload_dir', 'zipcode_redirect' );
                }
                
                function zipcode_scripts()
                {
                    wp_enqueue_style(
                        'zipstyle',
                        plugin_dir_url( __FILE__ ) . 'css/style.css',
                        '',
                        '1.4'
                    );
                }
                
                function zipcode_shortcode()
                {
                    wp_enqueue_script(
                        'ziplisten',
                        plugin_dir_url( __FILE__ ) . 'js/ziplisten.js',
                        array( 'jquery' ),
                        '1.6',
                        true
                    );
                    wp_localize_script( 'ziplisten', 'ziplisten_vars', array(
                        'ajaxurl'  => admin_url() . "admin-ajax.php",
                        'security' => wp_create_nonce( 'zipcode-security-nonce' ),
                        'zipver'   => get_option( 'zipver' ),
                        'zipneg'   => get_option( 'zipcodesneg' ),
                        'zipwait'  => get_option( 'zipcodeswait' ),
                        'zipwrong' => get_option( 'zipcodeswrong' ),
                        'zipuse'   => get_option( 'zipcodesuse' ),
                    ) );
                    ob_start();
                    include plugin_dir_path( __FILE__ ) . "forms/zipform.php";
                    $output = ob_get_clean();
                    return $output;
                }
                
                function admin_data_ajax_call()
                {
                    include plugin_dir_path( __FILE__ ) . "includes/admin_data_ajax_call.php";
                }
                
                function admin_data_scripts()
                {
                    wp_enqueue_script( 'jquery' );
                    wp_enqueue_script(
                        'datalisten',
                        plugin_dir_url( __FILE__ ) . 'js/admin_data.js',
                        'datalisten',
                        '1.1',
                        true
                    );
                    wp_localize_script( 'datalisten', 'datalisten_vars', array(
                        'ajaxurl' => admin_url() . "admin-ajax.php",
                    ) );
                }
                
                function zip_ajax_call()
                {
                    check_ajax_referer( 'zipcode-security-nonce', 'security', true );
                    //nonce security
                    define( 'cfcp21_time_start', microtime( true ) );
                    //get start time
                    function checktime()
                    {
                        // calclate elapsed time
                        $time_end = microtime( true );
                        $time = $time_end - cfcp21_time_start;
                        $time = round( $time, 3 );
                        update_option( 'zipcodestime', $time );
                        return;
                    }
                    
                    $zipcode = sanitize_text_field( $_POST['userzip'] );
                    //sanitize the user input
                    $zipcode = strtolower( $zipcode );
                    $zipcode = str_replace( ' ', '', $zipcode );
                    //lowercase the zip code
                    $length = strlen( $zipcode );
                    //get length of zipcode
                    switch ( get_option( 'zipcodescheck' ) ) {
                        case "4":
                            
                            if ( $length != "4" ) {
                                checktime();
                                esc_html_e( "1" );
                                wp_die();
                            }
                            
                            for ( $x = 0 ;  $x < $length ;  $x++ ) {
                                // routine to check input is valid
                                
                                if ( !preg_match( '/[0-9]/', $zipcode[$x] ) ) {
                                    checktime();
                                    esc_html_e( "1" );
                                    wp_die();
                                }
                            
                            }
                            break;
                        case "5":
                            
                            if ( $length != "5" ) {
                                esc_html_e( "1" );
                                wp_die();
                            }
                            
                            for ( $x = 0 ;  $x < $length ;  $x++ ) {
                                // routine to check input is valid
                                
                                if ( !preg_match( '/[0-9]/', $zipcode[$x] ) ) {
                                    esc_html_e( "1" );
                                    wp_die();
                                }
                            
                            }
                            break;
                        case "6":
                            
                            if ( $length != "6" ) {
                                esc_html_e( "1" );
                                wp_die();
                            }
                            
                            for ( $x = 0 ;  $x < $length ;  $x += 2 ) {
                                // routine to check input is valid
                                
                                if ( !preg_match( '/[a-z]/', $zipcode[$x] ) ) {
                                    esc_html_e( "1" );
                                    wp_die();
                                }
                            
                            }
                            for ( $x = 1 ;  $x < $length ;  $x += 2 ) {
                                // routine to check input is valid
                                
                                if ( !preg_match( '/[0-9]/', $zipcode[$x] ) ) {
                                    esc_html_e( "1" );
                                    wp_die();
                                }
                            
                            }
                            break;
                        case "7":
                            include plugin_dir_path( __FILE__ ) . "includes/postcode.php";
                    }
                    $zipcodes = sanitize_text_field( get_option( 'zipcodes1' ) );
                    update_option( 'zipver', "4.6.1" );
                    // get url and zipcodes
                    include plugin_dir_path( __FILE__ ) . "includes/redirect.php";
                    $zipcodes = sanitize_text_field( get_option( 'zipcodes2' ) );
                    // get url and zipcodes
                    include plugin_dir_path( __FILE__ ) . "includes/redirect.php";
                    $zipcodes = esc_html( get_option( 'zipcodeslost' ) );
                    $zipcode = strtoupper( $zipcode );
                    $url = esc_html( get_option( 'zipcodesneg' ) );
                    ( ($check = strpos( esc_html( get_option( 'zipcodesneg' ) ), "http" ) === 0) ? $zipcodes = $zipcodes . "\n" . "Zip Code " . $zipcode . " Defaulted To " . $url : ($zipcodes = $zipcodes . "\n" . "Zip Code " . $zipcode . " Was Not Redirected ") );
                    $zipcodes = explode( "\n", $zipcodes );
                    if ( $check = count( $zipcodes ) > 20 ) {
                        $zipcodes = array_slice( $zipcodes, -20 );
                    }
                    $zipcodes = implode( "\n", $zipcodes );
                    update_option( 'zipcodeslost', $zipcodes );
                    checktime();
                    esc_html_e( "2" );
                    wp_die();
                }
            
            }
        
        }
    }
    $zipcoderedirect = new zipcode_redirect();
    // lets get the party started
}
