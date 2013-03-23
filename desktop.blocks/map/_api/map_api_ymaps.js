BEM.DOM.decl({ name: "map", modName: "api", modValue: "ymaps" }, {

    onSetMod : {
        'js' : function () {
            this.loadMapsApi();
        }
    },

    // Описываем модули, котоыре будем загружить.
    mapsPackages: [
        // Первый этап загрузки.
        [
            'package.map'

        ],
        // Второй этап загрузки.
        [
            'package.full'
        ]
    ],
    /** 
     * Загрузчик API.
     */
    loadMapsApi: function () {
        if (!window.ymaps) {
            var apiScript = document.createElement('script'),
                apiCallback = 'ymapsloaded', 
                _this = this;

            window[apiCallback] = $.proxy(function () {
                this.onAPILoaded();
            }, this);

            apiScript.src = [
                'http://api-maps.yandex.ru/2.0/?',
                '&load=' + this.mapsPackages[0].join(','),
                '&lang=' + this.params.lang,
                '&onload=' + apiCallback
            ].join('');

            document.getElementsByTagName('head')[0].appendChild(apiScript);
        } else {
            this.onAPILoaded();
        }   
    }, 

    /** 
     * Выполнится после загрузки API.
     */
    onAPILoaded: function () {
        // Запускаем инициализацию карты.
        this.initMap();
        // И говорим, чтобы API подгрузило вторую часть описаных нами пакетов. 
        ymaps.load(this.mapsPackages[1].join(','), function () {
            // В конце сделаем выполним последние шаги. 
            this.continueInit();
        }, this);
    },

    /** 
     * Инициализация карты. 
     */
    initMap: function () {
        var center = this.params.center || [55.76, 37.64],
            zoom = this.params.zoom;

        // Инициализация карты
        this.map = new ymaps.Map(this.domElem[0], {
            center: center,
            zoom: zoom,
            behaviors: ['drag', 'dblClickZoom']
        });
    },

    continueInit: function () {
        // Если есть метки, то добавляем метки на карту. 
        if (this.params.geoObjects && this.params.geoObjects.length > 0) {
            this.map.geoObjects.add(this.params.geoObjects);
        }

        // Блок поделится информацией о том, что он инициализировал карту. 
        this.trigger('map-inited');
    },

    /** 
     * Получение ссылки на карту. 
     */
    getMap: function () {
        return this.map
    }
});