$(document).ready(function () {

    $('.main-banner__address').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - $(window).height() / 5;
        $('html, body').animate({ scrollTop: destination }, 1100);
        return false;
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        dots: true,
        margin: 20,
        responsive:{
            0:{
                items: 1,
            },
            769:{
                items:2
            }
        }
    });

    $(".tariff-list").hover(function () {
        $(".tariffs__text").css("transform","translateX(1000px)");
    },function () {
        $(".tariffs__text").css("transform","translateX(0)")
    });


    var firstAnimation = function () {
        $('.main-banner').animate({
            },function(){
            var that = this;
                $(this).find(".main-banner__girl").css({
                    'transform':'translateY(0)',
                    'opacity':'1'
                });
                setTimeout(function () {
                    $(that).find('.main-banner__title').css({
                        'transform':'translateY(0)',
                        'opacity':'1'
                    });
                    setTimeout(function () {
                        $(that).find('.main-banner__descr').css({
                            'transform':'translateY(0)',
                            'opacity':'1'
                        });
                        setTimeout(function () {
                            $(that).find('.main-banner__footer').css({
                                'transform':'translateY(0)',
                                'opacity':'1'
                            });
                        },100);
                    },200);
                },300);
            }
        );

    };

    var frontSeeAnimation = function () {
        $('.main-banner').animate({
            },function(){
                var that = this;
                $(this).find(".main-banner__girl").css({
                    'transform':'translateY(0)',
                    'opacity':'1'
                });
                setTimeout(function () {
                    $(that).find('.main-banner__title').css({
                        'transform':'translateY(0)',
                        'opacity':'1'
                    });
                    setTimeout(function () {
                        $(that).find('.main-banner__descr').css({
                            'transform':'translateY(0)',
                            'opacity':'1'
                        });
                        setTimeout(function () {
                            $(that).find('.main-banner__footer').css({
                                'transform':'translateY(0)',
                                'opacity':'1'
                            });
                        },100);
                    },200);
                },300);
            }
        );

    };


    if($('.main-banner').offset().top - (($(window).height()) / 2) - ($(window).scrollTop() || $('html').scrollTop()) <= 0 ){
        firstAnimation();
    }

    $(window).scroll(function(){
        if ($(window).scrollTop() > 38){
            $(".header--menu").addClass("fixed-header");
        } else{
            $(".header--menu").removeClass("fixed-header");
        }

    });

});

