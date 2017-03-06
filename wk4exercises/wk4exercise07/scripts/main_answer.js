
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
	var randomX = Math.floor(Math.random() * 1600) -800;
	var randomY = Math.floor(Math.random() * 600) -300;
		
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
	timeline.to('.letter', 1, { 
		scale: 3, 
		color: 'yellow', 
		margin: 20 
	})
	.to('.explode0'+ number, 1, { 
		y: '+='+ randomY, 
		x: '+='+ randomX, 
		rotation: -360, 
		ease: Power2.EaseOut, 
		scale: 6,
		opacity: 0,
		color: 'red',
	}, 'explode-=.1');
}