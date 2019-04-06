// function myStrictFunc(arg: number): number {
//   return arg;
// }
function myGeneric(arg) {
    return arg;
}
var x = myGeneric;
console.log(x('hello'));
