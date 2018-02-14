$(document).ready(function () {
  var scrollTop = $(window).scrollTop();
  if(scrollTop > 100){
    $(".header").addClass("header-animate");
  }
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 100){
      $(".header").addClass("header-animate");
    }else{
      $(".header").removeClass("header-animate");
    }
  });
});
