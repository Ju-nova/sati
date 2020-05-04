

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
})
 // if($("#lot .item").hasClass("waste"))
 //    $("#state").text("Партия содержит брак!");

         //  var menuTab = $('.header-menu__nav > ul > .menu-item');
         //  var menuTabParent = $('.header-menu__nav > ul > li.current-menu-parent');
         //  var menuTabCurrent = $('.header-menu__nav > ul > li.current-menu-item');

         //   // $(menuTabParent).find('.sub-menu').toggleClass('open');
         //   $(menuTabCurrent).find('.sub-menu').addClass('open');
         //   $(menuTabCurrent).addClass('white');
         //   // $(menuTabCurrent).addClass('reverse');
         //  $(menuTab).click(function() { 
         //    var city = $(this).find('.sidebar-filtr__menu-links');
         //    var town = $('.sidebar-filtr__menu-links').not(city);
         //    var country  = $('.header-menu__nav > ul > .menu-item').not(this); 
         //     $(town).removeClass('open');
         //      $(city).toggleClass('open');
         //      $(country).removeClass('white');
         //     $(this).toggleClass('white');
         //  });
         //  $('.header-menu__nav > ul > .menu-item a').on('click', function(event) {
         //    event.stopPropagation();
         // 