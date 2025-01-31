function toggleForm(formType) {
    const signInContainer = document.getElementById('sign-in-container');
    const signUpContainer = document.getElementById('sign-up-container');
    
    if (formType === 'signup') {
        signInContainer.style.display = 'none';
        signUpContainer.style.display = 'block';
    } else {
        signInContainer.style.display = 'block';
        signUpContainer.style.display = 'none';
    }
}

// Sign In Form Submit
document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;
    console.log('Sign In:', email, password);
    alert('Sign In successful!');
});

// Sign Up Form Submit with Password Confirmation
document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Password validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    console.log('Sign Up:', email, password);
    alert('Sign Up successful!');
});