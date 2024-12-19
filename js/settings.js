document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');

    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }
});

// Function to handle logout
function logout() {
    
    localStorage.removeItem('authToken'); 
    
    
    sessionStorage.removeItem('username');  // If you're storing the username in sessionStorage
    localStorage.removeItem('userData');    // Optional, clear user data from localStorage

    // Redirect the user to the login page 
    window.location.href = 'index.html'; 
};
