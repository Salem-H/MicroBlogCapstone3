
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
