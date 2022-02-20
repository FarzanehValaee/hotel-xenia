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

  
  

