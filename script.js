document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('header');

    // Change background color on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#555';
        } else {
            nav.style.backgroundColor = '#333';
        }
    });
});
