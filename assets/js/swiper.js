const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  autoplay: true,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320p
    // when window width is >= 640px
    621: {
      slidesPerView: 2,
      spaceBetween: 40
    },
  }
});