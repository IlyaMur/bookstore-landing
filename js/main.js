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

  //мобильное меню
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar__menu").toggleClass("navbar__menu--visible");
    $("body").toggleClass("body__no-scroll");
  });

  //модальное окно
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  document.addEventListener("keydown", function (event) {
    if (event.key == "Escape") {
      closeModal(event);
    }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }


  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: "Слишком короткое имя",
        },
        email: {
          required: "Напишите ваш email",
          email: "Формат должен быть name@domain.com.",
        },
        phone: {
          required: "Пожалуйста, введите номер телефона",
          minlength: "Формат должен быть +7 (000) 000-00-00",
        },
      },
    });
  });
  $(document).ready(function () {
    $(".phone").mask("+7 (000) 000-00-00");
  });


  $(".form__modal").each(function () {
    $(this).validate({
      errorClass: "error",
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: "Слишком короткое имя",
        },
        email: {
          required: "Напишите ваш email",
          email: "Формат должен быть name@domain.com.",
        },
        phone: {
          required: "Пожалуйста, введите номер телефона",
          minlength: "Формат должен быть +7 (000) 000-00-00",
        },
      },
    });
  });


  //видео
  var player;
  $(".video__play-big").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "380",
      width: "100%",
      videoId: "RGXpjux1HAA",
      events: {
        "onReady": videoPlay,
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
  }

  // ***********
  //* scroll to anchor link
  // ***********
  $('nav a[href]').click(scrollToAnchor)

  function scrollToAnchor(e) {
    const anchor = e.target;

    const hash = $(anchor).attr('href');
    const anchorSection = $(hash);

    if (!anchorSection) return console.error(`${anchor} - not found`);

    $("html, body").animate({
      scrollTop: anchorSection.offset().top
    }, 1000)

  }
  /* 
   * -------------------
  */

});
