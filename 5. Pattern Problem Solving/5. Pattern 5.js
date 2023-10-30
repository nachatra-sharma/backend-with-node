// Give a value n (positive integer) print the following pattern

/*

for n = 4
 
* * * * 
* * * 
* * 
* 

*/

function pattern(n){
    for(let row = 1; row <= n; row++){
        let str = " ";
        for(let col = 1; col <= (n + 1) - row; col++){
            str += "* ";
        }
        console.log(str);
    }
}

pattern(4);
