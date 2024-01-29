"use strict";
// void function type example : return nothing from function 
function sayHi() {
    console.log("Hello TypeScript!!"); // Hello TypeScript!! not return anything because of void
}
sayHi(); // Hello TypeScript!!
// parameter function type example : return nothing from function but parameter is required 
function sayHello2(name) {
    console.log(`Hello ${name}`); // Hello {name}!! not return anything because of void
}
sayHello2("Kasidate!!"); // Hello Kasidate!!
// optional parameter function type example : return nothing from function but parameter is optional
function sayHey(name) {
    console.log(`Hey ${name}`); // Hey {name}!! not return anything because of void
}
sayHey(); // Hey undefined!! because parameter is optional
sayHey("Kasidate!!"); // Hey Kasidate!!
// return function type example : return something from function
function total(a, b) {
    return a + b; // return number        ^^
}
function isTrue() {
    return true; // return boolean
}
console.log(total(10, 20)); // 30
console.log(isTrue()); // true
// arrow function type example : easy way to write function
const total2 = (a, b) => {
    return a + b;
};
console.log(total2(10, 20)); // 30
// default parameter function type example : default parameter
function greeting(name = "Kasidate") {
    console.log(`Hello ${name}`); // Hello {name}!! not return anything because of void
}
greeting(); // Hello Kasidate because parameter is optional if not set default parameter can be use
greeting("Somchai"); // Hello Somchai if set parameter it will be overwrite default parameter
// function type have object parameter example : object parameter
function printUser(user) {
    console.log(`name: ${user.name} age: ${user.age}`);
}
const userInfo = {
    name: "Kasidate",
    age: 21
};
printUser(userInfo); // name: Kasidate age: 21
// function type return object example : return object
function getUserInfo() {
    return { name: "Kasidate", age: 21 };
}
console.log(getUserInfo()); // { name: 'Kasidate', age: 21 }
