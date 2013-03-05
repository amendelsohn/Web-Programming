	function initialize()
	{
		latlng = new google.maps.LatLng(42, -71);
		myOptions = {
			center = LatLng(lat:42, lng:-71, noWrap?:true),
			mapTypeId = ROADMAP,
			zoom = 8
		};
		map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	}