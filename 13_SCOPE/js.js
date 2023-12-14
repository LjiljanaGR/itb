let a = 10;
var b = 20;
const c = 30; 
console.log(a, b);

a = 15; //let
var b = 25; //var
console.log(a, b); 

if (true) {
    let a = 50;//samo za scope u if naredbi
    var b =70; //globalno
    console.log(a, b);
}