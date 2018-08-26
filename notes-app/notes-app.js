console.log('this is from a different file')

// let p = document.querySelector('p')
// p.remove()


let ps = document.querySelectorAll('p')

ps.forEach(function(p){
    p.textContent = '******'
    // console.log(p.textContent)
    // p.remove()
})