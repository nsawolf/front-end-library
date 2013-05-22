/* ==================================
    extending bootstrap-button.js
=================================== */

$(function(){

    // Button Group Select
    $(".btn-group-select .dropdown-menu li a").click(function(){
        var dropdown = $('.btn-group').has($(this));

        dropdown.find(".btn:first-child").html($(this).html() + ' <span class="caret"></span>');
        dropdown.find(".btn:first-child").val($(this).attr('value'));
    });

});