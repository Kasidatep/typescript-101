//Tuple : Tuple is a new data type which includes two set of values of different data types.
// deference between array and tuple is array can have many value but tuple can have only two value
// tuple is fixed length and fixed type but array is not fixed length and fixed type
// when use tuple must define type of value in tuple and length of tuple 

// Tuple type example : tuple type
// this tuple type can have only two value and type of value is string and number
const error404: [string, number] = ["Not Found", 404]; // define type of value in tuple and length of tuple
error404[0] = "Not Found"; // string type only
error404[1] = 404; // number type only
error404.pop(); // remove last value from tuple, now tuple have 1 value
console.log(error404); // ["Not Found"]
error404.push(404); // add new value to tuple, now tuple have 2 value
console.log(error404); // ["Not Found", 404]
error404.push(404); // add new value to tuple, now tuple have 3 value
console.log(error404); // ["Not Found", 404, 404]
error404.push("404"); // add new value to tuple, now tuple have 4 value
console.log(error404); // ["Not Found", 404, 404, "404"]

// Tuple label example : tuple label is a feature that allows us to access tuple value by label, not show in javascript compile time only
const point: [x:number, y:number] = [10, 20]; // define type of value in tuple and length of tuple
console.log(point); // 10

// Tuple type can use type aliases for tuple type example : type aliases
type Point = [x:number, y:number]; // type aliases
const point2: Point = [10, 20]; // define type of value in tuple and length of tuple
console.log(point2); // 10