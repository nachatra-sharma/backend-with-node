// Check which number are odd and which are even btw 1 - 50

let flag;

function isEven(num){
    if(num % 2 == 0) {
        flag = true;
    } else {
        flag = false;
    }
    return flag;
}

for(let i = 1; i <= 50; i++){
    if(isEven(i)){
        console.log(i ," Even");
    }else {
        console.log(i ,"Odd");
    }
}
