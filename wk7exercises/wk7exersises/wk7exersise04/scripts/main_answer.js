
// init variables
var url = "http://api.openweathermap.org/data/2.5/weather?&units=metric&q=Thasdadse+Hague,nl";
var apiKey = "768485bc32a1178532a96d7a6f81be47"; // please replace this with your own key 
var weatherBox = document.getElementById("weather");
var httpRequest;

/**
 * Init API request
 */
function makeRequest() {
	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = responseMethod;
	httpRequest.open('GET', url + '&APPID=' + apiKey);
	httpRequest.send();
}

/**
 * Check respons
 */
function responseMethod() {
	if (httpRequest.readyState === 4 && httpRequest.status === 200) {
		updateUISuccess(httpRequest.responseText);
	} else {
		updateUIError();
	}
}

/**
 * Handle succes
 */
function updateUISuccess(responseText) {

	// set data
	var response = JSON.parse(httpRequest.responseText);
	var condition = response.weather[0].main;
	var icon = response.weather[0].icon;

	// get weather Icon
	var weatherIconImage = getWeatherIcon(icon);

	// show weather
	weatherBox.innerHTML = Math.floor(response.main.temp) + '&#176; C<br>' + condition +'<br>'+ weatherIconImage;

	// reset class name
	weatherBox.className = '';
}

/**
 * Handle error
 */
function updateUIError() {
	var weatherBox = document.getElementById("weather");
	weatherBox.className = "hidden";
}

/**
 * Get Weather icon
 * @param render Icon
 */
function getWeatherIcon(icon) {
	var iconUrl = 'http://openweathermap.org/img/w/'+ icon +'.png';

	return '<img src="'+ iconUrl +'" alt="Weather icon">';
}

// init request
makeRequest();
