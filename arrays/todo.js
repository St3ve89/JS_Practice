const todos = ['Practice code', 'Shop', 'Go to work', 'Go to gym', 'Eat']

todos.splice(2,1)
todos.push('Buy coffe')
console.log(todos.shift())


console.log(`You have ${todos.length} todos`)
console.log(todos)