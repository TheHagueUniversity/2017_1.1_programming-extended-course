
var doEnterAnim = function() {
	var tl1 = new TimelineMax();
	tl1.to(this, 0.5, {marginLeft: 50, color: '#99AAFF', ease: Bounce.easeOut});
};

var doOutAnim = function() {
	var tl1 = new TimelineMax();
	tl1.to(this, 0.5, {marginLeft: 0, color: '#FFFFFF', ease: Bounce.easeOut});
};

var nodes = document.getElementsByClassName('menu');
for(var i=0; i<nodes.length; i++) {
	nodes[i].onmouseenter = doEnterAnim;
	nodes[i].onmouseout = doOutAnim;
}

