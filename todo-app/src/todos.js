import uuidv4 from 'uuid/v4'

// Setup the empty todos array
let todos = []

// loadTodos
// Arguments: none
// Return value: none
// fetch existing todos from local storage
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    // handling application error
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        todos = []
    }
}

// saveTodos
// Arguments: none
// Return value: none
// save todos to local storage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}


// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text: text,
        completed: false
    })
    saveTodos()
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => {
        return todo.id === id
    })

    if(todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
// toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if(todo) {
        todo.completed = !todo.completed
        saveTodos()
    }
}

// Make sure to call loadTodos and setup the exports
loadTodos()

export { getTodos, createTodo,removeTodo, toggleTodo }