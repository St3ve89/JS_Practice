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


const _radius = new WeakMap();
// const _move = new WeakMap();

class Circle {
  constructor(radius) {
    // this.radius = radius;
    // this[_radius] = radius;
    // this.move = function() {};
    _radius.set(this, radius);


    // _move.set(this, () => {
    //   console.log('move', this)
    // })
  }
  // instance method
  // [_draw]() {
  //   console.log('draw');
  // }

  // draw() {
  //   console.log(_radius.get(this));
  //   _move.get(this)();

  //   console.log('draw');
  // }


  get radius() {
    return _radius.get(this)
  }

  set radius(value) {
    if (value <= 0 ) throw new Error('invalid radius')
    _radius.set(this, value);
  }


  // Static method
  static parse(str) {
    const radius = JSON.parse(str).radius
    return new Circle(radius)
  }
}

const c = new Circle(1);
// const c = Circle.parse('{"radius": 1}')
// console.log(c)