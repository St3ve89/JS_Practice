// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage


import { getTodos, createTodo,removeTodo, toggleTodo } from './todos'

console.log(getTodos())
removeTodo('c60cdae1-5dbc-4ead-90df-1101e5bb10a4')
console.log(getTodos())