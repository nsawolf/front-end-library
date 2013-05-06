/* ==================================
    jos-controlpanel
=================================== */

$(function(){

    // Process Sizes of parts
    function sectionSizing(selector){
        $(selector).each(function(){
            // Find Values
            var filters = $(this).find('.jos-controlpanel-left-filters');
            var tabs = $(this).find('.Tabs');
            var tabHeader = $(this).find('.Tabs-header');
            var tabsContent = $(this).find('.Tabs-content');
            var header = $(this).find('.ControlPanel-header');
            var list = $(this).find('.ControlPanel-list');
            var footer = $(this).find('.ControlPanel-footer');

            var filtersHeight = filters.outerHeight();
            var tabHeaderHeight = tabHeader.outerHeight();
            var headerHeight = header.outerHeight();
            var footerHeight = footer.outerHeight();

            // Set Values
            tabs.css('top',filtersHeight);
            tabsContent.css('top',tabHeaderHeight);
            list.css('top',headerHeight);
            list.css('bottom',footerHeight);


            console.log(filtersHeight);
        });
    }

    sectionSizing('.jos-controlpanel-Left');
})