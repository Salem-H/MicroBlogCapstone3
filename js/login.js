
document.addEventListener("DOMContentLoaded", ()=>{
    loginButton.addEventListener("click",async ()=>{
        const result = await login(
            username.value,
            password.value
        );
        if(!result || !result.hasOwnProperty("statusCode") || result.statusCode != 200){
            output.innerText = "Incorrect password or Username";
            return;
        }
        window.location.href = "home.html";
    });
}); 