
/**
 * Start clock
 */
function initClock() {
	var clock = document.getElementById('clock');
	var time  = getCurrentTime(new Date());

	// display time
	clock.innerHTML = '0:00';
}

/**
 * Parse the time
 * @param date object - current time 
 * @return date array
 */
function getCurrentTime(date) {
	var time = [];

	return time;
}

// start
initClock();