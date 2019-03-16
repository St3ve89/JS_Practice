// constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

Circle.call({}, 1)

const another = new Circle(1);