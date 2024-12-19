document.addEventListener("DOMContentLoaded", () => {
    loadHomePageContent();  // Function to load home page content
});

// Function to check if the user is authenticated
function checkAuth() {
    const authToken = localStorage.getItem('authToken'); // Or sessionStorage.getItem('authToken')

    if (!authToken) {
        // If no auth token found, redirect to the login page
        window.location.href = 'index.html'; // Redirect to login page if not logged in
    }
}

// Function to load home page content (this is just a placeholder, replace with actual logic)
function loadHomePageContent() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    // welcomeMessage.innerText = "Welcome to the Home Page!";
}
