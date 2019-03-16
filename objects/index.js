
// Factori function

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('blublu');
    }
  };
}


const circle = createCircle(1);


// constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const another = new Circle(1);