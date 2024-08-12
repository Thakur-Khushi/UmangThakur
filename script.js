
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('click');
    const menuLinks = document.querySelectorAll('ul li a');
    
    // Add click event listener to each menu link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.checked = false; // Uncheck the checkbox to hide the menu
        });
    });
});

