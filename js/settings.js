document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');

    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }
});
// Function to handle logout
function logout() {
    
    localStorage.removeItem('authToken'); 
    
    
    sessionStorage.removeItem('username');  
    localStorage.removeItem('userData');    

    // Redirect the user to the login page 
    window.location.href = "index.html"; 
};
