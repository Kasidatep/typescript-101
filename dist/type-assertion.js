"use strict";
// type assertion
// ** type assertion is a way to tell the compiler "hey, I know what I'm doing"
// ** example of type assertion
let username = 'John_Doe'; // ** unknown type can be any type
// username.toUpperCase(); // ** cannot call string method on unknown type
username.toUpperCase(); // ** can call string method on unknown type by using type assertion
//        ^^ this is type assertion 
username.toUpperCase(); // ** can call string method on unknown type by using type assertion
// ^^ another way to do type assertion
