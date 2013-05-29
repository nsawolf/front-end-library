/* ==================================
 jos-controlpanel
 =================================== */

$(function(){

    /* Sizing
    =================================== */
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

    /* Functionality
    =================================== */
    // Load Autocomplete Data
    jQuery.extend({
        getValues: function(url) {
            var result = null;
            $.ajax({
                url: url,
                type: 'get',
                dataType: 'text',
                async: false,
                success: function(data) {
                    result = data;
                }
            });
            return result;
        }
    });

    var dataSectionsOrig = $.getValues("data-sections.txt");
    var dataSections = dataSectionsOrig.split(',');

    // Load Section Values
    function loadSectionValues(){
        var sectionValue1 = getParameterByName('section1');
        var sectionValue2 = getParameterByName('section2');
        var sectionValue3 = getParameterByName('section3');
        $('.sectionValue').each(function(i){
            if( i<=0 ){
                $(this).val(sectionValue1);
            }
            else if ( i>0 && i<=2 ){
                $(this).val(sectionValue2);
            }
            else{
                $(this).val(sectionValue3);
            }
        });

    }
})