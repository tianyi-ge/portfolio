$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 40) {
            $("nav").addClass("scrolled");
        } else {
            $("nav").removeClass("scrolled");
        }
    }); 
});
