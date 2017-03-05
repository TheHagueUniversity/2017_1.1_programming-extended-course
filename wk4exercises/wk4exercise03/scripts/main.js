
// define global variables
var pos = 300,
	timeline = new TimelineMax({ repeat: -1, ease: Power1.easeInOut });

// floating in space
timeline.to('#sandy', 1, { top: 105 })
		.to('#sandy', 1, { top: 100 });

// bind events

// update position and animate