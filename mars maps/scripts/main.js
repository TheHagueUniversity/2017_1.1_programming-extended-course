
/**
 * On page load show map
 */
document.onload = function() {
	initMap();
};

/**
 * Initialize map
 */
function initMap() {

	// set pointer coordinates 
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 19.8968, lng: -155.5828},
		zoom: 7,
		map: 'NASA_MARS_VISIBLE_MAP'
	});
}
