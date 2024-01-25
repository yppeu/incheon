
$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      centeredSlides: false,
      slidesPerGroupSkip: 1,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2000, // 수정: autoplay 속성을 객체로 사용하여 delay 속성으로 지정
      },
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        769: {
          slidesPerView: 5,
          slidesPerGroup: 2,
        },
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
});
