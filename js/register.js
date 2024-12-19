// document.addEventListener("DOMContentLoaded", ()=>{
//     registerBtn.addEventListener("click",async ()=>{
//         const result = await register(
//             username.value,
//             fullName.value,
//             password.value
//         );
//         if("Conflict" === result){
//             output.innerText = "Username already taken.";
//             return;
//         }
//         //SUCCESS
//         window.location.href = "login.html";
//     });//end click
// }); //end loaded


document.addEventListener("DOMContentLoaded", ()=>{
    signUpButton.addEventListener("click",async ()=>{
        const result = await signUp(
            username.value,
            fullName.value,
            password.value
        );
        if("Conflict" === result){
            output.innerText = "Username already taken.";
            return;
        }
        //SUCCESS
        window.location.href = "register.html";
    });//end click
}); //end loaded