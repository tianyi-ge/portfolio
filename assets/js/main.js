var active_page = location.href.split('/').pop().split('#').shift().split('.').shift();
if (active_page == 'index' || active_page == 'portfolio' || active_page == '') {
    active_page = 'about';
}
try {
    document.getElementById("page-name").textContent = active_page;
    $('#nav-' + active_page).addClass('active');
} catch (e) {
    console.log(e);
}

(function ($) {
    var $window = $(window),
        $navbar = $('nav#main-navbar'),
        $navbar_content = $('ul#main-navbar-content');

    function resize() {
        if ($window.outerWidth() > 1024) {
            $navbar.removeClass('navbar-light');
            $navbar.addClass('navbar-dark d-flex flex-column');
            $navbar_content.addClass('d-flex flex-column');
        } else {
            $navbar.removeClass('navbar-dark d-flex flex-column');
            $navbar_content.removeClass('d-flex flex-column');
            $navbar.addClass('navbar-light');
        }
    }
    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);