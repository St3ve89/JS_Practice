// const printTeam = (teamName, coach, firstPlayer, secondPlayer) => {
//     console.log(`Team: ${teamName}`)
//     console.log(`Coach: ${coach}`)
//     // console.log(`Players: ${players.join(', ')}`)
//     console.log(firstPlayer, secondPlayer)
// }
const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

const team = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

printTeam(team.name, team.coach, ...team.players)


let cities = ['Barcelona', 'Cape Town', 'Bordeaux']
cities = [...cities, 'Santiago']



console.log(cities)


let house = {
    bedrooms: 2,
    bathroom: 1.5,
    yearBuilt: 2017
}

let newHouse = {
    basement: true,
    ...house,
    bedrooms: 3
}

newHouse.yearBuilt = 2018

console.log(house)
console.log(newHouse)


let person = {
    name: 'Istvan',
    age: 29
}

let location = {
    city: 'London',
    country: 'UK'
}

let overview = {
    ...person,
    ...location
}

console.log(overview)