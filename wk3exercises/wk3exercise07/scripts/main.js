var seconds;
var countdownHandle;

function updateCountdown(){
	if(seconds > 0){
		seconds -= 1;
		document.getElementById('countdown').innerHTML = seconds + ' seconds';
	} else {
		document.getElementById('countdown').innerHTML = 'Timer done';
		clearInterval(countdownHandle); // clear set interval
	}
}

document.getElementById('start').onclick = function () {
	clearInterval(countdownHandle); // clear previously set interval
	seconds = parseInt(document.getElementById('startTime').value);
	countdownHandle = setInterval(updateCountdown, 1000);
};
