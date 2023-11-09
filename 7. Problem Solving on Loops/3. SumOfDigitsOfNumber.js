function sumOfDigits(num){
    sum = 0;
    remains = 0;
    while(num > 0){
        remains = num % 10;
        sum += remains;
        num = Math.floor(num / 10);
    }
    console.log(sum);
}

sumOfDigits(4136);