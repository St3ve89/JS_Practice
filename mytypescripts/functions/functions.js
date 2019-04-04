// function add(x:number, y:number):number {
//  return x + y
// }
// console.log(add(5,3))
// function getFullName(firstName:string, lastName?:string):string {
//   if(lastName === undefined)
//     return firstName
//   return firstName + ' ' + lastName
// }
function getFullName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
var name1 = getFullName('Jhon', 'Jhon', 'Jhon', 'Jhon', 'Jhon', 'Jhon');
console.log(name1);
