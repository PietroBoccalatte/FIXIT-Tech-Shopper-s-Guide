// This script does not track users, set cookies or store any data.
//


document.addEventListener('DOMContentLoaded', function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (event) {
            const id = link.getAttribute('href').slice(1);
            if (!id) return;

            const target = document.getElementById(id);
            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth' });

            // Make the target focusable so keyboard and screen reader users land there
            if (!target.hasAttribute('tabindex')) {
                target.setAttribute('tabindex', '-1');
            }
            target.focus({ preventScroll: true });

            // Keep the URL and Back button behaving normally
            history.pushState(null, '', '#' + id);
        });
    });
});
