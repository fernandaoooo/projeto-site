var slides = document.querySelectorAll('.slide');
var legendas = document.querySelectorAll('.slideshow figcaption');
var currentSlide = 0;

function showSlide(n) {
  slides.forEach(function(slide) {
    slide.style.display = 'none';
  });
  legendas.forEach(function(legenda) {
    legenda.style.display = 'none';
  });
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
  legendas[currentSlide].style.display = 'block';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Inicia o slideshow mostrando o primeiro slide
showSlide(0);









