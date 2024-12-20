// auth.js

// Check if the user is logged in
function isLoggedIn() {
    return localStorage.getItem('token') !== null;  // Token should be present in localStorage
}

// Protect the page: If not logged in, redirect to the login page
function protectPage() {
    if (!isLoggedIn()) {
        window.location.href = 'index.html';  // Redirect to the login page if not logged in
    }
}

// You could also add an optional function to validate the token on the backend (if needed)
async function validateToken() {
    const response = await fetch(BASE_URL + "/api/validate-token", {
        method: 'GET',
        headers: headersWithAuth(),  // Add Authorization header with the token
    });

    return response.ok;  // Returns true if token is valid, false if not
}

// Protect the page with token validation
async function protectPageWithTokenValidation() {
    const validToken = await validateToken();
    if (!validToken) {
        window.location.href = 'index.html';  // Redirect to login if token is invalid
    }
}
