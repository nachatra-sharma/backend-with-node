function isPrime(num) {
    let flag = true; 
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            flag = false;
        }
    }
    return flag;
}

let isPrimeOrNot = isPrime(23);

if(isPrimeOrNot) {
    console.log("Number is prime");
}else {
    console.log("Number is not a prime");
}


