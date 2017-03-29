
// open request
var request = new XMLHttpRequest();

// get the copy
request.open('GET', 'http://hipsterjesus.com/api/?paras=10');

/**
 * Check when the request is done
 */
request.onreadystatechange = function() {

	// when the request in done show everything
	if ((request.readyState === 4) && (request.status === 200)) {

		// parse JSON
		var response = JSON.parse(request.responseText);

		// write into the DOM
		document.getElementById('text').innerHTML = response.text;
	}
}

// send the request
request.send();

