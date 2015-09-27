$(document).ready(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  $('#logo').on('mouseenter', function () {
    $('#logo').animate({
       opacity: '0.0'
    }, 1000);
    $('.sandiego').show('slow'); 
  });
  
  $('#logo').on('mouseleave', function () {
    $('#logo').animate({
       opacity: '10'
    }, 1000);
    $('.sandiego').hide('slow'); 
  });
});
