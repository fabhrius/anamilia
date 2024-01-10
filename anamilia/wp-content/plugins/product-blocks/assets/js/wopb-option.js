(function($) {
    'use strict';

    // Shortcode OnClick Copy
    // $(".wopb-shortcode-copy").click(function(e) {
    //     e.preventDefault();
    //     const that = $(this);
    //     navigator.clipboard.writeText(that.text());
    //     that.append("<span>Copied!</span>");
    //     setTimeout( function(){ that.find('span').remove(); }, 500 );
    // });

    // WooCommerce Tab
    $(document).on('click', '.wc-tabs li', function(e){
        e.preventDefault();
        $('.wc-tabs li').removeClass('active');
        $(this).addClass('active');
        const selectId = $(this).attr('aria-controls');
        $('.woocommerce-Tabs-panel').hide();
        $('.woocommerce-Tabs-panel#'+selectId).show();
    });

    $( '.wopb-color-picker' ).wpColorPicker();

    // Add target blank for upgrade button
    $('.toplevel_page_wopb-settings ul > li > a').each(function (e) {
        if($(this).attr('href') && $(this).attr('href').indexOf("?wopb=plugins") > 0) {
            $(this).attr('target', '_blank');
        }
    });

    if($('body').hasClass('block-editor-page')){
        $('body').addClass('wopb-editor-'+wopb_option.width);
    }

    const actionBtn = $('.page-title-action');
    const savedBtn = $(".wopb-saved-templates-action");
    if ( savedBtn.length > 0 ) {
        if(savedBtn.data())
        actionBtn.addClass('wopb-save-templates-pro').text( savedBtn.data('text') )
        actionBtn.attr( 'href', savedBtn.data('link') )
        actionBtn.attr( 'target', '_blank' )
    }


    // ------------------------
    // Upload Flip Feature Image 
    // ------------------------
	var file_frame;
	function upload_feature_image( button ) {
		const button_id = button.attr('id');
		const field_id = button_id.replace( '_button', '' );
		if ( file_frame ) {
            file_frame.open();
            return;
		}
		file_frame = wp.media.frames.file_frame = wp.media({
            title: $(this).data( 'uploader_title' ),
            button: { text: $(this).data( 'uploader_button_text' ) },
            multiple: false
		});
		file_frame.on( 'select', function() {
            const attachment = file_frame.state().get('selection').first().toJSON();
            $('#'+field_id).val(attachment.id);
            $('#flipimage-feature-image img').attr('src',attachment.url);
            $('#flipimage-feature-image img').show();
            $('#' + button_id).attr('id', 'remove_feature_image_button');
            $('#remove_feature_image_button').text('Remove Flip Image');
		});
		file_frame.open();
	};

	$('#flipimage-feature-image').on( 'click', '#upload_feature_image_button', function(e) {
        e.preventDefault();
		upload_feature_image($(this));
	});

	$('#flipimage-feature-image').on( 'click', '#remove_feature_image_button', function(e) {
		e.preventDefault();
		$( '#upload_feature_image' ).val( '' );
		$( '#flipimage-feature-image img' ).attr( 'src', '' );
		$( '#flipimage-feature-image img' ).hide();
		$( this ).attr( 'id', 'upload_feature_image_button' );
		$( '#upload_feature_image_button' ).text( 'Set Flip Image' );
    });
    
    // Add URL for Gutenberg Post Blocks
    $(document).on('click', '#plugin-information-content ul > li > a', function(e){
        const URL = $(this).attr('href');
        if (URL.includes('downloads/product-blocks-pro')) {
            e.preventDefault();
            window.open("https://www.wpxpo.com/productx/");
        }
    });

    //productx tab script in woocommerce product page in admin
    $('.wopb-productx-options-tab-wrap .wopb-tab-title-wrap .wopb-tab-title').click(function () {
        $(this).closest('.wopb-productx-options-tab-wrap').find('.wopb-tab-title').removeClass('active').eq(jQuery(this).index()).addClass('active');
        $(this).closest('.wopb-productx-options-tab-wrap').find('.wopb-tab-content').removeClass('active').eq(jQuery(this).index()).addClass('active');
    });

    $('.wopb-productx-options-tab-wrap .wopb-tab-title-wrap .wopb-tab-title:first-child').each(function () {
        $(this).closest('.wopb-productx-options-tab-wrap').find('.wopb-tab-title').removeClass('active').eq(jQuery(this).index()).addClass('active');
        $(this).closest('.wopb-productx-options-tab-wrap').find('.wopb-tab-content').removeClass('active').eq(jQuery(this).index()).addClass('active');
    })


    /* ---- variation swatches --- */
    //open media library
    $('#wopb-term-upload-img-btn').click(function (e) {
        e.preventDefault();
        let object = $(this);
        let mdeia = wp.media({
            title: 'Attribute Term Image',
            multiple: false
        }).open().on('select', function (e) {
            let selectedImage = mdeia.state().get('selection').first().toJSON();
            object.parent().prev("#wopb-term-img-thumbnail").find("img").attr("src", selectedImage.sizes.thumbnail.url);
            object.parent().find("#wopb-term-img-remove-btn").removeClass('wopb-d-none');
            object.parent().find('#wopb-term-img-input').val(selectedImage.id);
        });
    });

    //remove image from attribute
    $('#wopb-term-img-remove-btn').click(function (e) {
        $(this).parent().prev("#wopb-term-img-thumbnail").find("img").attr("src", wopb_option.url + 'assets/img/wopb-placeholder.jpg');
        $(this).parent().find('#wopb-term-img-input').val('');
    })
    /* ---- end variation swatches --- */


    /*
     * Setting Tab
    */
    if ('?page=wopb-settings' == window.location.search) {
        const hash = window.location.hash
        if (hash) {
            if (hash.indexOf('demoid') < 0) {
                $('#toplevel_page_wopb-settings ul li').removeClass('current');
                $('#toplevel_page_wopb-settings ul li a[href$='+hash+']').closest('li').addClass('current');
                if (hash == '#home') {
                    $('#toplevel_page_wopb-settings ul li.wp-first-item').addClass('current');
                } else {
                    $('#toplevel_page_wopb-settings ul li a[href$='+hash+']').addClass('current');
                }
            }
        }
    }

    $(document).on('click', '#wopb-dashboard-wopb-settings-tab li a, #toplevel_page_wopb-settings ul li a', function(e) {
        let value = $(this).attr('href')
        if (value) {
            value = value.split('#');
            if (typeof value[1] != 'undefined' && value[1].indexOf('demoid') < 0 && value[1]) {
                $('#toplevel_page_wopb-settings ul li a').closest('ul').find('li').removeClass('current');
                $(this).closest('li').addClass('current'); // Submenu click
                $('#toplevel_page_wopb-settings ul li a[href$='+value[1]+']').closest('li').addClass('current'); // Dash Nav Menu click
                if (value[1] == 'home') {
                    $('#toplevel_page_wopb-settings ul li.wp-first-item').addClass('current');
                }
            }
        }
    });
    /*
     * End Setting Tab
    */

    // $(document).on('click', '.wopb-block-settings', function(e){
    //     $(this).parent().find('.wopb-popup-container').addClass('active');
    // });

    //Popup container close
    // $(document).on('click', '.wopb-settings-content .wopb-popup-close', function(e){
    //     if (!$(this).hasClass('popup-center')) {
    //         $(this).closest('.wopb-popup-container').removeClass('active');
    //     }
    // });

    /*
    /* Repeater script
     */
   
    

    $(document).on('click', '.wopb-repeatable-wrap .wopb-repeat-section .wopb-collapse-header', function(e){
        if(e.target.classList.contains('wopb-currency-reserve-btn') || e.target.classList.contains('wopb-remove')) {
            return;
        }
        const that = $(this);
        const collapseBody = that.siblings( ".wopb-collapse-body" );
        collapseBody.slideToggle( "slow", function () {
            if($(this).is(':visible')){
                that.find('.wopb-down-arrow ').removeClass('wopb-d-none');
                that.find('.wopb-right-arrow ').addClass('wopb-d-none');
            }
            else {
                that.find('.wopb-down-arrow ').addClass('wopb-d-none');
                that.find('.wopb-right-arrow ').removeClass('wopb-d-none');
            }
        } );
    })

    /*
    /* End Repeater script
     */


    // *************************************
    // Disable Google Font Action
    // *************************************
    $(document).ready(function() {
        $(document).on('DOMSubtreeModified', function() {
            $('input[name=disable_google_font]').on('change', function() {
                if ($(this).is(':checked')) {
                    $('#wopb-regenerate-css').addClass('active')
                } else {
                    $('#wopb-regenerate-css').removeClass('active')
                }
            });
        });
    });
    
    $(document).on('click', '#wopb-regenerate-css', function(e) {
        const that = $(this)
        $.ajax({
            url: wopb_option.ajax,
            type: 'POST',
            data: {
                action: 'disable_google_font',
                wpnonce: wopb_option.security
            },
            beforeSend: function() {
                that.addClass('wopb-spinner');
            },
            success: function(res) {
				if (res.success) {
                    that.find('.wopb-text').text(res.data);
				}
            },
            complete:function() {
                that.removeClass('wopb-spinner');
            },
            error: function(xhr) {
                console.log('Error occured.please try again' + xhr.statusText + xhr.responseText );
            },
        });
    });

    // *************************************
    // Add Submenu Support
    // *************************************
    $('#toplevel_page_wopb-settings ul > li > a').each(function (e) {
        if ($(this).attr('href') && $(this).attr('href').indexOf("?page=wopb-settings") > 0) {
            
            if ($(this).hasClass('wp-first-item') != false) {
                $(this).attr('href' , $(this).attr('href')+'#home' )
            }
            
            if (wopb_option.settings) {
                if ( $(this).attr('href').indexOf('#builder') > 0 && wopb_option.settings?.wopb_builder != 'true') {
                    $(this).hide();
                }
                if ($(this).attr('href').indexOf('#custom-font') > 0 && wopb_option.settings?.wopb_custom_font != 'true') {
                    $(this).hide();   
                }
                if ($(this).attr('href').indexOf('#saved-templates') > 0 && wopb_option.settings?.wopb_templates != 'true') {
                    $(this).hide(); 
                }
            }

            let hasID = $(this).attr('href').indexOf('#')
            $(this).attr('id', 'productx-submenu-'+(hasID > 0 ? $(this).attr('href').split('#')[1] : 'home'))

            if($(this).attr('href').indexOf("?wopb=plugins") > 0) {
                $(this).attr('target', '_blank');
            }
        }
        if($(this).attr('href').indexOf("?page=go_productx_pro") > 0) {
            $(this).attr('target', '_blank');
        }   
    });

    // saved template back button 
    $(document).ready(function() {
        if($('.block-editor-page') && wopb_option.post_type == 'wopb_templates') {
            setTimeout(function() {
                if ($('.edit-post-fullscreen-mode-close').length > 0) {
                    $('.edit-post-fullscreen-mode-close')[0].href = wopb_option.saved_template_url
                }
            }, 1);
        }
    })

    // -------------------------------
    // -------- Custom Font ----------
    // -------------------------------
    $(".wopb-font-variation-action").on('click', function(e) {
        const content = $('.wopb-custom-font-copy')[0].outerHTML;;
        $(this).before( content.replace("wopb-custom-font-copy", "wopb-custom-font wopb-font-open") );
    });
    $(document).on('click', ".wopb-custom-font-close", function(e) {
        $(this).closest('.wopb-custom-font-container').removeClass('wopb-font-open');
    });
    $(document).on('click', ".wopb-custom-font-edit", function(e) {
        $(this).closest('.wopb-custom-font-container').addClass('wopb-font-open');
    });
    $(document).on('click', ".wopb-custom-font-delete", function(e) {
        $(this).closest('.wopb-custom-font').remove();
    });
    $(document).on('click', '.wopb-font-upload', function(e) {
        const that = $(this);
        $(this).addClass('rty')
        const wopbCustomFont = wp.media({
            title: 'Add Font',
            button: { text: 'Add New Font' },
            multiple: false,
        }).on(
            'select',
            function () {
                const attachment = wopbCustomFont.state().get( 'selection' ).first().toJSON();
                that.closest('.wopb-font-file-list').find('input').val(attachment.url)
            }
        )
            .open();
    });

})( jQuery );