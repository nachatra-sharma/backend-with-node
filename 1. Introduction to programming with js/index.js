// Showing user data using console.log in JS
console.log("Hello world");

// create a variable add some value to it and print the value
let x = 1;
console.log(x);

// Data Types in JS

/*
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. Object
*/

/*
There are two types of data types
1. Premitive data types -> atomic in nature
2. Non-premitive data types -> combination of primitive data types
*/

// Example of data types in JS
//  ============== String ================

let firstName = "Nachatra";
console.log(firstName);
console.log('Rishi');
console.log(`Nachatra Sharma`);

// Number

let num = 22;
console.log(num);
console.log(1.2);
console.log(-123.33);

// Boolean

console.log(true);
console.log(false);

// Null --> It actually represent empty value

let lastName = null;
console.log(lastName);

// Undefined --> it represent a variable that is not defined yet

let phoneNumber = undefined;
console.log(phoneNumber);

// Symbol

// Object --> key value pairs

let obj = {
    firstName : "Rishi",
    lastName : "Sharma",
    age : "21",
}

console.log(obj);

// Special Character
console.log("Hello\tWorld"); // Gives a tab
console.log("Hello\nWorld"); // New line character

// Operators in JS
// Arithmetic Operators
// + - * / ** %
console.log("Arithmetic Operator");

let a = 4;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Assignment Operators
// = += -= *= /= %=

console.log("Assignment Operator");

let number = 5;
console.log(number);

number += 2;
console.log(number);

number -= 1;
console.log(number);

number *= 2;
console.log(number);

number /= 2;
console.log(number);

number %= 5;
console.log(number);

// Relational Operator
// > < >= <= 

console.log("Relational Operators");

console.log(5 > 3);
console.log(10 < 13);
console.log(2 >= 2);
console.log(3 <= 5);

// Logical Operators
// && || !

console.log("Logical Operators");
console.log(8 > 5 && 12 > 6);
console.log(3 < 6 || 3 > 6);
console.log(!"");

// Short Circuiting 
console.log("Short Circuting");
console.log(10 && 6); // answer should be 6
console.log(10 || 4); // answer should be 10

// Falsy Values in JS
// false, -0, 0, +0, "", NaN, Undefined, Null

// Bitwise Operators
// & | ~ ^
console.log("Bitwise Operators");
console.log(5 & 6); // 4
console.log(5 | 6); // 7 

// Equality Operator
// == and ===
console.log("Equality Operators");
console.log(1 == "1");
console.log(1 === "1");

/* 
Keep in mind both double and triple equal operator checks the type of operands 
double equal to does coercion
but triple equal to doesn't do coercion 
*/

// Typeof Operators
console.log("Type of operator");
console.log(typeof 123);
console.log(typeof "rishi");
console.log(typeof undefined);
console.log(typeof object);
console.log(typeof null);
console.log(typeof true);
