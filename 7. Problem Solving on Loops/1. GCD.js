function gcd(a, b) {
    let result = 0;
    for(let i = 2; i <= Math.min(a,b); i++){
        if(a % i == 0 && b % i == 0){
            result = i;
        }
    }
    return result;
}

console.log(gcd(24, 28));