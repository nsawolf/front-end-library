/* ==================================
 BackgroundMedia
 =================================== */

$(function(){
    function background(){
        // Set Data
        var bgs = [
            {
                "url":	"../img/jos-backgroundmedia/1.jpg",
                "credit":	"Jaime Wonder, West Texas High School, Stinnett, Texas."
            },
            {
                "url":	"../img/jos-backgroundmedia/2.jpg",
                "credit":	"John Frank, Central High, Minneapolis, Minnesota."
            },
            {
                "url":	"../img/jos-backgroundmedia/3.jpg",
                "credit":	"Aaron Johnson, Franklin West, Chicago, Illinois."
            },
            {
                "url":	"../img/jos-backgroundmedia/4.jpg",
                "credit":	"Ryan Dougan, Jordan Central High School, Jordan, Minnesota."
            },
            {
                "url":	"../img/jos-backgroundmedia/5.jpg",
                "credit":	"Chemistry Cal, Anthem Middle School, Middleton, Idaho."
            },
            {
                "url":	"../img/jos-backgroundmedia/6.jpg",
                "credit":	"Snowy Jackson, Caroline High School, Christmas, Washington."
            },
            {
                "url":	"../img/jos-backgroundmedia/7.jpg",
                "credit":	"Toby Schneider, Clips School of Music, Nashville, Tennessee."
            },
            {
                "url":	"../img/jos-backgroundmedia/8.jpg",
                "credit":	"Caleb Soderton, Grainger Middle School, Grainger, Minnesota."
            },
            {
                "url":	"../img/jos-backgroundmedia/9.jpg",
                "credit":	"Fairly Strained, Central High School, Excitement City, Florida."
            },
            {
                "url":	"../img/jos-backgroundmedia/10.jpg",
                "credit":	"Michelle Keith, Johnson High School, New York, New York."
            },
            {
                "url":	"../img/jos-backgroundmedia/11.jpg",
                "credit":	"Jared Loosepedal, Gilman High School, Gilman, Oklahoma."
            }
        ];

        // Assign Img
        var m = parseInt( Math.floor(Math.random()*bgs.length), 10 );
        $('.jos-backgroundmedia').css('background-image', 'url(' + bgs[m].url + ')' ); // assign file as background

        // Assign Credits
        var credit = bgs[m].credit;
        $('.jos-backgroundmedia-credits').text(credit);
    }

    // Call function
    $(window).on('load', background() );





    /* Lib Dependency: Waypoint.min.js
    =================================== */
    // Caption Positioning - Change when bottom of Media element hits the viewport
//    $('.jos-backgroundmedia').waypoint(function(direction) {
//        $('.jos-backgroundmedia-caption').toggleClass('affix');
//
//    }, {
//        offset: function() {
//            // Toggle a class when an the bottom of an object comes into the viewport
//            var viewport = $.waypoints('viewportHeight');
//            var object = $('.jos-backgroundmedia').height();
//            return -(object-viewport);
//        }
//    });

    /* Wonky way of resizing. Need to to so because object needs to be "position: relative"
    =================================== */
//    function setBackgroundHeight(){
//        if ( $('.jos-backgroundmedia.int-jos-controlpanel') ){
//            var viewport = $.waypoints('viewportHeight');
//            var object = $('.jos-navbar-mainmenu').height();
//            $('.jos-backgroundmedia.int-jos-controlpanel').height(viewport-object);
//        }
//    }
//    setBackgroundHeight();
//    $(window).resize(function() {
//        setBackgroundHeight();
//    });
})

