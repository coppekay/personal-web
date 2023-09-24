// const images = document.querySelectorAll('#cameron-slider img');
// const previousImage = document.getElementById("prev");
// const nextImage = document.getElementById("next");

// let currentIndex = 0;

// function reset() {
//   for (let i = 0; i < images.length; i++) {
//     images[i].classList.remove('active');
//   }
// }

// function initializeSlider() {
//   reset();
//   images[currentIndex].classList.add('active');
// }

// function slideLeft() {
//   reset();
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = images.length - 1;
//   }
//   images[currentIndex].classList.add('active');
// }

// function slideRight() {
//   reset();
//   currentIndex++;
//   if (currentIndex >= images.length) {
//     currentIndex = 0;
//   }
//   images[currentIndex].classList.add('active');
// }

// initializeSlider();

// previousImage.addEventListener('click', function() {
//   slideLeft();
// });

// nextImage.addEventListener('click', function() {
//   slideRight();
// });

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-cameron", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-cameron";
}