"use strict";
// string type
const fullname = 'John Doe';
// fullname = 'Kasidate Phlaiphueak'; ** cannot reassign a value to a constant
let myname = 'John Doe';
myname = 'Kasidate Phlaiphueak'; // ** can reassign a value to a variable
let description = ` This is First Line
This is Second Line
This is Third Line`; // ** can use template string for multiline string use ` ` instead of backquilte
let anothorMessage = `I'm Bank`; // ** can use template string for single quote string use ` ` instead of backquilte
// number type
let age = 21; // ** number type can be integer or float 
let height = 175.5; // ** number type can be integer or float  
let binary = 0b111001; // ** number type can be binary
let octal = 0o436; // ** number type can be octal
let hex = 0xadf0d; // ** number type can be hexadecimal
// boolean type
let isSingle = true; // ** boolean type can be true or false
let isMarried = !isSingle; // ** can use logical operator and &&, or ||, not !
// ** example of template string
console.log(`${myname} is ${age} years old and he is ${isSingle ? 'single' : 'married'}`);
console.log(myname.toUpperCase()); // ** convert string to uppercase
// any  type
let anyType = 'Hello World'; // ** any type can be any type
anyType = 100; // ** can reassign a value to any type
anyType = true; // ** can reassign a value to any type
// ** not recommend to use any type because it can be any type
console.log(anyType); // ** can call string method on any type
// unknown type
let unknownType = 'Hello World'; // ** unknown type can be any type
unknownType = 100; // ** can reassign a value to unknown type
unknownType = true; // ** can reassign a value to unknown type
console.log(unknownType); // ** can call string method on any type
// unknown vs any
// ** unknown type cannot call string method on unknown type
// ** any type can call string method on any type
// ** unknown type is more strict and more safe than any type
// null type
let nullType = null; // ** null type can be null only
// nullType = "null"; // ** can not reassign a value to null type
// undefined type
let undefinedType = undefined; // ** undefined type can be undefined only
// undefinedType = "undefined"; // ** can not reassign a value to undefined type
//symbol type
let symbolType1 = Symbol('symbol'); // ** symbol type can be symbol only
let symbolType2 = Symbol('symbol'); // ** symbol type can be symbol only
console.log(symbolType1 === symbolType2); // return false because symbol is unique value
// it store in another memory location so it not equal to each other
// void type
// use for function that not return anything 
// never type
// use for function that never return anything or throw error
function throwError(message) {
    throw new Error(message);
}
// union type
let unionType = "Hello World"; // ** union type can be string or boolean
unionType = true; // ** can reassign a value to union type
// unionType = 100 // ** can not reassign a value to union type because it not string or boolean
// type guard
// use for check type of variable
// example of type guard
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(100); // 100
printId("100"); // 100
