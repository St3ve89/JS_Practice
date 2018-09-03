// fetch existing todos from local storage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if(todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// save todos to local storage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// toggle the completed value for a given todo
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })

    if(todo !== undefined) {
        todo.completed = !todo.completed
    }
}

// render application todos based on filter
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })
    const getThingsToDo = filteredTodos.filter(function(todo){
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = generateSummaryDOM(getThingsToDo)
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const todoEl = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(todoEl)
    })
}

// remove a todo from the list
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if(todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // setup a checkbox
    checkbox.type = 'checkbox'
    checkbox.checked = todo.completed;
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })


    // setup the todo text
    if(todo.text.length > 0) {
        textEl.textContent = todo.text
    } else {
        textEl.textContent = 'Unnamed todo'
    }
    todoEl.appendChild(textEl)
    
    // setup the remove button
    button.textContent = 'x'
    todoEl.appendChild(button)
    button.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (getThingsToDo) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${getThingsToDo.length} todos left`
    return summary
}