/* ==================================
 AppCanvas
 =================================== */

$(function(){

    // Count Div Siblings of appcanvas
    var siblings = $('.jos-appcanvas').siblings('div');
    var topOffset = 0;

    // Calculate the sum of sizes of other siblings
    siblings.each(function(){
        topOffset += $(this).outerHeight();
    });

    // Set top offset of the appcanvas object
    $('.jos-appcanvas').css('top',topOffset);

});