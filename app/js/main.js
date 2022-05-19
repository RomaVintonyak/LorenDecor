//preloader 
$(window).on("load", function () {
  "use script";
  var loader = $("#loader");
  var timeDelay = 2500;
  setTimeout(function () {
    $("body").css({ "overflow-y": "scroll" });
    $("body").removeAttr("style");
    loader.addClass("loader--done");
    //type js seting
    var typed = new Typed(".typed", {
      strings: ["Wedding Decor Flowers"],
      startDelay: 2000,
      typeSpeed: 120,
      backSpeed: 60,
      backDelay: 1500,
      showCursor: false,
      loop: true,
    });
  }, timeDelay);
});
jQuery(document).ready(function () {
  "use script";
  //constant
  const introH = $("#intro").height();
  const headerH = $("#header").height();
  //progress bar
  $(window).on("scroll resize", function () {
    var dHeight = $(document).height();
    var wHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var prog = scrollTop / (dHeight - wHeight);
    $("#progressBlock").css({
      width: ((100 * prog) | 0) + "%"
    });
  });
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
  //burger btn function
  var burgerBtn = $("#burgerBtn");
  burgerBtn.on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("burger__btn--active");
    $(".navbar__menu").toggleClass("navbar__menu--mobile");
    if ($(".navbar__menu").hasClass("navbar__menu--mobile")) {
      $("body").css({ "overflow": "hidden" });
    } else {
      $("body").css({ "overflow": "scroll" });
      $("body").removeAttr("style");
    }
  });
  //scroll dwn Intro Btn
  var introBtnDwn = $("#btnIntroScroll");
  introBtnDwn.on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: introH - headerH
    }, 1000);
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
  //jump card
  var jumpCard = $("._jump");
  jumpCard.hover(function () {
    $(this).animate({
      marginTop: "-=2%",
    }, 350);
  },
    function () {
      $(this).animate({
        marginTop: "0%",
      }, 350);
    }
  );
  jumpCard.mouseleave(function () {
    jumpCard.removeAttr("style");
  });
  //more project load in page gallery
  var itemProject = $("._projectItem");
  var loadProject = $("#galleryButton");
  var sliceCount = 0;
  var wWidth = $(window).width();
  if (wWidth < 768) {
    itemProject.hide();
    itemProject.slice(0, 4).show();
    sliceCount = 2;
  }
  loadProject.on("click", function (event) {
    event.preventDefault();
    $("._projectItem:hidden").slice(0, sliceCount).slideDown("slow");
  });
  //active style to label in contact form
  var nameField = $("#name");
  nameField.blur(function () {
    var nameFieldData = $(this).val();
    if (nameFieldData.length >= 1) {
      $("#lebelName").css({
        "font-size": "1.2rem",
        "top": "-2.7rem"
      });
    } else {
      $("#lebelName").removeAttr("style");
    }
  });
  var emailField = $("#email");
  emailField.blur(function () {
    var emailFieldData = $(this).val();
    if (emailFieldData.length >= 1) {
      $("#labelEmail").css({
        "font-size": "1.2rem",
        "top": "-2.7rem"
      });
    } else {
      $("#labelEmail").removeAttr("style");
    }
  });
  var phoneField = $("#phone");
  phoneField.blur(function () {
    var phoneFieldData = $(this).val();
    if (phoneFieldData.length >= 1) {
      $("#labelPhone").css({
        "font-size": "1.2rem",
        "top": "-2.7rem"
      });
    } else {
      $("#labelPhone").removeAttr("style");
    }
  });
  var messageField = $("#message");
  messageField.blur(function () {
    var messageFieldData = $(this).val();
    if (messageFieldData.length >= 1) {
      $("#labelMessage").css({
        "font-size": "1.2rem",
        "top": "-3.5rem"
      });
    } else {
      $("#labelMessage").removeAttr("style");
    }
  });
  //contact page form validation
  var mailBtn = $("#sendMail");
  mailBtn.on("click", function () {
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim(),
      intRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    var email = $("#email").val().trim(),
      emailReg = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    var message = $("#message").val().trim();
    if (name.length < 3) {
      var nameError = $("#errorName").text();
      $("#errorText").text(nameError);
      return false;
    } else if (!emailReg.test(email) || email == '') {
      var mailError = $("#errorEmail").text();
      $("#errorText").text(mailError);
      return false;
    } else if ((phone.length < 6) || (!intRegex.test(phone))) {
      var phoneError = $("#errorPhone").text();
      $("#errorText").text(phoneError);
      return false;
    } else if (message.length < 10) {
      var messageError = $("#errorMessage").text();
      $("#errorText").text(messageError);
      return false;
    }
    $("#errorText").text("");
    $.ajax({
      url: '../php/mail.php',
      type: 'POST',
      cache: false,
      data: { 'name': name, 'phone': phone, 'email': email, 'message': message },
      dataType: 'html',
      beforeSend: function () {
        mailBtn.prop("disabled", true);
      },
      success: function (data) {
        if (!data)
          alert("Щось не так ... Спробуйте ще раз!");
        else
          $("#contactForm").trigger("reset");
        alert(data);
        mailBtn.prop("disabled", false);
      }
    });
  });
  //waves effect
  Waves.attach(".waves");
  Waves.init();
  //wow animation
  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
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
  //about us page slider
  var sSlider = $(".stageSliderBlock");
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
  //simple lightbox gallery page option
  var galleryPage = $(".box__gallery a");
  galleryPage.simpleLightbox({
    disableRightClick: true,
    fadeSpeed: 400,
    animationSpeed: 350,
    docClose: false,
    nav: true,
    navText: ['&larr;', '&rarr;'],
    /*title options*/
    /*captions: true,
    captionDelay: 200,
    captionSelector: 'img',
    captionType: 'attr',
    captionPosition: 'bottom',
    captionClass: 'gallery__img--title',*/
    /*end title options*/
    enableKeyboard: true,
    alertError: true,
    alertErrorMessage: 'Image not found, next image will be loaded',
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
          arrows: false,
          swipe: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
          fade: true,
          arrows: false,
        },
      },
    ],
  });
  /**Copy protection*/
  document.ondragstart = noselect;
  document.onselectstart = noselect;
  document.oncontextmenu = noselect;
  function noselect() { return false; }
  $("img, i, h1, h2, h3, h4, h5, h6, p, span").dblclick(function () {
      $(".copy_protect").addClass("show_mesag");
      setTimeout(function () {
          $(".copy_protect").removeClass("show_mesag");
      }, 1500);
  });
  $("img, i").on("contextmenu", function () {
      $(".copy_protect").addClass("show_mesag");
      setTimeout(function () {
          $(".copy_protect").removeClass("show_mesag");
      }, 1500);
  });
});
