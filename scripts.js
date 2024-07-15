document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginMessage = document.querySelector('.message');
    const registerMessage = document.querySelectorAll('.message')[1];

    // Toggle between Login and Register forms
    loginMessage.addEventListener('click', function() {
        document.querySelector('.container.register-form').style.display = 'block';
        document.querySelector('.container').style.display = 'none';
    });

    registerMessage.addEventListener('click', function() {
        document.querySelector('.container.register-form').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    });

    // Handle Login Form Submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Here, you would typically send a request to the server for authentication
        console.log('Login Form Submitted');
        console.log('Username:', username);
        console.log('Password:', password);
    });

    // Handle Register Form Submission
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const regUsername = document.getElementById('regUsername').value;
        const regPassword = document.getElementById('regPassword').value;

        // Here, you would typically send a request to the server to register the user
        console.log('Register Form Submitted');
        console.log('Username:', regUsername);
        console.log('Password:', regPassword);
    });
});