/* ==================================
    jos-page-group
=================================== */

!function ($)
{

    "use strict";

    var defaults = {
        item: '.jos-page-group',
        rows: 9,
        grouping: 16
    };

    // PageGroup function definition
    function PageGroup( $element, options ){
        var base = this;
        this.$element = $element;
        this.options = $.extend( {}, defaults, options );
        this.init();

        // Grouping
        // Only have one ul group if grouping is set to 'none' (## items / ##items)
        if ( this.options.grouping == 'none' ){this.groups(this.pageGroupItems, this.pageGroupItems.size());}
        else {this.groups(this.pageGroupItems, this.options.grouping);}

        $(window).resize(function(){
            base.init();
        });
    }

    // PageGroup prototypes
    PageGroup.prototype.init = function(){
        var base = this;
        this.appCanvasContent = $('.jos-appcanvas-content');
        this.contentHeight = this.appCanvasContent.height();
        this.pageGroupItems = $(this.options.item + ' .jos-page-group-item');
        this.pageGroupItems.outerHeight( Math.floor( this.contentHeight/this.options.rows) );
    };

    PageGroup.prototype.groups = function(items, grouping){
        // find number of groups
            var base = this;
            var itemCount = items.size();
            var groupCount = itemCount/grouping;

            while (groupCount > 0) {
                // loop through all the list items and assign page Group values
                this.pageGroupItems.each(function(i,elem){
                    var low = (grouping * (groupCount-1))-1;
                    var high = (grouping * groupCount)-1;
                    if ( i <= high && i > low  ){
                        $(this).attr('data-group', groupCount);

                    }
                });

                // create a group ul
                $('.jos-autocolumn').append($('<ul></ul>')// TODO: refactor autocolumn out of this function
                    .addClass('jos-page-group jos-autocolumn-item')
                    .attr('data-group',itemCount/grouping - groupCount +1));

                groupCount--;
            }

        // move items into correct ul groups
        this.pageGroupItems.each(function(){
            var listItem = $(this);
            var listItemGroup = listItem.attr('data-group');

            // loop through each group and move item into that if they are the same group number
            $('.jos-page-group').each(function(){
                if ( $(this).attr('data-group') === listItemGroup ){
                    $(this).append(listItem);
                }
            });
        });

        // Remove all old(empty) groups
        $('.jos-page-group').each(function(){
            if ( $(this).find('li').size() < 1 ){
                $(this).remove();
            }
        });

    }

    // pageGroup plugin definition
    $.fn.pageGroup = function(options){
        return this.each(function(){

                $.data(this, 'plugin_pageGroup', new PageGroup( this, options ));

        });
    };

}(window.jQuery);