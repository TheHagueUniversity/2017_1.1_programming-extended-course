var footLengthChris = 30;
var footLengthTim = 28;

calculateShoeSize(footLengthChris);
calculateShoeSize(footLengthTim);

function calculateShoeSize(footLength){
	var shoeSize = (footLength+2) * 1.5;
	alert(shoeSize);
}