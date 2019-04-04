// function add(x:number, y:number):number {
//  return x + y
// }

// console.log(add(5,3))


// function getFullName(firstName:string, lastName?:string):string {
//   if(lastName === undefined)
//     return firstName
//   return firstName + ' ' + lastName
// }


function getFullName(firstName:string, ...restOfName:string[]):string {
  return firstName + ' ' + restOfName.join(' ')
}

let name1 = getFullName('Jhon','Jhon','Jhon','Jhon','Jhon','Jhon',)

console.log(name1)