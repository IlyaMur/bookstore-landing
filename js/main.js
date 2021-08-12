$(document).ready(function () {
  var menuButton = document.querySelector(".menu-button");
  var closeButton = document.querySelector("#recom #books");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".nav--mobile--hidden")
      .classList.toggle("nav__mobile--visible");
    document.querySelector("body").classList.toggle("body-overflow-hidden");
});


  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

  // Like
  document.querySelectorAll(".icon-like").forEach((button) => {
    button.addEventListener("click", (e) => {
      if (button.getAttribute("fill") === "#959EAD") {
        button.setAttribute("fill", "#DC143C");
      } else if (button.getAttribute("fill") === "#DC143C") {
        button.setAttribute("fill", "#959EAD");
      }
    });
  });

  // markbook
  document.querySelectorAll(".video-like").forEach((button) => {
    button.addEventListener("click", (e) => {
      if (button.querySelector("path").getAttribute("fill") === "#1565D8") {
        button.querySelector("path").setAttribute("fill", "#DC143C");
      } else if (
        button.querySelector("path").getAttribute("fill") === "#DC143C"
      ) {
        button.querySelector("path").setAttribute("fill", "#1565D8");
      }
    });
  });


  // modal
  let modalButton = $("[data-toggle=modal]");
  let closeModalButton = $(".modal__close");
  let maskModal = $(".modal__overlay");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  maskModal.on("click", closeModal);

  function openModal() {
      const modalOverlay = $(".modal__overlay");
      const modalDialog = $(".modal__dialog");
      const overflowHidden = $("body");
      modalOverlay.addClass("modal__overlay--visible");
      modalDialog.addClass("modal__dialog--visible");
      overflowHidden.addClass("overflow-hidden body-padding");
  }

  function closeModal(event) {
      event.preventDefault();
      const modalOverlay = $(".modal__overlay");
      const modalDialog = $(".modal__dialog");
      const overflowHidden = $("body");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      overflowHidden.removeClass("overflow-hidden body-padding");
  }

  $(document).keyup(function(event) {
      if (event.key === "Escape" || event.keyCode === 27) {
          event.preventDefault();
          const modalOverlay = $(".modal__overlay");
          const modalDialog = $(".modal__dialog");
          const overflowHidden = $("body");
          modalOverlay.removeClass("modal__overlay--visible");
          modalDialog.removeClass("modal__dialog--visible");
          overflowHidden.removeClass("overflow-hidden body-padding");
      }
  });


  // form
  $(".form").each(function() {
    $(this).validate({
        errorClass: "invalid",
        rules: {
            phone: {
                minlength: 18,
            },
            name: {
              minlength: 2,
            },
        },
        messages: {
            name: {
                required: "Пожалуйста, введите Ваше имя",
                minlength: "Введите минимум 2 буквы",
            },
            email: {
                required: "Нам нужен Ваш адрес электронной почты, чтобы с Вами связаться",
                email: "Ваш электронный адрес должен быть в формате name@domain.com",
            },
            phone: {
                required: "Пожалуйста, заполните это поле",
                minlength: "Пожалуйста, введите номер телефона в формате +7 (999) 999-99-99",
            },
        },
    });
  });
  $(".phone").mask("+7 (999) 999-99-99");

  // slider#1
  const swiperCategory = new Swiper(".category-container", {
    slidesPerView: "auto",
    slidesPerColumnFill: "row",
    navigation: {
      nextEl: ".category-button--next",
      prevEl: ".category-button--prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 10,
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 25,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 29,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 26,
      },
    },
  });

  // slider#2
  const swiperUnreleased = new Swiper(".unreleased-container", {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".unreleased-button--next",
      prevEl: ".unreleased-button--prev",
    },
    keyboard: {
      enabled: true,
    },
  });

  // video
  $(".video-play-button").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("main-player", {
      videoId: "FA1JsSytUQE",
      events: {
        onReady: videoPlay,
      },
    });
  });

  function videoPlay(event) {
    event.target.playVideo();
    event.target.setVolume(10);
  }

  $(".play-video-1").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("video-one", {
      videoId: "hT7zqVtMjTs",
      events: {
        onReady: videoPlay,
      },
    });
  });

  $(".play-video-2").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("video-two", {
      videoId: "wWqy4HazMrc",
      events: {
        onReady: videoPlay,
      },
    });
  });

  $(".play-video-3").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("video-three", {
      videoId: "HUcntb7nQCs",
      events: {
        onReady: videoPlay,
      },
    });
  });


	// прячем кнопку #back-top
	$("#back-top").hide();
	
	// появление/затухание кнопки #back-top
	$(function (){
		$(window).scroll(function (){
			if ($(this).scrollTop() > 100){
				$('#back-top').fadeIn();
			} else{
				$('#back-top').fadeOut();
			}
		});

		// при клике на ссылку плавно поднимаемся вверх
		$('#back-top a').click(function (){
			$('body,html').animate({
				scrollTop:0
			}, 800);
			return false;
		});
	});

});
