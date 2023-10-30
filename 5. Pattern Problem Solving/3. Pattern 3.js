// Given a value n (Positive Integer) print the following pattern on the screen

/*

for n = 4

      * 
    * * 
  * * * 
* * * *

*/

function pattern(n){
    for(let row = 1; row <= n; row++){
        let str = "";
        let space = n - row;
        let star = row;
        for(let i = 1; i <= space; i++){
            str += "  ";
        }
        for(let j = 1; j <= star; j++){
            str += "* ";
        }
        console.log(str);
    }
}

pattern(4);

