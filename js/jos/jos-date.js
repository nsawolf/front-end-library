/* ==================================
    jos-date
=================================== */

$(function(){
    Date.prototype.monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    Date.prototype.getMonthName = function() {
        return this.monthNames[this.getMonth()];
    };
    Date.prototype.getShortMonthName = function () {
        return this.getMonthName().substr(0, 3);
    };

    /* Implementations
    =================================== */
    var d = new Date();
    var dataDate = $('.data-date-full');

    // formats
    var dateFull = d.getMonthName() + ' ' + d.getDay() + ', ' + d.getFullYear();

    dataDate.html(dateFull);
});