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

// СПОЙЛЕРЫ
$( '.faq__question').click(
  function() {
    $(this).next('.faq__answer').slideToggle(500);

    $(this).toggleClass('faq-rotate');

  }, 
);
// МОДАЛКИ
    $('.simplebox').simplebox({
        overlay: {
            color: 'rgba(0, 0, 0, 0.8)',
            opacity: 0.7
        },
        onOpen: function(obj){console.log('onOpen', obj);},
        afterOpen: function(obj){console.log('afterOpen', obj);},
        onClose: function(obj){console.log('onClose', obj);},
        afterClose: function(obj){console.log('afterClose', obj);}
    });
//при закрытии модалки останавливать и видео
$('.close').click(function() {

   location.reload();

});
$('.simplebox-overlay').click(function() {

   location.reload();

});  

});

