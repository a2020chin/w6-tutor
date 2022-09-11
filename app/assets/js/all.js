var swiper = new Swiper(".programSwiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
    992: {
      slidesPerView: 7
    },
    /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
    768: {
      slidesPerView: 3
    },
    376: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 1
    }
  },
});

var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  loop: true,
  
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    
    // clickable: true,
  },
});

$('.sm-menu').on('click',function (event) {
  event.preventDefault();
  $('.sm-nav').stop().slideUp();
  $('.sm-nav').stop().slideToggle();
});
