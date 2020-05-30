    (function($){
        $(window).on("load",function(){
            $(".tv-pack__back-wrapper").mCustomScrollbar(
              {
                theme:"minimal-dark"
              });

        });
    })(jQuery);

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


$('.js-example-basic-single').css({
  opacity: '1'
});
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
$('.page-table__tab').on('click', function () {
        var container = $(this).parent().parent().parent();
        var curid = $(this).data('id'),
                tabs = $('.page-table__tab'),
                holderTab = $('.page-table__info');
        // holderTab.hide();
        // $('#'+ curid).fadeIn(700);
        container.find('.page-table__info').addClass('hide');
        $('#' + curid).removeClass('hide');
        container.find('.page-table__tab').removeClass('active');
        $(this).addClass('active');
        return false;
    });
// ТАБЫ в блоке с характеристиками
$('.tab').on('click', function () {
        var container = $(this).parent().parent();
        var curid = $(this).data('id'),
                tabs = $('.tab'),
                holderTab = $('.tab__info');
        // holderTab.hide();
        // $('#'+ curid).fadeIn(700);
        container.find('.tab__info').addClass('hide');
        $('#' + curid).removeClass('hide');
        container.find('.tab').removeClass('active');
        $(this).addClass('active');
        return false;
    });
$('.btn-arend').on('click', function () {
        var container = $(this).parent().parent();
        var curid = $(this).data('id'),
                tabs = $('.tab'),
                holderTab = $('.tab__info');
        // holderTab.hide();
        // $('#'+ curid).fadeIn(700);
        $('.features__tabs').find('.tab__info').addClass('hide');
        $('#' + curid).removeClass('hide');
         $('.features__tabs').find('.tab').removeClass('active');
        $('.tab-conditions').addClass('active');
        return false;
    });
// $('a[href*=#arenda]').click(function(event){
//   event.preventDefault();
//   var target_top= $('a[name="'+this.href.split("#")[1]+'"]').offset().top;
//   $('html, body').animate({scrollTop:target_top}, 'slow');
//  });
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
$('#site-question-form').validate({
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

// ФЛИП-КАРТОЧКИ С ПЕРЕВОРОТОМ
$('.tv-pack__btn-front').click(function() {

  $(this).parent().parent().parent().parent().parent().addClass('flipped');

});
$('.tv-pack__btn-back').click(function() {
  $(this).parent().parent().removeClass('flipped');
});
//
$('.tarif-front__btn').click(function() {

  $(this).parent().parent().parent().parent().addClass('flipped');

});
$('.btn-back').click(function() {
  $(this).parent().parent().removeClass('flipped');
});

//


//
$('.btn-front-2').click(function() {

  $(this).parent().parent().parent().parent().parent().addClass('flipped-2');

});


//
$('.btn-back2').click(function() {
  $(this).parent().parent().removeClass('flipped-2');
});
$('.btn-back').click(function() {
  $(this).parent().parent().removeClass('flipped-3');
});
$('.btn-back').click(function() {
  $(this).parent().parent().removeClass('flipped-2');
});
//
// $('.btn-front-2').click(function() {

//   $(this).parent().parent().parent().parent().parent().addClass('flipped-2');

// });
$('.btn-back3').click(function() {
  $(this).parent().parent().addClass('flipped-3');
});

  //   $('.products__slider').slick({
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   dots: false,
  //   centerMode: false,
  //   rows: 0,
  //   responsive: [

  //      {
  //     breakpoint: 1025,
  //     settings: {
  //         centerMode: true,
  //       slidesToShow:1,
  //       slidesToScroll: 1,
  //     }
  //   },
  //          {
  //     breakpoint: 350,
  //     settings: {
  //         centerMode: false,
  //       slidesToShow:1,
  //       slidesToScroll: 1,
  //     }
  //   }

  // ]

  // });
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

 // СЛАЙДЕР С ОНЛАЙН-КИНОТЕАТРАМИ  
     $('.kino-online__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    centerMode: false,
    rows: 0,
    responsive: [

       {
      breakpoint: 1260,
      settings: {
         
        slidesToShow:3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
         
        slidesToShow:2,
        slidesToScroll: 1,
      }
    },
           {
      breakpoint: 430,
      settings: {
       
        slidesToShow:1,
        slidesToScroll: 1,
      }
    }

  ]

  });

     // СЛАЙДЕР С ТЕМАТИЧЕСКИМИ ПАКЕТАМИ

          $('.tv-pack__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    centerMode: false,
    rows: 2,
    responsive: [

       {
      breakpoint: 1260,
      settings: {
         
        slidesToShow:2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1000,
      settings: {
         
        slidesToShow:1,
        slidesToScroll: 1,
        rows:1,
      }
    },
           {
      breakpoint: 430,
      settings: {
       
        slidesToShow:1,
        slidesToScroll: 1,
        rows:1,
      }
    }

  ]

  });
// ВЫЕЗЖАЮЩАЯ ТАБЛИЦА
    $('.features__btn').click(function(event) {
      $('tfoot').slideToggle(10);
      $('.features__btn span').toggleClass('features__btn-show');
    });
    // БЛОК FAQ
     $( '.page-faq__quest' ).click(
  function() {
    $(this).next('.page-faq__answer').slideToggle();
    $(this).toggleClass('rotate');
  }, 
);


});

