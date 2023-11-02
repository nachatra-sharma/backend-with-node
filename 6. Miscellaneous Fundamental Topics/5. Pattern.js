// Given a pattern below print same pattern 

/*

for n = 4 Print this type of pattern

       1 
     1 2 1 
   1 2 3 2 1 
 1 2 3 4 3 2 1 

*/

function pattern(n){
    for(let row = 1; row <= n; row++){
        let str = " ";
        for(let space = 1; space <= n - row; space++){
            str += "  ";
        }
        for(let num = 1; num <= row; num++){
            str +=  `${num} `
        }
        let newNum = row - 1;
        for(let num = 1; num <= row - 1; num++){
            str += `${newNum} `
            newNum--;
        }
        console.log(str);
    }
}

pattern(7);