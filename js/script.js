$(document).ready(function() {
  
    $('.parallax__list>li').addClass('layer');
    $('.parallax__list').parallax();

    $('.wrapper').addClass('active');
    $('.slider').slick({
        mobileFirst: true,
        responsive: [{
            breakpoint: 992,
            settings: 'unslick'
      },{
            breakpoint: 768,
            settings: 'slick'
      },
      ]
    });
    
    var top_show = 300;
    var delay = 300;
    $(document).ready(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () {
    $('body, html').animate({
        scrollTop: 0
        }, delay);
        });
    });
    
    var $page = $('html, body');
        $('a[href*="#"]').click(function() {
        $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    })
    
    $('.items-wrapper a[href^="#"], .parallax a[href^="#"] ').click( function(e){
          e.preventDefault();
        var id  = $(this).attr('href');
        var heightpage = $(window).height();
        var topel = $(id).offset().top;
        var heightorder = $(id).height();
        var positionscroll = topel - heightpage/2 + heightorder/2;
        $('body,html').animate({scrollTop: positionscroll}, 500);
    });
 
});
