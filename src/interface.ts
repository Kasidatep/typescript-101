// interfade is a way to give a type a name. to easily use in other place
interface ColorCode {
    red: number|string;
    green: number|string;
    blue: number|string;
}

interface Color {
    name: string;
    code: ColorCode;  // can use interface in interface mean ColorCode is type of Color
}

function getColorCode(colorCode: Color): ColorCode {
    return colorCode.code;
}

function printColor(color: Color): void {
    console.log(`name: ${color.name}, code: ${getColorCode(color).red}, ${getColorCode(color).green}, ${getColorCode(color).blue}`);
}

const red: ColorCode = {
    red: 255,
    green: 0,
    blue: 0
};

const redColor: Color = {
    name: "red",
    code: red
};

printColor(redColor); //name: red, code: 255, 0, 0

// extend interface example : extend interface
interface Profile {
    name: string;
    age: number;
}
interface Student extends Profile { // Student interface extend Profile interface mean Student interface have name, age
    studentId: number;
}

const student: Student = { // Student interface must have name, age, studentId
    name: "Kasidate",
    age: 21,
    studentId: 1
}

let std : Student = { 
    name: "Kasidate",
    age: 21,
    studentId: 1
}

console.log(std); // { name: 'Kasidate', age: 21, studentId: 1 }




