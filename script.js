const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Toggle between ☰ and ✕
  if (navLinks.classList.contains('active')) {
    burger.innerHTML = '&times;';
  } else {
    burger.innerHTML = '&#9776;';
  }
});

const track = document.querySelector('.carousel-track');
const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');
let currentIndex = 0;

const updateCarousel = () => {
  const slideWidth = document.querySelector('.carousel-img').clientWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

rightBtn.addEventListener('click', () => {
  const slides = document.querySelectorAll('.carousel-img');
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

leftBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});
