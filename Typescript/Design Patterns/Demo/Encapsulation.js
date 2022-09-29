class Person {
    constructor(name, weight, phone, age) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.weight = weight;
    }
}
class Students extends Person {
    constructor(name, weight, phone, age, factory) {
        super(name, weight, phone, age);
        this.factory = factory;
    }
    get studentId() {
        return this._studentId;
    }
    set studentId(value) {
        if (value.length === 0) {
            throw new Error("Invalid...");
        }
        this._studentId = value;
    }
    sayHi() {
        console.log(`hi, my name is ${this.name}, I'm ${this.age}`);
    }
}
const student1 = new Students('Lan Anh', 50, 0982313422, 18, 'Tieng anh');
console.log(student1.name);
student1.sayHi();
student1.studentId = '';
console.log(student1.studentId);
console.log(student1);
class Computer {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }
}
const computer1 = new Computer('black', 'Dell-2022');
console.log(computer1);
console.log('<<<<<<<<<<<< ENCAPSULATION EN >>>>>>>>>>>>>>>>');
