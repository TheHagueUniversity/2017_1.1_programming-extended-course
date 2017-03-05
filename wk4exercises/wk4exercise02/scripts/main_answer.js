
// set timeline
var timeline = new TimelineMax({ repeat: -1, ease: Power0.easeNone });

// amimate timeline
timeline.to('.clouds', 1, { opacity: 1})
		.from('.layer-1', 200, { backgroundPositionX: 2400}, 'clouds')
		.from('.layer-2', 300, { backgroundPositionX: 1200}, 'clouds');

