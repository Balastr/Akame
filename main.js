$(document).ready(function(){

    //---------- СЛАЙДЕР ------------

    $('.slider').slick({
        infinite: false,
        slidesToShow: 3,    
        slidesToScroll: 3,
        responsive: [
            {

              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
    });


    //---------- КАЛЕНДАРЬ ------------
    
    $('#date-format').bootstrapMaterialDatePicker
	({
        format: 'DD MMMM YYYY - HH:mm',
        lang: 'ru',
        weekStart: 1
	});





    
    //---------- СЛАЙД К РАЗДЕЛАМ" ------------
    $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    });



//---------- БУРГЕР МЕНЮ ------------
    $(function(){

        $('.menuToggle').on('click', function() {
           $('.nav__item').slideToggle(300, function(){
                if( $(this).css('display') === "none"){
                    $(this).removeAttr('style');
                }
           });
    
        });
    
    });
 // --------- ПРОФИЛЬ ---------------

    var btn = $('#button');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });











    




  });


  
  