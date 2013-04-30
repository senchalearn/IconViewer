Ext.define('IconViewer.view.Index', {
    extend: 'Ext.Container',
    xtype: 'indexcard',

    config: {
        iconCls: 'home',
        title: 'home',
        styleHtmlContent: true,
        scrollable: 'vertical',
        cls: 'styledContent',
        defaults: {
            xtype: 'toolbar',
            docked: 'top',
            scrollable: 'horizontal',
            defaults: {
                iconMask: true,
                ui: 'plain'
            },
        },
        items: [{
            docked: 'bottom',
            items: [
                // default icons
                { iconCls: 'action' },
                { iconCls: 'add' },
                { iconCls: 'arrow_down' },
                { iconCls: 'arrow_left' },
                { iconCls: 'arrow_right' },
                { iconCls: 'arrow_up' },
                { iconCls: 'bookmarks' },
                { iconCls: 'calendar' },
                { iconCls: 'compose' },
                { iconCls: 'delete' },
                { iconCls: 'download' },
                { iconCls: 'favorites' },
                { iconCls: 'home' },
                { iconCls: 'info' },
                { iconCls: 'locate' },
                { iconCls: 'maps' },
                { iconCls: 'more' },
                { iconCls: 'organize' },
                { iconCls: 'refresh' },
                { iconCls: 'reply' },
                { iconCls: 'search' },
                { iconCls: 'settings' },
                { iconCls: 'star' },
                { iconCls: 'team' },
                { iconCls: 'time' },
                { iconCls: 'trash' },
                { iconCls: 'user' }
            ]
        }],
        tpl: [
            '<tpl if="name == \'_initial_\'">',
            '  Click an icon to discover its name',
            '<tpl else>',
            '  <dl>',
            '    <dt>icon:</dt><dd>{name}</dd>',
            '    <dt>font:</dt><dd>{font}</dd>',
            '    <dt>char:</dt><dd>{char}</dd>',
            '  </dl>',
            '</tpl>',
        ],
        data: {name: '_initial_'}
    }
});
