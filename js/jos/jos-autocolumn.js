/* ==================================
 jos-autocolumn
 =================================== */


var autocolumn = {


    /* Function Definition
     =================================== */
    size: function(){
        // Defaults - Set all items to float
        $('.jos-autocolumn-item').css('float','left');

        // Iterate through all AutoColumn Containers
        $('.jos-autocolumn').each(function(){
            // Grab all objects
            var item = $(this).find('.jos-autocolumn-item');
            var containerWidth = $(this).outerWidth();
            var maxSize = $(this).attr('data-maxsize');

            // Test for need of columns
            if ( item.size() * maxSize > containerWidth ){
                // Calculate column width percentage
                var columnMeasure = (12/(Math.ceil(containerWidth/maxSize))/12)*100;

                // Assign correct column class
                item.css('width',columnMeasure + '%');
            }
            else{
                item.css('width',maxSize);
            }

        });
    }
}

$(function(){

    /* Initial Run and on Events
     =================================== */
    autocolumn.size();

    $(window).resize(function(){  /*TODO: There may be a better way to do this...delay it or something.*/
        autocolumn.size();
    });




});