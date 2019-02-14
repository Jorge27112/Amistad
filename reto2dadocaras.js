var num;

function setup() {
  createCanvas(400, 400);
  num = int(random(1, 6));
}

function draw() {
  background(150);
  console.log(num);
  if (mouseIsPressed) {
    num = int(random(1, 6));
  }
  if (num == 1) {
    uno();
  }
  if (num == 2) {
    dos();
  }
  if (num == 3) {
    tres();
  }
  if (num == 4) {
    cuatro();
  }
  if (num == 5) {
    cinco();
  }
  if (num == 6) {
    seis();
  }
}

function uno() {
  ellipse(200, 200, 14, 14);
}

function dos() {
  ellipse(116, 116, 14, 14);
  ellipse(284, 284, 14, 14);
}

function tres() {
  uno();
  dos();
}

function cuatro() {
  ellipse(116, 116, 14, 14);
  ellipse(286, 286, 14, 14);
  ellipse(116, 286, 14, 14);
  ellipse(286, 116, 14, 14);
}

function cinco() {
  cuatro();
  uno();
}

function seis() {
  cuatro();
  ellipse(116, 200, 14, 14);
  ellipse(286, 200, 14, 14);
}
