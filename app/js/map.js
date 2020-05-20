ymaps.ready(init);
var myMap;
myMap.behaviors.disable('scrollZoom');
function init () {
    myMap = new ymaps.Map(
        'map',
        {
            center: [55.891481, 36.794994],
            // Масштаб, тут все просто
            zoom:10,
            // Отключаем все элементы управления
            controls: ['zoomControl'],
            behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"] 
        }, 

    );

//    var myGeoObjects = [];
//         var clusterer = new ymaps.Clusterer({
//          clusterDisableClickZoom: false,
//        clusterOpenBalloonOnClick: false,
//     });
    
//     clusterer.add(myGeoObjects);
//     myMap.geoObjects.add(clusterer);

//     //так отключаются мультитач жесты
//     myMap.behaviors.disable('multiTouch');
//     // а так перетаскивание карты
//     myMap.behaviors.add('drag');
//     myMap.controls.disable('zoomControl');
// myMap.behaviors.disable('scrollZoom');

  myPlacemark1 = new ymaps.Placemark([56.001372, 37.215657],{
                                balloonContentBody: 'Пионерский подключен<br> <div class="main-nav__menu-connect"><a class="simplebox" href="#form-connect">Подключиться</a></div>',
                                },{
                                iconLayout: 'default#image',
                                // Путь до нашей картинки
                                iconImageHref: 'img/help.png', 
                                // Размер по ширине и высоте
                                iconImageSize: [48, 67],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [-35, -35]

          });
    myPlacemark2 = new ymaps.Placemark([55.688185, 37.248608],{
                          balloonContentBody: '<div class="map-img"><img width="100"  src="images/icon_jes.jpg" alt="" /></div><br>   Медицинская компания "ДЖЕС",<br>   г. Воронеж, Проспект Революции, Д. 58, офис 34<br>Закрепленная территория (область, город): Воронеж, Белгород, Курск, Липецк, Старый Оскол<br>Щеглова Юлия Викторовна <a href="tel:+79042120764">+7(473)229-19-14</a><br> <a href="http://jesmed.ru/" target="blank">jesmed.ru</a><br> <a href="mailto:medestetic99@mail.ru">medestetic99@mail.ru</a> ',
                          iconLayout: 'default#image',
                          iconCaption:' "ДЖЕС"',
                                // Путь до нашей картинки
                                iconImageHref: 'img/help.png', 
                                // Размер по ширине и высоте
                                iconImageSize: [48, 67],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [-35, -35]

          });


    // Добавляем метку в коллекцию.
    // myMap.geoObjects.add(myPlacemark);
  myMap.geoObjects.add(myPlacemark1);
  myMap.geoObjects.add(myPlacemark2);



}
