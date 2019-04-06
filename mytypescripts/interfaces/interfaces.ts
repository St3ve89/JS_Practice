// function displayUser(user:{firtsName:string, lastName: string}){
//   console.log(`${user.firtsName} ${user.lastName}`)
// }

// let myUser = {firtsName: 'Jhon', lastName:'Doe'};
// displayUser(myUser)


// interface User extends Membership{
//   firtsName:string;
//   lastName: string;
//   email?: string;
// }

// interface Membership {
//   type?: string
// }

// function displayUser(user:User){
//   if(user.email) {
//     console.log(`${user.firtsName} ${user.lastName} ${user.email}`)
//   } else {
//     console.log(`${user.firtsName} ${user.lastName}`)
//   }

//   if(user.type) {
//     console.log(`${user.firtsName} has a ${user.type} membership`)
//   }
// }

// let myUser = { 
//   firtsName: 'Jhon',
//   lastName:'Doe',
//   email: 'jhondoe@test.com',
//   type: 'Gold'
// };
// displayUser(myUser)


interface userFunc {
  (name: string, age: number): string
}

let getUser:userFunc;

getUser = (myname, myage) => {
  return `${myname} is ${myage} years old`;
}

console.log(getUser('jhon', 30))