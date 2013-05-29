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
    $('[data-filter]').on('click',function(){
        var filter = $(this).attr('data-filter');
        $('.meta-info-dynamic').find('li').hide();
        $('.meta-info-' + filter).show();
    });

    // layers (aka filters)


    /* More/Less Buttons
    =================================== */
    $('.meta-info-more').on('click',function(){
        var item = $('.jos-page-group-item').has(this);
        var contents = item.contents().clone();

        // Hide all others
        $('.hoveritem').remove();

        // create element and append contents
        $('<div/>', {
            class: 'hoveritem',
            html: contents
        }).appendTo(item)
            .hide()
            .fadeIn(200)
            .find('.meta-info-more')
            .text('Less').removeClass('meta-info-more')
            .addClass('meta-info-less')
    });
    $('body').on('click','.meta-info-less',function(){
        $('.hoveritem').has(this).remove()  ;
    });

    // TODO: Remove hoveritem on pretty much any other event

});