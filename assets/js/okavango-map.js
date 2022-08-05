var map;
var InforObj = [];
var centerCords = {
    lat: -19.5839496,
    lng: 22.8434128
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
        placeName: "Pom Pom Camp",
        photo:"./assets/images/okavango/Pom-Pom-Camp.jpg",
        description:"North-West District,Botswana <hr><p>This is a luxury relaxed place to lodge in</p>",
        LatLng: [{
            lat: -19.5839496,
            lng: 22.8434128
        }], 
        type:'camp'
    },
    {
        placeName: "Gunn's Camp",
        photo:"./assets/images/okavango/Gunns-Camp.jpg",
        description:"North-West District,Botswana",
        LatLng: [{
            lat: -19.5273432,
            lng: 23.1422763
        }], 
        type:'camp'
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
        placeName: "Nxabega Okavango Tented Camp",
        photo:"./assets/images/okavango/Nxabega-Okavango-Tented-Camp.jpg",
        description:"North-West District,Botswana",
        LatLng: [{
            lat: -19.4847889,
            lng: 22.794011
        }],
        type:'camp'
    },
    {
        placeName: "Xaranna Okavango Delta Camp",
        photo:"assets/images/okavango/xaranna-camp.jpg",
        description:"North-West District,Botswana",
        LatLng: [{
            lat: -19.7140699,
            lng: 22.885103
        }],
        type:'camp'
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
        zoom: 11,
        center: centerCords
    });
    addMarkerInfo();
}