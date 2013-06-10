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

    // initialize
    assignTypeahead('#section');
    assignTypeahead('#topic');
    assignTypeahead('#staff');
    dragAndDrop('#deadline');

    // Typeahead
    function assignTypeahead(listId){
        $(listId + ' .typeahead').typeahead({
            source: dataSections,
            updater: function(item){
                // add new topic
                addListItem(item,listId);
                sortListAlpha(listId);
                dragAndDrop(listId);
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

    // Sort List Alphabetically
    function sortListAlpha(listId){
        var mylist = $(listId + ' .list-group');
        var listitems = mylist.children('li');
        listitems.sort(function(a, b) {
            return $(a)
                .text()
                .toUpperCase()
                .localeCompare($(b).text().toUpperCase());
        });
        $.each(listitems, function(idx, itm) { mylist.append(itm); });
    }

    // drag and drop
    function dragAndDrop(listId) {
        var newListId = listId
        var notchar = /[^a-zA-Z]/g;
        newListId = newListId.replace(notchar, '');

        $(".list-group-item").draggable({
            appendTo: "body",
            helper: "clone",
            start: function(event, ui) {
                $(ui.helper).addClass("ui-draggable-helper");
            },
//            stop: function(event, ui){
//                isPageUsed($(this));
//            }
        });
        $(".meta-info-dynamic").droppable({       // TODO: Figure out how to have this work with the less/more button. It doesn't bind, because the object isn't there when this is called...unless you add another list item while it's open as a "more" list
            hoverClass: 'hover',
            accept: ":not(.ui-sortable-helper)",
            drop: function( event, ui ) {
                $(ui.draggable)
                    .clone()
                    .removeClass('ui-draggable').addClass('meta-info-' + newListId)
                    .appendTo(this);
            }
        });
    }

    /* Layers
    =================================== */
    // TODO Store Defaults for the Tabs, then load them through the setDefaults function to reset all the visibility and toggle states, etc...

    // Set Default State
    function setDefaults(){
        $('[data-toggle="layer"]').each(function(){
            var isDefault = $(this).attr('data-default');
            var target = $(this).attr('data-target');
            var targetItems = $('.' + target);

            if ( isDefault){
                toggleButton($(this));
                targetItems.css('visibility','visible')
            }
            else{ targetItems.css('visibility','hidden'); }

        });
    }
    setDefaults();


    // On Click Event
    $('[data-toggle="layer"]').on('click',function(){
        var target = $(this).attr('data-target');
        var targetItems = $('.' + target);

        toggleButton($(this));
        switchVisibility(targetItems);
    });

    // Toggle Active State of a Trigger
    function toggleButton($elem){
        $elem.toggleClass('active');
        $elem.find('i').toggleClass(function(){
            if ($(this).hasClass('glyphicon-eye_open')){
                $(this).removeClass('glyphicon-eye_open');
                return 'glyphicon-eye_close';
            }
            else{
                $(this).removeClass('glyphicon-eye_close');
                return 'glyphicon-eye_open';
            }
        });
    }

    // Switch Visibility
    function switchVisibility(targetItems){
        var visibility = targetItems.css('visibility');
        if ( visibility == 'visible' ){
            targetItems.css('visibility','hidden');
        }
        else if ( visibility == 'hidden' ){
            targetItems.css('visibility','visible');
        }
    }

//    function updateList(){
//        isListEmpty(); // Check to see if list is empty
//        sortTopicsAlpha(); // Sort the list alphabetically
//        dragAndDrop(); // show/hide things as applicable
//    };


});