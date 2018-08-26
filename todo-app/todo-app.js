const todos = [{
    text: 'Practice code',
    completed: true
}, {
    text: 'Shop',
    completed: false
}, {
    text: 'Go to work',
    completed: false
}, {
    text: 'Go to gym',
    completed: true
}, {
    text: 'Eat',
    completed: true
}]

const getThingsToDo = todos.filter(function(todo){
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${getThingsToDo.length} todos left`
document.querySelector('body').appendChild(summary)


todos.forEach(function(todo){
    const newP = document.createElement('p')
    newP.textContent = todo.text
    document.querySelector('body').appendChild(newP)
})

document.querySelector('#add-todo').addEventListener('click', function () {

})