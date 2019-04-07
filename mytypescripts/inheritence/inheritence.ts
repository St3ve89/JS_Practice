class Person {
  name: string;

  constructor(name:string) {
    this.name = name;
    console.log(`person created: ${this.name}`)
  }

  sayHello() {
    console.log(`${this.name} says hello`)
  }
}

class Customer extends Person{
  id: number

  constructor(id:number, name:string){
    super(name)
    this.id = id;
    console.log(`Customer Created: ${this.name}`)
  }

  payBalance() {
    console.log(`Customer ${this.id} has paid their balance`)
  }
}


let joe = new Person('Joe')
let mary = new Customer(1, 'Mary')
mary.sayHello()
mary.payBalance()