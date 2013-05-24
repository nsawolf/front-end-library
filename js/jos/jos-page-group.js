/* ==================================
    jos-page-group
=================================== */

$(function(){

    // jos-page-group-16



    function setHeight(){
        var appCanvasContent = $('.jos-appcanvas-content');
        var contentHeight = appCanvasContent.height();
        var pageGroupItems = $('.jos-page-group-item');
        var rows = 9;
        pageGroupItems.outerHeight( Math.floor( contentHeight/rows) );
    }

    setHeight();
    $(window).resize(function(){
        setHeight();
    });





});