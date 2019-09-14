$(function(){
  var _window = $(window),
      _header = $('header'),
      animationClass = 'is-animation';
  _window.on('scroll', function() {
    var value = _window.scrollTop();
    if ( value > 100 )
    {
      _header.addClass(animationClass);
    }else
    {
      _header.removeClass(animationClass);
    }
  });
});


$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $("." + href.slice(1));
    $("#Debug span#b").text(target.toString());
    var position = target.offset().top;
    var header_height = $("header").height() + 10;
    $("html, body").animate({scrollTop:position - header_height}, speed, "swing");
    return false;
  });
});
