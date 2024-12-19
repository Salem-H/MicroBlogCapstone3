// Function to check if the user is logged in
function checkAuth() {
    const authToken = localStorage.getItem('authToken'); 
    if (!authToken) {
        window.location.href = 'index.html';  // Redirect to your login page
    }
}

// Call the function to check authentication on relevant pages
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();  // This will check authentication on page load
});
