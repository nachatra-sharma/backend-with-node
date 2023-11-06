/*

Scopes ==>> Function and Variables
there are two phases in which js code execute

1. parsing phase 
2. execution phase

In parsing phase we do scope resolution ===>>
there are three types of scopes
1. Global scopes
2. Function scopes
3. Block scopes

var have function and global scope only it doesn't have block scope
let have function block and global scope all of them
const have function block and global scope all of them

*/

var teacher = "Nachatra"; // global scope
function fun(){ // global scope
    var teacher = "Rishi"; // scope of fun
    console.log(teacher);
}
function gun(){ // global scope
    var student = "Nakshu"; // scope of gun
    console.log(student);
}

console.log(teacher);
fun();
gun();


const fname = "rishi";
function fullName() {
    const lname = "sharma";
    console.log(fname); // rishi
    console.log(lname); // sharma
}
fullName();
console.log(fname); // rishi
console.log(lname); // error

{
    const greet = "Hello !";
}

console.log(greet);
