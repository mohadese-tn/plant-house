const loginButton = document.querySelector(".popup-login");
const loginForm = document.getElementById("login_form");
const backDrop = document.querySelector("#backdrop");


loginButton.addEventListener("click", ()=>{
    loginForm.classList.toggle("visible");
    backDrop.classList.toggle("visible");
})  
backDrop.addEventListener("click", ()=>{
    loginForm.classList.toggle("visible");
    backDrop.classList.toggle("visible");
})