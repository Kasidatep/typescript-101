let amount:number = 100;
let result:string;

// if(amount %2 == 0){
//     result = "even";
// }else{
//     result = "odd";
// }

// ternary operator of if-else
result = amount %2 == 0 ? "even" : "odd";

console.log(`amount ${amount} is ${result}`);
