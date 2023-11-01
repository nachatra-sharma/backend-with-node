function pattern(n){
    for(let row = 1; row <= n; row++){
        let str = " ";
        for(let space = 1; space <= n - row; space++){
            str += "  ";
        }
        for(let num = 1; num <= row; num++){
            str +=  `${num} `
        }
        console.log(str);
    }
    
    for(let row = 1; row <= n - 1; row++){
        let str = " ";
        for(let num = row - 1; num <= row - 1; num++){
            str += `${num} `
        }
        console.log(str);
    }
}

pattern(4);