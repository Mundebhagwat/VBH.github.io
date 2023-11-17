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
// code for slider button

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

document.getElementById('prevSlide').addEventListener('click', () => {
  showSlide(currentSlide - 1);
  slides[currentSlide].style.animation = 'slideFromLeft 0.5s forwards';
});

document.getElementById('nextSlide').addEventListener('click', () => {
  showSlide(currentSlide + 1);
  slides[currentSlide].style.animation = 'slideFromRight 0.5s forwards';
});
// code for quick appearing slide and touch screen
let touchStartX = 0;
let touchEndX = 0;
const slideContainer = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');

slideContainer.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

slideContainer.addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].clientX;
  handleGesture();
});

function handleGesture() {
  const gestureOffset = 100; // Adjust this value to fine-tune sensitivity
  if (touchEndX < touchStartX - gestureOffset) {
    showSlide(currentSlide + 1);
    slides[currentSlide].classList.add('no-transition');
    slides[currentSlide].style.transform = 'translateX(0)';
    setTimeout(() => {
      slides[currentSlide].classList.remove('no-transition');
    }, 10);
  }

  if (touchEndX > touchStartX + gestureOffset) {
    showSlide(currentSlide - 1);
    slides[currentSlide].classList.add('no-transition');
    slides[currentSlide].style.transform = 'translateX(0)';
    setTimeout(() => {
      slides[currentSlide].classList.remove('no-transition');
    }, 10);
  }
}

document.getElementById('prevSlide').addEventListener('click', () => {
  showSlide(currentSlide - 1);
  slides[currentSlide].classList.add('no-transition');
  slides[currentSlide].style.transform = 'translateX(0)';
  setTimeout(() => {
    slides[currentSlide].classList.remove('no-transition');
  }, 10);
});

document.getElementById('nextSlide').addEventListener('click', () => {
  showSlide(currentSlide + 1);
  slides[currentSlide].classList.add('no-transition');
  slides[currentSlide].style.transform = 'translateX(0)';
  setTimeout(() => {
    slides[currentSlide].classList.remove('no-transition');
  }, 10);
});

// Rest of your existing code for slide transition and animations




