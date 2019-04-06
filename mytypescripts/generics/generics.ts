// function myStrictFunc(arg: number): number {
//   return arg;
// }

// function myAnyfunc(arg: any):any {
//   return arg;
// }

// function myGeneric<T>(arg: T): T{
//   return arg;
// }

// let x = myGeneric<string>('Hello');
// let y = myGeneric<number>(4);
// let z = myGeneric(44)

// console.log(z)

// function myGeneric<T1, T2>(arg1: T1, arg2: T2){
//   let str = `${arg1} ${arg2}`
//   return str;
// }

// let x = myGeneric('hello', 100)

// console.log(x)

// function myGeneric<T>(arg: T[]): T[]{
//   console.log(arg.length)
//   return arg;
// }


// let x = myGeneric([1,2,3])

// console.log(x)


interface MyGenericFn {
  <T>(arg: T): T;
}

function myGeneric<T>(arg: T): T {
  return arg
}

let x: MyGenericFn = myGeneric;
console.log(x('hello'))