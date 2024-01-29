"use strict";
// funcion overloading is a feature that allows us to have multiple functions with the same name but different parameters types and return type
// Step 2: Create function with same name but different parameters types and return type
function sayHello(nameOrAge, age) {
    if (typeof nameOrAge === "string") {
        if (typeof age === "number") {
            console.log("Hello " + nameOrAge + " " + age);
        }
        else {
            console.log("Hello " + nameOrAge);
        }
    }
    else if (typeof nameOrAge === "number") {
        console.log("Hello " + nameOrAge);
    }
    else {
        throw new Error("Invalid Operation"); // throw error if not match type
    }
}
sayHello("Kasidate"); // Hello Kasidate
sayHello(21); // Hello 21
sayHello("Kasidate", 21); // Hello Kasidate 21
