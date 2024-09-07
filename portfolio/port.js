document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js for the .typing element
    var typed1 = new Typed(".typing", {
        strings: ["Frontend Developer", "Programmer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Initialize Typed.js for the .typing1 element
    var typed2 = new Typed(".typing1", {
        strings: ["Salesforce Developer Virtual Internship by Smartinternz:"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Initialize Typed.js for the .typing2 element
    var typed3 = new Typed(".typing2", {
        strings: ["Accenture Developer Virtual Internship:"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way
    document.getElementById("successCard").style.display = "block"; // Shows the success message card
    document.getElementById("contactForm").reset(); // Clears the form fields
});
function myFunction() {
    alert("Your message was sent successfully! Thank you for reaching out. We will get back to you soon.");
  };
 
function myFunction1(){
    var choice = prompt("Do you want to see publications pdf");
    
            var url = "https://drive.google.com/file/d/1AmPa-bs2Gs9PQGq46tGFExmVJs4cp2Sk/view?usp=sharing" // Replace with your desired URL
            if (confirm("Publication pdf")) {
                window.location.href = url; // Navigate to the URL
            }
            
}
function myFunction1(){
    var choice = prompt("Do you want to see publications pdf");
    
            var url = "https://drive.google.com/file/d/1Aja9NGW6UVW2r7b4Rlnd7lH3WyHcbsgK/view?usp=sharing" // Replace with your desired URL
            if (confirm("Publication pdf")) {
                window.location.href = url; // Navigate to the URL
            }
            
}