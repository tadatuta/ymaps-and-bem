({
    block: 'b-page',
    title: 'Карта объектов компании «Лёлика и Болика»',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        // Сначала описываем враппер, который будет оборачивать
        // наши блоки map и sidebar.
        // К нему примиксуем i-geo-controller, чтобы можно было без труда
        // управлять общением блоков
        {
            block: 'container',
            mix: [{ block: 'i-geo-controller', js: true }],
            content: [
                {
                    // Блок карты, который автоматически добавляет АПИ Яндекс.Карт.
                    block: 'map',
                    mods: { 'api': 'ymaps' },
                    mix: [{ block: 'i-geo-controller', elem: 'map' }],
                    // Параметры для загрузки АПИ Яндекс.Карт.
                    js: {
                        'lang': 'ru-RU',
                        'center': [50.426472, 30.563022],
                        'zoom': 12,
                        // Добавляем геообъекты на карту.
                        'geoObjects': [
                            {
                                collection: true,
                                properties: {
                                    id: 'group-1',
                                    name: 'Рестораны, кафе',
                                    // Нужно для нашего алгоритма переключения меток,
                                    // чтобы не путать с обычными метками, добавленными на карту.
                                    collection: true
                                },
                                options: {
                                    preset: 'twirl#orangeIcon'
                                },
                                data: [
                                    { coords: [50.426472, 30.563022], properties: { id: 'group-1-1', balloonContent: 'Бистро «Михалыч»' } },
                                    { coords: [50.45351, 30.516489],  properties: { id: 'group-1-2', balloonContent: 'Кафе «Where I am?»' } },
                                    { coords: [50.454433, 30.529874], properties: { id: 'group-1-3', balloonContent: 'Ресторан «Жемчужина»' } }
                                ]
                            },
                            {
                                collection: true,
                                properties: {
                                    id: 'group-2',
                                    name: 'Салоны красоты',
                                    collection: true
                                },
                                options: {
                                    preset: 'twirl#redIcon'
                                },
                                data: [
                                    { coords: [50.50955, 30.60791],   properties: { id: 'group-2-1', balloonContent: 'Cалон красоты «Роксана»' } },
                                    { coords: [50.429083, 30.521708], properties: { id: 'group-2-2', balloonContent: 'Салон красоты «Фьюче»' } },
                                    { coords: [50.450843, 30.498271], properties: { id: 'group-2-3', balloonContent: 'Салон красоты «Багира»' } }
                                ]
                            },
                            {
                                collection: true,
                                properties: {
                                    id: 'group-3',
                                    name: 'Отдых и развлечения',
                                    collection: true
                                },
                                options: {
                                    preset: 'twirl#greenIcon'
                                },
                                data: [
                                    { coords: [50.443334, 30.520163], properties: { id: 'group-3-1', balloonContent: 'Парк аттракционов «Лёлик и Болик»' } },
                                    { coords: [50.446977, 30.505269], properties: { id: 'group-3-2', balloonContent: 'Ночной клуб «Палата №6»' } },
                                    { coords: [50.452512, 30.530889], properties: { id: 'group-3-3', balloonContent: 'Ирландский паб' } }
                                ]
                            }
                        ],
                        // Устанавливать ли bounds карты по области,
                        // охватывающей все геообъекты.
                        'setupBoundsByGeoObjects': true,
                        // Включить / выключить слой OSM тайлов.
                        'setupOSMTiles': false
                    }
                },
                {
                    block: 'sidebar',
                    content: [
                        {
                            block: 'menu',
                            mix: [{ block: 'i-geo-controller', elem: 'menu' }],
                            content: [
                                {
                                    block: 'menu',
                                    placemarksGroupId: 'group-1',
                                    content: [
                                        {
                                            elem: 'title',
                                            content: 'Рестораны, кафе'
                                        },
                                        {
                                            elem: 'content',
                                            content: [
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-1-1',
                                                    content: "Бистро «Михалыч»"
                                                },
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-1-2',
                                                    content: "Кафе «Where I'm?»"
                                                },
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-1-3',
                                                    content: "Ресторан «Жемчужина»"
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
                                            content: 'Салоны красоты'
                                        },
                                        {
                                            elem: 'content',
                                            content: [
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-2-1',
                                                    content: "Cалон красоты «Роксана»"
                                                },
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-2-2',
                                                    content: "Салон красоты «Фьюче»"
                                                },
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-2-3',
                                                    content: "Салон красоты «Багира»"
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
                                            content: 'Отдых и развлечения'
                                        },
                                        {
                                            elem: 'content',
                                            content: [
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-3-1',
                                                    content: "Парк аттракционов «Лёлик и Болик»"
                                                },
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-3-2',
                                                    content: "Ночной глуб «Палата №6»"
                                                },
                                                {
                                                    elem: 'item',
                                                    placemarkId: 'group-3-3',
                                                    content: "Ирландский паб"
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