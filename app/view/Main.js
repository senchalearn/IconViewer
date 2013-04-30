Ext.define('IconViewer.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'mainview',
    requires: [
        'IconViewer.view.Index',
        'IconViewer.view.TwitterSearch',
    ],

    config: {
        ui: 'dark',
        tabBar: {
            docked: 'bottom',
            scrollable: 'horizontal',
            layout: {
                pack: 'center'
            }
        },
        items: [{
            xtype: 'indexcard'
        },{
            xtype: 'twittersearch'
        }]
    }
});
