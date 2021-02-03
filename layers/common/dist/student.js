"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const person_1 = require("./person");
class Student extends person_1.Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
    }
    study() {
        console.log('You are a student!');
        this.logFullName();
    }
}
exports.Student = Student;
//# sourceMappingURL=student.js.map