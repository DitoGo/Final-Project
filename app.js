

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 2000,
    margin:10,
    responsiveClass:true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:5,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

const nav = ["Home","Projects","About", "Blog", "Contact"]
const links = ["index.html", "projects.html", "about.html" ,"blog.html", "contact.html"]
let text = "<ul class='nav-menu flex'>"

for(let i=0;i<nav.length;i++) {
    text += "<li class='navigacia'><a href="+links[i]+">" + nav[i] + "</a></li>"
}

text += "</ul>"

document.getElementById("nav").innerHTML=text

const hamburger = document.querySelector(".hamburger");


const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active"),
    navMenu.classList.toggle("active")

})

