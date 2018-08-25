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

const deleteTodo = function (todos, todosText) {
    const index =  todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todosText.toLowerCase()
    })
    if(index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function(todos) {
    return todos.filter(function (todo){
        return !todo.completed
    })
}

console.log(getThingsToDo(todos))

// deleteTodo(todos, 'go to work')
// console.log(todos)