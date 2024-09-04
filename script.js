document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Here you can add code to handle the form submission, such as sending data to a server
    // Currently, we'll just display a confirmation message

    document.getElementById('formMessage').innerText = 'Thank you for contacting us! We will get back to you as soon as possible.';
});
