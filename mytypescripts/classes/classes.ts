class Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(first:string, last:string, age:number) {
    this.firstName = first
    this.lastName = last
    this.age = age
  }

  sayHello() {
    console.log(`${this.firstName} says hello...`)
  }
}


let john = new Person('Jhon', 'Doe', 30);
john.lastName = 'Doe'
john.sayHello()

let kevin = new Person('Kevin', 'Williams', 42)

kevin.sayHello()