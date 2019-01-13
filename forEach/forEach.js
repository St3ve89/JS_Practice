const arr = [1,2,3,4,5,6];
// const double = arr => {
//   for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i] * 2);
//   }
// }
// double(arr);
// forEach
// forEach(arr, number => {
//   console.log(number * 2);
// });

// forEach with all callback parameters
const strings = ['my', ' forEach', 'example'];

const result = '';

forEach(strings, (str, index, array) => {
  if(array.length -1 !== index) {
    result += str + ' ';
  } else {
    result += str + '!!!';
  }
});