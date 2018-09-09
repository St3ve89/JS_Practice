const products = [{ name: 'Computer mouse'}]
const product = products[0]


// truthy - Values that resolve to true in boolean context
// falsy - Values that resolve to false in boolean context
// falsy values - false, 0, empty string, null, undefined, NaN

if (product) {
    console.log('Product found')
} else {
    console.log('Product not found')
}