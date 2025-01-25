// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the form from refreshing the page

//     // Simulate a successful form submission
//     document.getElementById("successMessage").style.display = "block";

//     // Clear the form fields
//     document.getElementById("contactForm").reset();
// });


// Initialize EmailJS with your public key (User ID)
emailjs.init("WSpMagOq3qxS5ISbk"); // Replace with your actual public key

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form refresh

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Set up EmailJS parameters
    const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    // Send email using EmailJS
    emailjs.send("service_ubfkl18", "template_xq63dop", templateParams)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("successMessage").textContent = "Thank you! Your message has been sent.";
            document.getElementById("successMessage").style.display = "block";
            document.getElementById("contactForm").reset();
        }, function(error) {
            console.log("FAILED...", error);
            document.getElementById("successMessage").textContent = "Something went wrong. Please try again later.";
            document.getElementById("successMessage").style.color = "red";
            document.getElementById("successMessage").style.display = "block";
        });
});
