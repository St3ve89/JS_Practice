const todos = ['Practice code', 'Shop', 'Go to work', 'Go to gym', 'Eat']

todos.splice(2,1)
todos.push('Buy coffe')
todos.shift()


console.log(`You have ${todos.length} todos`)

todos.forEach(function(item, index){
    let num = index + 1
    console.log(`${num}. ${item}`)
})