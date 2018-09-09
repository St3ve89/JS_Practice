// const age = 29
// const message = age >=18 ? 'You can vote!' : 'You cannot vote!'


// if (age >=18) {
//     message = 'You can vote!'
// } else {
//     message = 'You cannot vote!'
// }

// console.log(message)

const myAge = 29
const showPage = () => {
     return 'Showing the page'
}

const showErrorPage = () => {
     return 'showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()

console.log(message)

const team = ['Tyler', 'Porter', 'Ben', 'Mike', 'Andrew']
console.log(team.length <=4 ? `Team size: ${team.length}` : 'too many people on your team')