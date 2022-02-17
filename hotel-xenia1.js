//aytomatic slideShow
let slideIndex1 = 0;
let slideIndex2 = 0;
showSlides();

function showSlides() {
  let i;
  let slides1 = document.getElementsByClassName("Mslide");
  let slides2=document.getElementsByClassName("Mslider2");
  console.log(slides1);
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < slides2.length; i++) {
          slides2[i].style.display = "none";
  }
  slideIndex1++;
  slideIndex2++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}
  if (slideIndex2 > slides2.length) {slideIndex2 = 1}
  slides1[slideIndex1-1].style.display = "flex";
  slides2[slideIndex2-1].style.display = "flex";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// //unaytomatic
// let slideIndex1 = 1;
// showSlidesWithDots(slideIndex1);

// // Thumbnail image controls
// function currentSlide2(n) {
//   showSlidesWithDots(slideIndex1 = n);
// }

// function showSlidesWithDots(n) {
//   let i;
//   let slides = document.getElementsByClassName("Mslider2");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex1 = 1}
//   if (n < 1) {slideIndex1 = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex1-1].style.display = "flex";
//   dots[slideIndex1-1].className += " active";
// }