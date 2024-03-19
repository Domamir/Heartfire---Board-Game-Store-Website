document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.scrollY >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

        // Sprawdzamy, czy użtkownik jest blisko góry strony
        var isCloseToTop = window.scrollY <= 2;

        if (isCloseToTop) {
            navbar.classList.remove("sticky");
        }
    }
});