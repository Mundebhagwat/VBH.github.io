// Make sure this code is not within a block scope or module
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function fadeOut() {
  slides[currentSlide].style.opacity = 0;
}

function fadeIn() {
  slides[currentSlide].style.opacity = 1;
}

function nextSlide() {
  fadeOut();
  setTimeout(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    fadeIn();
  }, 2000); // Adjust the time between fade out and fade in
}

setInterval(nextSlide, 5000);

// code for burger
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');

  // Toggle burger menu animation
  burger.classList.toggle('toggle');
});