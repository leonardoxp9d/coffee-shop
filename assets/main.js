const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

/*=============== OPEN MENU ===============*/
menuOpenButton.addEventListener("click",() =>{
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

/*=============== CLOSE MENU ===============*/
menuCloseButton.addEventListener("click",()=> menuOpenButton.click());

/*=============== CLOSE MENU WHEN THE NAVLINK IS CLICKED ===============*/
navLinks.forEach(link => { 
    link.addEventListener("click", () => menuCloseButton.click());
});

/*=============== INITIALIZE SWIPER TESTIMONIALS ===============*/
const swiper = new Swiper('.slider-wrapper',{
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl:'.swiper-button-prev',
    }, 

    // Resposive breakpoints
    breakpoints:{
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        },

    }
});