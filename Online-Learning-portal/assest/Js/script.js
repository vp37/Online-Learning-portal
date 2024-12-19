document.getElementById("loginFunction").addEventListener("click", function () {
    // Get the input values
    const usernameOrEmail = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Get stored credentials from local storage (from registration step)
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Validation checks
    if (!usernameOrEmail || !password) {
        alert("Please enter both username/email and password.");
        return;
    }

    // Check if username or email matches and the password is correct
    if ((usernameOrEmail === storedUsername || usernameOrEmail === storedEmail) && password === storedPassword) {
        alert("Login successful! Redirecting to the main page.");
        window.location.href = "./pages/Main.html"; // Redirect to the main page
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
