import "./style.css";
import "swiper/css/bundle";
import Swiper from "swiper/bundle";
const swiper6 = new Swiper(".mySwiper6", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      // origin: 'left center',
      translate: [0, 0, -400],
      // rotate: [0, 100, 0],
    },
    next: {
      // origin: 'right center',
      translate: ["100%", 0, 0],
      // rotate: [0, -100, 0],
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction:true,
  },

  speed: 1000,

  pagination: {
    el: '.swiper-pagination', // Selector del contenedor de paginación
    clickable: true,          // Habilitar clic en los puntos de paginación
  },
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
