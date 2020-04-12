// var xoff1 = 0;
// var xoff2 = 10000;
var inc = 0.01
var start = 0
var slider = document.getElementById('slider')
var output = document.getElementById('rangeValue')

output.innerHTML = slider.value

slider.oninput = function () {
	output.innerHTML = this.value;


}





function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	var sliderValue = Number(slider.value)
	inc = sliderValue
	background(51)

	stroke(255)
	noFill()
	beginShape()

	var xoff = start;
	for (var x = 0; x < windowWidth; x++) {
		stroke(255)
		var y = noise(xoff) * height;
		vertex(x, y)
		xoff += inc;


	}
	endShape()
	start += inc;
	// noLoop();
}