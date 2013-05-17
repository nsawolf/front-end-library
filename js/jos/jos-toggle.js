/* ==================================
    jos-toggle
=================================== */

$(function(){

    // Find all toggle triggers and objects
    var toggleTriggers = $('[data-toggle="toggle"]');
    var toggleObjects = $('.toggle');

    // set default state of objects (hidden), but shown if trigger has 'active' class
    toggleTriggers.each(function(){
        var target = $(this).attr('href');
        var targetObject = $(target);

        if ( $(this).hasClass('active') ) targetObject.show();
        else targetObject.hide();
    });

    // on click, toggle this one, hide all others
    toggleTriggers.on('click',function(){
        var target = $(this).attr('href');
        var group = $(this).attr('data-group');
        var groupObjects = $('[data-group="' + group + '"]');
        var targetObject = $(target);

        function cycleTriggers(trigger){
            var thisTarget = trigger.attr('href');
            var thisTargetObject = $(thisTarget);

            if ( thisTarget == target ){
                trigger.toggleClass('active');
                thisTargetObject.toggle();
            }
            else{
                trigger.removeClass('active');
                thisTargetObject.hide();
            }

            // always look for .toggle-escape objects to override normal functionality
            if ( !trigger.hasClass('toggle-escape') ){
                var escapeTriggers = $('.toggle-escape');
                escapeTriggers.each(function(){
                    var target = $(this).attr('href');
                    var targetObject = $(target);

                    targetObject.hide();
                });
            }
        }

        // Cycle through each data group if there is one
        if ( group ) {
            groupObjects.each(function(){
                cycleTriggers($(this));
            });
        }
        else{
            cycleTriggers($(this));
        }
    });
});