let slideIndex=1;
showslides(slideIndex);

function plusSlides(n){
          showslides(slideIndex+=n);
}
function currentSlides(n){
          showslides(slideIndex = n);
}
function showslides(n){
          let slides=document.getElementsByClassName("Mslide");
          let dots=document.getElementsByClassName("dot");
          if(n>slides.length){slideIndex=1;}
          else if(n<1){slideIndex=slides.length}
          // for(let index in slides){
          //           slides[index].style.display="none";
          // }
          for(let index in dots) {                     
            dots[index].className=dots[index].className.replace("active","");

          }
          // slides[slideIndex -1].style.display="block";
          dots[slideIndex -1].className += " active";
}