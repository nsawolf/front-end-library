/* ==================================
 AppCanvas
 =================================== */

!function ($)
{
    "use strict";

    $.fn.josAppcanvas = function( options ) {

        var settings = $.extend({
            color: "#556b2f",
            backgroundColor: "white"
        }, options );


        return this.each(function(){
            var $this = $(this);

            // Count Siblings of appcanvas
            var siblingsAbove = $this.siblings('.jos-appcanvas-above');
            var siblingsBelow = $this.siblings('.jos-appcanvas-below');
            var topOffset = 0;
            var bottomOffset = 0;

            // Calculate the sum of sizes of other siblings
            siblingsAbove.each(function(){
                topOffset += $(this).outerHeight();
            });
            siblingsBelow.each(function(){
                bottomOffset += $(this).outerHeight();
            });

            // Set top offset of the appcanvas object
            $this.css('top',topOffset);
            $this.css('bottom',bottomOffset);

            /* Shifting
             =================================== */
            $('[data-trigger*="shift-"]').on('click',function(){
                var trigger = $(this).attr('data-trigger');
                var classList = $this.attr('class').split(/\s+/);

                $.each( classList, function(index, item){
                    // toggle self
                    if ( item.match('^shift') ){
                        $this.removeClass(item);
                    }
                });
                $this.addClass(trigger);

            });
        });

    };

    $('.jos-appcanvas').josAppcanvas();

}(window.jQuery);

///* ==================================
// AppCanvas - v2
// =================================== */
//
//$(function(){
//
//    /* Module Definition
//     =================================== */
//    var josAppCanvas = (function() {
//
//        var init = function( settings ) {
//            // defaults
//            this.defaults = {
//                elem: '.jos-appcanvas',
//                elemAbove: '.jos-appcanvas-above',
//                elemBelow: '.jos-appcanvas-below',
//                trigger: 'shift-'
//            };
//
//            // allow overriding the default config
//            $.extend( this.defaults, settings );
//
//            setup();
//        };
//
//        // private variables and functions
//        var setup = function(){
//            calcSize();
//            shift();
//        };
//        var calcSize = function(){
//            var $elem = $(josAppCanvas.defaults.elem);
//            var $siblingsAbove = $elem.siblings(josAppCanvas.defaults.elemAbove);
//            var $siblingsBelow = $elem.siblings(josAppCanvas.defaults.elemBelow);
//            var topOffset = 0;
//            var bottomOffset =  0;
//
//            // Calculate the sum of sizes of other siblings
//            $siblingsAbove.each(function(){
//                topOffset += $(this).outerHeight();
//            });
//            $siblingsBelow.each(function(){
//                bottomOffset += $(this).outerHeight();
//            });
//
//            // Set top offset of the appcanvas object
//            $elem.css('top',topOffset);
//            $elem.css('bottom',bottomOffset);
//        };
//        var shift = function(){
//            var $elem = $(josAppCanvas.defaults.elem);
//            $('[data-trigger*="' + josAppCanvas.defaults.trigger + '"]').on('click',function(){
//                var trigger = $(this).attr('data-trigger');
//                var classList = $elem.attr('class').split(/\s+/);
//
//                $.each( classList, function(index, item){
//                    // toggle self
//                    if ( item.match('^shift') ){
//                        $elem.removeClass(item);
//                    }
//                });
//                $elem.addClass(trigger);
//            });
//        };
//
//
//        // public API
//        return {
//            init: init
//        };
//
//    })();
//
//    /* Usage / Instantiation
//     =================================== */
//    josAppCanvas.init();
//
//});



///* ==================================
// AppCanvas - v3
// =================================== */
//
//$(function(){
//    "use strict";
//    var appcanvas = $('.jos-appcanvas');
//
//    // Count Siblings of appcanvas
//    var siblingsAbove = appcanvas.siblings('.jos-appcanvas-above');
//    var siblingsBelow = appcanvas.siblings('.jos-appcanvas-below');
//    var topOffset = 0;
//    var bottomOffset = 0;
//
//    // Calculate the sum of sizes of other siblings
//    siblingsAbove.each(function(){
//        topOffset += $(this).outerHeight();
//    });
//    siblingsBelow.each(function(){
//        bottomOffset += $(this).outerHeight();
//    });
//
//
//    // Set top offset of the appcanvas object
//    appcanvas.css('top',topOffset);
//    appcanvas.css('bottom',bottomOffset);
//
//    /* Shifting
//     =================================== */
//    $('[data-trigger*="shift-"]').on('click',function(){
//        var trigger = $(this).attr('data-trigger');
//        var classList = appcanvas.attr('class').split(/\s+/);
//
//        $.each( classList, function(index, item){
//            // toggle self
//            if ( item.match('^shift') ){
//                appcanvas.removeClass(item);
//            }
//        });
//        appcanvas.addClass(trigger);
//
//    });
//
//});