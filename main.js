document.addEventListener('DOMContentLoaded', function () {
    // Header scroll
    const nav = document.querySelector('.navbar');
    if (nav) {
        window.addEventListener('scroll', function () {
            if (document.documentElement.scrollTop > 50) {
                nav.classList.add('header-scrolled');
            } else {
                nav.classList.remove('header-scrolled');
            }
        });
    }

    // nav hide
    const navBar = document.querySelectorAll('.nav-link');
    const navCollapse = document.querySelector('.navbar-collapse.collapse');
    if (navCollapse && navBar.length) {
        navBar.forEach(function (e) {
            e.addEventListener('click', function () {
                navCollapse.classList.remove('show');
            });
        });
    }
});