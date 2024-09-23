import "./style.css";
import "swiper/css/bundle";
import Swiper from "swiper/bundle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

// Adjust canvas size
canvas.width = 1280;
canvas.height = 720;

// Total number of images in the sequence
const frameCount = 46;

const currentFrame = (index) =>
  new URL(
    `./src/frames/Frame_${(index + 1)
      .toString()
      .padStart(5, "0")}.png`,
    import.meta.url
  ).href;

// Load images
const images = [];
const shoes = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
    console.log (currentFrame(i));
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.matchMedia().add("(max-width: 768px)", () => {
    // Configuración para móviles
    gsap.to(shoes, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 1,
        trigger: "#hero",
        start: "top top",
        end: "+=500px", // Ajusta el scroll para móvil
        pin: true,       // Si no quieres que sea fijo en móvil, puedes usar pin: false
      },
      onUpdate: render,
    });
  });
  
  gsap.matchMedia().add("(min-width: 769px)", () => {
    // Configuración para desktop
    gsap.to(shoes, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 1,
        trigger: "#hero",
        start: "bottom bottom",
        end: "+=2000px", // Ajusta el scroll para desktop
        pin: true,
      },
      onUpdate: render,
    });
  });

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[shoes.frame], 0, 0);
}
// End Video-Zapato
const swiper6 = new Swiper(".mySwiper6", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      
      translate: [0, 0, -400],

    },
    next: {

      translate: ["100%", 0, 0],

    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction:true,
  },

  speed: 1000,

  pagination: {
    el: '.swiper-pagination', 
    clickable: true,
  },
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.remove("active");
  });
});