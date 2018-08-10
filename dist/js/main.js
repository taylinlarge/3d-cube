'use strict';

var cubeWrapper = document.querySelector('body');
var cube = document.querySelector('.cube');
var draggable = void 0;
var diceX = void 0;
var diceY = void 0;
var startDragX = void 0;
var startDragY = void 0;
var endDragX = void 0;
var endDragY = void 0;

cubeWrapper.addEventListener('mousedown', function (e) {
	e.preventDefault();
	draggable = true;
	startDragY = e.pageY;
	startDragX = e.pageX;
});

cubeWrapper.addEventListener('mousemove', function (e) {

	if (draggable) {
		diceY = e.pageY;
		diceX = e.pageX;
		endDragY = (diceY - startDragY) * -1;
		endDragX = diceX - startDragX;
		console.log(endDragY, endDragX);
		cube.style.transform = "translateZ(-100px) rotateY(" + endDragX + "deg) rotateX(" + endDragY + "deg)";
	}
});

cubeWrapper.addEventListener('mouseup', function (e) {
	e.preventDefault();
	draggable = false;
});
//# sourceMappingURL=main.js.map
