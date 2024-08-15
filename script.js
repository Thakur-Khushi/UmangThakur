
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
  