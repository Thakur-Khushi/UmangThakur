document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-list a');
    const contactForm = document.querySelector('.contact-form');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (menuToggle) {
                menuToggle.checked = false;
            }
        });
    });

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const name = formData.get('name') || '';
            const email = formData.get('email') || '';
            const message = formData.get('message') || '';
            const subject = encodeURIComponent(`Portfolio message from ${name}`);
            const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);

            window.location.href = `mailto:umangramthakur@gmail.com?subject=${subject}&body=${body}`;
            contactForm.reset();
        });
    }
});
