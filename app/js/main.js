

$(document).ready(function(){

// СЛАЙДЕР С ФОТО

// $('.foto-slider').css({
//        overflow: 'visible',
//        opacity: '1',
//        height: 'auto'

//      });


// МОДАЛКИ

      var link = $('.simplebox');
     
      $(link).click(function() {
        event.preventDefault();
        var modal = $(this).attr('href');
      $(modal).fadeIn(300);
        $('body').css({
      overflow: 'hidden'
    });
        $('.foto-slider').slick({

  slidesToShow: 1,
  arrows:true,
  infinite:false,
  autoplay:false
});
  });    

        

//при закрытии модалки останавливать и видео
$('.close').click(function() {
  $(".modal-container").fadeOut(300);
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



// // СЛАЙДЕР С ОТЗЫВАМИ
// function checkWidth() {
//     var windowWidth = $('body').innerWidth(),
//         elem = $(".review__slide"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
//                                     // страницу для поиска нужного элемента
//     if(windowWidth < 426){
//       elem.unwrap(); 
//        $('.review__slide.opacity').removeClass('opacity'); 
//       $('.review__box').addClass('review-slider'); 
//       $('.review-slider').slick({

//   slidesToShow: 1,
//   arrows:true,
//   infinite:true,
//   autoplay:false,
//   adaptiveHeight:true

  
// });
// $('.review-slider').css({
//        overflow: 'visible',
//        opacity: '1',
//        height: 'auto'
//      });

// var slider4 = $('.sl-rb');
//   $('.sl-count__total__main').text( slider4.slick("getSlick").slideCount);
//   $(".sl-rb").on('afterChange', function(event, slick, currentSlide){
//        $(".sl-count__num__main").text(currentSlide + 1);
//   });
//     }
//   }
//   checkWidth(); // проверит при загрузке страницы
//  $(window).resize(function(){
//     checkWidth(); // проверит при изменении размера окна клиента
//   });


// var slider4 = $('.sl-rb');
//   $('.sl-count__total__main').text( slider4.slick("getSlick").slideCount);
//   $(".sl-rb").on('afterChange', function(event, slick, currentSlide){
//        $(".sl-count__num__main").text(currentSlide + 1);
//   });
 $('.video-slider').slick({

  slidesToShow: 1,
  arrows:true,
  infinite:false,
  autoplay:false
  
});



$('.video-slider').css({
       overflow: 'visible',
       opacity: '1',
       height: 'auto'

     });
 // ОСТАНОВКА ВИДЕО ПРИ ПЕРЕЛИСТЫВАНИИ СЛАЙДОВ
$('.video-slider').on('init', function(event, slick){
    //init code goes here
}).on('afterChange',function(e,o){
    //on change slide = do action
    $('iframe').each(function(){
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');    
    });
}).slick();


 // СЛАЙДЕР С ВИДЕО

  

 




});


