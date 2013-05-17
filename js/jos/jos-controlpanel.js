/* ==================================
 jos-controlpanel
 =================================== */

$(function(){

    // Process Sizes of parts
    function sectionSizing(selector){
        $(selector).each(function(){
            // Find Values
            var header = $(this).find('.jos-controlpanel-header').outerHeight();
            var body = $(this).find('.jos-controlpanel-body').outerHeight();
            var bodyHeader = $(this).find('.jos-controlpanel-body-header').outerHeight();
            var bodyFooter = $(this).find('.jos-controlpanel-body-footer').outerHeight();

            // Set Values
            $(this).find('.jos-controlpanel-body').css('top',header);
            $(this).find('.jos-controlpanel-body-content').css('top',bodyHeader);
            $(this).find('.jos-controlpanel-body-content').css('bottom',bodyFooter);

        });
    }

    sectionSizing('.jos-controlpanel');
})