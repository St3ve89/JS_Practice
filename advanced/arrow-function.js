const square = (num) => num * num // short hand
const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Istvan',
    age: 29
}, {
    name: 'Agi',
    age: 27
}, {
    name: 'Kuku',
    age: 35
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

// find the person with 27 age
const person = people.find((person) => person.age === 27)

console.log(person)