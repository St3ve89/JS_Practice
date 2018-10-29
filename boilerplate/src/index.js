//  rest parameter

const calulateAvarage = (thing, ...numbers) => {
    // return (numOne + numTwo) / 2
    let sum = 0
    numbers.forEach((num) => sum += num)
    const avarage =  sum / numbers.length
    return `The avarage ${thing} is ${avarage}`
}

console.log(calulateAvarage('age', 0, 100, 88, 64))


// create printTeam that takes team name, coach, and players
const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}
// team: liberty
// coach: casey penn
// players: marge, aiden, herbert, sherry

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')