'use strict';

(function ($) {
    var getEntries,
        parseEntries,
        displayEntries,
        makeMap,
        likesArr = [];


    getEntries = function getEntriesF() {
        var req;

        req = $.ajax({
            url: 'http://api.dribbble.com/players/simplebits/shots',
            dataType: 'jsonp',
            type: 'GET'
        });

        req.done(parseEntries);
    };

    parseEntries = function parseEntriesF(data) {
        var i = 0,
            shots = data.shots;

        for (i = shots.length; i--;) {
            likesArr.push({
                value: shots[i].likes_count,
                color: '#ccc'
            });
        }

        displayEntries();
    };

    displayEntries = function displayEntriesF() {
        var ctx = document.getElementById('myChart').getContext('2d'),
            polarChart = new Chart(ctx).PolarArea(likesArr);
            console.log(likesArr);

    };

    makeMap = function makeMapF() {
        var markerArr = [{
            title: 'mica',
            lng: -76.621495,
            lat: 39.307516,
        }, {
            title: 'inner harbor',
            lng: -76.621495,
            lat: 39.307516,

        }];


        var map = new GMaps({
            div: '#map',
            lng: -76.621495,
            lat: 39.307516
        });

/* //this adds a single marker
        map.addMarker({
             lng: -76.621495,
             lat: 39.307516,
             title: 'Inner Harbor Baltimore',
             icon: {
                url: 'https://danube.mica.edu/parking/images/MICA_Logo_BW.jpg',
                size: new google.maps.Size(300,100);
             },
             infoWindow: {
                content: '<p>Look, its the Inner Harbor.</p>'
             }
        });

    };

    */


    for (var i = markerArr.length; i--;) {
        map.addMarker ({
            lng: markerArr[i].lng,
            lat: markerArr[i].lat,
            title: markerArr[i].title
        });

    }

};


    getEntries();
    makeMap ();

})(jQuery);

