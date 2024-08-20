let currentSlide = 0;
let isPlaying = true;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const slideWidth = document.querySelector('.slide').clientWidth;
let slideInterval = setInterval(nextSlide, 3000);

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlidePosition();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}

function toggleSlideshow() {
  if (isPlaying) {
    clearInterval(slideInterval);
    document.querySelector('.pause').textContent = 'Resume';
  } else {
    slideInterval = setInterval(nextSlide, 3000);
    document.querySelector('.pause').textContent = 'Pause';
  }
  isPlaying = !isPlaying;
}

window.addEventListener('resize', () => {
  // Update slide width on window resize
  updateSlidePosition();
});
