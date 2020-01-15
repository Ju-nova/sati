

$(document).ready(function(){

// ПОЯВЛЕНИЕ ОТЗЫВОВ ПО КЛИКУ
$('.review__button').click(function() {

	  // $('.review__slide.hidden').removeClass('hidden');
   //  $('.review__block.hidden').removeClass('hidden');
     $('.review').css({
       height: 'auto',
       overflow: 'visible'
     });
    $('.review__slide.opacity').removeClass('opacity');
	  $(this).addClass('hidden');
});



// СЛАЙДЕР С ОТЗЫВАМИ
function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".review__slide"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
                                    // страницу для поиска нужного элемента
    if(windowWidth < 426){
      elem.unwrap(); 
       $('.review__slide.opacity').removeClass('opacity'); 
    }
  }
   checkWidth(); // проверит при загрузке страницы
 $(window).resize(function(){
    checkWidth(); // проверит при изменении размера окна клиента
  });

function mobileOnlySlider() {
    $(document).ready(function(){
        $('.review-slider').slick({
            slidesToShow: ,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            touchMove:true,
            dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 2,
                        settings:"unslick"
                }
            }]
        });
    });
}
if(window.innerWidth < 768) {
    mobileOnlySlider();
}
$(window).resize(function(e){
    if(window.innerWidth < 768) {
        if(!$('.slider').hasClass('slick-initialized')){
            mobileOnlySlider();
        }
 
    }else{
        if($('.slider').hasClass('slick-initialized')){
            $('.slider').slick('unslick');
        }
    }
});
$(window).on('load resize', function() {
  if ($(window).width() < 640) {
    $('#items:not(.slick-initialized)').slick({
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $("#items.slick-initialized").slick("unslick");
  }
});
var slider4 = $('.sl-rb');
  $('.sl-count__total__main').text( slider4.slick("getSlick").slideCount);
  $(".sl-rb").on('afterChange', function(event, slick, currentSlide){
       $(".sl-count__num__main").text(currentSlide + 1);
  });

});


