/* ==================================
    jos-book
=================================== */

$(function(){
    /* views (aka "zooms")
    =================================== */
    var viewTriggers = $('[data-toggle="view"]');

    function switchView(viewTrigger){
        var target = viewTrigger.attr('id');

        // Integrate with pageGroup plugin
        var maxSize = viewTrigger.attr('data-maxsize');
        var rows = viewTrigger.attr('data-rows');
        var grouping = viewTrigger.attr('data-grouping');

        // specific settings per view

        $('.jos-autocolumn').pageGroup({
            rows: rows,
            grouping: grouping
        });

        // Give Classes
        // Remove all "shift" classes
        var classList = $('.jos-page-group').attr('class').split(/\s+/);
        $.each( classList, function(index, item){
            if ( item.match('^jos-view-') ){
                $('.jos-page-group').removeClass(item);
            }
        });
        // Add new class
        $('.jos-page-group').addClass(target);


        // Integrate with Autocolumn
        if (maxSize){$('.jos-autocolumn').attr('data-maxsize', maxSize);}
        else{$('.jos-autocolumn').attr('data-maxsize', '');}
        autocolumn.size();
    }

    // Display default active trigger
    var activeTrigger = '';
    viewTriggers.each(function(){
        if ( $(this).parent('label').hasClass('active') ){
            activeTrigger = $(this);
        }
    });

    switchView(activeTrigger);

    // Activate view on trigger event
    viewTriggers.on('click',function(){
        switchView($(this));
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

})