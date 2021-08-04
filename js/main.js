$(document).ready(function () {
  //Слайдер 1

  var themeSlider = new Swiper(".slider-theme__container", {

    slidesPerColumnFill: 'row',
    loop: false,
    navigation: {
      nextEl: ".slide-button--next",
      prevEl: ".slide-button--prev"
    },

    simulateTouch: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    breakpoints: {
      320: { slidesPerView: 2, slidesPerColumn: 2 },
      510: { slidesPerView: 3, slidesPerColumn: 2 },
      767: { slidesPerView: 3, slidesPerColumn: 1, spaceBetween: 0 },
      1200: { slidesPerView: 4, slidesPerColumn: 1, spaceBetween: 27 }
    },

  });

  //Слайдер 2
  var reviewsSlider = new Swiper(".slider-unedited__container", {

    loop: false,
    navigation: {
      nextEl: ".unedited__button--next",
      prevEl: ".unedited__button--prev",
    },
    slidesPerView: 5,
    spaceBetween: 30,

    simulateTouch: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    breakpoints: {
      200: { slidesPerView: 1 },
      480: { slidesPerView: 2, spaceBetween: 25 },
      767: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 }
    },
  });
});