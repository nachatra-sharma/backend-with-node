// Given a value n (Positive Integer) print the pattern row = n and col = n

/*

for n  = 4;

* * * * 
* * * * 
* * * * 
* * * *

*/

function pattern(n){
	for(let row = 1; row <= n; row++){
		let str = "";
		for(let col = 1; col <= n; col++){
			str += "* ";
		}
		console.log(str);
	}
}

pattern(4);
