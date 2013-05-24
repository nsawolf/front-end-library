/* ==================================
    jos-book
=================================== */

$(function(){
    /* views (aka "zooms")
    =================================== */
    var viewTriggers = $('[data-toggle="view"]');

    // Display view that is referenced by trigger
    function toggleView(viewTrigger){
        var target = viewTrigger.attr('id');
        $('.jos-view').hide();
        $('.' + target).show();
    }

    // Display default active trigger
    var activeTrigger = '';
    viewTriggers.each(function(){
        if ( $(this).parent('label').hasClass('active') ){
            activeTrigger = $(this);
        }
    });
    toggleView(activeTrigger);

    // Activate view on trigger event
    viewTriggers.on('click',function(){
        toggleView($(this));
    });



    // layer groups (aka tabs)

    // layers (aka filters)
});