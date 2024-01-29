"use strict";
// Type aliases are a way to give a type a name. 
// type aliases are sometimes similar to interfaces but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand. 
let employee = {
    id: 1,
    name: "Kasidate",
    salary: 100000,
    phone: "0999999999",
    email: "testemail.001@kasidate.me"
};
console.log(employee); // { id: 1, name: 'Kasidate', salary: 100000, phone: '0999999999', email: 'testemail.001@kasidate' }
employee.email = "account.001@kasidate.me"; // change email
// employee.id = 2; // error because id is readonly modifier can not change value after initialized
console.log(employee); // { id: 1, name: 'Kasidate', salary: 100000, phone: '0999999999', email: 'account.001@kasidate' }
//  employee.note = "This is note"; // add new property / can add new property because of type aliases is object type but not recommend
//     console.log(employee); // { id: 1, name: 'Kasidate', salary: 100000, phone: '0999999999', email: 'account.001@kasidate', note: 'This is note' }
// let newEmployee: Employee = {
//     id: 2,
//     name: "Somchai",
//     salary: 200000,
//     phone: 9999999,
//     // error because email is required
// }
