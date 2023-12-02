

// code for burger
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');

  // Toggle burger menu animation
  burger.classList.toggle('toggle');
});