// function logData():void {
//   console.log('Here is some data')
//   return 'Some Data'
// }


// logData()


// let x:void = null;


// let u:undefined = undefined;
// let n: null = null;


function error(messsage:string): never {
  throw new Error(messsage);
}

error('Something happend')