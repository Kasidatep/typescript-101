"use strict";
const fullname = 'John Doe';
// fullname = 'Kasidate Phlaiphueak'; ** cannot reassign a value to a constant
let myname = 'John Doe';
myname = 'Kasidate Phlaiphueak'; // ** can reassign a value to a variable
let age = 21; // ** number type can be integer or float  ex. 52.2554
let isSingle = true; // ** boolean type can be true or false
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
