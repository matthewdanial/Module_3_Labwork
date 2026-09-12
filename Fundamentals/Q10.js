function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = function() {
        return this.age >= 16;
    };
}

// a and b)
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 12);

// c)
console.log('person1:', person1);
console.log('person1 canDrive:', person1.canDrive());  //true
console.log('person2:', person2);
console.log('person2 canDrive:', person2.canDrive());  //false

//d) (written as a class)
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    //e)
    canDrive() {
        return this.age >= 16;
    }
}

const person3 = new PersonClass('Charlie', 20);
console.log('person3:', person3);
console.log('person3 canDrive:', person3.canDrive());  //true