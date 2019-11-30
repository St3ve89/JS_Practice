const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style['display'] = 'block';

let person = {
  name: 'Istvan',
  age: 30,
  hobbies: ['sports', 'Cooking'],
  greet: function() {
    alert('Hi there!');
  }
};
// delete person.age;
person.isAdmin = true;

console.log(person);
