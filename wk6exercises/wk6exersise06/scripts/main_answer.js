
/**
 * On load start map
 */
document.onload = function() {
	initMap();
};

/**
 * Initialize map
 */
function initMap() {

	var customStyle = getCustomStyle();

	// set pointer coordinates 
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 24, lng: -168},
		zoom: 5,
		styles: customStyle
	});

	addMarkers(map);
}

/**
 * Add some markers
 *
 * @param Google map Object
 */
function addMarkers(map) {
	// get all locations	
	var locations = getLocationArray();

	for(var i = 0; i < locations.length; i++) {

		// set info
		var info = addInfoWindow(locations[i].content);

		// set icon
		var icons = getIcons();

		// init marker
		var marker = addMarker(map, locations[i].coordinates, locations[i].title, icons[i]);

		// add click event on map
		addListener(map, marker, info);
	}
}

/**
 * Add single marker
 *
 * @param Google map object
 * @param Coordinates object
 * @param Title string
 * @param Icon image string
 * @return Marker object
 */
function addMarker(map, mapCoordinates, title, icon) {
	return new google.maps.Marker({
		position: mapCoordinates,
		map : map,
		title: title,
		icon: icon
	});
}

/**
 * Add info popup
 *
 * @param popupContent string
 * @return InfoWindow object
 */
function addInfoWindow(popupContent) {
	return new google.maps.InfoWindow({
		content: popupContent,
		maxWidth: 350
	});
}

/**
 * Add Google maps listener
 *
 * @param Google map object
 * @param Marker object
 * @param InfoWindow object
 */
function addListener(map, marker, infowindow) {
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}

/**
 * Get all locations 
 *
 * @return Locations array
 */
function getLocationArray() {

	var locations = [];

	// store hawaii
	locations.push({
		coordinates: {lat: 19.8968, lng: -155.5828},
		content: '<img src="images/hawaii.jpg" alt="Hawaii beach" > The Hawaiian Islands is a travel destination that appears on almost every persons bucket list. Often known as a luxury destination, Hawaii can very much be enjoyed on a budget. Hawaii is warm year-round and most popular during the winter months, when surfing conditions are optimal and whales travel offshore.',
		title: 'Hawaii'
	});
	
	// store midway
	locations.push({
		coordinates: {lat: 28.2, lng: -177.35},
		content: '<img src="images/midway.jpg" alt="Midway airport" > Midway Atoll is part of a chain of volcanic islands, atolls, and seamounts extending from Hawaii up to the tip of the Aleutian Islands. Approximately 40 to 60 people live on the atoll, which includes staff of the US Fish and Wildlife Service and contract workers',
		title: 'Miday Atoll'
	});

	// store wake
	locations.push({
		coordinates: {lat: 19.28250, lng: -166.63667},
		content: '<img src="images/wake.jpg" alt="Wake rock" > Wake Island is a tiny island in Micronesia in the Pacific Ocean, located 2/3 of the way from Honolulu to Guam, best known for its role in World War II.',
		title: 'Miday Atoll'
	});

	return locations;
}

/**
 * Get styles
 *
 * @return Google maps style object
 */
function getCustomStyle() {	
	return [{
		"featureType": "water",
		"elementType": "geometry.fill",
		"stylers": [
		  {
			"color": "#1d9dd3"
		  }
		]
	  }
	];
}

/**
 * Get icons
 *
 * @return Google maps style object
 */
function getIcons() {	
	return [
		'images/cocktail.png',
		'images/ball.png', 
		'images/surf.png'
	];
}
