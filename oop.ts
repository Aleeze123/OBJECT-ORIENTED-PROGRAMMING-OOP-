/*                                         Object Oriented Programming(OOP)

OOP in JavaScript stands for Object-Oriented Programming.
It's a programming paradigm that focuses on organizing code
into objects that have both data (properties) and behavior (methods). 
Object-Oriented Programming (OOP) in JavaScript can be understood through the four main pillars or principles of OOP.
 These principles are:

1) Encapsulation:

2) Abstraction:

3) Inheritance:

4) Polymorphism:

**************************************************************************************************************************************************/
class Person {
    protected name: string; // Encapsulation
    protected age: number; // Encapsulation

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showDetails(): void { // Abstraction
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}


class Girl extends Person {
    private hobby: string; // Encapsulation

    constructor(name: string, age: number, hobby: string) {
        super(name, age); // Inheritance
        this.hobby = hobby; // Encapsulation
    }

    showDetails(): void { // Polymorphism
        super.showDetails(); // Polymorphism
        console.log(`Hobby: ${this.hobby}`);
    }
}


let person1 = new Person("Hoorain", 20);
let girl1 = new Girl("Aleeze", 17, "Coding");

person1.showDetails(); // Output: Name: Hoorain, Age: 20
girl1.showDetails(); // Output: Name: Aleeze, Age: 17 , Hobby: coding



/*Encapsulation: Properties like name, age, and hobby are encapsulated within their respective classes 
using protected and private access modifiers.

Abstraction: The displayDetails() method in the Person class abstracts away the details of how the
 information is displayed.

Inheritance: The Girl class inherits from the Person class using extends.

Polymorphism: The displayDetails() method is overridden in the Girl class to provide specialized 
behavior while still invoking the base class method using super. 

----------------------------------------------------------------------------------------------------------------------------------------
*/

