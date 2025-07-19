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
