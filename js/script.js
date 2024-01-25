
$(document).ready(function(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: false,
    slidesPerGroup: 4,
    slidesPerGroupSkip: 0,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false, // 사용자 상호작용 후에도 자동재생 유지
      stopOnLast: false, // 마지막 슬라이드에서 멈추지 않음
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 5,
        slidesPerGroup: 1,
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
