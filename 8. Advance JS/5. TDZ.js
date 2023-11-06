// ================================ Var ====================================

/*

Var have no tempreal dead zone so before declaration we can access the variable name but not the actual value because it was defined in parsing phase

*/

console.log(name); // Undefined
var name = 'Rahul';
function fun() {
    let name = 'Krish';
    console.log(name); // Krish
}
fun();
console.log(name); // Rahul

// ================================ Let ======================================

/*

let have tempreal dead zone that's means we can't access a variable before the decelaration part

*/

console.log(num); // error
let num = 5; // global

function gun() { // global
    console.log(num);
}

gun();

// ================================= Const =====================================

/*

const have tempreal dead zone that's means we can't access a variable before the decelaration part

*/

console.log(fname); // Cannot access 'fname' before initialization
const fname = "nachatra";

function fullName() {
    console.log(lname); // Cannot access 'fname' before initialization
    const lname = "sharma";
}

fullName();
