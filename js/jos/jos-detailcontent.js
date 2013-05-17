/* ==================================
 jos-detailcontent
 =================================== */

$(function(){
    // Variables
    var target = '';

    // Defaults
//    $('.jos-detailcontent').hide();
    $('.jos-detailcontent-indicator').hide();

    /* Integrations - SubMenu
     =================================== */

    // Hide DetailContainer and Indicator on Header Click
    $('.accordion-heading .accordion-toggle').on('click',function(){
        $('.jos-detailcontent').hide();
        $('.jos-detailcontent-indicator').hide();
    });

    // Events from SubMenu displayed as an accordion
    $('.jos-controlpanel .accordion-inner li').on('click',function(){
        // Get Target from Trigger
        target = $(this).find('a').attr('data-target');

        // Indicator
        if ( $(this).find('.jos-detailcontent-indicator:hidden') ){
            $('.jos-detailcontent-indicator').hide();
        }
        $(this).find('.jos-detailcontent-indicator').toggle();

        // Hide/Show article content
        $('.jos-detailcontent').hide();
        $('.jos-detailcontent[data-id="' + target + '"]').show();
    });

    // Events from Submenu displayed as a list-group
    $('.jos-detailcontent-trigger').on('click',function(){
        // Get Target from Trigger
        target = $(this).attr('data-target');

        // Indicator
        if ( $(this).find('.jos-detailcontent-indicator:hidden') ){
            $('.jos-detailcontent-indicator').hide();
        }
        $(this).find('.jos-detailcontent-indicator').toggle();

        // Hide/Show article content
        $('.jos-detailcontent').hide();
        $('.jos-detailcontent[data-id="' + target + '"]').show();

        // Set Active
        $('.jos-detailcontent-trigger').removeClass('active');
        $(this).addClass('active');

        console.log('adam is awesome');
    });



});