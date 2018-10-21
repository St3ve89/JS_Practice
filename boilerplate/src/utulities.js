console.log('utilities.js')
// Named exports
// export const add = (a,b) => a + b

// export const name = 'Istvan'
// Default exports

const add = (a,b) => a + b

const name = 'Agnes'

const square = (x) => x * x

export {add, name, square as default}