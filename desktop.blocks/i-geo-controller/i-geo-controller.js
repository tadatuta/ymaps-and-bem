BEM.DOM.decl('i-geo-controller', {
    onSetMod : {
        'js' : function () {
            // Слушаем состояние карты (нужно сделать надстройки).
            this.findBlockOn('map', 'map')
                .on('map-inited', this.onMapInited, this);

            // Слушаем меню (будем переключать метки / группы).
            this.findBlocksInside('menu').forEach(function (block) {
                block
                    .on('menuItemClick', this.onMenuItemClick, this)
                    .on('menuGroupClick', this.onMenuGroupClick, this);
            }, this);

        }
    },

    onMenuItemClick: function (e, data) {
        this.itemToggle(data.group);
    },

    onMenuGroupClick: function (e, data) {
        this.groupToggle(data.group);
    },

    onMapInited: function (e, data) {
        this.map = data.map;
        // Эту группу не будем добавлять на карту, 
        // чтобы помещённые в неё геообъекты были не видны.
        this._hidden = new ymaps.GeoObjectCollection();
    },

    /** 
     * Поиск нужной группу и добавление/удаление её с карты.
     * @param {String} id Идентификатор группы 
     */
    groupToggle: function (id) {
        var it, group;

        // Сначала ищем в видимой на карте коллекции.
        it = this.map.geoObjects.getIterator();
        while (group = it.getNext()) {
            if (group.properties.get('collection') && group.properties.get('id') === id) {
                this._hidden.add(group);
                return;
            }
        }

        // Если мы сюда попали, значит коллекция уже удалена и надо искать в удаленных.
        it = this._hidden.getIterator();
        while (group = it.getNext()) {
            if (group.properties.get('id') === id) {
                this.map.geoObjects.add(group);
                return;
            }
        }
    },

    /**
     * Поиск нужной метки и открытие/закрыте её балуна.
     * @param {String} id Идентификатор метки.
     */
    itemToggle: function (id) {
        var it = this.map.geoObjects.getIterator(),
            group;

        while(group = it.getNext()) {
            if (group.properties.get('collection')) {
                for (var i = 0, len = group.getLength(); i < len; i++) {
                    var placemark = group.get(i);

                    if (placemark.properties.get('id') === id) {
                        if (placemark.balloon.isOpen()) {
                            placemark.balloon.close();
                        }
                        else {
                            this.map.panTo(placemark.geometry.getCoordinates(), {
                                delay: 0,
                                callback: function () {
                                    placemark.balloon.open();
                                }
                            });
                        }
                        return;
                    }
                }
            }
        }
    }
});
