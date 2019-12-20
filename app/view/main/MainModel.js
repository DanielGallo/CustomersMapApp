Ext.define('MyApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    stores: {
        customers: {
            model: 'MyApp.model.Customer',
            sorters: 'name',
            data: [{
                name: 'Royal Opera House',
                address: 'The Piazza, Covent Garden, London, WC2E 8HD',
                licenses: 23,
                lat: 51.512912,
                lng: -0.122204
            }, {
                name: 'Lyceum Theatre',
                address: '21 Wellington St, Covent Garden, London, WC2E 7RQ',
                licenses: 10,
                lat: 51.511580, 
                lng: -0.119976
            }, {
                name: 'Novello Theatre',
                address: 'Aldwych, London, WC2B 4LD',
                licenses: 5,
                lat: 51.512331, 
                lng: -0.119183
            }, {
                name: 'Peacock Theatre',
                address: 'Portugal St, Holborn, London, WC2A 2HT',
                licenses: 9,
                lat: 51.514594, 
                lng: -0.118002
            }, {
                name: 'Somerset House',
                address: 'Strand, London, WC2R 1LA',
                licenses: 2,
                lat: 51.511075, 
                lng: -0.117144
            }, {
                name: 'Savoy Theatre',
                address: 'Savoy Ct, London, WC2R 0ET',
                licenses: 7,
                lat: 51.510353,
                lng: -0.120804
            }, {
                name: 'National Portrait Gallery',
                address: 'St. Martin\'s Pl, Charing Cross, London, WC2H 0HE',
                licenses: 3,
                lat: 51.509445,
                lng: -0.128143
            }, {
                name: 'National Theatre',
                address: 'Upper Ground, Lambeth, London, SE1 9PX',
                licenses: 20,
                lat: 51.507010,
                lng: -0.114232
            }, {
                name: 'Cambridge Theatre',
                address: 'Earlham St, London, WC2H 9HU',
                licenses: 5,
                lat: 51.513656,
                lng: -0.126594
            }]
        }
    }
});