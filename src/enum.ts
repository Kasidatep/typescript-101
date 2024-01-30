//Enum is a way of giving more friendly names to sets of numeric values.
// enum type : enum is a new data type which includes set of numeric values
// enum is a collection of related values that can be numeric or string values

enum Month {
    JAN = 1, // ** can set value of enum 
    FEB, // ** if not set value of enum it will be 2 bt default
    MAR, // ** if not set value of enum it will be 3 by default
    APR,
    MAY,
    JUN,
    JUL,
    AUG,
    SEP,
    OCT,
    NOV,
    DEC,
}

// in use case of enum
function isItWinter(month: Month) { // Month is enum type 
    let isWinter: boolean; 
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