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



*/


var teacher = "Nachatra";
function fun(){
    var teacher = "Rishi";
    console.log(teacher);
}
function gun(){
    var student = "Nakshu";
    console.log(student);
}

console.log(teacher);
fun();
gun();

