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
                                balloonContentBody: '<div class="map-title">Пионерский подключен</div><div class="main-nav__menu-connect map__btn"><a class="simplebox" href="#form-connect">Подключиться</a></div>',
                                },{
                                iconLayout: 'default#image',
                                // Путь до нашей картинки
                                iconImageHref: 'img/icon-location.png', 
                                // Размер по ширине и высоте
                                iconImageSize: [49, 56],
                                // Смещение слоя с содержимым относительно слоя с картинкой.
                                 iconContentOffset: [0, 0],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [0, 0]

          });
    myPlacemark2 = new ymaps.Placemark([55.688185, 37.248608],{
                                balloonContentBody: '<div class="map-title">Пионерский подключен</div><div class="main-nav__menu-connect map__btn"><a class="simplebox" href="#form-connect">Подключиться</a></div>',
                                 },{
                                iconLayout: 'default#image',
                                // Путь до нашей картинки
                                iconImageHref: 'img/icon-location.png', 
                                // Размер по ширине и высоте
                                iconImageSize: [49, 56],
                                // Смещение слоя с содержимым относительно слоя с картинкой.
                                 iconContentOffset: [0, 0],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [0, 0]

          });


    // Добавляем метку в коллекцию.
    // myMap.geoObjects.add(myPlacemark);
  myMap.geoObjects.add(myPlacemark1);
  myMap.geoObjects.add(myPlacemark2);



}
