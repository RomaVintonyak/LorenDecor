//preloader 
$(window).on("load", function () {
  "use script";
  var loader = $("#loader");
  var timeDelay = 2500;
  setTimeout(function () {
    $("body").css({ "overflow-y": "scroll" });
    $("body").removeAttr("style");
    loader.addClass("loader--done");
  }, timeDelay);
});
jQuery(document).ready(function () {
  "use script";
  //fixed header
  var header = $("#header");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 2) {
      header.addClass("header__fixed");
    }
    else {
      header.removeClass("header__fixed");
    }
  });
  //modal window
  var mOpen = $("[data-info]");
  var mClose = $(".modal__close");
  var mMask = $(".modal__mask");
  var mWindow = $("#modal");
  mOpen.on("click", function (event) {
    event.preventDefault();
    mWindow.addClass("modal__open");
    $("body").css({ "overflow": "hidden" });
  });
  mClose.on("click", function (event) {
    event.preventDefault();
    mWindow.removeClass("modal__open");
    $("body").css({ "overflow": "scroll" });
    $("body").removeAttr("style");
  });
  mMask.on("click", function (event) {
    event.preventDefault();
    mWindow.removeClass("modal__open");
    $("body").css({ "overflow": "scroll" });
    $("body").removeAttr("style");
  });
  $(".modal__content").on("click", function (event) {
    event.stopPropagation();
  });
  //back top button
  var topBtn = $("#topBtn");
  var introH = $("#intro").height();
  topBtn.fadeOut(800);
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > (introH)) {
      topBtn.fadeIn(1500);
    } else {
      topBtn.fadeOut(1500);
    }
  });
  topBtn.on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 2000, "swing");
  });
  //waves effect
  Waves.attach(".waves");
  Waves.init();
  //wow animation
  wow = new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       0, 
    mobile:       false,
    live:         true
  });
  wow.init();
  // slider intro
  var introSlider = $('#introSlider');
  introSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    cssEase: 'ease-in',
    zIndex: 2,
    dots: true,
    dotsClass: 'intro-dots',
    arrows: false,
    swipe: false,
    touchMove: false,
    focusOnSelect: false,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          swipe: true,
          touchMove: true,
          dots: false,
        }
      }
    ]
  });
  //services slider
  var sSlider = $("#servicesSlider");
  sSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    zIndex: 2,
    dots: false,
    arrows: false,
    swipe: false,
    touchMove: false,
    focusOnSelect: false,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          swipe: true,
          touchMove: true,
        }
      }
    ]
  });
  //gallery lightbox options
  lightbox.option({
    'fadeDuration': 600,
    'resizeDuration': 600,
    'imageFadeDuration': 400,
    'showImageNumberLabel': false,
    'wrapAround': true,
    'disableScrolling': true,
  });
  //gallery slider otions
  var gSlider = $("#gallerySlider");
  gSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    swipe: false,
    touchMove: false,
    focusOnSelect: false,
    fade: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
          fade: true,
          swipe: true,
          touchMove: true,
        },
      },
    ],
  });
});
