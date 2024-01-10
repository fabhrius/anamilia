<?php defined('ABSPATH') || exit; 
// set conditon to show updates 
if(1 == 1) { ?>
    <div class="wopb-update-overview-container">
        <div style="background-image: url(<?php echo WOPB_URL.'assets/img/inside_version.png' ?>); background-position: center;" class="wopb-update-overview-version"> What’s New In ProductX </div>
        
        <!-- highlights -->
        <div class="wopb-update-overview-highlights">
            <h2><?php _e("Say No to Limits With #1 Gutenberg Woocommerce Builder", 'product-blocks'); ?></h2>
            <div>
                <span><?php _e('ProductX has been transformed from Gutenberg WooCommerce Blocks to Gutenberg WooCommerce Builder!', 'product-blocks'); ?></span>
            </div>
        </div>
        
        <!-- features -->
        <div class="wopb-update-overview-features">
            <div class="wopb-features-item">
                <div class="wopb-feature-image">
                    <img src="https://ps.w.org/product-blocks/assets/banner_maker.png" alt="" title="">
                </div>
                <div class="wopb-feature-content">
                    <h3><?php _e('Banner Maker Block', 'product-blocks'); ?></h3>
                    <div><?php _e('Includes pre-designed patterns, offer badges, and complete customization freedom. Get ready for the holidays with our new Banner Maker Block.', 'product-blocks'); ?></div>
                    <div class="wopb-action-buttons">
                        <a href="https://www.wpxpo.com/how-to-add-a-banner-in-wordpress-woocommerce-store/?utm_source=productx-promo_page&utm_medium=BM-learn_more&utm_campaign=productx-dashboard"  target="_blank"><?php _e('Learn More', 'product-blocks'); ?></a>  
                        <a href="https://www.wpxpo.com/productx/blocks/#demoid2296" class="wopb-plugin-docs-url" target="_blank"><?php _e('Explore Demo', 'product-blocks'); ?></a>
                    </div>
                </div>
            </div>
            <div class="wopb-features-item">
                <div class="wopb-feature-content">
                    <h3><?php _e('Custom Fonts', 'product-blocks'); ?></h3>
                    <div><?php _e("Now, you can upload your desired fonts and transform your WooCommerce store's typography to perfectly match your brand's identity.", 'product-blocks'); ?></div>
                    <div class="wopb-action-buttons">
                        <a href="https://www.wpxpo.com/how-to-add-font-to-wordpress-woocommerce-store/?utm_source=productx-promo_page&utm_medium=CF-learn_more&utm_campaign=productx-dashboard"  target="_blank"><?php _e('Learn More', 'product-blocks'); ?></a>  
                        <a href="https://wpxpo.com/docs/productx/add-ons/custom-fonts/?utm_source=productx-promo_page&utm_medium=CF-doc&utm_campaign=productx-dashboard" class="wopb-plugin-docs-url" target="_blank"><?php _e('Documentation', 'product-blocks'); ?></a>
                    </div>
                </div>
                <div class="wopb-feature-image">
                    <img src="https://ps.w.org/product-blocks/assets/custom_fonts.png" alt="" title="">
                </div>
            </div>
            <div class="wopb-features-item">
                <div class="wopb-feature-image">
                    <img src="https://ps.w.org/product-blocks/assets/100_templates.png" alt="=" title="">
                </div>
                <div class="wopb-feature-content">
                    <h3><?php _e('100+ WooCommercer Templates', 'product-blocks'); ?></h3>
                    <div><?php _e('ProductX has 100s of templates for the WooCommerce store’s pages. Start using the professionally designed new templates and stay tuned for upcoming templates.', 'product-blocks'); ?></div>
                    <div class="wopb-action-buttons">
                        <a href="https://www.wpxpo.com/productx/productx-templates/?utm_source=productx-promo_page&utm_medium=WCT-view&utm_campaign=productx-dashboard"  target="_blank"><?php _e('View Templates', 'product-blocks'); ?></a>  
                        <a href="https://www.wpxpo.com/productx/?utm_source=productx-promo_page&utm_medium=WCT-explore&utm_campaign=productx-dashboard" class="wopb-plugin-docs-url" target="_blank"><?php _e('Explore More', 'product-blocks'); ?></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Improvement and fixes  -->
        <div class="wopb-update-improvements">
            <span class="wopb-improvements-heading"><?php _e('Improvement & Fix', 'product-blocks'); ?></span>
            <ul class="wopb-improvements-lists">
                <li> <span class="dashicons dashicons-yes-alt"></span> <span><strong> <?php _e('New: ', 'product-blocks'); ?></strong> <?php _e('Banner Maker block', 'product-blocks'); ?></span></li>
                <li> <span class="dashicons dashicons-yes-alt"></span> <span><strong> <?php _e('Fix: ', 'product-blocks'); ?></strong> <?php _e('Header builder issue with ajax pagination', 'product-blocks'); ?></span></li>
            </ul>
            <a class="wopb-changelog-btn" href="https://www.wpxpo.com/productx/changelog/?utm_source=productx-promo_page&utm_medium=changelog&utm_campaign=productx-dashboard" target="_blank"><?php _e('View Changelog', 'product-blocks'); ?><span class="dashicons dashicons-arrow-right-alt"></span></a>
        </div>
        
        <div class="wopb-update-overview-documentation">
            <div class="wopb-overview-support">
                <!-- <div> -->
                    <h4 class="wopb-doc-heading"><?php _e('Have More Queries?', 'product-blocks'); ?></h4>
                    <div class="wopb-documentation-desc"><?php _e('Feel free to contact us whether you are facing any issues or need any help.', 'product-blocks'); ?></div>
                    <?php 
                        if(wopb_function()->is_lc_active()) { 
                            ?> <a class="wopb-overview-btn" href="https://www.wpxpo.com/contact/?utm_source=productx-promo_page&utm_medium=support&utm_campaign=productx-dashboard" target="_blank"><?php _e('Get Premium Support', 'product-blocks'); ?><span class="dashicons dashicons-arrow-right-alt"></span></a> <?php 
                        } else {
                            ?> <a class="wopb-overview-btn" href="https://wordpress.org/support/plugin/product-blocks/"  target="_blank"><?php _e('Get Support', 'product-blocks'); ?><span class="dashicons dashicons-arrow-right-alt"></span></a> <?php
                        }
                    ?>
                <!-- </div> -->
            </div>
            <div class="wopb-overview-documentation">
                <!-- <div> -->
                    <h4 class="wopb-doc-heading"><?php _e('Documentation', 'product-blocks'); ?></h4>
                    <div class="wopb-documentation-desc"> <?php _e('Check out the rich documentation of ProductX to be an expert in no time.', 'product-blocks'); ?></div>
                    <a class="wopb-overview-btn" href="https://wpxpo.com/docs/productx/?utm_source=productx-promo_page&utm_medium=doc&utm_campaign=productx-dashboard" target="_blank"> <?php _e('Explore Documentation', 'product-blocks'); ?> <span class="dashicons dashicons-arrow-right-alt"></span></a>
                <!-- </div> -->
            </div>
            <div class="wopb-overview-review">
                <!-- <div> -->
                    <h4 class="wopb-doc-heading"><?php _e('Show Your Love', 'product-blocks'); ?></h4>
                    <div class="wopb-overview-review-stars">
                        <span class="dashicons dashicons-star-filled"></span>
                        <span class="dashicons dashicons-star-filled"></span>
                        <span class="dashicons dashicons-star-filled"></span>
                        <span class="dashicons dashicons-star-filled"></span>
                        <span class="dashicons dashicons-star-filled"></span>
                    </div>
                    <div class="wopb-documentation-desc"><?php _e('Enjoying ProductX? Give us a 5 Star review to support our ongoing work.', 'product-blocks'); ?></div>
                    <a class="wopb-overview-btn" href="https://wordpress.org/support/plugin/product-blocks/reviews/" target="_blank"><?php _e('Rate It Now', 'product-blocks'); ?><span class="dashicons dashicons-arrow-right-alt"></span></a>
                <!-- </div> -->
            </div>
            <div class="wopb-overview-comunity">
                <h4 class="wopb-doc-heading"><?php _e('ProductX Community', 'product-blocks'); ?></h4>
                <div class="wopb-documentation-desc"><?php _e('Join the Facebook community to stay up-to-date and share your thoughts & feedback.', 'product-blocks'); ?></div>
                <a class="wopb-overview-btn" href="https://www.facebook.com/groups/woocommerceproductx" target="_blank"><?php _e('Join Now', 'product-blocks'); ?> <span class="dashicons dashicons-arrow-right-alt"></span></a>
            </div>
        </div>
    </div>
<?php }
else {
    exit(wp_safe_redirect(admin_url('admin.php?page=wopb-settings#home')));
}
?>
