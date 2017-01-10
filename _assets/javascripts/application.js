//= require zepto
//= require zepto.scroll

$(function($) {

  var $document    = $(document),
    $navbar        = $('.nav');
    $rootNode      = $('html, body'),
    $footer        = $('footer');

  $document.scroll(function() {
    if ($('body').scrollTop() >= 480) {
      $navbar.addClass('nav-fixed');
    } else {
      $navbar.removeClass('nav-fixed');
    }
  });

  $footer.find('.copyright-year').html(new Date().getFullYear());

  $('a.internal').on('click', function(){
    var href = this.href.match(/\#.*/)[0];
    var speed = 500;

    $.scrollTo({
      endY: $(href).offset().top,
      duration: speed,
      callback: function() {
        setTimeout(function(){
          window.location.hash = href;
        }, speed + 300);
      }
    });

    return false;
  });

});
