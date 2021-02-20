import { $ }  from 'react-jquery-plugin'
    
    $(document).ready(function() {
    "use strict";

    
    /*menu-dropdow*/
    $('.navbar a.dropdown-toggle').on('click', function(e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if (!$parent.parent().hasClass('nav')) {
            $el.next().css({
                "top": $el[0].offsetTop,
                "left": $parent.outerWidth() - 4
            });
        }

        $('.nav li.open').not($(this).parents("li")).removeClass("open");

        return false;
    });
    /*end/menu-dropdow*/
    

    /*check-uot*/
    $('.dropdown-menu li').on("click", function() {
        $('#selected').text($(this).text());
        $('li ').removeClass("active");
        $(this).addClass("active");
    });
    $('.dropdown-menu li').on("click", function() {
        $('#selected1').text($(this).text());
        $('li ').removeClass("active");
        $(this).addClass("active");
    });

    /*end/check-uot*/

  
   

    /*click-hamburger*/

    $('[data-toggle="offcanvas"], .btn-offcanvas').on("click", function(event) {
        event.stopPropagation();
        $('body').toggleClass('menu-open');
        $("#pbr-off-canvas").toggleClass("active");
    })

    $(document).bind("mouseup touchend", function(e) {
        var container = $("#pbr-off-canvas");
        if (!container.is(e.target) // if the target of the click isn't the container...
            &&
            container.has(e.target).length === 0) // ... nor a descendant of the container
        {
           $("#pbr-off-canvas").removeClass("active");
           $('body').removeClass('menu-open');
        }
    });

    $('.burger-menu').on("click", function(event){
        $(this).toggleClass('active');
        $('.header-v2').toggleClass('menu-popup-open');
        $('#content_menu_popup').toggleClass('menu-popup-open');
        $('.logo').toggleClass('active');
        $('.header-right').toggleClass('active');
    })
    /*end/hamburger*/

    /*sidebar fixed*/
    $('[data-toggle="filter"]').on("click", function(event) {
        event.stopPropagation();
        $('body').toggleClass('filter-open');
        $(".sidebar-fixed").toggleClass("filter-active");
    })
    $(document).bind("mouseup touchend", function(e) {
        var container = $(".sidebar-fixed");
        if (!container.is(e.target) // if the target of the click isn't the container...
            &&
            container.has(e.target).length === 0) // ... nor a descendant of the container
        {
           $(".sidebar-fixed").removeClass("filter-active");
           $('body').removeClass('filter-open');
        }
    });

    //fixed cart home 4
    $('.btn-fix-cart').on("click", function(event) {
        event.stopPropagation();
        $('body').toggleClass('cart-open');
        $("#content-cart").toggleClass("active");
    })

   
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }

});
