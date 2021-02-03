"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = '';
        this.lastName = '';
        this.age = 0;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    logFullName() {
        console.log(`Your name is ${this.firstName} ${this.lastName},\nYour age: ${this.age}`);
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map