/* ==================================
 AppCanvas
 =================================== */

$(function(){
    var appcanvas = $('.jos-appcanvas');

    // Count Siblings of appcanvas
    var siblingsAbove = appcanvas.siblings('.jos-appcanvas-above');
    var siblingsBelow = appcanvas.siblings('.jos-appcanvas-below');
    var topOffset = 0;
    var bottomOffset = 0;

    // Calculate the sum of sizes of other siblings
    siblingsAbove.each(function(){
        topOffset += $(this).outerHeight();
    });
    siblingsBelow.each(function(){
        bottomOffset += $(this).outerHeight();
    });


    // Set top offset of the appcanvas object
    appcanvas.css('top',topOffset);
    appcanvas.css('bottom',bottomOffset);

    /* Shifting
    =================================== */
    $('[data-trigger*="shift-"]').on('click',function(){
        var trigger = $(this).attr('data-trigger');
        var classList = appcanvas.attr('class').split(/\s+/);

        $.each( classList, function(index, item){
            // toggle self
            if ( item.match('^shift') ){
                appcanvas.removeClass(item);
            }
        });
        appcanvas.addClass(trigger);

    });

});