(function ($) {
    $(document).ready(function() {

        "use strict";

    /* Do not delete above code */

        /* Main Navigation ---------- */

        function ecoworld_main_navigation() {

            var ecoworld_GetMegaMenuWidth = $('#ecoworld_header').width(),
                ecoworld_FinalWidth = (ecoworld_GetMegaMenuWidth * 2) / 100,
                ecoworld_m_finalWidth = Math.round(ecoworld_GetMegaMenuWidth - ecoworld_FinalWidth);

            $('.ecoworld_fw_header ul.ecoworld_top_nav li.ecoworld-mega-menu > ul').css({"max-width": ecoworld_m_finalWidth + 'px', "width": ecoworld_m_finalWidth + 'px'});

            /* header title top margin */

            var ecoworld_GetHeaderTitleHeight = $('.ecoworld_pg_title h1').height() / 2;
            $('.ecoworld_pg_title').css('margin-top','-' + ecoworld_GetHeaderTitleHeight + 'px');

            var ecoworld_GetHeaderLargeTitleHeight = $('.ecoworld_large_title span').height() / 2;
            $('.ecoworld_large_title').css('margin-top','-' + ecoworld_GetHeaderLargeTitleHeight + 'px');

            /* create mobile menu */

            $(".ecoworld_main_nav > ul").clone().appendTo("#ecoworld_mobi_nav");
            $('#ecoworld_mobi_nav > ul').removeClass('ecoworld_top_nav');
            $('#ecoworld_mobi_nav').find('.ecoworld_nav_p_meta').remove();

            /* mobile dropdown menu */

            function ecoworld_mobile_menu(ecoworld_main_nav,click_button,nav_id) {

                var ecoworld_main_nav = $(ecoworld_main_nav);

                $(click_button).on('click', function(){
                    var ecoworld_dd_menu = $(nav_id);
                    if (ecoworld_dd_menu.hasClass('open')) {
                        ecoworld_dd_menu.slideUp(400).removeClass('open');
                    }
                    else {
                        ecoworld_dd_menu.slideDown(400).addClass('open');
                    }
                });

                ecoworld_main_nav.find('li ul').parent().addClass('ecoworld-has-sub-menu');
                ecoworld_main_nav.find(".ecoworld-has-sub-menu").prepend('<span class="ecoworld-mini-menu-arrow"><i class="fa fa-angle-down"></i></span>');

                ecoworld_main_nav.find('.ecoworld-mini-menu-arrow').on('click', function() {
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').hide('blind');
                    }
                    else {
                        $(this).siblings('ul').addClass('open').show('blind');
                    }
                });

            }

            ecoworld_mobile_menu('#ecoworld_mobi_nav','#ecoworld_mobi_nav_btn','#ecoworld_mobi_nav > ul');

        }

        /* mega menu */

        function ecoworld_GetCenter() {

            var ecoworld_GetMegaMenuWidth =  $('#ecoworld_header .ecoworld_container .ecoworld_nav').width(),
                ecoworld_GetMainNavUlWidth = $('.ecoworld_main_nav').width(),
                ecoworld_CenterDiv = $('ul.ecoworld_top_nav > li.ecoworld-mega-menu > ul'),
                ecoworld_GetLeftMargin = (ecoworld_GetMegaMenuWidth - ecoworld_GetMainNavUlWidth) * (-1);

                $(ecoworld_CenterDiv).css('left',ecoworld_GetLeftMargin );

                $('ul.ecoworld_top_nav li.ecoworld-mega-menu > ul').css({"max-width": ecoworld_GetMegaMenuWidth + 'px', "width": ecoworld_GetMegaMenuWidth + 'px' });

        }

        function ecoworld_searchOverlay() {
            $('.ecoworld_searchbox_close').fadeOut(200);
            var open = false;

            $('.ecoworld_header_search_icon span.ecoworld_h_search_icon').on('click', function() {
                if (open == false) {
                    $('.ecoworld_searchbox_holder, .ecoworld_searchbox_close').fadeIn(200);
                    $('nav ul li, .btn-open').fadeOut(200);
                    open = true;
                } else {
                    $('.ecoworld_searchbox_holder, .ecoworld_searchbox_close').fadeOut(200)
                    $('nav ul li, .btn-open').fadeIn(200);
                    open = false;
                }
            });
            $('.ecoworld_searchbox_holder').on('mouseup', function() {
                $('.ecoworld_searchbox_holder, .ecoworld_searchbox_close').fadeOut(200);
                $('nav ul li, .btn-open').fadeIn(200);
                open = false;
            });
            $('.ecoworld_overlay_search_box').on('mouseup', function() {
                return false;
            });
        }


        /* Load All Functions ---------- */

        ecoworld_main_navigation();
        ecoworld_GetCenter();
        ecoworld_searchOverlay();

    /* Do not delete below code */

    });
})(jQuery);


