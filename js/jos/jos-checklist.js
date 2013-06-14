/* ==================================
    jos-checklist.js
=================================== */

$(function(){
    // Function definition
    function checkbox(elem){
        var $elem = $(elem);

        if ( $elem.hasClass('glyphicon-unchecked') ){
            $elem.removeClass('glyphicon-unchecked');
            $elem.addClass('glyphicon-check');

        }
        else if ( $elem.hasClass('glyphicon-check') ){
            $elem.removeClass('glyphicon-check');
            $elem.addClass('glyphicon-unchecked');
        }

        $elem.parent().toggleClass('active');
    }

    // Click event
    $('.jos-checkbox').on('click',function(){
        checkbox(this);
    });
});