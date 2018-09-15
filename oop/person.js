class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`


        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
    
        return bio
    }

    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio() {
        // Istvan is a 'position'
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
    }

    getYearsLeft() {
        return 65 - this.age
    }
}

// create a class for student
class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    
    // create upgrade grade that takes the amount to add or remove from the grade
    updateGrade(change) {
        this.grade += change
    }
    
    // override bio to print a passing or failing message, 70 and above 
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class.`
    }
}

const me = new Student('Istvan', 'Acs', 29, 88, [])
console.log(me.getBio())
me.updateGrade(-20)
console.log(me.getBio())
