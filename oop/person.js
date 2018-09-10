const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`


    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person ('Istvan', 'Acs', 29, ['coding', 'gaming'])
me.setName('Jack Sparrow')
console.log(me.getBio())

const personTwo = new Person('Agnes', 'Brettl', 27, )

console.log(personTwo.getBio())