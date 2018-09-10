const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person ('Istvan', 'Acs', 29)

console.log(me)

const personTwo = new Person('Agnes', 'Brettl', 27)

console.log(personTwo)