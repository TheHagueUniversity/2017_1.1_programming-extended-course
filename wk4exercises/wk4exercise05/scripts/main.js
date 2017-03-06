
// set the timeline
var timeline = new TimelineMax();

// bind events
document.getElementById('open').onclick = function() {
	open();
};

document.getElementById('close').onclick = function() {
	close();
};

// set functions
function open() {
	timeline.to('.modal', 0.5, { display: 'block'})
			.to('.modal-content', 0.5, { marginTop: '15%', opacity: 1 });
}

function close() {
	timeline.to('.modal-content', 0.5, { scale: 0, opacity: 0 })
			.to('.modal', 0.5, { display: 'none'})
			.call(reset);
}

function reset() {	
	TweenMax.set('.modal-content', { scale: 1 , marginTop: '-100%'});
}