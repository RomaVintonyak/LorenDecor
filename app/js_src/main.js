jQuery(document).ready(function () {
  "use script";
  //box slider intro
  $('#introSlider').boxSlider({
    effect: 'scrollHorz',
    /*blindCount: 20,*/
    pauseOnHover: true,
    responsive: true,
    speed: 1800,
    timeout: 3000,
    perspective: 1000,
    autoScroll: true
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
