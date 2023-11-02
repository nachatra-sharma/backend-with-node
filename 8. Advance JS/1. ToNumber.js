console.log(4 - undefined);
// undefined return NaN

console.log(3 - null);
// null return +0

console.log(3 - true);
// boolean ture return 1 
// boolean false return 0

let obj = {};
console.log(3 - obj);
// ==>> 3 - obj = valueOf return ==> Object ==>> toString ==> [Object object] ==> 3 - NaN == NaN

let obj1 = {valueOf(){ return 4}};
console.log(5 - obj1);