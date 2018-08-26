const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]
// let p = document.querySelector('p')
// p.remove()


let ps = document.querySelectorAll('p')

ps.forEach(function(p){
    p.textContent = '******'
    // console.log(p.textContent)
    // p.remove()
})

const newP = document.createElement('p')
newP.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newP)
