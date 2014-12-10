//= require_tree .

$(function() {
  
  $(".navbar a, .btn-cta").on("click", function(e) {
    e.preventDefault();
    var t = $(this).attr('href');
    var ty = $(t).position().top;
    TweenLite.to(window, ty/2000, {scrollTo:{y:ty}, ease:Power3.easeInOut});
  });
  
  $(".bg-holder").parallaxScroll({
    friction: 0.6
  });
  
});