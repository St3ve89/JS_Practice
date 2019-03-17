let person = { name: 'Istvan'}


let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')

Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false,
  configurable: false
});

person.name = 'Jhon'
delete person.name
console.log(person)
console.log(descriptor)
console.log(Object.keys(person))

for (let key in person)
  console.log(key)