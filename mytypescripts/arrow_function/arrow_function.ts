// let getUser = function():string {
//   return 'Jhon Doe'
// }


// let getUser = (name:string):string => name

// console.log(getUser('jhon doe'))


// let add = function(num1:number, num2:number):number {
//   return num1 + num2
// }

// let add = (num1:number, num2:number):number => num1 + num2

// console.log(add(1,3))


// var User = {
//   name: 'Jhon Doe',
//   age: 25,
//   startAging: function() {
//     var self = this;
//     setInterval(function() {
//       self.age++;
//       console.log(self.age);
//     }, 1000)
//   }
// }

var User = {
  name: 'Jhon Doe',
  age: 25,
  startAging: function() {
    setInterval(() => {
      this.age++;
      console.log(this.age);
    }, 1000)
  }
}


var jhon = Object.create(User);
jhon.startAging()