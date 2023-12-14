// KLASICNE/IMENOVANE FUNKCIJE

function sum(a, b) {
    return a + b; 
}
let rez = sum(1, 2); //poziv funkcije (po imenu, iza kog se navode argumenti)
console.log(rez);

//ANONIMNE/BEZ IMENA FUNKCIJE

let suma = function(a, b) {
    console.log(this);
    return a + b;
}
console.log(suma(1, 2));

//Arrow funkcije (su anonimne funkcije, koje imaju dva specificna svojstav)
//1. Imaju skracen zapis

//2. znacenje kljucne reci this

let suma2 = (a, b) => {
    console.log(this);
    return a + b; 
}
console.log(suma2(1, 2));

let hello = () => {
    console.log('Hello world!');
}
hello();

let echo = (s1, s2) => {
    let result = s1 + "," + s2;
    console.log(result);
}

echo("stefan", "stanimirovic");
echo("jelena", "jelena");