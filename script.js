$(document).ready(function(){

        //header_top hidden function
        let hidden = $('.header_top');
        let headerBottom = $('.header_bottom');
        let headerContainer = $('header');
        let hiddenTop = hidden.offset().top + hidden.height();
        let topHidden = () => {
            let scrollTop = $(window).scrollTop();

            if(scrollTop > hiddenTop) {
                headerContainer.addClass('fixed');
                hidden.addClass('hidden');
                headerBottom.addClass('fixed_bottom');
            } else {
                headerContainer.removeClass('fixed');
                hidden.removeClass('hidden');
                headerBottom.removeClass('fixed_bottom');
            }
        };
        topHidden();
        
        //スクロースすると、トップに貼られるfunction
        let sticky = () => {
            let stickyNav = $('.sticky_nav_container');
            let stickyNavTop = stickyNav.offset().top;  //最初の位置をとる
            let scrollTop = $(window).scrollTop();
            if(scrollTop > stickyNavTop - $('#header').height()) {
                stickyNav.addClass('sticky');
            } else {
                stickyNav.removeClass('sticky');
            }
        };

        sticky();

        $(window).scroll(function() {
            topHidden();
            sticky();
        });

        //each panel scroll function
        let ulScroll = $('.sticky_nav_lists');
        let liScroll = ulScroll.children('li');
        let ulPanel = $('.panels_list');
        let liPanel = ulPanel.children('li');
        for(let i = 0; i < liScroll.length; i++) {
            let scroll = $(liScroll[i]);
            let scrollPanel = $(liPanel[i]);
            scroll.click(function() {
                let scrollDuration = 1500;
                $('html, body').animate({scrollTop: scrollPanel.offset().top - $('.sticky_nav').height()-$('#header').height()}, scrollDuration);
                return false;
            })
        }

        //dropdown menu footer
        let parentDropdown = $('.parent_dropdown');
        // let dropdownMenu = $('.dropdown_menu');
        parentDropdown.each(function() {
            let dropdownIcon = $(this).find('.dropdown_icon');
            $(this).click(function() {
                $(this).next().slideToggle();
                dropdownIcon.toggleClass('plus_clicked');
            })
        })

        //hidden menu reveal
        let hamburgerIcon = $('.hamburger_icon_container');
        let hiddenMenu = $('.hidden_menu_container');
        hamburgerIcon.click(() => {
            hamburgerIcon.toggleClass('clicked');
            hiddenMenu.slideToggle();
        })
        //remove hidden menu after resizing window from sp to pc
        $(window).resize(function() {
            let spMaxWidth = 1023;
            if($(this).width() <= spMaxWidth) {
                hamburgerIcon.removeClass('clicked');
            }else {
                hiddenMenu.hide();
            }
        })

        //scrollTop function 
        let scrollTopIcon = $('.scroll_top_icon');
        scrollTopIcon.click(() => {
            let scrollDuration = 1500;
            $('html, body').animate({scrollTop: 0}, scrollDuration);
            return false;
        })


        //drop menu header when hovering
        let hoverNav = $('.hover_nav');
        let headerWrap = $('.header_wrap');
        hoverNav.each(function() {
            let hoverMenu = $(this).find('.hover_menu_container');
            $(this)
                .mouseover(function() {
                    hoverMenu.show();
                    headerWrap.addClass('wrap_background');
                })
                .mouseleave(function() {
                    hoverMenu.hide();
                    headerWrap.removeClass('wrap_background');
                })

            let closeIcon = $(this).find('.close_icon_container');
            closeIcon.click(function() {
                hoverMenu.hide();
            })
        })

        //sns pages revealing
        let pageCloseIcon = $('.sns_pages_close_icon');
        let snsPage = $('.sns_pages_container');

        pageCloseIcon.click(function() {
            snsPage.hide();
        })

        let openSnsIcon = $('[class*="open_page"]');

        openSnsIcon.click(function() {
            let currentData = $(this).data().name;
            let openPage = snsPage.filter("div[data-name='" + currentData + "']");
            openPage.show();
        }) 
});