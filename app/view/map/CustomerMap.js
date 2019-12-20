Ext.define('MyApp.view.map.CustomerMap', {
    extend: 'Ext.Panel',
    xtype: 'customermap',
    
    controller: 'customermap',

    requires: [
        'Ext.ux.google.Map'
    ],

    title: 'Locations',
    layout: 'fit',

    items: [{
        xtype: 'map',
        mapOptions: {
            center: {
                latitude: 51.511580,
                longitude: -0.119976
            },
            zoom: 16
        },
        bind: {
            markers: '{customers}'
        },
        markerTemplate: {
            title: '{name}',
            position: {
                lat: '{lat}',
                lng: '{lng}'
            }
        },
        listeners: {
            markerclick: 'onMarkerClick'
        }
    }]
});