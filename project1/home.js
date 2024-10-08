let hamburger=document.querySelector(".hamburger");

let link=document.querySelector(".pages .link");
hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active");
    link.classList.toggle("menu");
})