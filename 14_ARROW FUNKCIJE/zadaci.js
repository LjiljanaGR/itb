//ZADAtak 1. 
//Varijanta 1: Preko klasicnih funkcija
/*
function neparan(n) {
    
    if(n % 2 ==1) {
        return true;
    }
    else {
        return false;
    }
}
*/

function neparan(n) {
    
    let x; //vazi u bloku/zagradama u kojem je definisan
    if(n % 2 ==1) {
        x = true;
    }
    else {
        x = false;
    }
    return x;
}

function neparan2(n) {
    if (n % 2 == 1) {
        var x = true;//var dostupna unutar funkcije u kojoj je deklarisana
    }
    else { 
        var x = false;
    }
    // var = x; // tacno, ali besmisleno 
}

let p = 5; 
console.log(neparan(p));


//var m = 9;

let neparan3 = (n) => {
    let x = false;
    if(n % 2 == 1) {
        x = true;
    }
    return x;
}
/*
let nepara4 = (n) => {
    if (n % 2 ==1) {
        return true;
    }
    else {
        return false;
    }
}
*/

let nepara4 = (n) => {
    return (n % 2 == 0) ? true : false;// ?: ternarni operator, prihvata tri parametra
}
console.log(nepara4(6));

let neparan5 = (n) => {
    return (n % 2 == 1);
}
console.log(neparan5(6));

let neparan6 = (n) => (n % 2 ==1);
console.log(neparan6(6));

let uvecajZaDva = n => (n += 2);
console.log(uvecajZaDva(7));

////////////////////////////////////////////
//Napisati funkciju maks2 koja vraća veći od 
//dva prosleđena realna broja.
///////////////////////////////////////////

 //PRVI NACIN
 //_______________________________ 
 let maks2 = (a, b) => {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
 }
 console.log(maks2(1, 2));


//DRUGI NACIN
//_________________________________ 
let maks2a = (a, b) => {
    return (a > b);
}
console.log(maks2a(1, 2));

//TRECI NACIN
//___________________________________
let maks2ab = (a, b) => (a > b);
console.log(maks2ab(1, 2));

//CETVRTI NACIN
//______________________________________
let maks2abc = (a, b) => a > b ? a : b;
console.log(maks2abc(1, 2));

///////////////////////////////////////////////////
/* napisati funkciju maks4 koja vraća najveći od 
četiri prosleđena realna broja. 
U oba slučaja, brojevi su međusobno različiti.*/
///////////////////////////////////////////////////

//PRVI NACIN
//_______________________________________________
let maks4 = (a , b, c, e) => Math.max(a, b, c, e);

console.log(maks4(1, 8, 3, 4));

//DRUGi NACIN
//____________________________________________________
let maks4a = (a, b, c, d) => maks2(maks2(a, b), maks2(c, d));


////////////////////////////////////////////////////
/*Funkcija se ne menja. Samo u html fajlu, unutar body taga, 
dodajte div sa pozadinskom plavom bojom, i neka sadrži neki tekst. 
Onda u javascriptu pozovite ovu funkciju, i njen rezultat dodatje u 
div tag (znači da u div tagu ostane tekst, samo da se doda sličica
posle teksta). Napisati funkciju koja vraća sliku za prosledjenu adresu slike.*/
////////////////////////////////////////////////

let prikaziSliku = putanja => `<img src="${putanja}" alt="blabla">`;

let nekiDiv = document.getElementById('nekiDiv');
nekiDiv.innerHTML += prikaziSliku("torta.jpg");





