
const cubeWrapper = document.querySelector('body');
const cube = document.querySelector('.cube');
let draggable;
let diceX;
let diceY;
let startDragX;
let startDragY;
let endDragX;
let endDragY;

cubeWrapper.addEventListener('mousedown', function(e) {
	e.preventDefault();
	draggable = true;
	startDragY = e.pageY;
	startDragX = e.pageX;
});

cubeWrapper.addEventListener('mousemove', function(e) {

	if(draggable){
		diceY = e.pageY;
		diceX = e.pageX;
		endDragY = (diceY - startDragY) * -1;
		endDragX = (diceX - startDragX);
		console.log(endDragY, endDragX);
		cube.style.transform = "translateZ(-100px) rotateY(" + endDragX + "deg) rotateX(" + endDragY + "deg)";
	}
})

cubeWrapper.addEventListener('mouseup', function(e) {
	e.preventDefault();
	draggable = false;
})