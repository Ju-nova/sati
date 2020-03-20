

$(document).ready(function(){
// ПЕРЕКЛЮЧЕНИЕ ТАБОВ
$('.tab-link').on('click', function () {
        var container = $(this).parent().parent();
        var curid = $(this).data('id'),
                tabs = $('.tab-link'),
                holderTab = $('.tab-info');
        // holderTab.hide();
        // $('#'+ curid).fadeIn(700);
        container.find('.tab-info').addClass('hide');
        $('#' + curid).removeClass('hide');
        container.find('.tab-link').removeClass('active');
        $(this).addClass('active');
        return false;
    });
 // СЛАЙДЕР СТРАНИЦЫ ПРОДУКТА
   $('.product__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product__slider-nav'
  });
  $('.product__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product__slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });


    $('.decisions__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,

  });
// МОДАЛЬНЫЕ ОКНА
    var link = $('.simplebox');
     
      $(link).click(function() {
        event.preventDefault();
        var modal = $(this).attr('href');
      $(modal).fadeIn(300);
        $('body').css({
      overflow: 'hidden'
    });
  });    
  $('.modal-container').click(function(e) {
         $(this).fadeOut(300);
         $('body').css({
      overflow: 'visible'
    });
    // location.reload();
     console.log('parent function');
     })
    .on('click','div', function(e) { 
       e.stopPropagation();       
   });
    $('.close').click(function() {
  $(".modal-container").fadeOut(300);
$('body').css({
      overflow: 'visible'
    });

});
// 
});


