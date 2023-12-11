//1. Ispisati brojeve od 1 do 20:
//a. Svaki u istom redu
//_______________________________________________

let i = 1;
let n = 20;

while (i <= n) {
    console.log(i);
    i++;
}

//===================================

for (i = 1; i <= n; i++) {
    console.log(`${i}`);
}

//2. b Svaki u novom redu
//________________________

let poruka = "A";
i = 1;

while (i <= n) {  
    poruka = poruka + i + " ";
    i++;
}
console.log(poruka);

//============================================

let porukaN = "b";
for (i = 1; i <= n; i++) {
    porukaN = porukaN + i + " ";
    
}
console.log(porukaN);

//2. Ispisati brojeve od 20 do 1.
//________________________________

i = 20;
while (i >=1) {
    console.log(i);
    i--;
}

//=============================================

for (i = 20; i >=1; i--) {
    console.log(i);
}

//3.Ispisati parne brojeve od 1 do 20.
//________________________________________

i = 1;
n = 20;

while (i <= n) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

//=============================================

i = 1;
n = 20;

for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        console.log (i);
    }
}

/* 4. Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih 
obojiti u tri različite boje*/
//_____________________________________________________________________

i = 1;
n = 20;

while (i <= 20) {
    if (i % 3 == 0) {
        document.write("<p style = 'color: green;'> Paragraf </p>");
    }
    else if (i % 3 == 2)
        document.write("<p style = 'color: red;'> Paragraf </p>");
    
        else {
            document.write("<p style = 'color: blue;'> Paragraf </p>");
        }
        i++;
} 

//==========================================================

i = 1;
n = 20; 

for (i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        document.write("<p style = 'color: green;'> Paragraf </p>");
    }
    else if (i % 3 == 2)
        document.write("<p style = 'color: red;'> Paragraf </p>");
    
        else {
            document.write("<p style = 'color: blue; background-color: red'> Paragraf </p>");
        }
}

//5. Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira
//_______________________________________________________________________________
i= 1;
n = 2; 

while (i <= n) {
    if (i % 2 == 0) {
        document.write(`<img src="torta.jpg" style = "border: 10px solid orange; width: 200px;">`);
    }
    else {
        document.write(`<img src="dog.jpg" style = "border: 10px solid green; width: 200px;">`);
    }
    i++;
}

//=============================================================================

i = 1;
n = 2;

for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        document.write(`<img src="torta.jpg" style = "border: 10px solid orange; width: 200px;">`);
    }
    else {
        document.write(`<img src="dog.jpg" style = "border: 10px solid green; width: 200px;">`);
    }
}

//6. Odrediti sumu brojeva od 1 do 100
//______________________________________________________________________

let suma = 0;
i = 1; 
n = 100;

while (i <= n) {
    suma = suma + i;
    i++;
}
console.log(`Suma brojeva je ${suma}`);

//====================================================================

suma = 0;

for (i = 1; i <= 100; i++) {
    suma += i;
}   
console.log(`Ovo je ${suma} sa petljim for!`)

//7. Odrediti sumu brojeva od 1 do n
//_____________________________________________________________________

suma = 0;
i = 1;
n = 100;

while (i <= n) {
    suma += i;
    i++
}
console.log(`Ovo je ${suma} sa petljim while`);

//=====================================================================

suma = 0; 
i = 1;
n = 100;

for (i = 1; i <= n; i++) {
    suma += i;
}
console.log(`A ovo je ${suma} sa petljim for!`)


//8. Odrediti sumu brojeva od n do m
//===================================================================

suma = 0; 
i = 1;
n = 10;

while (i <= 10) {
    suma += i;
    i++
}
console.log(`Suma brojeva ${i} i ${n} je ${suma}`);

//====================================================================

suma = 0; 
i = 1; 
n = 10;

for (i = 1; i <= n; i++) {
    suma += i;
}
console.log(`Suma brojeva ${i} i ${n} je ${suma}`);

//9. Odrediti proizvod brojeva od n do m
//===================================================================

let proizvod = 1; 
i = 2;
n = 3;

while (i <= n) {
    proizvod *= i; 
    i++;
}

console.log(`Proizvod dva broja je ${proizvod}`);

 //===================================================================

 proizvod = 1;
 i = 2;
 n = 3;

 for (i = 2; i <= n; i++) {
    proizvod = proizvod * i;
 }
 console.log(`Proizvod ova dva broja je ${proizvod}`);

//10. Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m
//===================================================================

let sumaKvadrataParnih = 0;
let sumaKubovaNeparnih = 0;
i = 1;
n = 10;

while (i <= n) {
    if (i % 2 ==0) {
        sumaKvadrataParnih += i ** 2;
        i++;
    }
    else {
        sumaKubovaNeparnih += i ** 3;
        i++;
    }
}
console.log(`WHILE Ovo je suma kvadrata parnih ${sumaKvadrataParnih} a ovo suma kubova neparnih ${sumaKubovaNeparnih}`);

//====================================================================

sumaKvadrataParnih = 0;
sumaKubovaNeparnih = 0;
i = 1; 
n = 10;

for (i = 1; i <=10; i++) {
    if (i % 2 ==0) {
        sumaKvadrataParnih += i ** 2;
    }
    else {
        sumaKubovaNeparnih += i ** 3;
    }
}
console.log(`FOR Ovo je suma kvadrata parnih ${sumaKvadrataParnih} a ovo suma kubova neparnih ${sumaKubovaNeparnih}`);

//11. Odrediti sa koliko brojeva je deljiv uneti broj k
//===================================================================

let brDelioca = 0;
let k = 20; 
i = 1; 

while (i <= k) {
    if (k % i == 0) {
        brDelioca++;
    }
    i++;
}
console.log(`Broj ${k} ima ukupno ${brDelioca} delioca`);

//=================================================================

brDelioca = 0;
k = 20;
i = 1;

for (i = 1; i <= k; i++) {
    if (k % i ==0) {
    brDelioca++;
    }
}

console.log(`Broj ${k} ima ukupno ${brDelioca} delioca`);


//12.Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

i = 1; 
n = 12;
brDelioca = 0;


while (i <= n) {
    if (n % i == 0) {
        brDelioca++
    }
    i++;
}

if (brDelioca == 2) {
    console.log(`Ovo je prost broj`);
}
else {
    console.log(`Nije prost broj`);
}

//========================================================

i = 1; 
n = 10;
brDelioca = 0;

for (i = 1; i <= n; i++) {
    if (n % i == 0) {
        brDelioca++;
    }
    i++;
}

if (brDelioca == 2) {
    console.log(`Ovo je prost brojJJ`);
}
else {
    console.log(`Nije prost broj`);
}

/*Inicijalizujemo promenljive:

= n je broj koji proveravamo.
= i se koristi kao brojač u petlji, počinjemo od 1.
= brDelioca se inicijalizuje na 0, koristićemo ga da brojimo koliko delilaca ima broj n.
= Petlja se izvršava od 1 do n.

U svakom koraku petlje proverava se da li je n deljiv sa i (nema ostatka pri deljenju).
Ako je deljiv, povećava se brojač brDelioca.
Nakon završetka petlje, proveravamo vrednost brDelioca.

Ako je brDelioca jednak 2, to znači da je broj n deljiv samo sa 1 i sa samim sobom.
U tom slučaju, ispisujemo poruku da je broj n prost.
Ako brDelioca nije jednak 2, to znači da broj n ima više od dva delioca i stoga nije prost. U tom slučaju, ispisujemo poruku da je broj n složen. */