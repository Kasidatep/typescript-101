// funcion overloading is a feature that allows us to have multiple functions with the same name but different parameters types and return type

// Step 1: Create function with same name but different parameters types and return type
function sayHello(name: string): void;
function sayHello(age: number): void;
function sayHello(name: string, age: number): void;

// Step 2: Create function with same name but different parameters types and return type
function sayHello(nameOrAge: string | number, age?: number): void {
    if (typeof nameOrAge === "string") {
        if (typeof age === "number") {
            console.log("Hello " + nameOrAge + " " + age);
        } else {
            console.log("Hello " + nameOrAge);
        }
    } else if (typeof nameOrAge === "number") {
        console.log("Hello " + nameOrAge);
    } else {
        throw new Error("Invalid Operation"); // throw error if not match type
    }
}

sayHello("Kasidate"); // Hello Kasidate
sayHello(21); // Hello 21
sayHello("Kasidate", 21); // Hello Kasidate 21

// Method Overloading
// Method overloading is a feature that allows us to have multiple methods with the same name but different parameters types and return type
class Calculator {
    add(x: number, y: number): number;
    add(x: string, y: string): string;
    add(x: any, y: any): any {
        return x + y;
    }
}

let calculator = new Calculator();
console.log(calculator.add(10, 20)); // 30
console.log(calculator.add("10", "20")); // 1020
// console.log(calculator.add(true, false)); // error because not match type
// console.log(calculator.add(10, "20")); // error because not match type only number and number or string and string

