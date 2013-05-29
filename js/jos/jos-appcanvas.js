/* ==================================
 appcanvas
 =================================== */

!function ($)
{
    "use strict";

    var defaults = {
        siblingsAbove: '.appcanvas-above',
        siblingsBelow: '.appcanvas-below',
        shift: 'shift-default'
    };

    // Appcanvas function definition
    function Appcanvas( $element, options ){
        this.$element = $element;
        this.options = $.extend( {}, defaults, options );
        this.init();
    }

    // Appcanvas prototypes
    Appcanvas.prototype.init = function(){
        var base = this;
        this.$siblingsAbove = $(this.options.siblingsAbove);
        this.$siblingsBelow = $(this.options.siblingsBelow);
        this.topOffset = 0;
        this.bottomOffset = 0;

        // Calculate sum of siblings
        this.$siblingsAbove.each(function(){base.topOffset += $(this).outerHeight();});
        this.$siblingsBelow.each(function(){base.bottomOffset += $(this).outerHeight();});

        // Assign css values
        $(this.$element).css('top', this.topOffset);
        $(this.$element).css('bottom', this.bottomOffset);

        // Setup Default Shift (& negate initial transition with util class 'notransition')
        $(this.$element).addClass(this.options.shift).children().addClass('notransition');
        setTimeout(function(){$(base.$element).children().removeClass('notransition');},800);

        // Trigger Events
        this.shift();
    };
    Appcanvas.prototype.shift = function(){
        var base = this;

        $(this.$element).on('click', '[data-trigger*="shift-"]', function(){
            var trigger = $(this).attr('data-trigger');
            var classList = $(base.$element).attr('class').split(/\s+/);

            // Remove all "shift" classes
            $.each( classList, function(index, item){
                if ( item.match('^shift') ){
                    $(base.$element).removeClass(item);
                }
            });
            // Add new class
            $(base.$element).addClass(trigger);

        });
    };

    // Appcanvas plugin definition
    $.fn.appcanvas = function(options){
        return this.each(function(){
            if ( !$.data(this, 'plugin_appcanvas') ){
                $.data(this, 'plugin_appcanvas', new Appcanvas( this, options ));
            }
        });
    };

    // Instance of appcanvas
    $('.jos-appcanvas').appcanvas({
        siblingsAbove: '.jos-appcanvas-above',
        siblingsBelow: '.jos-appcanvas-below',
        shift: 'shift-right'
    });

}(window.jQuery);

//!function ($)
//{
//    "use strict";
//
//    $.fn.appcanvas = function( options ) {
//
//        var settings = $.extend({
//            color: "#556b2f",
//            backgroundColor: "white"
//        }, options );
//
//
//        return this.each(function(){
//            var $this = $(this);
//
//            // Count Siblings of appcanvas
//            var siblingsAbove = $this.siblings('.jos-appcanvas-above');
//            var siblingsBelow = $this.siblings('.jos-appcanvas-below');
//            var topOffset = 0;
//            var bottomOffset = 0;
//
//            // Calculate the sum of sizes of other siblings
//            siblingsAbove.each(function(){
//                topOffset += $(this).outerHeight();
//            });
//            siblingsBelow.each(function(){
//                bottomOffset += $(this).outerHeight();
//            });
//
//            // Set top offset of the appcanvas object
//            $this.css('top',topOffset);
//            $this.css('bottom',bottomOffset);
//
//            /* Shifting
//             =================================== */
//            $('[data-trigger*="shift-"]').on('click',function(){
//                var trigger = $(this).attr('data-trigger');
//                var classList = $this.attr('class').split(/\s+/);
//
//                $.each( classList, function(index, item){
//                    // toggle self
//                    if ( item.match('^shift') ){
//                        $this.removeClass(item);
//                    }
//                });
//                $this.addClass(trigger);
//
//            });
//        });
//
//    };
//
//    $('.jos-appcanvas').appcanvas();
//
//}(window.jQuery);
//
/////* ==================================
//// AppCanvas - v2
//// =================================== */
////
////$(function(){
////
////    /* Module Definition
////     =================================== */
////    var josAppCanvas = (function() {
////
////        var init = function( settings ) {
////            // defaults
////            this.defaults = {
////                elem: '.jos-appcanvas',
////                elemAbove: '.jos-appcanvas-above',
////                elemBelow: '.jos-appcanvas-below',
////                trigger: 'shift-'
////            };
////
////            // allow overriding the default config
////            $.extend( this.defaults, settings );
////
////            setup();
////        };
////
////        // private variables and functions
////        var setup = function(){
////            calcSize();
////            shift();
////        };
////        var calcSize = function(){
////            var $elem = $(josAppCanvas.defaults.elem);
////            var $siblingsAbove = $elem.siblings(josAppCanvas.defaults.elemAbove);
////            var $siblingsBelow = $elem.siblings(josAppCanvas.defaults.elemBelow);
////            var topOffset = 0;
////            var bottomOffset =  0;
////
////            // Calculate the sum of sizes of other siblings
////            $siblingsAbove.each(function(){
////                topOffset += $(this).outerHeight();
////            });
////            $siblingsBelow.each(function(){
////                bottomOffset += $(this).outerHeight();
////            });
////
////            // Set top offset of the appcanvas object
////            $elem.css('top',topOffset);
////            $elem.css('bottom',bottomOffset);
////        };
////        var shift = function(){
////            var $elem = $(josAppCanvas.defaults.elem);
////            $('[data-trigger*="' + josAppCanvas.defaults.trigger + '"]').on('click',function(){
////                var trigger = $(this).attr('data-trigger');
////                var classList = $elem.attr('class').split(/\s+/);
////
////                $.each( classList, function(index, item){
////                    // toggle self
////                    if ( item.match('^shift') ){
////                        $elem.removeClass(item);
////                    }
////                });
////                $elem.addClass(trigger);
////            });
////        };
////
////
////        // public API
////        return {
////            init: init
////        };
////
////    })();
////
////    /* Usage / Instantiation
////     =================================== */
////    josAppCanvas.init();
////
////});



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