var map;
var InforObj = [];
var centerCords = {
    lat: -18.5473883,
    lng: 25.6367536
};

const icons = {
camp: {
    icon: './assets/images/camp.png',
},
lodge: {
    icon: './assets/images/lodge.jpg',
},
};


var markersOnMap = [{
        placeName: "Chobe Game Lodge",
        photo:"./assets/images/national-park/Chobe-Game-Lodge.jpg",
        description:"A33, Pandamatenga, Botswana <hr><p>This is a luxury relaxed place to lodge in</p>",
        LatLng: [{
            lat: -17.8066002,
            lng: 25.6367536
        }], 
        type:'lodge'
    },
    {
        placeName: "Chobe Safari Lodge",
        photo:"./assets/images/national-park/Chobe-Safari-Lodge.jpg",
        description:"River Road, Kasane, Botswana",
        LatLng: [{
            lat: -17.8059526,
            lng: 25.1465353
        }], 
        type:'lodge'
    },
    {
        placeName: "Xudum Okavango Delta Lodge",
        photo:"./assets/images/okavango/Xudum-Lodge.jpg",
        description:"North-West District,Botswana",
        LatLng: [{
            lat: -19.6324421,
            lng: 22.8989629
        }],
        type:'lodge'
    },
    {
        placeName: "Chobe Under Canvas",
        photo:"./assets/images/national-park/Chobe-Under-Canvas.jpg",
        description:"Victoria Falls Road, Kazungula, Botswana",
        LatLng: [{
            lat: -17.8066002,
            lng: 25.2472243
        }],
        type:'camp'
    },
    {
        placeName: "Chobe Bush Lodge",
        photo:"assets/images/okavango/xaranna-camp.jpg",
        description:" River Road, Kasane, Botswana",
        LatLng: [{
            lat: -17.807146,
            lng: 25.1474294
        }],
        type:'lodge'
    }
];

window.onload = function () {
    initMap();
    weatherInfo();
};

function addMarkerInfo() {
    for (var i = 0; i < markersOnMap.length; i++) {
        var contentString = '<div id="content"><img src=' + markersOnMap[i].photo + ' width="100%"  /><h3>' + markersOnMap[i].placeName +
            '</h3>'+ markersOnMap[i].description +'</div>';

        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            icon:icons[markersOnMap[i].type].icon,
            map: map
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 350
        });

        marker.addListener('click', function () {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            InforObj[0] = infowindow;
        });
        //  marker.addListener('mouseover', function () {
        //      closeOtherInfo();
        //      infowindow.open(marker.get('map'), marker);
        //      InforObj[0] = infowindow;
        //  });
        //  marker.addListener('mouseout', function () {
        //      closeOtherInfo();
        //      infowindow.close();
        //      InforObj[0] = infowindow;
        //  });
    }
}

function closeOtherInfo() {
    if (InforObj.length > 0) {
        /* detach the info-window from the marker ... undocumented in the API docs */
        InforObj[0].set("marker", null);
        /* and close it */
        InforObj[0].close();
        /* blank the array */
        InforObj.length = 0;
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: centerCords
    });
    addMarkerInfo();
}