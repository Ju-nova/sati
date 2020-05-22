$(document).on("select2:open", "select", function() {
// Unbind mousewheel event from select2 result lists
  $(".select2-results ul.select2-results__options").unbind("mousewheel"); 
          advanced:{
            updateOnContentResize: true
          } 
  $('.select2-results').mCustomScrollbar(
{
theme:"minimal-dark",
scrollButtons:{
enable:true,
advanced:{
updateOnBrowserResize:true,
updateOnContentResize:true
}
} 
}      
);
});

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

 // СТИЛИЗАЦИЯ СЕЛЕКТОВ
    $('.js-example-basic-single').select2();
       
// ГЛАВНЫЙ СЛАЙДЕР САЙТА

$('.main-slider').slick({
  dots:true,
});
// При загрузке страницs слайдер не будет растягиваться по высоте
$('.main-slider__slide').css({
     overflow: 'visible',
     opacity: '1'
   });

$('.slider').css({
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
// ТАБЫ
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
// МОДАЛЬНЫЕ ОКНА
    var link = $('.simplebox');
     
      $(link).click(function() {
        event.preventDefault();
        var modal = $(this).attr('href');
      $(modal).fadeIn(300);
        $('body').addClass('modal-body');
  });    
  $('.modal-container').click(function(e) {
         $(this).fadeOut(300);
         $('body').removeClass('modal-body');
    // location.reload();
     console.log('parent function');
     })
    .on('click','div', function(e) { 
       e.stopPropagation();       
   });
    $('.close').click(function() {
  $(".modal-container").fadeOut(300);
$('body').removeClass('modal-body');
});
    // ВАЛИДАЦИЯ ФОРМ
   jQuery.validator.addMethod("checkMask", function(value, element) {
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
});
  $('.main-pay__form').validate({
    messages: {
      email: {
        email: "Необходим формат адреса email"  
      }
    }
  });
  $('#form-online').validate({
    messages: {
      number: {
        required: "Поле обязательно к заполнению",
      },
      privacy: {
        required: "Необходимо дать согласие",
      }
    }
  });

    $('#modal-connect-form').validate({
    messages: {
      email: {
        email: "Необходим формат адреса email"  
      },
      privacy: {
        required: "Необходимо дать согласие",
      }
    }
  });
        $('#site-connect-form').validate({
    messages: {
       email: {
        email: "Необходим формат адреса email"  
      },
       phone: {

        tel: "Неверный номер телефона"  
      },
      privacy: {
        required: "Необходимо дать согласие",
      }
    }
  });

$.validator.addClassRules({
    'js-phone': {
        checkMask: true
    }
});

$('.js-phone').mask("+7 999 999 9999", {autoclear: false});


$('.btn-front').click(function() {
  $(this).parent().parent().addClass('tariff--flipped');
});
$('.btn-back').click(function() {
  $(this).parent().parent().removeClass('tariff--flipped');
});

    $('.products__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    rows: 0,
    responsive: [

       {
      breakpoint: 1025,
      settings: {
          centerMode: true,
        slidesToShow:1,
        slidesToScroll: 1,
      }
    },
           {
      breakpoint: 350,
      settings: {
          centerMode: false,
        slidesToShow:1,
        slidesToScroll: 1,
      }
    }

  ]

  });
    $('.foto-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    centerMode: false,
    rows: 0,
    responsive: [

       {
      breakpoint: 1025,
      settings: {
         
        slidesToShow:3,
        slidesToScroll: 1,
      }
    },
           {
      breakpoint: 430,
      settings: {
       
        slidesToShow:2,
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

    $('.features__btn').click(function(event) {
      $('tfoot').slideToggle(10);
      $('.features__btn span').toggleClass('features__btn-show');
    });

     $( '.page-faq__quest' ).click(
  function() {
    $(this).next('.page-faq__answer').slideToggle();
    $(this).toggleClass('rotate');
  }, 
);


});

