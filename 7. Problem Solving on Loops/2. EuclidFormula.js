function gcd(a, b){
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let r = max % min;
    if(r == 0) {
        return min;
    }else {
        while(r != 0){
            max = min; 
            min = r;
            r = max % min;
        }
        return min;
    };
}

let ans = gcd(28, 24);
console.log(ans);
