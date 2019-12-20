Ext.define('MyApp.view.grid.CustomerGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'customergrid',

    controller: 'customergrid',

    title: 'Customers',
    bind: '{customers}',

    columns: [{ 
        text: 'Name', 
        dataIndex: 'name', 
        flex: 1 
    }, {
        text: 'Address',
        dataIndex: 'address',
        minWidth: 200,
        flex: 2,
        platformConfig: {
            '!desktop': {
                hidden: true
            }
        }
    }, {
        text: 'Licenses',
        dataIndex: 'licenses',
        width: 100
    }],

    listeners: {
        selectionchange: 'onSelectionChange'
    }
});