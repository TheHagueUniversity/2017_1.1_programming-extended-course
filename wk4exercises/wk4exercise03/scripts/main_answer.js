
// define global variables
var pos = 300;
var timeline = new TimelineMax({ repeat: -1, ease: Power1.easeInOut });

// floating in space
timeline.to('#sandy', 1, { top: 105 })
		.to('#sandy', 1, { top: 100 });

// bind events
document.getElementById('leftButton').onmousedown = function() {
	pos -= 80;	
	updateSprite();
};

document.getElementById('rightButton').onmousedown = function() {
	pos += 80;
	updateSprite();
};

// update position and animate
function updateSprite(){
	TweenMax.to('#sandy', 1, { 
		left: pos, 
		ease: Power2.easeInOut 
	});
}
