// function Circle(radius) {
//   // instance members
//   this.radius = radius

//   this.move = function () {
//     this.draw();
//     console.log('move');
//   }
// }


// // Prototype members
// Circle.prototype.draw = function() {
//   console.log('draw');
// }

// const c1 = new Circle(1);

// // Returns instance memebers
// console.log(Object.keys(c1));

// // Returns all members(instance + prototype)
// for ( let key in c1) console.log(key);

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function() {
      
    };
  }

  draw() {
    console.log('draw');
  }
}

const c = new Circle(1)