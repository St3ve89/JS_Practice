// A callback function is a function that is passed into another function as a parameter then invoked by that other function
const callback = () => {
  console.log('coming from callback');
}
// A higher order function is a function that accept a callback as a parameter
const higherOrder = fn => {
  console.log('About to call callback');
  fn();
  console.log('Callback has been invoked');
}

higherOrder(callback);

// What are callbacks used for?
// Advanced array methods
// browser events
// ajax requests
// react development

// Duplicated code without callbacks
// const sendMessageConsole = message => {
//   console.log(message);
// }

// const sendMessageAlert = message => {
//   alert(message);
// }

// const sendMessageConfirm = message => {
//   return confirm(message);
// }

// sendMessageAlert('Lots of duplication');

// code reuse with callbacks

const sendMessage = (message, callback) => {
  return callback(message);
}

sendMessage('message for console', console.log);
// sendMessage('message for alert', alert);

// const answer = sendMessage('Are you sure?',confirm);


// callbacks with function declarations

const greet = (name, formatter) => {
  return 'Hello, ' + formatter(name);
}

const upperCaseName = name => {
  return name.toUpperCase();
}

greet('Istvan', upperCaseName);

// callback with anonymus function
const greet = (name, formatter) => {
  return 'Hello, ' + formatter(name);
}

greet('Istvan', name => {
  return name.toUpperCase();
});

greet('Istvan', name => {
  return name + '!!!!';
});

