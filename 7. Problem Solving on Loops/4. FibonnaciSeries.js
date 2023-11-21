function printFibo(n) {
    if(n == 0){
        console.log(0);
        return;
    } else if (n >= 1){
        console.log(0);
        console.log(1);
    }
    let last = 0;
    let first = 1;
    for(let i = 2; i <= n; i++){
        let num = last + first;
        console.log(num);
        last = first;
        first = num;
    }
}
printFibo(6);