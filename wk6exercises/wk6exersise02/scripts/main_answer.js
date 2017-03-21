
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

	// store location
	var mapCoordinates = {lat: 19.8968, lng: -155.5828};

	// set pointer coordinates 
	var map = new google.maps.Map(document.getElementById('map'), {
		'center': mapCoordinates,
		'zoom': 7
	});

	// create maker
	var marker = new google.maps.Marker({
		'position': mapCoordinates,
		'map' : map,
		'title': 'Hawaii Islands'
	});
}