document.addEventListener('DOMContentLoaded', function () {
    var tariffs = document.querySelectorAll('.tariff');
    var maxSpeed = 800;
    var maxScaleValue = 75;

    /**
     * РћР±СЂР°Р±РѕС‚С‡РёРє РєР»РёРєР° РїРѕ РєР°СЂС‚РѕС‡РєРµ С‚Р°СЂРёС„Р°
     */
    var tariffClickHandler = function (event) {
        var that = this;
        var target = event.target;
        var tariffToggle = this.querySelector('.tariff__toggle');
        var tariffTabs = this.querySelector('.tariff__tabs');
        var channelsList = this.querySelector('.tariff__tab-content--channels .tariff__content-list');
        var channelsTabLink = this.querySelector('.tariff__tab-link--channels');
        var activeTabClassName = 'tariff__tab-wrap--active';
        var activeTabContentClassName = 'tariff__tab-content--active';
        var dataIdValue = tariffToggle.dataset.tariff_id;

        if (target.closest('.tariff__toggle')) {
            event.preventDefault();

            this.classList.toggle('tariff--flipped');
            tariffToggle.classList.toggle('animate-toggle');
            tariffTabs.classList.toggle('tariff__tabs--show');
        } else if (target.closest('.tariff__details-show')) {
            event.preventDefault();

            this.classList.add('tariff--flipped');
            tariffToggle.classList.add('animate-toggle');
            tariffTabs.classList.add('tariff__tabs--show');
        }else if (target.closest('.tariff__features-content')) {
            event.preventDefault();
            this.classList.toggle('tariff--flipped');
            tariffToggle.classList.toggle('animate-toggle');
            tariffTabs.classList.toggle('tariff__tabs--show');
            showTab('tariff__tab-content--channels');
            loadChannels();
        } else if (target.closest('.tariff__details-close')) {
            event.preventDefault();

            this.classList.remove('tariff--flipped');
            tariffToggle.classList.remove('animate-toggle');
            tariffTabs.classList.remove('tariff__tabs--show');
        } else if (target.dataset.toggle === 'tab') {
            event.preventDefault();

            var tabTarget = target.dataset.target;

            if (target.dataset.target) {
                showTab(tabTarget);

                if (target.classList.contains('tariff__tab-link--channels') && channelsTabLink !== null) {
                    loadChannels();
                }
            }
        }

        /**
         * @param {String} tabClass - РєР»Р°СЃСЃ РїРѕРєР°Р·С‹РІР°РµРјРѕРіРѕ С‚Р°Р±Р°
         */
        function showTab(tabClass) {
            var element = that.querySelector('.' + tabClass);

            if (element.classList.contains('tariff__tab-content')) {
                var tabsParent = element.closest('.tariff__tabs');
                Array.prototype.slice.call(tabsParent.querySelectorAll('.' + activeTabClassName)).forEach(function (item) {
                    item.closest('li').classList.remove(activeTabClassName);
                });

                var activeTab = tabsParent.querySelector('[data-target="' + tabClass + '"]');
                activeTab.closest('li').classList.add(activeTabClassName);
                Array.prototype.slice.call(tabsParent.querySelectorAll('.' + activeTabContentClassName)).forEach(function (item) {
                    item.classList.remove(activeTabContentClassName);
                    item.setAttribute('style', '');
                });
                tabsParent.querySelector('.' + tabClass).classList.add(activeTabContentClassName);
            }
        }

        function createChannelItem(data) {
            var channelItem = document.createElement('li');
            var channelPic = document.createElement('img');
            var channelName = document.createElement('span');
            channelItem.classList.add('tariff__channel-item');
            channelPic.classList.add('tariff__channel-pic');
            channelPic.src = data['LOGO_FILENAME'];
            channelPic.alt = data['CHANNEL_NAME'];
            channelName.textContent = data['CHANNEL_NAME'];
            channelItem.appendChild(channelPic);
            channelItem.appendChild(channelName);
            return channelItem;
        }

        function loadChannels() {
            var url = '/ajax/all.php?e=ott_pack_chnls';
            var urlParam = '&pack_id=' + dataIdValue;
            var xhr = new XMLHttpRequest();
            var responseTypeAware = 'responseType' in xhr;

            xhr.open('GET', url + urlParam);

            if (responseTypeAware) {
                xhr.responseType = 'json';
            }

            xhr.addEventListener('load', function () {
                if (xhr.status === 200) {
                    var response = (xhr.responseType === 'json') ? xhr.response : JSON.parse(xhr.responseText);

                    while (channelsList.hasChildNodes()) {
                        channelsList.removeChild(channelsList.lastChild);
                    }
                    if (!response.length) {
                        channelsList.insertAdjacentHTML('afterbegin', '<li class="text-center">РќРµ СѓРґР°Р»РѕСЃСЊ РїРѕР»СѓС‡РёС‚СЊ РґР°РЅРЅС‹Рµ</li>');
                    } else {
                        for (var i in response) {
                            channelsList.appendChild(createChannelItem(response[i]));
                        }
                        channelsList.dataset.count =  response.length + ' РєР°РЅР°Р»РѕРІ';
                    }
                } else {
                    alert('РќРµ СѓРґР°Р»РѕСЃСЊ РїРѕР»СѓС‡РёС‚СЊ РґР°РЅРЅС‹Рµ');
                }
            });
            xhr.addEventListener('error', function () {
                alert('РќРµ СѓРґР°Р»РѕСЃСЊ РїРѕР»СѓС‡РёС‚СЊ РґР°РЅРЅС‹Рµ');
            });
            xhr.send();
        }
    };

    Array.prototype.slice.call(tariffs).forEach(function (tariff) {
        tariff.addEventListener('click', tariffClickHandler);

        if (window.scrollY + window.innerHeight >= tariff.offsetTop + tariff.offsetHeight) {
            var speed = tariff.querySelector('.tariff__features-amount').textContent;
            var speedScale = tariff.querySelector('.tariff__speed-circle-2');
            if (speedScale) {
                speedScale.style.strokeDasharray = Math.pow(speed / maxSpeed, 0.4) * maxScaleValue + ' 100';
            }
        }
    });

    window.addEventListener('scroll', function () {
        Array.prototype.slice.call(tariffs).forEach(function (tariff) {
            if (window.scrollY + window.innerHeight >= tariff.offsetTop + tariff.offsetHeight) {
                var speed = tariff.querySelector('.tariff__features-amount').textContent;
                var speedScale = tariff.querySelector('.tariff__speed-circle-2');
                if (speedScale) {
                    speedScale.style.strokeDasharray = Math.pow(speed / maxSpeed, 0.4) * maxScaleValue + ' 100';
                }
            }
        });
    });

    var btnsType = document.querySelectorAll('.btn_groupe_slide button');

    var btnTypeClickHandler = function (event) {
        event.preventDefault();
        activeTypeLink = event.target;
        var currentList = document.querySelector('.tariff-list--' + activeTypeLink.id);
        activeList = document.querySelector('.tv_2017__tariff--list .tariff-list--active');

        if (activeList && activeList !== currentList) {
            var tariffs = currentList.querySelectorAll('.tariff');

            activeList.classList.remove('tariff-list--active');
            currentList.classList.add('tariff-list--active');

            Array.prototype.slice.call(tariffs).forEach(function (tariff) {
                if (tariff.querySelector('.tariff__speed-circle-2')) {
                    var speed = tariff.querySelector('.tariff__features-amount').textContent;
                    var speedScale = tariff.querySelector('.tariff__speed-circle-2');
                    speedScale.style.strokeDasharray = 0 + ' 100';

                    setTimeout(function () {
                        speedScale.style.strokeDasharray = Math.pow(speed / maxSpeed, 0.4) * maxScaleValue + ' 100';
                    }, 250);
                }
            });
        }
    };

    Array.prototype.slice.call(btnsType, 0).forEach(function (item) {
        item.addEventListener('click', btnTypeClickHandler);
    });

    $('.scroll-content').mCustomScrollbar({
        theme:"my-theme"
    });
});
