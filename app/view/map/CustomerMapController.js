Ext.define('MyApp.view.map.CustomerMapController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.customermap',

    onMarkerClick: function(map, info) {
        var me = this,
            view = me.getView(),
            grid = view.up('app-main').down('customergrid'),
            marker = info.marker,
            record = info.record;

        me.animateMarker(marker);
        
        grid.scrollToRecord(record);
        grid.getSelectable().selectRows(record, false, true);
    },

    animateMarker: function(marker) {
        var me = this;

        marker.setAnimation(google.maps.Animation.BOUNCE);

        // Clear the animation on the marker after 1.4 seconds
        Ext.defer(me.clearMarkerAnimation, 1400, me, [marker]);
    },

    clearMarkerAnimation: function(marker) {
        marker.setAnimation(null);
    }
});
