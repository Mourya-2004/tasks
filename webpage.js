document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting by default
  
      if (validateName(nameInput.value) && validateEmail(emailInput.value)) {
        alert("Registration successful!"); // Replace with your desired action
      } else {
        alert("Please fill in valid information.");
      }
    });
  
    function validateName(name) {
      return name.trim() !== ""; // Simple name validation
    }
  
    function validateEmail(email) {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
      return pattern.test(email);
    }
  });