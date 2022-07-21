let marker, map;

function initMap() {
    const posicion = {
        lat: 40.416775,
        lng: -3.703790
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    });

    markers.push(
        new google.maps.Marker({
            position: {
                lat: 40.453053,
                lng: -3.688344
            },
            map,
            title: "Estadio del Madrid",
        })
    );
    markers.push(
        new google.maps.Marker({
            position: {
                lat: 41.380898,
                lng: 2.122820
            },
            map,
            title: "Estadio del Barcelona",
        })
    );
    markers.push(
        new google.maps.Marker({
            position: {
                lat: 20.684285,
                lng: -88.567783,
            },
            map,
            title: "Chichén-Itzá, Mexico",
        })
    );
}