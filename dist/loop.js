"use strict";
// for loop example
for (let count = 1; count <= 10; count++) {
    console.log(`[for loop]count = ${count}`);
}
// while loop example
let count = 1;
while (count <= 10) {
    console.log(`[while loop]count = ${count}`);
    count++;
}
// do-while loop example
count = 1;
do {
    console.log(`[do-while loop]count = ${count}`);
    count++;
} while (count <= 10);
// for-of loop example  ** for-of loop is used for array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
    console.log(`[for-of loop]number = ${number}`);
}
// for-in loop example  ** for-in loop is used for object
let user = {
    name: "John Doe",
    age: 21,
    single: true
};
for (let key in user) {
    // console.log(`[for-in loop]key = ${key} value = ${user[key]}`); // ** user[key] is the same as user.name
}
// continue example
for (let count = 1; count <= 10; count++) {
    if (count == 5) {
        continue;
    }
    console.log(`[continue]count = ${count}`);
} // ** continue is skip the current iteration, result is skip count = 5
