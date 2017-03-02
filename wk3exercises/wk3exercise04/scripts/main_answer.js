
document.getElementsByTagName('h1')[0].onclick = function(){
	document.getElementsByTagName('h1')[0].innerHTML = 'You clicked me';
	document.getElementsByTagName('h1')[0].className = 'highlight';
};