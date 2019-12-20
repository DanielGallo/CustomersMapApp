Ext.define('MyApp.view.map.CustomerGridController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.customergrid',

    onSelectionChange: function(grid, selection) {
        var me = this,
            view = me.getView(),
            record = selection[0],
            customerMap = view.up('app-main').down('customermap'),
            mapController = customerMap.getController(),
            gmap = customerMap.down('map'),
            marker = gmap.getMarkerForRecord(record);
        
        gmap.setMapCenter(record);

        mapController.animateMarker(marker);
    }
});