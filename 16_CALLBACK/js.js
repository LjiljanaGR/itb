//Bez callback funkcija
let a = [-6, 8, 11, 6, 0];
let b = ["pera" , "mika" , "laza"];


function ispisNizaKonzola(niz) {
    let s = "";
    for(let i = 0; i <= niz.length; i++) {
        s += niz[i] + " ";
    }
    console.log(s);
}

function ispisNizaStranica(niz) {
    let s = "";
    for(let i = 0; i <= niz.length; i++) {
        s += niz[i] + " ";
    }
    let div = document.getElementById('container');
    div.innerHTML += s;
}

ispisNizaKonzola(a);
ispisNizaKonzola(b);

ispisNizaStranica(a);
ispisNizaStranica(b);

//Funkcija 2: niz=>{for petlja prodje kroz sve elemente niza, i generise string ispisom u konzoli};
// Funkcija 2: niz=>{for petljom prodjemo kroz sve elemente niza, i generisani string ispise u div tag}
//A moze i ovako:
//Funkcija: (niz, nacin) =>{for petljom prodjemo kroz sve elemente niza, i generisani string ispise na zadati nacin}


//Sa callBack funkcijama

function ispisKonzola(p) {
    console.log(p);
}

function ispisStranica(p) {
    let div = document.getElementById('container');
    div.innerHTML += p;
}

function ispisNiza(niz, cb) {
    let s = "";
    for(let i = 0; i <= niz.length; i++) {
        s += niz[i] + " ";
    }
cb(s);
}

ispisNiza(a, ispisKonzola);
ispisNiza(b, ispisKonzola);
ispisNiza(a, ispisNizaStranica);
ispisNiza(b, ispisNizaStranica);


//Anonimna funkcija kao callback funkcija

ispisNiza([1, 2, 3, 4, 5], function(p) {
    console.log(p);
});

//Arrow funkcija kao callback funkcija

ispisNiza([9, 8, 7, 6], p => {
    console.log(p);
})

//forEach petlja

a.forEach(ispisKonzola);
//let a = [-6, 8, 11, 6, 0];
//forEach petlja prolazi kroz sve elemnte niza, i za svaki element niza 
//poziva callback funkciju i prosledjuje vrednost elementa kao
//argument.

b.forEach(ispisKonzola);
//let b = ["pera" , "mika" , "laza"];

a.forEach(function(e) {
    console.log(e);
});

a.forEach(e =>  {
    let div = document.getElementById("container");
    div.innerHTML += e +" ";

});

a.forEach((e, i) => {
    console.log(`element ${e} u nizu ima index ${i}`)
}
)