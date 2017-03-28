
// open request
var request = new XMLHttpRequest();

// get the copy
request.open('GET', 'http://thecatapi.com/api/images/get?format=xml&results_per_page=10');

/**
 * Check when the request is done
 */
request.onreadystatechange = function() {

	// when the request in done show everything
	if ((request.readyState === 4) && (request.status === 200)) {

		// parse JSON
		var items = request.responseXML.getElementsByTagName('url');

		for (var i = 0; i < items.length; i++) {

			// write into the DOM
			document.getElementById('cats').innerHTML += '<li><img src="'+ items[i].firstChild.nodeValue +'" alt=""></li>';
		}

	}
}

// send the request
request.send();
