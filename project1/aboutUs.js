let hamburger=document.querySelector(".hamburger");
let button=document.querySelector(".about button")
let link=document.querySelector(".pages .link");
hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active");
    link.classList.toggle("menu");
    button.classList.toggle("zindex")
})