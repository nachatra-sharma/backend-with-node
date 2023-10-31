let a = 7, b = 7, c = 7;
if(a == b && b == c && c == a){
    console.log("Equilateral Triangle");
} else if(a != b && b != c && c != a) {
    console.log("Scalen Triangle");
} else {
    console.log("Isoceles Triangle");
}