"use strict";
const corner = ['Frontend', 'Backend', 'Fullstack'];
const department = ['Finance', 'Marketing', 'HR', 'IT'];
// spread operator example : spread operator is use to copy array or object to new array or object
const allDepartment = [...corner, ...department]; // copy array to new array
console.log(allDepartment); // ["Frontend", "Backend", "Fullstack", "Finance", "Marketing", "HR", "IT"]
// or can push array to new array using spread operator like this
department.push(...corner); // push array to new array
console.log(department); // ["Finance", "Marketing", "HR", "IT", "Frontend", "Backend", "Fullstack"]
// rest parameter example : rest parameter is use to get all parameter in function
// rest is use to get all parameter in function and return array of parameter // must be last parameter in function
function add(...numbers) {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(add(1, 2, 3, 4, 5)); // 15
// Array destructuring example : array destructuring is use to get value from array to variable
const [frontend, backend, fullstack] = corner; // array destructuring
console.log(frontend); // Frontend
console.log(backend); // Backend
const [finance, marketing, ...other] = department; // array destructuring with rest parameter
console.log(finance); // Finance
console.log(marketing); // Marketing
console.log(other); // ["HR", "IT"]
