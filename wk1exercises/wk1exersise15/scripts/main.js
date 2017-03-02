
function calculateCelcius(farenheit){
	var celsius = (farenheit - 32) / 1.8;
	return celsius;
}


var todaysTemparatureFarenheit = 100;

if(calculateCelcius(todaysTemparatureFarenheit) < 10){
	alert('Damn, it\'s cold');
} else if (calculateCelcius(todaysTemparatureFarenheit) > 22 ) {
	alert('Damn, it\'s hot');
} else {
	alert('Temperature is nice');
}

