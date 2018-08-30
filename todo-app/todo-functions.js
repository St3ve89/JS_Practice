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

// get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('p')

        if(todo.text.length > 0) {
            todoEl.textContent = todo.text
        } else {
            todoEl.textContent = 'Unnamed todo'
        }

        return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (getThingsToDo) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${getThingsToDo.length} todos left`
    return summary
}