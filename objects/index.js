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


const _radius = Symbol()
const _draw = Symbol()
class Circle {
  constructor(radius) {
    // this.radius = radius;
    this[_radius] = radius;
    // this.move = function() {};
  }
  // instance method
  [_draw]() {
    console.log('draw');
  }

  // Static method
  static parse(str) {
    const radius = JSON.parse(str).radius
    return new Circle(radius)
  }
}

const c = Circle.parse('{"radius": 1}')
console.log(c)