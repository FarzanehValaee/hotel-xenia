// let slideIndex=1;
// showSlides(slideIndex)
// function plusSlides(n) {
//           showSlides(slideIndex+n);
// }
// function currentslide(n) {
//           showSlides(slideIndex=n);
// }

// function showSlides(n) {
//      let slides=$('.slide')
// //      console.log(typeof slides)//object
//      switch (n) {
//                case n>slides.length:
//                          slideIndex=1;
//                          break;
//                case n<1:
//                          slideIndex=slides.length;
//                          break;
     
//                default:
//                     $.each(slides, function(key) {
//                               let name="."+this.className.split(' ')[1]
//                               console.log(name);
//                               console.log("/");
//                               $(`${name}`).hide();
//                               console.log(name);
//                     });
//                     slides[slideIndex-1].style.display="block";
//                     console.log(slides[slideIndex-1])
//                     // slides[slideIndex-1].className('active');
//                     //      break;
//      }
// }

// ______________________________________
$(function () {
          let sliderIndex = 0;
          const showSlide = (prev) => {
              const scroll = $(".slidePart");
              const sliders =$(".slide-show");
              if (prev) {
                  sliderIndex = ( --sliderIndex ) % sliders.length;
                  if (sliderIndex < 0) {
                      sliderIndex += sliders.length;
                  }
              } else {
                  sliderIndex = ( ++sliderIndex ) % sliders.length;
              }
              scroll.css(`transform`,` translateX(-${sliderIndex}00%);` )
          }
})
$(function () {
          function next() {
              let slider = $('.slidePart .next').parents('.slidePart')
              let index = $(slider).find('.slide.active').index()
              let content = $(slider).find('.slide-show')
              const length_items =  $(slider).find('.slide').length
              if (index < length_items-1 ){
                  $(content).css('transform', `translate(${(index+1)*-100}%)`)
                  $(slider).find('.slide.active').removeClass('active')
                  $(slider).find('.slide').eq(index+1).addClass('active')
              }
          }
          $('.slidePart .next').click(next)
  
  
          $('.slidePart .prev').click(function () {
              let slider = $(this).parents('.slidePart')
              let index = $(slider).find('.slide.active').index()
              let content = $(slider).find('.slide-show')
              if (index > 0 ){
                  console.log({index})
                  $(content).css('transform', `translate(${(index-1)*-100}%)`)
                  $(slider).find('.slide.active').removeClass('active')
                  $(slider).find('.slide').eq(index-1).addClass('active')
              }
          })
})

  
  

