function validateForm() {
    // Retrieve user input
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform input validation
    if (username.trim() === "" || password === "") {
        alert("Username and password are required.");
        return false;
    }

    // Simulate password hashing (replace this with your actual password hashing method)
    var hashedPassword = sha256(password);

    // Here, you should send the username and hashedPassword to the server for verification.
    // For demonstration purposes, we'll simply log them in the console.
    console.log("Username: ", username);
    console.log("Hashed Password: ", hashedPassword);

    // Return false to prevent the form from submitting and page refreshing.
    return false;
}

// This is a simple hashing function for demonstration purposes.
// In a real-world scenario, you should use a more secure hashing algorithm.
function sha256(input) {
    var hash = 0, i, chr;
    if (input.length === 0) return hash;
    for (i = 0; i < input.length; i++) {
        chr = input.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString(16);
}
