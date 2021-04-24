// Tabs que muestran los contenidos de los programas (en index y en page)


$('#list-tab a').on('mouseenter', function(e) {
    e.preventDefault()
    $(this).tab('show')
})


// cambiar color del nav después de hacer scroll

$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $(window).height());
        var $navlink = $(".navbar a");
        $navlink.toggleClass('scrolled', $(this).scrollTop() > $(window).height());
    });
});


var myNav = document.getElementById('navbar-color');
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 200) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};