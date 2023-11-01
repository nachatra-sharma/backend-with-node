function checkGCD(a,b){
    let result = 0;
    let checkingNum = (a < b) ? a : b;
    for(let i = 2; i < checkingNum; i++){
        if(a % i == 0 && b % i == 0){
            result = i;
        }
    }
    console.log(result);
}

checkGCD(24,28);