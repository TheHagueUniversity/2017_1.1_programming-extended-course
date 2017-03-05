
// define functions
var doEnterAnimation = function() {
	TweenMax.to(this, 0.5, { marginLeft: 20, color: '#33AA33', ease: Elastic.easeOut.config(1, 0.3) });
};

var doOutAnimation = function() {
	TweenMax.to(this, 0.5, { marginLeft: 0, color: '#FFFFFF', ease: Bounce.easeOut });
};

// loop trough anchor classnames
var nodes = document.getElementsByClassName('menu');

for(var i=0; i<nodes.length; i++) {
	nodes[i].onmouseenter = doEnterAnimation;
	nodes[i].onmouseout = doOutAnimation;
}

