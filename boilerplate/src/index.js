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