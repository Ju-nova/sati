

$(document).ready(function(){
// ОСНОВНАЯ НАВИГАЦИЯ САЙТА (ВЕРХНЕЕ МЕНЮ)
  var navMain    = $('.main-nav');
  var navToggle  = $('.main-nav__toggle');

 $(navToggle).on('click', function() {
 $(navMain).toggleClass('main-nav--closed'); 
 $('body').toggleClass('hidden');
 });

  var subItem = $('.with-submenu');
  
 $(subItem).on('click', function() {
  
  var ThisSubMenu = $(this).find('.site-nav__submenu');
  var subMenu     = $('.site-nav__submenu').not(ThisSubMenu);

 $(subMenu).removeClass('open'); 
 $(ThisSubMenu).toggleClass('open');
 $(this).toggleClass('open');
 $(subItem).not(this).removeClass('open');

});
 $('.site-nav__list-item a').on('click', function(event) {
 event.stopPropagation();
         });
 
// ГЛАВНЫЙ СЛАЙДЕР САЙТА

$('.main-slider').slick({
  dots:true,
});
// При загрузке страницs слайдер не будет растягиваться по высоте
$('.main-slider__slide').css({
     overflow: 'visible',
     opacity: '1'
   });

// ПЕРЕКЛЮЧЕНИЕ БЛОКОВ В FAQ
$('#btn-check').click(function(){
      var radio = $('input[name="radio"]:checked').data('id');
      var level = "#" + radio;
  if ($('input[name="radio"]').is(':checked')){

 $('.faq__main').css('display','none');
   $(level).css('display','block');

  } else {

   $(level).addClass('class');
  }

});

$('.btn-return').on('click',(function() { 
 $(this).parent().css('display','none');
  $('.faq__main').css('display','block');
}));

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

})
