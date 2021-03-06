BEM.DOM.decl('menu', {
    onElemSetMod: {
        'js': function () {
            var groups = this.findBlockOutside('menu');
            BEM.blocks['menu']
                .liveCtxBind(groups, 'menuItemClick', function (e, data) { console.log(data) } );
        },
        //Будем реагировать на изменение состояния элемента item
        'item': {
            // когда у него будет меняться модификатор state,
            'state': function (elem, modName, modVal) {
                // Когда мы получили состояние объекта, нам нужно оповестить другие блоки о том, что 
                // произошло. Для этого мы вызываем trigger и говорим, что произошло menuItemClick, 
                // заодно передаём важные параметры: элемент и его идентификатор метки. 
                this.trigger('menuItemClick', {
                    domElem : elem,
                    group: elem.data('group')
                });
            }
        },
        // и элемента content
        'content': {
            'state': function (elem, modName, modVal) {
                this.trigger('menuGroupClick', {
                    domElem : elem,
                    group: elem.parent().data('group'),
                });
            }
        }
    },

    onTriggerElemClick: function (e) {
        e.preventDefault();
        var el = e.data.domElem;
        // потом точечно включим у того, по которому нажали.
        this.toggleMod(el, 'state', 'active');
    },

    onTriggerGroupClick: function (e) {
        e.preventDefault();
        var el = e.data.domElem,
            groupEl = this.elem('content'),
            groupId = el.parent().data('group');

        // Сворачиваем группу.
        groupEl.slideToggle();
        this.toggleMod(groupEl, 'state', 'fold');
        // Выделяем заголовок группы.
        this.toggleMod(el, 'state', 'fold');
    }
}, {
    live: function () {
        // Вешаем слушатель на клик.
        this.liveBindTo('item', 'click', function (e) {
            this.onTriggerElemClick(e);
        });

        this.liveBindTo('title', 'click', function (e) {
            this.onTriggerGroupClick(e);
        });

        this.on('menuItemClick', function (e, data) {
            // Педалька.
            // Почему-то не срабатывает delMod.
            var activeState = this.buildSelector('item', 'state', 'active').substr(1);
            this.lastSelected && this.lastSelected.removeClass(activeState);
            this.lastSelected = data.domElem;
        });
    }
});
