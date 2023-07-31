(function ($) {	$(document).ready(function() {


	$('.ecoworld-woo-sort-order .sortBy .current-select a').html($('.ecoworld-woo-sort-order .sortBy ul li.current a').html());
	$('.ecoworld-woo-sort-order .sort-count .current-select a').html($('.ecoworld-woo-sort-order .sort-count ul li.current a').html());	

	jQuery('a.add_to_cart_button').click(function(e) {
		var link = this;
		jQuery(link).parents('.ecoworld-featured-product-block').find('.cart-loading').find('i').removeClass('fa-check').addClass('fa-spinner');
		jQuery(this).parents('.ecoworld-featured-product-block').find('.cart-loading').fadeIn();
		setTimeout(function(){			
			jQuery(link).parents('.ecoworld-featured-product-block').find('.cart-loading').find('i').hide().removeClass('fa-spinner').addClass('fa-check').fadeIn();			
		}, 2000);
	});

	$('li.product').mouseenter(function() {
		if($(this).find('.cart-loading').find('i').hasClass('fa-check')) {
			$(this).find('.cart-loading').fadeIn();
		}
	}).mouseleave(function() {
		if($(this).find('.cart-loading').find('i').hasClass('fa-check')) {
			$(this).find('.cart-loading').fadeOut();
		}
	});

	// Replace woocommerce button with theme button
	var woo_btn_selectors = '.add_review a.show_review_form.button,button.single_add_to_cart_button.button.alt,form.shipping_calculator p button.button,td.actions input.button,a.added_to_cart,#respond input[type="submit"],form.checkout_coupon input[type="submit"],#payment input[type="submit"],.cart_totals .wc-proceed-to-checkout a,.shipping-calculator-form button ';
	var woo_btn_selectors_tiny = '.woocommerce-message a.button,.price_slider_amount button,table.my_account_orders tbody tr td a.button';

	$(woo_btn_selectors).addClass('ecoworld_button round small shadow_dark skin_color ecoworld_woo_btn');		
	$(woo_btn_selectors_tiny).addClass('ecoworld_button round tiny shadow_dark skin_color');

	function ecoworld_woo_products_list() {
        if ( $('.woocommerce ul.products').length ){ 
            $('.woocommerce ul.products').imagesLoaded( function() {
                $('.woocommerce ul.products').isotope({
                    itemSelector: '.woocommerce ul.products li',
                    layoutMode: 'fitRows'
                });
            });

        }
    }

    function ecoworld_hover_cart_menu() {

		var ajax_cart 	= $('.ecoworld_h_cart_icon_hover'),
			empty 		= ajax_cart.find('.empty');

		if(empty.length) {
			ajax_cart.hide();  /* remove this line to display cart if product is not added in the cart */
		} else {			
			$('.ecoworld_woo_cart_hover_menu').stop().fadeOut();			
		}		

		jQuery('body').on('click','.add_to_cart_button', function() {
			ajax_cart.show();
			$('.ecoworld_woo_cart_hover_menu').stop().fadeOut();			
		});		
		
	    $('.ecoworld_h_cart_icon_hover').hover(function() {
	        $('.ecoworld_woo_cart_hover_menu').stop().css('opacity','1').fadeIn('normal');
	     		},
	      	function(){
	        	$('.ecoworld_woo_cart_hover_menu').stop().css('opacity','0').fadeOut('fast');
	      	}
		);

	}

	ecoworld_hover_cart_menu();
    ecoworld_woo_products_list();


}); })(jQuery);