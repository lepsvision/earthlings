$(document).ready(function() {
    $('.block__title').click(function(event){
        if($('.block').hasClass('one')){
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
    
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
