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
          let SHOW_NUM = 0;
          const carouselNextNew = (prev) => {
              const scroll = $(".slidePart");
              const shows =$(".slide");
              if (prev) {
                  SHOW_NUM = ( --SHOW_NUM ) % shows.length;
                  if (SHOW_NUM < 0) {
                      SHOW_NUM += shows.length;
                  }
              } else {
                  SHOW_NUM = ( ++SHOW_NUM ) % shows.length;
              }
              scroll.css(`transform`,` translateX(-${SHOW_NUM}00%);` )
          }
})
$(function () {
          function next() {
              let carousel = $('.slidePart .next').parents('.slidePart')
              let index = $(carousel).find('.slide.active').index()
              let content = $(carousel).find('.slide-show')
              const length_items =  $(carousel).find('.slide').length
              if (index < length_items-1 ){
                  $(content).css('transform', `translate(${(index+1)*-100}%)`)
                  $(carousel).find('.slide.active').removeClass('active')
                  $(carousel).find('.slide').eq(index+1).addClass('active')
              }
          }
          $('.slidePart .next').click(next)
  
  
          $('.slidePart .prev').click(function () {
              let carousel = $(this).parents('.slidePart')
              let index = $(carousel).find('.slide.active').index()
              let content = $(carousel).find('.slide-show')
              if (index > 0 ){
                  console.log({index})
                  $(content).css('transform', `translate(${(index-1)*-100}%)`)
                  $(carousel).find('.slide.active').removeClass('active')
                  $(carousel).find('.slide').eq(index-1).addClass('active')
              }
          })
})

  
  

