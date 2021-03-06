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
        },{
            items: [
                { iconCls: "anchor" },
                { iconCls: "box" },
                { iconCls: "upload" },
                { iconCls: "forbidden" },
                { iconCls: "lightning" },
                { iconCls: "rss" },
                { iconCls: "team" },
                { iconCls: "help" },
                { iconCls: "info" },
                { iconCls: "attachment" },
                { iconCls: "heart" },
                { iconCls: "list" },
                { iconCls: "music" },
                { iconCls: "table" },
                { iconCls: "folder" },
                { iconCls: "pencil" },
                { iconCls: "chat2" },
                { iconCls: "retweet" },
                { iconCls: "search" },
                { iconCls: "time" },
                { iconCls: "switch" },
                { iconCls: "camera" },
                { iconCls: "chat" },
                { iconCls: "settings2" },
                { iconCls: "settings" },
                { iconCls: "tags" }
            ]
        },{
            items: [
                { iconCls: "attachment2" },
                { iconCls: "bird" },
                { iconCls: "cloud" },
                { iconCls: "delete_black1" },
                { iconCls: "eye" },
                { iconCls: "file" },
                { iconCls: "browser" },
                { iconCls: "home" },
                { iconCls: "inbox" },
                { iconCls: "network" },
                { iconCls: "key" },
                { iconCls: "radio" },
                { iconCls: "mail" },
                { iconCls: "news" },
                { iconCls: "case" },
                { iconCls: "photos" },
                { iconCls: "power" },
                { iconCls: "action" },
                { iconCls: "favorites" },
                { iconCls: "plane" },
                { iconCls: "user" },
                { iconCls: "video" },
                { iconCls: "compose" },
                { iconCls: "truck" },
                { iconCls: "chart2" },
                { iconCls: "chart" }
            ]
        },{
            items: [
                { iconCls: "expand" },
                { iconCls: "refresh" },
                { iconCls: "check" },
                { iconCls: "check2" },
                { iconCls: "play" },
                { iconCls: "pause" },
                { iconCls: "stop" },
                { iconCls: "forward" },
                { iconCls: "rewind" },
                { iconCls: "play2" },
                { iconCls: "refresh2" },
                { iconCls: "minus" },
                { iconCls: "battery" },
                { iconCls: "left" },
                { iconCls: "right" },
                { iconCls: "calendar" },
                { iconCls: "shuffle" },
                { iconCls: "wireless" },
                { iconCls: "speedometer" },
                { iconCls: "more" },
                { iconCls: "print" }
            ]
        },{
            items: [
                { iconCls: "download" },
                { iconCls: "warning_black" },
                { iconCls: "locate" },
                { iconCls: "trash" },
                { iconCls: "cart" },
                { iconCls: "bank" },
                { iconCls: "flag" },
                { iconCls: "add" },
                { iconCls: "delete" },
                { iconCls: "lock" },
                { iconCls: "unlock" },
                { iconCls: "minus2" },
                { iconCls: "add2" },
                { iconCls: "up" },
                { iconCls: "down" },
                { iconCls: "screens" },
                { iconCls: "bell" },
                { iconCls: "quote" },
                { iconCls: "volume_mute" },
                { iconCls: "volume" },
                { iconCls: "help" }
            ]
        },{
            items: [
                { iconCls: "twitter" },
                { iconCls: "github" },
                { iconCls: "android" }
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
