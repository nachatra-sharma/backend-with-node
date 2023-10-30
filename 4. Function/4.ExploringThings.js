// What if we pass more arguments then parameter holds

function sum(a , b){
    return a + b;
}

console.log(sum(12, 13, 14)); // First 2 arguments passes as parameter values ===>> 25

// What if we pass less argument then parameters holds

function multiply(a , b, c, d){
    return a * b;
}

console.log(multiply(2, 3)); // ===>> 6

// what if i pass less argument then parameters holds

function sub(a, b){
    return a - b;
}

console.log(sub(12)); // ===>> NaN

