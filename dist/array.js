"use strict";
// array type : array is a collection of items that are of the same type
const numArr = [1, 2, 3, 4, 5]; // number array
// array type must include ` [] ` after type of array example : number[], string[], boolean[], object[]
const strArr = ["one", "two", "three", "four", "five"]; // string array
const userArr = [
    { name: "Kasidate", age: 21 },
    { name: "Somchai", age: 30 },
    { name: "Somsri", age: 40 },
    { name: "Somset", age: 50 },
    { name: "Somkiet", age: 60 },
]; // object array
console.log(userArr);
console.log(userArr[0]); // access object in array from index [0] is first object
console.log(userArr[0].age); // access object in array from index [0] is first object and access property age in object
userArr.push({ name: "Sompong", age: 70 }); // add new object to array 
console.log(userArr); // show array after add new object
// array method : array have many method for use example : push, pop, shift, unshift, splice, slice, concat, sort, reverse, indexOf, find, findIndex, forEach, map, filter, reduce, reduceRight, every, some, includes, join, toString, toLocaleString, fill, copyWithin, entries, keys, values, from, isArray, of
// can use for loop, for-in to loop array
for (let i = 0; i < userArr.length; i++) { // for loop
    console.log(userArr[i].name);
}
for (const i in userArr) { // for-in loop
    console.log(userArr[i].name);
}
userArr.forEach(user => console.log(user.name)); // forEach method with arrow function
const userArr2 = [
    { name: "Kasidate", age: 21 },
    { name: "Somchai", age: 30 },
]; // object array
// array properties : array have many properties for use example : length
console.log(userArr.length); // show length of array
// mixed array type : array can have many type in array
const mixedArr = ["one", 2, true, "0", 0, false]; // mixed array type can have string, number, boolean type
console.log(mixedArr); // show mixed array
