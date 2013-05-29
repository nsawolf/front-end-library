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

    /* Variant Functionality - Book Control Panel (Sections)
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


    assignTypeahead('#sections');

    // Typeahead
    function assignTypeahead(listId){
        $(listId + ' .typeahead').typeahead({
            source: dataSections,
            updater: function(item){
                // add new topic
                addListItem(item,listId);
            }
        });
    }

    // Add List Item
    function addListItem(item, listId){
        var newItem = $('.list-group-item.cloner')
            .clone()
            .removeClass('cloner hide')
            .html(item);
        $(listId + ' .list-group').append(newItem);
    }

//    function updateList(){
//        isListEmpty(); // Check to see if list is empty
//        sortTopicsAlpha(); // Sort the list alphabetically
//        dragAndDrop(); // show/hide things as applicable
//    };


});