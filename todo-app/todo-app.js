let selectPs = document.querySelectorAll('p')


selectPs.forEach(function(p){
    if(p.textContent.includes('to')){
        p.remove()
    }
})

// for(let i = 0; i < selectPs.length; i++) {
//     if(selectPs[i] === to) {
//         selectPs.slice(i, 1)
//     }
// }

// let index = selectPs.indexOf(to);    // <-- Not supported in <IE9
// if (index !== -1) {
//     selectPs.splice(index, 1);
// }

// console.log(index)