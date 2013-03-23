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
            mix: [{ block: 'i-geo' }],
            content: [
                {
                    // Блок карты, который автоматически добавляет АПИ Яндекс.Карт и 
                    // инстанцирует карту в элемент с идентификатором myId.
                    block: 'map',
                    mods: { 'api': 'ymaps' },
                    // mix: [{ block: 'i-geo', elem: 'map' }],
                    // Параметры для загрузки АПИ Яндекс.Карт.
                    js: {
                        'lang': 'ru-RU',
                        'center': [55.7337, 37.5850],
                        'zoom': 12,
                        // Добавляем геообъекты на карту
                        'geoObjects': []
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