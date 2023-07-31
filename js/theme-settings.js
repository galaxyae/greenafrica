(function ($) {

     "use strict";

    /* Tooltip ------------------------- */

    function ecoworld_toolTip() {
        if (!document.body.classList.contains('post-type-archive-tribe_events')) {
            $('.ecoworld_tooltip').tooltipster();
            $('.tipUp').tooltipster({ position: 'top' });
            $('.tipDown').tooltipster({ position: 'bottom' });
            $('.tipRight').tooltipster({ position: 'right' });
            $('.tipLeft').tooltipster({ position: 'left' });
        }
    }

    /* Retina ------------------------- */

    function ecoworld_retinaRatioCookies() {
        var ecoworld_DevicePixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
        if (!$.cookie("pixel_ratio")) {
            if (ecoworld_DevicePixelRatio > 1 && navigator.cookieEnabled === true) {
                $.cookie("pixel_ratio", ecoworld_DevicePixelRatio, {expires : 360});
            }
        }
        if (ecoworld_DevicePixelRatio > 1) {
            var logoImg   = $('.ecoworld-std-logo'),
                srcRetina = $(logoImg).attr('data-retina'),
                srcRetinaFinal = srcRetina ? srcRetina : '';
            if (srcRetinaFinal.length) {
                $(logoImg).attr('src', srcRetina);
            }
        }
    }

    /* Post Format Gallery ------------------------- */

    function ecoworld_pf_gallery() {
        $('.pfi_gallery').imagesLoaded( function() {
            $('.pfi_gallery').flexslider({
                animation: 'fade',
                animationSpeed: 500,
                slideshow: false,
                smoothHeight: false,
                controlNav: false,
                directionNav: true,
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>'
            });
        });
    }


    /* Go top scroll ------------------------- */

    function ecoworld_go_top_scroll() {

        var ecoworld_PageScroll = false,
            $ecoworld_PageScrollElement = $('#ecoworld_go_top_scroll_btn');

        $ecoworld_PageScrollElement.click(function(e) {
            $('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
            e.preventDefault();
        });

        $(window).scroll(function() {
            ecoworld_PageScroll = true;
        });

    }

    /* Share Post Link ------------------------- */

    function ecoworld_share_post_links() {

        $(".ecoworld_post_share").each(function(){

            var $this = $(this),
                ecoworld_ElementId = $this.attr("data-postid"),
                ecoworld_ClickElement = '.post-share-id-'+ecoworld_ElementId,
                ecoworld_OpenElement = '.ecoworld-share-id-box-'+ecoworld_ElementId+' ul';

            $(ecoworld_ClickElement).addClass('active');

            $(ecoworld_ClickElement).click( function(e){
                e.preventDefault();
                if ($(this).hasClass("active") ) {
                    $(ecoworld_OpenElement).animate({ left: '30' }, 500);
                    $(this).removeClass("active");
                } else {
                    $(ecoworld_OpenElement).animate({ left: '-300' }, 500);
                    $(this).addClass("active");
                }
                return false;
            });

        });

    }

    /* Post Like ------------------------- */

    function ecoworld_post_like() {

        $('.ecoworld-love').click(function() {
            var el = $(this);
            if( el.hasClass('loved') ) return false;

            var post = {
                action: 'ecoworld_love',
                post_id: el.attr('data-id')
            };

            $.post(ecoworld_get_ajax_full_url.ajaxurl, post, function(data){
                el.find('.label').html(data);
                el.addClass('loved');
            });

            return false;
        });
    }

    /* Element Horizontal and Verticel Center ------------------------- */

    function ecoworld_js_H_Center() {

        $(".ecoworld_js_center").each(function(){
            var $this = $(this),
                ecoworld_ElementWidth = $this.width(),
                ecoworld_ElementMargin = ecoworld_ElementWidth/-2;
            $this.css('margin-left',ecoworld_ElementMargin);
        });

    }

    function ecoworld_js_V_Center() {

        $(".ecoworld_js_center_top").each(function(){

            var $this = $(this),
                ecoworld_ElementWidth = $this.height(),
                ecoworld_ElementMargin = ecoworld_ElementWidth/-2;

            $this.css('margin-top',ecoworld_ElementMargin);

        });

    }

    /* Image Lightbox ------------------------- */

    function ecoworld_magnificPopup() {

        $('.ecoworld_popup_img').magnificPopup({
            type: 'image'
        });

        $('.ecoworld_popup_gallery').magnificPopup({
            type: 'image',
            gallery:{
                enabled:true,
                tCounter:''
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out'
            }
        });

        $('.popup-youtube, .popup-vimeo, .popup-gmaps,.ecoworld_popup_video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });


        $('.ecoworld_popup_gallery_alt').magnificPopup(
            {
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });

    }

    /* WordPress Gallery ------------------------- */

    function ecoworld_WPGallery() {
        if ( $('.gallery').length ){

            var ecoworld_LayoutModeStyle = 'fitRows';

            if ($("body").hasClass('ecoworld_img_gallery_masonry')) {
                ecoworld_LayoutModeStyle = 'masonry';
            }

            $('.gallery').imagesLoaded( function() {
                $('.gallery').isotope({
                    itemSelector: '.gallery-item',
                    layoutMode: ecoworld_LayoutModeStyle
                });
            });

        }
    }

    /* Sticky Header ------------------------- */


    function ecoworld_sticky_header(){
        if( $('body').hasClass('ecoworld_stickyOn') ){

            var ecoworld_header_height = 0,
                headerHeight = $('.ecoworld_nav').innerHeight(),
                topBarHeight = '';

            if ( $('.ecoworld_topbar').length ){
                topBarHeight = $('.ecoworld_topbar').innerHeight();
            }

            ecoworld_header_height = headerHeight + topBarHeight;

            var start_y = ecoworld_header_height,
                window_y = $(window).scrollTop(),
                wpAdminBarHeight = 0;

            if ( $('#wpadminbar').length ){
                wpAdminBarHeight = $('#wpadminbar').innerHeight();
            }

            if( window_y > start_y ){

                if( ! ($('#ecoworld_Header').hasClass('sticky-on'))){
                    $('#ecoworld_Header')
                        .addClass('sticky-on')
                        .css('top',-80)
                        .animate({'top': wpAdminBarHeight },300);
                }
            }
            else {
                if($('#ecoworld_Header').hasClass('sticky-on')) {
                    $('#ecoworld_Header')
                        .removeClass('sticky-on')
                        .css('top', 0);
                }
            }
        }
    }

    /* Portfolio Page ------------------------- */

    function ecoworld_portfolio_items() {

        if ($(window).width() < 768) {
            $('div .ecoworld_horizontal_menu').addClass('h_responsive');
        }
    }

    function ecoworld_universal_filter_items_menu() {
        $('.ecoworld_universal_filter_items_menu a').click(function(){
            var selector = $(this).attr('data-filter');
            $('.ecoworld_universal_filter_items_section').isotope({filter: selector});
            $('.ecoworld_universal_filter_items_menu a.ecoworld-active-sort').removeClass('ecoworld-active-sort');
            $(this).addClass('ecoworld-active-sort');
            return false;
        });
    }

    function ecoworld_smooth_scroll() {
        $('a.smooth-scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                    scrollTop: target.offset().top - 140
                }, 1000);
                return false;
                }
            }

        });
    }

    function ecoworld_list_widgets() {

        $(".sidebar").children(".widget_meta,.widget_categories,.widget_pages,.widget_archive,.widget_recent_comments,.widget_recent_entries,.widget_nav_menu,.widget_product_categories,.widget_layered_nav_filters,.archives-link,.widget_rss,.swmsc_custom_cat_widget").addClass("ecoworld_list_widgets");
    }

    /* Document ready load functions =================== */

    $(document).ready(function() {

        $(".fitVids").fitVids();
        ecoworld_toolTip();
        ecoworld_retinaRatioCookies();
        ecoworld_pf_gallery();
        ecoworld_go_top_scroll();
        ecoworld_share_post_links();
        ecoworld_post_like();
        ecoworld_js_H_Center();
        ecoworld_js_V_Center();
        ecoworld_magnificPopup();
        ecoworld_WPGallery();
        ecoworld_sticky_header();
        ecoworld_portfolio_items();
        ecoworld_universal_filter_items_menu();
        ecoworld_smooth_scroll();
        ecoworld_list_widgets();
    });

    /* Scroll Events ---------- */

    $(window).scroll(function(){
        ecoworld_sticky_header();
    });


    function ecoworld_infinite_scroll() {

        var $ecoworld_ContainerInfiniteScroll = $("#ecoworld-item-entries");
        $ecoworld_ContainerInfiniteScroll.infinitescroll({
            loading: {
                msg: null,
                finishedMsg: null,
                msgText: '<div class="ecoworld_infiniteScroll_loader"></div>',
            },
            navSelector: "div.ecoworld_infiniteScroll_pagination",
            nextSelector: "div.ecoworld_infiniteScroll_pagination div.post-next a",
            itemSelector: ".ecoworld-infinite-item-selector",
        }, function (newElements) {
            var $ecoworld_NewInfiniteScrollElems = $(newElements).css({
                opacity: 0
            });
            $(".fitVids").fitVids();
            ecoworld_js_H_Center();
            ecoworld_js_V_Center();
            ecoworld_post_like();
            ecoworld_share_post_links();
            ecoworld_portfolio_items();
            ecoworld_magnificPopup();
            ecoworld_universal_filter_items_menu();
            ecoworld_smooth_scroll();

            $ecoworld_NewInfiniteScrollElems.imagesLoaded(function () {
                $ecoworld_NewInfiniteScrollElems.animate({
                    opacity: 1
                });

                if ($("#ecoworld-item-entries").hasClass('isotope')) {
                    $ecoworld_ContainerInfiniteScroll.isotope("appended", $ecoworld_NewInfiniteScrollElems);
                }

            });
        });

    }

    /* Window load functions =================== */

    var $window = $(window);

    $(window).load(function () {

        if ( $('.ecoworld_site_loader').length ){
            $(".ecoworld_site_loader").fadeOut("slow");
        }

        // Blog masonry grid
        function ecoworld_BlogGridIsotope() {
           if ($("#ecoworld-item-entries").hasClass('isotope')) {
                $('.ecoworld_blog_grid_sort').imagesLoaded( function() {
                    $('.ecoworld_blog_grid_sort').isotope({
                        itemSelector: '.ecoworld_blog_grid'
                    });
                });
            }
        }

        // Global masonry
        function ecoworld_UniversalGridIsotope() {
           if ($("#ecoworld-item-entries").hasClass('isotope')) {
                $('.ecoworld_universal_grid_sort').imagesLoaded( function() {
                    $('.ecoworld_universal_grid_sort').isotope({
                        itemSelector: '.ecoworld_universal_grid'
                    });
                });
            }
        }


        ecoworld_BlogGridIsotope();
        ecoworld_UniversalGridIsotope();

        $window.resize(function () {
            ecoworld_BlogGridIsotope();
            ecoworld_UniversalGridIsotope();
        });
        window.addEventListener("orientationchange", function() {
            ecoworld_BlogGridIsotope();
            ecoworld_UniversalGridIsotope();
        });

        $('iframe').css('max-width','100%').css('width','100%');
        ecoworld_infinite_scroll();

    });

})(jQuery);