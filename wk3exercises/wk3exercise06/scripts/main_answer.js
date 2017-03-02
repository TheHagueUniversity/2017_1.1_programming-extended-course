var seconds = 10;

function updateCountdown(){
	if(seconds > 0){
		seconds -= 1;
		document.getElementById('countdown').innerHTML = seconds + ' seconds';
	} else {
		document.getElementById('countdown').innerHTML = 'Lift Off';
	}
}

window.onload = function(){
	setInterval(updateCountdown, 1000);
}
