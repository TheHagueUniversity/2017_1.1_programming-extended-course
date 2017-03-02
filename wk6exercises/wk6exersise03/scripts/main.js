
// on page load show map
document.onload = function() {
	initMap();
};

function initMap() {

	// store location
	var mapCoordinates = {lat: 19.8968, lng: -155.5828};

	// set pointer coordinates 
	var map = new google.maps.Map(document.getElementById('map'), {
		center: mapCoordinates,
		zoom: 7
	});

 	// set popup content
	var popupContent = '<img src="images/hawaii.jpg" alt="Hawaii beach" > The Hawaiian Islands is a travel destination that appears on almost every persons bucket list. Often known as a luxury destination, Hawaii can very much be enjoyed on a budget. Hawaii is warm year-round and most popular during the winter months, when surfing conditions are optimal and whales travel offshore.';

	var infowindow = new google.maps.InfoWindow({
		content: popupContent,
		maxWidth: 350
	});

	// create maker
	var marker = new google.maps.Marker({
		position: mapCoordinates,
		map : map,
		title: 'Hawaii Islands'
	});

	// add listener 
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}
