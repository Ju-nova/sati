

$(document).ready(function(){
// ПЕРЕКЛЮЧЕНИЕ ТАБОВ
$('.tab-link').on('click', function () {
        var container = $(this).parent().parent();
        var curid = $(this).data('id'),
                tabs = $('.tab-link'),
                holderTab = $('.tab-info');
        // holderTab.hide();
        // $('#'+ curid).fadeIn(700);
        container.find('.tab-info').addClass('hide');
        $('#' + curid).removeClass('hide');
        container.find('.tab-link').removeClass('active');
        $(this).addClass('active');
        return false;
    });
// выезжающие фильтры
    $('.sidebar-filtr__menu-title').click(function () {
          console.log("fdvdff");
    $(this).next('.sidebar-filtr__menu-links').slideToggle();
    $(this).toggleClass('sidebar-filtr__menu-title--toggle');

    });
// При загрузке странице слайдер не будет растягиваться по высоте
  $('.slider').css({
       overflow: 'visible',
       opacity: '1'
     });
   // СЛАЙДЕР СТРАНИЦЫ ПРОДУКТА
   $('.product__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product__slider-nav'
  });
  $('.product__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product__slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });


    $('.decisions__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    rows: 0,
    responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow:3,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow:2,
        slidesToScroll: 1,
      }
    },
       {
      breakpoint: 565,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
      }
    }

  ]

  });

 $('.fancybox').fancybox({
        'transitionIn' : 'none',
        'transitionOut' : 'none',
        'titlePosition' : 'over',

    });
 $('.item').fancybox({
        'transitionIn' : 'none',
        'transitionOut' : 'none',
        'titlePosition' : 'over',

    });


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

});

// ЧЕКБОКСЫ ФИЛЬТРА ПО КАТЕГОРИЯМ

(function(){ // этот кусок кода автономен, выносим в отдельную область данных
  function clicker(e){ // выполняется при любом кликие или изменении
    var legendObject;
    var fieldsetObject;
    var controlCheckbox;
    
    var trigger = e.srcElement||e.target; // кто вызвал событие?
    if (!trigger.tagName || trigger.tagName.toLowerCase() != "input" || trigger.type.toLowerCase() != "checkbox") return; // если это не чекбокс&nbsp;— делать нам тут нечего
    
    // пробегаемся по всем родителям
    var testElement = trigger;
    while (testElement){
      if (!testElement.tagName) return; // неявно&nbsp;— корень дерева, и мы ничего не нашли
      var tagName = testElement.tagName.toLowerCase();
      if (tagName == "legend") { // по пути встретили legend
        legendObject = testElement;
      } else if (tagName == "fieldset" && /(^|\s)+sidebar-filtr__filedset(\s|$)+/.test(testElement.className)) { // или fieldset с нужным классом
        fieldsetObject = testElement;
        break;
      }
      testElement = testElement.parentNode; // выбираем родителя и повторяем итерацию для него
    };
    if (!fieldsetObject) return;
    if (legendObject){ // т.е., чекбокс внутри легенды
      var controlCheckboxValue = trigger.checked;
      var inputs = fieldsetObject.getElementsByTagName("input");
      for(var i=0; i<inputs.length; i++){
        var input = inputs[i];
        if (input.type.toLowerCase() == "checkbox" && input != controlCheckbox){
          input.checked = controlCheckboxValue;
        };
      };
    } else {
      // находим «контрольный» чекбокс
      if (legendObject = fieldsetObject.getElementsByTagName("legend")[0]){
        var inputs = legendObject.getElementsByTagName("input");
        for(var i=0; i<inputs.length; i++){
          var input = inputs[i];
          if (input.type.toLowerCase() == "checkbox"){
            controlCheckbox = input;
            break;
          };
        };
      };
      if (!controlCheckbox) return;
      var controlCheckboxValue = true;
      // пробегаемся по всем чекбоксам
      var inputs = fieldsetObject.getElementsByTagName("input");
      for(var i=0; i<inputs.length; i++){
        var input = inputs[i];
        // есть неотмеченные?
        if (input.type.toLowerCase() == "checkbox" && input != controlCheckbox && !input.checked){
          controlCheckboxValue = false;
        };
      };
      // устанавливаем значение в контрольный
      controlCheckbox.checked = controlCheckboxValue;
    }
  };
  
  // щелчков будет намного меньше, чем элементов&nbsp;— отлавливаем события через bubbling
  if (document.addEventListener){
    document.addEventListener('change', clicker, false);
    document.addEventListener('click', clicker, false);
  } else {
    document.attachEvent('onchange', clicker);
    document.attachEvent('onclick', clicker);
  };
})();
