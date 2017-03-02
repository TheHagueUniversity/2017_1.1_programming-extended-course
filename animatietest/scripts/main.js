var pos = 300;

var tl2 = new TimelineMax({repeat: -1});
tl2.to('#sandy', 1, {top: 105, ease: Power1.easeInOut}).to('#sandy', 1, {top: 100, ease: Power1.easeInOut});


function updateSprite(){
	var tl1 = new TimelineMax();
	tl1.to('#sandy', 1, {left: pos, ease: Power2.easeInOut});
}

document.getElementById('leftButton').onmousedown = function(){
	pos-=80;	
	updateSprite();
};

document.getElementById('rightButton').onmousedown = function(){
	pos+=80;
	updateSprite();
};


