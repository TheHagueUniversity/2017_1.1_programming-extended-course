
// on page load show map
document.onload = function() {
	initMap();
};

// init map
var map;

function initMap() {

	// set pointer coordinates 
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 19.8968, lng: -155.5828},
		zoom: 7
	});
}
