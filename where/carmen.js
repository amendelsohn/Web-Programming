function initialize() {
	if (navigator.geolocation) {
		generateMap();
		getSchedule();
		addRedLine();
		navigator.geolocation.getCurrentPosition(disPosition);
	} else {
		alert("Geolocation is not supported by your web browser.  What a shame!");
	}
}

function getSchedule () {
	try {
		request = new XMLHttpRequest();
	} catch (err) {
		alert("Sorry, request not supported.")
	}

	request.open("GET", "http://mbtamap-cedar.herokuapp.com/mapper/redline.json", true);
	request.send();

    if (request.readyState == 4 && request.status == 200) {
        schedule = JSON.parse(request.responseText);
	    console.log(schedule);
    } else if (request.readyState == 4 && request.status == 304) {
        schedule = JSON.parse(request.responseText);
	    console.log(schedule);
    } else
    	alert("ERROR: Scheduling data not found!");
}

function generateMap() {
	latlng = new google.maps.LatLng(42.4019, -71.1193);
	myOptions = {
		center : latlng,
		mapTypeId : google.maps.MapTypeId.ROADMAP,
		zoom : 14
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

function addRedLine() {
	var markers = [];
	var redStations = [];
	var redBranchBraintree = [];
	var redBranchAshmont = [];

	tico = "t_icon.png";

	pt = new google.maps.LatLng(42.395428, -71.142483);
		markers.push(new google.maps.Marker({position: pt, title: "Alewife Station", icon: tico}));
			redStations.push(pt);
		pt = new google.maps.LatLng(42.39674, -71.121815);
		markers.push(new google.maps.Marker({position: pt, title: "Davis Station", icon: tico}));
			redStations.push(pt);
		pt = new google.maps.LatLng(42.3884, -71.119149);
		markers.push(new google.maps.Marker({position: pt, title: "Porter Square Station", icon: tico}));
			redStations.push(pt);
		pt = new google.maps.LatLng(42.373362, -71.118956);
		markers.push(new google.maps.Marker({position: pt, title: "Harvard Square Station", icon: tico}));
			redStations.push(pt);
		pt = new google.maps.LatLng(42.365486, -71.103802);
		markers.push(new google.maps.Marker({position: pt, title: "Central Square Station", icon: tico}));
			redStations.push(pt);
		pt = new google.maps.LatLng(42.36249079, -71.08617653);
		markers.push(new google.maps.Marker({position: pt, title: "Kendall/MIT Station", icon: tico}));
			redStations.push(pt);
		pt = new google.maps.LatLng(42.361166, -71.070628);
		markers.push(new google.maps.Marker({position: pt, title: "Charles/MGH Station", icon: tico}));
			redStations.push(pt);
		pt = new google.maps.LatLng(42.35639457, -71.0624242);
		markers.push(new google.maps.Marker({position: pt, title: "Park St. Station", icon: tico}));
			redStations.push(pt);
		pt = new google.maps.LatLng(42.355518, -71.060225);
		markers.push(new google.maps.Marker({position: pt, title: "Downtown Crossing Station", icon: tico}));
			redStations.push(pt);
		pt = new google.maps.LatLng(42.352271, -71.055242);
		markers.push(new google.maps.Marker({position: pt, title: "South Station", icon: tico}));
			redStations.push(pt);
		pt = new google.maps.LatLng(42.342622, -71.056967);
		markers.push(new google.maps.Marker({position: pt, title: "Broadway Station", icon: tico}));
			redStations.push(pt);
		pt = new google.maps.LatLng(42.330154, -71.057655);
		markers.push(new google.maps.Marker({position: pt, title: "Andrew Station", icon: tico}));
			redStations.push(pt);
		pt = new google.maps.LatLng(42.320685, -71.052391);
		markers.push(new google.maps.Marker({position: pt, title: "JFK/UMass Station", icon: tico}));
			redStations.push(pt);
			redBranchAshmont.push(pt);
			redBranchBraintree.push(pt);
		pt = new google.maps.LatLng(42.31129, -71.053331);
		markers.push(new google.maps.Marker({position: pt, title: "Savin Hill Station", icon: tico}));
			redBranchAshmont.push(pt);
		pt = new google.maps.LatLng(42.275275, -71.029583);
		markers.push(new google.maps.Marker({position: pt, title: "North Quincy Station", icon: tico}));
			redBranchBraintree.push(pt);
		pt = new google.maps.LatLng(42.2665139, -71.0203369);
		markers.push(new google.maps.Marker({position: pt, title: "Wollaston Station", icon: tico}));
			redBranchBraintree.push(pt);
		pt = new google.maps.LatLng(42.300093, -71.061667);
		markers.push(new google.maps.Marker({position: pt, title: "Fields Corner Station", icon: tico}));
			redBranchAshmont.push(pt);
		pt = new google.maps.LatLng(42.251809, -71.005409);
		markers.push(new google.maps.Marker({position: pt, title: "Quincy Center Station", icon: tico}));
			redBranchBraintree.push(pt);
		pt = new google.maps.LatLng(42.29312583, -71.06573796);
		markers.push(new google.maps.Marker({position: pt, title: "Shawmut Station", icon: tico}));
			redBranchAshmont.push(pt);
		pt = new google.maps.LatLng(42.233391, -71.007153);
		markers.push(new google.maps.Marker({position: pt, title: "Quincy Adams Station", icon: tico}));
			redBranchBraintree.push(pt);
		pt = new google.maps.LatLng(42.284652, -71.064489);
		markers.push(new google.maps.Marker({position: pt, title: "Ashmont Station", icon: tico}));
			redBranchAshmont.push(pt);
		pt = new google.maps.LatLng(42.2078543, -71.0011385);
		markers.push(new google.maps.Marker({position: pt, title: "Braintree Station", icon: tico}));
			redBranchBraintree.push(pt);

	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
		google.maps.event.addListener(markers[i], 'click',
			function() {
				stopName = this.title;
				wind = new google.maps.InfoWindow();
				wind.setContent(this.title);
				wind.open(map, this);
			});
	};

	redLine = new google.maps.Polyline({
		path: redStations,
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 10
	});
	redLine.setMap(map);

	redLineAshmont = new google.maps.Polyline({
		path: redBranchAshmont,
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 10
	});
	redLineAshmont.setMap(map);

	redLineBraintree = new google.maps.Polyline({
		path: redBranchBraintree,
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 10
	});
	redLineBraintree.setMap(map);
}


function disPosition(position) {
	latlng = new google.maps.LatLng(position.coords.latitude,
									position.coords.longitude)
	map.panTo(latlng);

	markerOpts = {
		map: map,
		position: latlng,
		visible: true
	}

	marker = new google.maps.Marker(markerOpts);

	var windowOpts = {
		content: "<p>YOU ARE HERE</p>"
	}

	wind = new google.maps.InfoWindow(windowOpts);
	wind.open(map, marker);
}