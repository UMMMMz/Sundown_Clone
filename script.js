const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function page4animation(){
    var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})
}
function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 40,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
swiperAnimation()
page4animation()
menuanime()
// ${}are called template literal 
function menuanime(){
    var menu = document.querySelector("nav h3 ")
var full = document.querySelector("#full-scr")
var flag  = 0 
menu.addEventListener("click",function(){
    if (flag==0){
        full.style.top = 0
        navImg.style.opacity = 0
        flag = 1 

    }else{
        full.style.top = "-100%"
        navImg.style.opacity = 1
        flag = 0
    }
})
var navImg  = document.querySelector("nav img")
}
function loader(){
    var loader = document.querySelector("#loader")
setTimeout(() => {
    loader.style.top= "-100%"
}, 4000);
}
loader()