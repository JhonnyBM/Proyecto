const user=document.querySelector(".input-user");
const password=document.querySelector(".input-password");
const btnLogin=document.querySelector(".btn-login");

btnLogin.addEventListener("submit",function(event){
    event.preventDefault();
    const usuario={
        user:user.value,
        password:password.value
    }
});