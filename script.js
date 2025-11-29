
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

document.addEventListener("DOMContentLoaded", function() {
    const bigCircle = document.querySelector(".big-circle");
    const iconBlocks = document.querySelectorAll(".icon-block");
  
    // Function to stop animations
    function stopAnimations() {
      document.querySelector(".main").classList.add("stop-rotation");
    }
  
    // Function to start animations
    function startAnimations() {
      document.querySelector(".main").classList.remove("stop-rotation");
    }
  
    // Add event listeners
    bigCircle.addEventListener("mouseover", stopAnimations);
    bigCircle.addEventListener("mouseout", startAnimations);
  
    iconBlocks.forEach(icon => {
      icon.addEventListener("mouseover", stopAnimations);
      icon.addEventListener("mouseout", startAnimations);
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Contact form handling
    const contactForm = document.querySelector('.contact_form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Here you would typically send the data to a server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', Object.fromEntries(formData));
            
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});