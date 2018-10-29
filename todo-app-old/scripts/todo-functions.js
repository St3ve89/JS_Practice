'use strict'

// fetch existing todos from local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    // handling application error
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// save todos to local storage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if(todo) {
        todo.completed = !todo.completed
    }
}

// render application todos based on filter
const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#todos')
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })
    const getThingsToDo = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''

    todoEl.appendChild(generateSummaryDOM(getThingsToDo))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'No to-dos to show'
        todoEl.appendChild(messageEl)
    }
}

// remove a todo from the list
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => {
        return todo.id === id
    })

    if(todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // setup a checkbox
    checkbox.type = 'checkbox'
    checkbox.checked = todo.completed;
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
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
    containerEl.appendChild(textEl)

    // setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)
    
    // setup the remove button
    button.textContent = 'remove'
    button.classList.add('button', 'button--text')
    todoEl.appendChild(button)
    button.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (getThingsToDo) => {
    const summary = document.createElement('h2')
    const plural = getThingsToDo.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${getThingsToDo.length} todo${plural} left`
    return summary
}