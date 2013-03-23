({
    block: 'b-page',
    title: 'Карта магазинов ОАО «Рога и копыта»',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        // Сначала описываем враппер, который будет оборачивать 
        // наши блоки map и menu. 
        // К нему примиксуем i-geo, чтобы можно было без труда 
        // управляться с коммуникацией блоков
        {
            block: 'container',
            mix: [{ block: 'i-geo', js: true }],
            content: [
                {
                    // Блок карты, который автоматически добавляет АПИ Яндекс.Карт и 
                    // инстанцирует карту в элемент с идентификатором myId.
                    block: 'map',
                    mods: { 'api': 'ymaps' },
                    mix: [{ block: 'i-geo', elem: 'map' }],
                    // Параметры для загрузки АПИ Яндекс.Карт.
                    js: {
                        'lang': 'ru-RU',
                        'center': [50.426472, 30.563022],
                        'zoom': 12,
                        // Добавляем геообъекты на карту
                        'geoObjects': [
                            { 
                                collection: true,
                                properties: {
                                    id: 'group-1',
                                    name: 'Магазины с доставкой',
                                    // Для нашего алгоритма
                                    collection: true 
                                },  
                                preset: 'twirl#orangeIcon',     
                                data: [ 
                                    { coords: [50.426472, 30.563022], options: { id: 'group-1-1', balloonContent: 'Монумент &quot;Родина-Мать&quot;' } },
                                    { coords: [50.45351, 30.516489], options: { id: 'group-1-2', balloonContent: 'Памятник &quot;Богдану Хмельницкому&quot;' } },
                                    { coords: [50.454433, 30.529874], options: { id: 'group-1-3', balloonContent: 'Арка Дружбы народов' } },
                                ]
                            },
                            {
                                collection: true,
                                properties: {
                                    id: 'group-2',
                                    name: 'Магазины с банковскими платежами',
                                    collection: true
                                },
                                preset: 'twirl#redIcon',
                                data: [
                                    { coords: [50.50955, 30.60791], options: { id: 'group-2-1', balloonContent: 'Ресторан &quot;Калинка-Малинка&quot;' } },
                                    { coords: [50.429083, 30.521708], options: { id: 'group-2-2', balloonContent: 'Бар &quot;Сало-бар&quot;' } },
                                    { coords: [50.450843, 30.498271], options: { id: 'group-2-3', balloonContent: 'Абсент-бар &quot;Палата №6&quot;' } },
                                ]
                            },
                            {
                                collection: true,
                                properties: {
                                    id: 'group-3',
                                    name: 'Просто магазины',
                                    collection: true
                                },
                                preset: 'twirl#greenIcon',
                                data: [
                                    { coords: [50.443334, 30.520163], options: { id: 'group-3-1', balloonContent: 'Музей грамзаписи и старинных музыкальных инструментов' } },
                                    { coords: [50.446977, 30.505269], options: { id: 'group-3-2', balloonContent: 'Музей истории медицины или Анатомический театр' } },
                                    { coords: [50.452512, 30.530889], options: { id: 'group-3-3', balloonContent: 'Музей воды. Водно-информационный центр' } }
                                ]
                            }
                        ],
                        // Устанавливать ли карте границы по наличия геообъектов. 
                        'setupBoundsByGeoObjects': true
                    }
                },
                {
                    block: 'sidebar',
                    content: [
                        {
                            block: 'menu',
                            mix: [{ block: 'i-geo', elem: 'menu' }],
                            content: [
                                { 
                                    block: 'menu',
                                    placemarksGroupId: 'group-1',
                                    content: [
                                        { 
                                            elem: 'title', 
                                            content: 'Магазины с доставкой' 
                                        },
                                        { 
                                            elem: 'content', 
                                            content: [
                                                { 
                                                    elem: 'item',
                                                    placemarkId: 'group-1-1',
                                                    content: "«Рога и копыта» №2"
                                                },
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-1-2',
                                                    content: "«Рога и копыта» №3"
                                                },
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-1-3',
                                                    content: "«Рога и копыта» №3"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'menu',
                                    placemarksGroupId: 'group-2',
                                    content: [
                                        {
                                            elem: 'title',
                                            content: 'Магазины с банковскими платежами'
                                        }, 
                                        {
                                            elem: 'content',
                                            content: [
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-2-1',
                                                    content: "«Рога и копыта» №1"
                                                },
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-2-2',
                                                    content: "«Рога и копыта» №2"
                                                },
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-2-3',
                                                    content: "«Рога и копыта» №3"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'menu',
                                    placemarksGroupId: 'group-3',
                                    content: [
                                        {
                                            elem: 'title',
                                            content: "Просто магазины"
                                        },
                                        {
                                            elem: 'content',
                                            content: [
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-3-1',
                                                    content: "«Рога и копыта» №1"
                                                },
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-3-2',
                                                    content: "«Рога и копыта» №2"
                                                },
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-3-3',
                                                    content: "«Рога и копыта» №3"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});