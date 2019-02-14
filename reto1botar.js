var x = 200
var velx = 3
var y = 200
var vely = 5

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(220);
	mostrar();
	moverx();
	movery();
	botarx();
	botary();
}

function mostrar() {
	ellipse(x, y, 50, 50);
}

function moverx() {
	x = x + velx;
}


function movery() {
y=y+vely;
}

function botarx() {
	if (x < 25) {
		velx = velx * -1;
	}
	if (x > width-25) {
		velx = velx * -1;
	}
}

function botary() {
if (y < 25) {
		vely = vely * -1;
	}
	if (y > height-25) {
		vely = vely * -1;
	}
}
