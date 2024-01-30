// type assertion
// ** type assertion is a way to tell the compiler "hey, I know what I'm doing"

// ** example of type assertion
let username: unknown = 'John_Doe'; // ** unknown type can be any type
// username.toUpperCase(); // ** cannot call string method on unknown type
(username as string).toUpperCase(); // ** can call string method on unknown type by using type assertion
//        ^^ this is type assertion 
(<string>username).toUpperCase(); // ** can call string method on unknown type by using type assertion
// ^^ another way to do type assertion, target type is string


function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

let netPrice = getNetPrice(100, 0.05, true) as string; 
console.log(netPrice);

