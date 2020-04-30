

$(document).ready(function(){

   var navMain = $('.main-nav');
  var navToggle = $('.main-nav__toggle');

 

  $(navToggle).on('click', function() {
$(navMain).toggleClass('main-nav--closed'); 


});
})

