"use strict";
// Object type not define type of value in object -- not recommend
const person1 = {
    name: 'John',
    age: 30
};
console.log(person1.name); // John
console.log(person1.age); // 30
// Object type define type of value in object -- recommend
const person2 = {
    name: 'John', // string type only
    age: 30 // number type only 
};
console.log(person2.name); // John
console.log(person2.age); // 30
// empty object type
const person3 = {}; // empty object type
console.log(person3); // {}
const person4 = {
    name: 'John', // string type only
    age: 30 // number type only 
};
