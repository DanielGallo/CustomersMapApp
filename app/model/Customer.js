Ext.define('MyApp.model.Customer', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'name'
    }, {
        name: 'address'
    }, {
        name: 'lat',
        format: 'double'
    }, {
        name: 'lng',
        format: 'double'
    }, {
        name: 'licenses',
        format: 'integer'
    }]
});
