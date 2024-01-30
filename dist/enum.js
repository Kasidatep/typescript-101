"use strict";
//Enum is a way of giving more friendly names to sets of numeric values.
// enum type : enum is a new data type which includes set of numeric values
// enum is a collection of related values that can be numeric or string values
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MAY"] = 5] = "MAY";
    Month[Month["JUN"] = 6] = "JUN";
    Month[Month["JUL"] = 7] = "JUL";
    Month[Month["AUG"] = 8] = "AUG";
    Month[Month["SEP"] = 9] = "SEP";
    Month[Month["OCT"] = 10] = "OCT";
    Month[Month["NOV"] = 11] = "NOV";
    Month[Month["DEC"] = 12] = "DEC";
})(Month || (Month = {}));
// in use case of enum
function isItWinter(month) {
    let isWinter;
    switch (month) {
        case Month.DEC: // ** can use enum value in switch case
        case Month.JAN:
        case Month.FEB:
            isWinter = true;
            break;
        default:
            isWinter = false;
            break;
    }
    return isWinter;
}
console.log(isItWinter(Month.JAN)); // true
console.log(isItWinter(Month.JUN)); // false
//another way to use enum
console.log(Month[1]); // JAN
console.log(isItWinter(1)); // true it same as Month.JAN, because JAN is 1
