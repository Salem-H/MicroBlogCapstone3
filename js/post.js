
document.addEventListener("DOMContentLoaded", () => {
    const sendTextButton = document.getElementById("sendTextButton");
    const textInput = document.getElementById("textInput");

    sendTextButton.addEventListener("click", async () => {
        if (textInput.value.trim() !== "") {
            await sendText(textInput.value);  
            window.location.href = "messages.html";
        } else {
            alert("Please enter some text before submitting.");
        }
    });
});


// document.addEventListener("DOMContentLoaded", () => {
//     checkAuth();

//     const sendTextButton = document.getElementById("sendTextButton");
//     const textInput = document.getElementById("textInput");

//     sendTextButton.addEventListener("click", async () => {
//         // Check if the input is not empty
//         if (textInput.value.trim() !== "") {
//             // Send the text if not empty
//             await sendText(textInput.value);
            
//             // Redirect to messages page after submitting
//             window.location.href = "messages.html";
//         } else {
//             // Alert the user to enter text if the input is empty
//             alert("Please enter some text before submitting.");
//         }
//     });
// });

// // Function to check if the user is logged in
// function checkAuth() {
//     const authToken = localStorage.getItem('authToken');  // or sessionStorage.getItem('authToken')

//     if (!authToken) {
//         // If no auth token is found, redirect to the login page
//         window.location.href = 'index.html'; 
//     }
// }
