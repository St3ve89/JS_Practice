
// Factori function

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('blublu');
    }
  };
  
}


const circle = createCircle(1)
circle.draw();