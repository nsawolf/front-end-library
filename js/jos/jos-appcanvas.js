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
        console.log('HEYEYEYEEy');

        $('body').on('click', '[data-trigger*="shift-"]', function(){
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

    // appcanvas plugin definition
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