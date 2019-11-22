$(document).ready(function(){

// ПОЯВЛЕНИЕ ОТЗЫВОВ ПО КЛИКУ
$('.review__button').click(function() {
	  $('.review__block.hidden').removeClass('hidden');
	  $(this).addClass('hidden');
});

// СЛАЙДЕР С ВИДЕО
$('.video-slider').slick({

  slidesToShow: 1,
  arrows:true,
  infinite:true,
  autoplay:false
  
});
$('.video-slider').css({
       overflow: 'visible',
       opacity: '1',
       height: 'auto'
     });
});

