function initialize() {
	if (navigator.geolocation) {
		generateMap();
		getSchedule();
		addRedLine();
		getCarmenWaldo();
		navigator.geolocation.getCurrentPosition(dispPosition);
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

	request.onreadystatechange = function () {
		    if (request.readyState == 4 && request.status == 200) {
		        trains = JSON.parse(request.responseText);
		    } 
		}
}

function getCarmenWaldo () {
	try {
		CWrequest = new XMLHttpRequest();
	} catch (err) {
		alert("Sorry, request not supported.")
	}

	CWrequest.open("GET", "http://messagehub.herokuapp.com/a3.json", true);
	CWrequest.send();

	CWrequest.onreadystatechange = function () {
		    if (CWrequest.readyState == 4 && CWrequest.status == 200) {
		        CW = JSON.parse(CWrequest.responseText);
		        dispCW();
		    } 
		}
}

function dispCW () {
	for (var i = 0; i < CW.length; i++) {
		if (CW[i].name == "Waldo" || CW[i].name == "Carmen Sandiego") {
			if (CW[i].name == "Waldo")
				img = "waldo.png";
			else
				img = "carmen.png";
			
			pos = new google.maps.LatLng(CW[i].loc.latitude, CW[i].loc.longitude);
			mark = new google.maps.Marker({position: pos, title: CW[i].name, icon: img});

			mark.setMap(map);
		}
	};
}

function generateMap() {
	latlng = new google.maps.LatLng(42.4019, -71.1193);
	myOptions = {
		center : latlng,
		mapTypeId : google.maps.MapTypeId.ROADMAP,
		zoom : 11
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

function addRedLine() {
	var redStations = [];
	var redBranchBraintree = [];
	var redBranchAshmont = [];

	tico = "t_icon.png";

	markers = [];
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

	stations = []
		stations["RALEN"] = {"direction":"NB", "name":"Alewife Station", "lat":"42.395428", "lng":"-71.142483"}
		stations["RDAVN"] = {"direction":"NB", "name":"Davis Station", "lat":"42.39674", "lng":"-71.121815"}
		stations["RDAVS"] = {"direction":"SB", "name":"Davis Station", "lat":"42.39674", "lng":"-71.121815"}
		stations["RPORN"] = {"direction":"NB", "name":"Porter Square Station", "lat":"42.3884", "lng":"-71.119149"}
		stations["RPORS"] = {"direction":"SB", "name":"Porter Square Station", "lat":"42.3884", "lng":"-71.119149"}
		stations["RHARN"] = {"direction":"NB", "name":"Harvard Square Station", "lat":"42.373362", "lng":"-71.118956"}
		stations["RHARS"] = {"direction":"SB", "name":"Harvard Square Station", "lat":"42.373362", "lng":"-71.118956"}
		stations["RCENN"] = {"direction":"NB", "name":"Central Square Station", "lat":"42.365486", "lng":"-71.103802"}
		stations["RCENS"] = {"direction":"SB", "name":"Central Square Station", "lat":"42.365486", "lng":"-71.103802"}
		stations["RKENN"] = {"direction":"NB", "name":"Kendall/MIT Station", "lat":"42.36249079", "lng":"-71.08617653"}
		stations["RKENS"] = {"direction":"SB", "name":"Kendall/MIT Station", "lat":"42.36249079", "lng":"-71.08617653"}
		stations["RMGHN"] = {"direction":"NB", "name":"Charles/MGH Station", "lat":"42.361166", "lng":"-71.070628"}
		stations["RMGHS"] = {"direction":"SB", "name":"Charles/MGH Station", "lat":"42.361166", "lng":"-71.070628"}
		stations["RPRKN"] = {"direction":"NB", "name":"Park St. Station", "lat":"42.35639457", "lng":"-71.0624242"}
		stations["RPRKS"] = {"direction":"SB", "name":"Park St. Station", "lat":"42.35639457", "lng":"-71.0624242"}
		stations["RDTCN"] = {"direction":"NB", "name":"Downtown Crossing Station", "lat":"42.355518", "lng":"-71.060225"}
		stations["RDTCS"] = {"direction":"SB", "name":"Downtown Crossing Station", "lat":"42.355518", "lng":"-71.060225"}
		stations["RSOUN"] = {"direction":"NB", "name":"South Station", "lat":"42.352271", "lng":"-71.055242"}
		stations["RSOUS"] = {"direction":"SB", "name":"South Station", "lat":"42.352271", "lng":"-71.055242"}
		stations["RBRON"] = {"direction":"NB", "name":"Broadway Station", "lat":"42.342622", "lng":"-71.056967"}
		stations["RBROS"] = {"direction":"SB", "name":"Broadway Station", "lat":"42.342622", "lng":"-71.056967"}
		stations["RANDN"] = {"direction":"NB", "name":"Andrew Station", "lat":"42.330154", "lng":"-71.057655"}
		stations["RANDS"] = {"direction":"SB", "name":"Andrew Station", "lat":"42.330154", "lng":"-71.057655"}
		stations["RJFKN"] = {"direction":"NB", "name":"JFK/UMass Station", "lat":"42.320685", "lng":"-71.052391"}
		stations["RJFKS"] = {"direction":"SB", "name":"JFK/UMass Station", "lat":"42.320685", "lng":"-71.052391"}
		stations["RSAVN"] = {"direction":"NB", "name":"Savin Hill Station", "lat":"42.31129", "lng":"-71.053331"}
		stations["RSAVS"] = {"direction":"SB", "name":"Savin Hill Station", "lat":"42.31129", "lng":"-71.053331"}
		stations["RFIEN"] = {"direction":"NB", "name":"Fields Corner Station", "lat":"42.300093", "lng":"-71.061667"}
		stations["RFIES"] = {"direction":"SB", "name":"Fields Corner Station", "lat":"42.300093", "lng":"-71.061667"}
		stations["RSHAN"] = {"direction":"NB", "name":"Shawmut Station", "lat":"42.29312583", "lng":"-71.06573796"}
		stations["RSHAS"] = {"direction":"SB", "name":"Shawmut Station", "lat":"42.29312583", "lng":"-71.06573796"}
		stations["RASHS"] = {"direction":"SB", "name":"Ashmont Station", "lat":"42.284652", "lng":"-71.064489"}
		stations["RNQUN"] = {"direction":"NB", "name":"North Quincy Station", "lat":"42.275275", "lng":"-71.029583"}
		stations["RNQUS"] = {"direction":"SB", "name":"North Quincy Station", "lat":"42.275275", "lng":"-71.029583"}
		stations["RWOLN"] = {"direction":"NB", "name":"Wollaston Station", "lat":"42.2665139", "lng":"-71.0203369"}
		stations["RWOLS"] = {"direction":"SB", "name":"Wollaston Station", "lat":"42.2665139", "lng":"-71.0203369"}
		stations["RQUCN"] = {"direction":"NB", "name":"Quincy Center Station", "lat":"42.251809", "lng":"-71.005409"}
		stations["RQUCS"] = {"direction":"SB", "name":"Quincy Center Station", "lat":"42.251809", "lng":"-71.005409"}
		stations["RQUAN"] = {"direction":"NB", "name":"Quincy Adams Station", "lat":"42.233391", "lng":"-71.007153"}
		stations["RQUAS"] = {"direction":"SB", "name":"Quincy Adams Station", "lat":"42.233391", "lng":"-71.007153"}
		stations["RBRAS"] = {"direction":"SB", "name":"Braintree Station", "lat":"42.2078543", "lng":"-71.0011385"}

	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
		google.maps.event.addListener(markers[i], 'click',
			function() {
				stopName = this.title;
				wind = new google.maps.InfoWindow();
				makeSchedule(this);
				wind.setContent(content);
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

function makeSchedule(stop) {
	if (request.readyState != 4 || request.status != 200)
		console.log("ERROR: Scheduling data not found!");

	content = "<h1>"+stop["title"]+"</h1>";

	foundtrain = false;
	
	content += '<table id="schedule"><tr><th>Line</th><th>Trip #</th><th>Direction</th><th>Time Remaining</th></tr>';
	for (var i = 0; i < trains.length; i++) {
		if (stations[trains[i]["PlatformKey"]].name == stop["title"] && trains[i].InformationType == "Predicted") {
			foundtrain = true;
			content += '<tr><td>' + trains[i]["Line"] + '</td><td>' + trains[i].Trip + '</td><td>' + stations[trains[i].PlatformKey].direction + '</td><td>' + trains[i].TimeRemaining + '</td></tr>';
		}
	};
	if (!foundtrain)
		content += "<p>No schedule of upcoming trains for this station.</p>";
	content += "</table>";
}


function dispPosition(position) {
	latlng = new google.maps.LatLng(position.coords.latitude,
									position.coords.longitude)
	map.panTo(latlng);

	markerOpts = {
		map: map,
		position: latlng,
		visible: true
	}

	marker = new google.maps.Marker(markerOpts);

	poscontent = "<h1>YOU ARE HERE</h1>"
	closest = getClosestStop(position);
	poscontent += "<p>The closest station to you is " + closest + " which is approximately " + minDist + " miles away from you.</p>";

	var windowOpts = {
		content: poscontent
	}

	wind = new google.maps.InfoWindow(windowOpts);
	wind.open(map, marker);
}

function getClosestStop (position) {
	var close = "";
	minDist = 25000;
	for (i = 0; i < markers.length; i++) {
		var d = google.maps.geometry.spherical.computeDistanceBetween(latlng, markers[i].position)
		d = mtomi(d);
		if (d <= minDist) {
			minDist = d;
			close = markers[i].title;
		}
	}
	return close;
}

function mtomi (dist) {
	return dist*.00062137119;
}
