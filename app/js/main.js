

$(document).ready(function(){

   var navMain = $('.main-nav');
  var  navToggle = $('.main-nav__toggle');

 $(navToggle).on('click', function() {
 $(navMain).toggleClass('main-nav--closed'); 
$('body').toggleClass('hidden');
});

   var subItem = $('.with-submenu');
  
 $(subItem).on('click', function() {
  
  var ThisSubMenu = $(this).find('.site-nav__submenu');
  var subMenu = $('.site-nav__submenu').not(ThisSubMenu);
  console.log('кнопка');
 $(subMenu).removeClass('open'); 
 $(ThisSubMenu).toggleClass('open');
 $(this).toggleClass('open');
 $(subItem).not(this).removeClass('open');

});
 $('.site-nav__list-item a').on('click', function(event) {
 event.stopPropagation();
         
        });


$('.main-slider').slick({
  dots:true,
});

$('#btn-check').click(function(){
        var radio = $('input[name="radio"]:checked').data('id');
      var level = "#" + radio;
  // event.preventDefault();
  if ($('input[name="radio"]').is(':checked')){

 $('.faq__main').css('display','none');
   $(level).css('display','block');
   // $('body').css("background-color", "red");
  } else {

   $(level).addClass('class');
  }
  //   if ($('input[name="radio1"]').is(':checked')){
  //   alert('Включен');
  // } else {
  //   alert('Выключен');
  // }
});
//       var radioCheck = $('input[name="radio"]:checked').data('id');
//       var levelCheck = "#" + radioCheck;
// var btne = $(levelCheck).find('.btn');
$('.btn-return').on('click',(function() {
 // $(levelCheck).css('display','none'); 
 $(this).parent().css('display','none');
  $('.faq__main').css('display','block');
}));


})
