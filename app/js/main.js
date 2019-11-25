$(document).ready(function(){
// function checkWidth() {
//     var windowWidth = $('body').innerWidth(),
//         elem = $(".hide"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
//                                     // страницу для поиска нужного элемента
//     if(windowWidth < 426){
      
//       // $('.review__slide.hidden').removeClass('hidden'); 
//       $('.hide').addClass('hidden'); 

//     }
//   }
//   checkWidth(); // проверит при загрузке страницы
//  $(window).resize(function(){
//     checkWidth(); // проверит при изменении размера окна клиента
//   });

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

// СПОЙЛЕРЫ

$( '.faq__question').click(
  function() {
    $(this).next('.faq__answer').slideToggle(500);
    $(this).toggleClass('faq-rotate');

  }
);
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

// СЛАЙДЕР С ОТЗЫВАМИ
function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".review__slide"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
                                    // страницу для поиска нужного элемента
    if(windowWidth < 426){
      elem.unwrap(); 
       $('.review__slide.opacity').removeClass('opacity'); 
      $('.review__box').addClass('review-slider'); 

    }
  }
  checkWidth(); // проверит при загрузке страницы
 $(window).resize(function(){
    checkWidth(); // проверит при изменении размера окна клиента
  });
$('.review-slider').slick({

  slidesToShow: 1,
  arrows:true,
  infinite:true,
  autoplay:false,
  adaptiveHeight:true

  
});
$('.review-slider').css({
       overflow: 'visible',
       opacity: '1',
       height: 'auto'
     });

var slider4 = $('.sl-rb');
  $('.sl-count__total__main').text( slider4.slick("getSlick").slideCount);
  $(".sl-rb").on('afterChange', function(event, slick, currentSlide){
       $(".sl-count__num__main").text(currentSlide + 1);
  });

    

 

});

