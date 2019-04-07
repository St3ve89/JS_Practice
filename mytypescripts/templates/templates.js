var greet = 'Hello wrold';
var num1 = 5;
var num2 = 3;
var total = function (num1, num2) { return num1 + num2; };
var template = greet + ", This is my template in typescript. " + num1 + " + " + num2 + " = " + total(num1, num2);
console.log(template);
