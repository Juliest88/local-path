import { Person } from "./person";

export class Student extends Person {

    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
    }


    study() {
        console.log('You are a student!');
        this.logFullName();
    }
}