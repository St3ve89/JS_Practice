// const myFunction = () => {
//     const message = 'This is my message'
//     const printMessage = () => {
//         console.log(message)
//     }
//     return printMessage
// }

// const myPrintMessage = myFunction()
// myPrintMessage()

const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())


//  Adder 
const add = (a, b) => a + b
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

const add100 = createAdder(100)
console.log(add100(-90))


// tipper 


// create createTipper which takes in the base tip (.15 for 15% tip)
const createTipper = (tip) => {
    // set it up to return a function that takes in the bill amount
    return (amount) => {
        return tip * amount
    }
}

// call createTipper to generate a few functions for different percentages
const tip20 = createTipper(.2)
const tip30 = createTipper(.3)

// use the generated functions to calculate tips and print them
console.log(tip20(100))
console.log(tip30(100))
