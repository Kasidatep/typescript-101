"use strict";
function getColorCode(colorCode) {
    return colorCode.code;
}
function printColor(color) {
    console.log(`name: ${color.name}, code: ${getColorCode(color).red}, ${getColorCode(color).green}, ${getColorCode(color).blue}`);
}
const red = {
    red: 255,
    green: 0,
    blue: 0
};
const redColor = {
    name: "red",
    code: red
};
printColor(redColor); //name: red, code: 255, 0, 0
const student = {
    name: "Kasidate",
    age: 21,
    studentId: 1
};
let std = {
    name: "Kasidate",
    age: 21,
    studentId: 1
};
console.log(std); // { name: 'Kasidate', age: 21, studentId: 1 }
