export class Person {
    firstName: string = '';
    lastName: string = '';
    age: number = 0;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }


    logFullName() {
        console.log(`Your name is ${this.firstName} ${this.lastName},\nYour age: ${this.age}`);
    }
}