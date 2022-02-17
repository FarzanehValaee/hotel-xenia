//automatic slideShow
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
//unautomatic
let slideIndexDots = 1;
showSlidesWithDots(slideIndexDots);
// Thumbnail image controls
function currentSlide2(n) {
  showSlidesWithDots(slideIndexDots = n);
}

function showSlidesWithDots(n) {
  let i;
  let dots1 = document.getElementsByClassName("dot");
  let slides1 = document.getElementsByClassName("Mslide");
  let dots2 = document.getElementsByClassName("dot2");
  let slides2 = document.getElementsByClassName("Mslider2");

    // if(dots1.onclick){
    //   dots=dots1;
    //   slides = document.getElementsByClassName("Mslide");
    // }
    // else if(dots2.onclick){
    //   dots=dots2;
    //   slides = document.getElementsByClassName("Mslider2");
    // }
  if (n > slides1.length) {slideIndexDots = 1}
  if (n > slides2.length) {slideIndexDots = 1}
  if (n < 1) {slideIndexDots = slides1.length}
  if (n < 1) {slideIndexDots = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
  }
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides2[slideIndexDots-1].style.display = "flex";
  dots2[slideIndexDots-1].className += " active";
  slides1[slideIndexDots-1].style.display = "flex";
  dots1[slideIndexDots-1].className += " active";
}