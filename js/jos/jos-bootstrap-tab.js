/* ==================================
    extending bootstrap-tab.js
=================================== */

$(function(){
    /* TAB DATA-API
     * ============ */

    $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
        e.preventDefault()
        var place = $(this).attr('href');
        console.log(place);
    })
});