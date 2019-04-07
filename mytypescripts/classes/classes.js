var Person = /** @class */ (function () {
    function Person(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log(this.firstName + " says hello...");
    };
    return Person;
}());
var john = new Person('Jhon', 'Doe', 30);
john.lastName = 'Doe';
john.sayHello();
var kevin = new Person('Kevin', 'Williams', 42);
kevin.sayHello();
