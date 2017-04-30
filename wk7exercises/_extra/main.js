
// set vars
var submit = document.getElementById('submit');

/**
 * Init API request
 */
submit.onclick = function() {

	// get date
	var date = document.getElementById('search').value;

	// set API URL:
	var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+ date +'&api_key=BZ5MIP7z4857IgKUPEjQKupr0VkQPXMIgTeyj3Ns';

	// do request
	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = responseMethod;
	httpRequest.open('GET', url);
	httpRequest.send();
};


/**
 * Check respons
 */
function responseMethod() {
	if (httpRequest.readyState === 4 && httpRequest.status === 200) {
		showSearchResults(httpRequest.responseText);
	}
}

/**
 * Handle succes
 */
function showSearchResults(responseText) {

	// set data
	var response = JSON.parse(httpRequest.responseText);

	console.log(response);
}

