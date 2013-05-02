Ext.define('IconViewer.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            iconButton:  'toolbar button',
            indexCard: 'indexcard'
        },
        control: {
            iconButton: {
                tap: 'showIconName'
            }
        }
    },

    showIconName: function(button) {
        var iconStyle = this.getIconStyle(button);
        this.getIndexCard().setData({
            'name': button.getIconCls(),
            'font': iconStyle.getPropertyValue('font-family'),
            'char': iconStyle.getPropertyValue('content')
        });
    },

    getIconStyle: function(button) {
        var iconSpan = button.element.dom.children[1];
        return window.getComputedStyle(iconSpan, 'before');
    }

});