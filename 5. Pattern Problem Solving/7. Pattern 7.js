// Butterfly Pattern 

/*

for n = 7 

 *           * 
 * *       * * 
 * * *   * * * 
 * * * * * * * 
 * * *   * * * 
 * *       * * 
 *           *

*/

function toppattern(n){
    for(let i = 1; i <= (n-1)/2; i++){
        let str = " ";
        let leftstar = i;
        for(let star = 1; star <= leftstar; star++){
            str += "* ";
        }
        let midspace = n - 2 * i;
        for(let space = 1; space <= midspace; space++){
            str += "  ";
        }
        let rightstar = i;
        for(let star = 1; star <= rightstar; star++){
            str += "* ";
        } 
        console.log(str);
    }
}

function midpattern(n) {
    let str = " ";
    for(let i = 1; i <= n; i++){
        str += "* ";
    }
    console.log(str);
}

function bottompattern(n){
    for(let row = 1; row <= n - 1 / 2; row++){
        let str = " ";
        let leftstar = (n - (row * 2) + 1)/2;
        for(let star = 1; star <= leftstar; star++){
            str += "* ";
        }
        let midspace = 2 * row - 1;
        for(let space = 1; space <= midspace; space++){
            str += "  ";
        }
        let rightstar = (n - (row * 2) + 1)/2;
        for(let star = 1; star <= rightstar; star++){
            str += "* ";
        }
        console.log(str);
    }
}

toppattern(7);
midpattern(7);
bottompattern(7);
