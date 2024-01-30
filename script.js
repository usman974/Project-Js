const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function page4Animation(){

const elemC = document.querySelector('#elem-container');

const fixed = document.querySelector('#fixed-image')

elemC.addEventListener("mouseenter",function(){
    fixed.style.display ="block"
    // console.log(elemC);
})

elemC.addEventListener("mouseleave",()=>{
    fixed.style.display="none"
})

// this is better bottom code
const elemImage = document.querySelectorAll(".elem")
// console.log(elemImage);
elemImage.forEach((e)=>{      // forEach is higher order loop and used for node
    // console.log(e);
    e.addEventListener('mouseenter',()=>{
        const image = e.getAttribute('data-image')
        fixed.style.backgroundImage =`url(${image})`
    })
});
}


//ye lmaba kaam hoga her kis kis ko bar bar id da ky krna hoga
// let elem1 = document.querySelector("#elem1")

// elem1.addEventListener("mouseenter",()=>{
//     let image = elem1.getAttribute("data-image")
//     // console.log(image);
//     fixed.style.backgroundImage = `url(${image})`
// })




function swiperAnimation(){
     const swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
    });
}

function menuAnimation(){

let menu = document.querySelector('nav h3');
let full = document.querySelector("#full-scr");
let navimg = document.querySelector("nav img");
var flag = 0 
menu.addEventListener("click",  () => {
    if (flag == 0) {
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 1
    } else {
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0  
    }
    
})
}

function loader(){
    let loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4000)

}


swiperAnimation()
page4Animation()
menuAnimation()
loader()





