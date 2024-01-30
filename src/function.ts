// void function type example : return nothing from function 
function sayHi(): void { 
  console.log("Hello TypeScript!!"); // Hello TypeScript!! not return anything because of void
}
sayHi(); // Hello TypeScript!!


// parameter function type example : return nothing from function but parameter is required 
function sayHello2(name: string): void { 
  console.log(`Hello ${name}`); // Hello {name}!! not return anything because of void
}
sayHello2("Kasidate!!"); // Hello Kasidate!!


// optional parameter function type example : return nothing from function but parameter is optional
function sayHey(name?: string): void { 
  console.log(`Hey ${name}`); // Hey {name}!! not return anything because of void
}
sayHey(); // Hey undefined!! because parameter is optional
sayHey("Kasidate!!"); // Hey Kasidate!!


// return function type example : return something from function
function total(a: number, b: number): number {
  return a + b; // return number        ^^
}   
function isTrue(): boolean {  // return boolean function can no parameter 
  return true; // return boolean
}
console.log(total(10, 20)); // 30
console.log(isTrue()); // true

// arrow function type example : easy way to write function
const total2 = (a: number, b: number): number => {
  return a + b; 
}
console.log(total2(10, 20)); // 30

// default parameter function type example : default parameter
function greeting(name: string = "Kasidate"): void { 
  console.log(`Hello ${name}`); // Hello {name}!! not return anything because of void
}
greeting(); // Hello Kasidate because parameter is optional if not set default parameter can be use
greeting("Somchai"); // Hello Somchai if set parameter it will be overwrite default parameter


// function type have object parameter example : object parameter
function printUser(user: {name: string, age: number}): void {
  console.log(`name: ${user.name} age: ${user.age}`);
}

const userInfo : {name: string, age: number} = { // define type of value in object
    name: "Kasidate",
    age: 21
}
printUser(userInfo); // name: Kasidate age: 21

// function type return object example : return object
function getUserInfo(): {name: string, age: number} { // define type of return value in object
  return {name: "Kasidate", age: 21};
}
console.log(getUserInfo()); // { name: 'Kasidate', age: 21 }


