// Given a value n (always positive and odd integer) print the following pattern on the screen !!

/*

for n = 5

       * 
     * * * 
   * * * * * 
 * * * * * * * 
   * * * * * 
     * * * 
       * 

*/

function pattern(n){
    for(let row = 1; row <= n; row++) {
        let str = " ";
        let space = n - row;
        let star = 2 * row - 1;
        for(let i = 1; i <= space; i++){
            str += "  ";
        }
        for(let j = 1; j <= star; j++){
            str += "* "
        }
        console.log(str);
    }
    for(let row = 1; row <= n - 1; row++){
        let str = " ";
        let space = row;
        let star = 2 * (n - row) - 1;
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