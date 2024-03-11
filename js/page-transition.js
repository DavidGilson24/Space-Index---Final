document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "1";

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const destination = this.href;

            let overlay = document.getElementById('overlay');
            overlay.style.display = 'block';
            setTimeout(() => {
                overlay.style.opacity = '1';
            }, 10);

            setTimeout(() => {
                window.location.href = destination;
            }, 500);
        });
    });
});
