
// set the timeline
var timeline = new TimelineMax();

// bind events
document.getElementById('boom').onclick = function() {

	for (var i = 0; i < 8; i++) {
		explodeLetters(i);
	}
};

// set function
function explodeLetters(number) {

	// set random sizes
	var randomX = Math.floor(Math.random() * 800),
		randomY = Math.floor(Math.random() * 300),
		plusOrMinus = Math.random() < 0.5 ? '-' : '+';

	timeline.to('.letter', 1, { 
		scale: 3, 
		color: 'yellow', 
		margin: 20 
	})
	.to('.explode0'+ number, 1, { 
		y: plusOrMinus +'='+ randomY, 
		x: plusOrMinus +'='+ randomX, 
		rotation: -360, 
		ease: Power2.EaseOut, 
		scale: 6,
		opacity: 0,
		color: 'red',
	}, 'explode-=.1');
}