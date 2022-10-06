let canvas = document.getElementById("demoCanvas");

let context = canvas.getContext("2d");

canvas.style.border = "2px solid gray";

document.body.style.backgroundColor = "rgb(0,0,0)";

//1. constructor for Rectangle

class Rectangle {

constructor(x, y, w, h, color) {

this.x = x;

this.y = y;

this.w = w;

this.h = h;

this.color = color;

}

render() {

context.strokeStyle = this.color;

context.lineWidth = 5;

context.beginPath();

context.rect(this.x, this.y, this.w, this.h, this.color);

context.stroke();

}

moveTo(x, y) {

this.x = x;

this.y = y;

}

}

// 2. create stationary rectangle

let rectangleOne = new Rectangle(250, 250, 100, 100, "blue");

//event handling

let mouseX = 2 * canvas.width;

let mouseY = 2 * canvas.width;

let canvasRect = canvas.getBoundingClientRect();

canvas.addEventListener("mousemove", (event) => {

mouseX = event.clientX - canvasRect.left;

mouseY = event.clientY - canvasRect.top;

//apply scaling to make it responsive

//x

let scaleX = canvas.width / canvasRect.width;

//y

let scaleY = canvas.height / canvasRect.height;

mouseX = mouseX * scaleX;

mouseY = mouseY * scaleY;

rectangleTwo = new Rectangle(mouseX, mouseY, 100, 100, "red");

});

//3. create moving rectangle for mouse

let rectangleTwo = new Rectangle(mouseX, mouseY, 100, 100, "red");

main();

function main() {

startGame();

}

function startGame() {

updateGame();

window.requestAnimationFrame(drawGame);

}

function updateGame() {

rectangleTwo.moveTo(mouseX, mouseY);

}

function drawGame() {

//after updating the positions, then it has to be rendered to the screen

context.clearRect(0, 0, canvas.width, canvas.height);

rectangleOne.render();

rectangleTwo.render();


//RENDERING HAPPENS HERE

window.requestAnimationFrame(drawGame);

}