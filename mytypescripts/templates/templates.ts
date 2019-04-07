let greet = 'Hello wrold'
let num1 = 5
let num2 = 3

let total = (num1:number,num2:number):number => num1 + num2
let template = `${greet}, This is my template in typescript. ${num1} + ${num2} = ${total(num1, num2)}`


console.log(template)

