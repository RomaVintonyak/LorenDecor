jQuery(document).ready(function () {
  "use script";
  //box slider
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

});
