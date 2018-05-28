//= require zepto

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;

  if (t < 1)
    return c/2*t*t + b;

  t--;

  return -c/2 * (t*(t-2) - 1) + b;
};

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 2;

    var animateScroll = function(){
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
}

$(function($) {

  var $document    = $(document),
    $rootNode      = $('html, body'),
    $footer        = $('footer');

  $footer.find('.copyright-year').html(new Date().getFullYear());

  $('a.internal').on('click', function(){
    var href = this.href.match(/\#.*/)[0];
    var speed = 500;

    scrollTo(document.documentElement, $(href).offset().top, 700);

    return false;
  });

});
