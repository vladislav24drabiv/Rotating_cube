var countY = 0
var countX = 0 
var cube = document.getElementById('cube')

function TurnLeft() {
	countY += -90
	cube.style.transform = 'rotateY(' +countY + 'deg)'
}

function TurnRight() {
	countY += 90
	cube.style.transform = 'rotateY(' +countY + 'deg)'
}

function TurnUp() {
	countX += 90
	cube.style.transform = 'rotateX(' +countX + 'deg)'
}

function TurnDown() {
	countX += -90
	cube.style.transform = 'rotateX(' +countX + 'deg)'
}
