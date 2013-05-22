/* ==================================
 jos-coverchoose.js
 =================================== */

$(function(){
    var coverItems = $('.jos-coverlist > li');
    var color;
    var personalization;

    function sort(){

       color =  $('.btn-group-select-color .btn').val();
       personalization =  $('.btn-group-select-personalization .btn').val();

       coverItems.hide();
       coverItems.each(function(){
           var thisColor = $(this).attr('data-color');
           var thisPersonalization = $(this).attr('data-personalization');
           if ( thisColor == color && thisPersonalization == personalization ){
               $(this).show();
           }
       });
    }

    // Button Group Select
    $(".btn-group-select .dropdown-menu li a").click(function(){
        sort();
    });
    sort();
});