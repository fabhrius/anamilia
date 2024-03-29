<?php
/**
 * Title: Featured Category Triple
 * Slug: woocommerce-blocks/featured-category-triple
 * Categories: WooCommerce
 */

use Automattic\WooCommerce\Blocks\Patterns\PatternsHelper;
$content = PatternsHelper::get_pattern_content( 'woocommerce-blocks/featured-category-triple' );

$images = PatternsHelper::get_pattern_images( 'woocommerce-blocks/featured-category-triple' );
$image1 = PatternsHelper::get_image_url( $images, 0, 'images/pattern-placeholders/sweet-restaurant-celebration-food-chocolate-cupcake.png' );
$image2 = PatternsHelper::get_image_url( $images, 1, 'images/pattern-placeholders/dish-meal-food-breakfast-dessert-eat.png' );
$image3 = PatternsHelper::get_image_url( $images, 2, 'images/pattern-placeholders/dish-food-baking-dessert-bread-bakery.png' );
?>

<!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"0px","left":"0px"}}}} -->
<div class="wp-block-columns alignwide">
	<!-- wp:column -->
	<div class="wp-block-column">
		<!-- wp:cover {"url":"<?php echo esc_url( $image1 ); ?>","id":1,"dimRatio":0,"contentPosition":"bottom center","isDark":false,"className":"has-white-color"} -->
		<div class="wp-block-cover is-light has-custom-content-position is-position-bottom-center has-white-color">
			<span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span>
			<img class="wp-block-cover__image-background wp-image-1" alt="<?php esc_attr_e( 'Placeholder image used to represent products being showcased in featured categories banner. 1 out of 3.', 'woo-gutenberg-products-block' ); ?>" src="<?php echo esc_url( $image1 ); ?>" data-object-fit="cover"/>
			<div class="wp-block-cover__inner-container">
				<!-- wp:heading {"level":4} -->
				<h4 class="wp-block-heading"><?php echo esc_html( $content['titles'][0]['default'] ); ?></h4>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}},"spacing":{"padding":{"top":"0","bottom":"0"},"margin":{"top":"0","bottom":"0"}}}} -->
				<p class="has-text-align-center has-link-color" style="margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0">
					<a href="<?php echo esc_url( wc_get_page_permalink( 'shop' ) ); ?>" data-type="link" data-id="<?php echo esc_url( wc_get_page_permalink( 'shop' ) ); ?>"><?php esc_html_e( 'Shop Now', 'woo-gutenberg-products-block' ); ?></a>
				</p>
				<!-- /wp:paragraph -->
			</div>
		</div>
		<!-- /wp:cover -->
	</div>
	<!-- /wp:column -->

	<!-- wp:column -->
	<div class="wp-block-column">
		<!-- wp:cover {"url":"<?php echo esc_url( $image2 ); ?>","id":1,"dimRatio":0,"contentPosition":"bottom center","isDark":false,"className":"has-white-color"} -->
		<div class="wp-block-cover is-light has-custom-content-position is-position-bottom-center has-white-color">
			<span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span>
			<img class="wp-block-cover__image-background wp-image-1" alt="<?php esc_attr_e( 'Placeholder image used to represent products being showcased in featured categories banner. 2 out of 3.', 'woo-gutenberg-products-block' ); ?>" src="<?php echo esc_url( $image2 ); ?>" data-object-fit="cover"/>
			<div class="wp-block-cover__inner-container">
				<!-- wp:heading {"level":4} -->
				<h4 class="wp-block-heading"><?php echo esc_html( $content['titles'][1]['default'] ); ?></h4>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}},"spacing":{"padding":{"top":"0","bottom":"0"},"margin":{"top":"0","bottom":"0"}}}} -->
				<p class="has-text-align-center has-link-color" style="margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0">
					<a href="<?php echo esc_url( wc_get_page_permalink( 'shop' ) ); ?>" data-type="link" data-id="<?php echo esc_url( wc_get_page_permalink( 'shop' ) ); ?>"><?php esc_html_e( 'Shop Now', 'woo-gutenberg-products-block' ); ?></a>
				</p>
				<!-- /wp:paragraph -->
			</div>
		</div>
		<!-- /wp:cover -->
	</div>
	<!-- /wp:column -->

	<!-- wp:column -->
	<div class="wp-block-column">
		<!-- wp:cover {"url":"<?php echo esc_url( $image3 ); ?>","id":1,"dimRatio":0,"contentPosition":"bottom center","isDark":false,"className":"has-white-color"} -->
		<div class="wp-block-cover is-light has-custom-content-position is-position-bottom-center has-white-color">
			<span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span>
			<img class="wp-block-cover__image-background wp-image-1" alt="<?php esc_attr_e( 'Placeholder image used to represent products being showcased in featured categories banner. 3 out of 3', 'woo-gutenberg-products-block' ); ?>" src="<?php echo esc_url( $image3 ); ?>" data-object-fit="cover"/>
			<div class="wp-block-cover__inner-container">
				<!-- wp:heading {"level":4} -->
				<h4 class="wp-block-heading"><?php echo esc_html( $content['titles'][2]['default'] ); ?></h4>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}},"spacing":{"padding":{"top":"0","bottom":"0"},"margin":{"top":"0","bottom":"0"}}}} -->
				<p class="has-text-align-center has-link-color" style="margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0">
					<a href="<?php echo esc_url( wc_get_page_permalink( 'shop' ) ); ?>" data-type="link" data-id="<?php echo esc_url( wc_get_page_permalink( 'shop' ) ); ?>"><?php esc_html_e( 'Shop Now', 'woo-gutenberg-products-block' ); ?></a>
				</p>
				<!-- /wp:paragraph -->
			</div>
		</div>
		<!-- /wp:cover -->
	</div>
	<!-- /wp:column -->
</div>
<!-- /wp:columns -->
