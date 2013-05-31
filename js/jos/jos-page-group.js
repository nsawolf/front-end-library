/* ==================================
    jos-page-group
=================================== */

!function ($)
{

    "use strict";

    var defaults = {
        item: '.jos-page-group',
        rows: 9
    };

    // PageGroupHeight function definition
    function PageGroupHeight( $element, options ){
        var base = this;
        this.$element = $element;
        this.options = $.extend( {}, defaults, options );
        this.init();

        $(window).resize(function(){
            base.init();
        });
    }

    // PageGroupHeight prototypes
    PageGroupHeight.prototype.init = function(){
        var base = this;
        this.appCanvasContent = $('.jos-appcanvas-content');
        this.contentHeight = this.appCanvasContent.height();
        this.pageGroupItems = $(this.options.item + ' .jos-page-group-item');
        this.pageGroupItems.outerHeight( Math.floor( this.contentHeight/this.options.rows) );

    };

    // pageGroupHeight plugin definition
    $.fn.pageGroupHeight = function(options){
        return this.each(function(){

                $.data(this, 'plugin_pageGroupHeight', new PageGroupHeight( this, options ));

        });
    };

}(window.jQuery);