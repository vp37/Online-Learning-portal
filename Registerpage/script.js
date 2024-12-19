document.getElementById("registerButton").addEventListener("click", function () {
    // Get form values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Validation checks
    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill out all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Simulate saving registration (in a real scenario, you would save it to a database)
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration successful! Redirecting to login page.");
    window.location.href = "file:///E:/crystaldelta/LoginPage/index.html"; // Redirect to the login page
});
