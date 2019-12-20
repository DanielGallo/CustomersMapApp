Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    controller: 'main',
    viewModel: 'main',

    platformConfig: {
        desktop: {
            layout: 'hbox'
        },
        '!desktop': {
            layout: 'vbox'
        }
    },

    padding: 6,

    items: [{
        xtype: 'customergrid',
        reference: 'customergrid',
        flex: 1,
        platformConfig: {
            desktop: {
                margin: '0px 6px 0px 0px',
                minWidth: 350
            },
            '!desktop': {
                margin: '0px 0px 6px 0px',
                minHeight: 250
            }
        }
    }, {
        xtype: 'customermap',
        reference: 'customermap',
        flex: 2
    }]
});
