const toggleBtn=document.querySelector(".menu");
const navbar=document.querySelector(".nav-links");

toggleBtn.addEventListener('click',function(){
    navbar.classList.toggle("nav-responsive");
});