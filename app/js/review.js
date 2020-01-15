$(document).ready(function(){
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
 });