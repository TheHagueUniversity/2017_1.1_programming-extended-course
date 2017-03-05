// init ball
var ball = document.getElementById('ball');

function play() {
	
	// set starting position
	TweenMax.set(ball, { y: 500 });

	// init timeline
	var timeline = new TimelineMax({ delay: 1 });

	// go up 
	timeline.to(ball, 0.5, { y: 0 })

	// go right and bounce
	.to(ball, 1, { y: 500, ease: Bounce.easeOut})
	.to(ball, 3, { x: '+=400'}, '-=2')

	// go back
	.to(ball, 1, { x: 0 }, '+=1')

	// rotate
	.to(ball, 3, { rotation: 300 }, 0)
	.to(ball, 1, { rotation: -60 }, 4)

	// play again
	.call(play);
}

// start function
play();