//1. Ispisati brojeve od 1 do 20 
//==========================================================

let i = 1; 
let n = 20;

for (i = 1; i <= n; i++) {   
    console.log(`${i}`);
}
console.log(`Ispisati brojeve od 1 do 20. Kraj petlje!`);

//===========================================================

i = 1;
n = 20;

while (i <= n) {
    i++;
    console.log(`${i}`);
}
console.log(`Kraj petlje! While petlja`);

//2. Ispisati brojeve od 20 do 1 
//============================================================

i = 20; 
n = 1;

for (i = 20; i >= n; i--) {
    console.log(i);
}
console.log(`Kraj petlje!`);

//============================================================

i = 20;
n = 1;

while (i >= n) {    
    i--;
    console.log(i);
}
console.log(`Kraj petlje!`);

//3. Ispisati parne brojeve od 1 do 20 
//==============================================================

i = 1;
n = 10;

for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log(`Kraj petlje!`);

//================================================================

i = 1; 
n = 10;

while (i <= n) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}
console.log(`Kraj petlje!`);

//4. Ispisati dvostruku vrednost brojeva od 5 do 15 *
//=================================================================

i = 5;
n = 15;

for (i = 5; i <= 15; i++) {
    console.log(`Dvostruka vrednost je ${i*2} broja ${i}`);
}

//==================================================================
i = 5;
n = 15;

while (i <= n) {
    console.log(`Dvostruka vrednost sa WHILE petljom ${i*2} od broja ${i}`);
    i++;
}

//5.Odrediti sumu brojeva od 1 do n
//================================================================

suma = 0;
n = 5;

for(let p = 1; p <= n; p++) {
    suma += p;// suma = suma + p;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

i = 1;
n = 5;
suma = 0;

while (i <= n) {
    suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`)

//6. Odrediti sumu brojeva od n do m *
//===================================================================

i = 1;
n = 10;
suma = 0;

for (i = 1; i <= n; i++) {
    suma += i;
}

console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

//============================================================

i = 1; 
n = 10; 
suma = 0; 

while (i <= n) {    
    suma += i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

//7. Odrediti proizvod brojeva od n do m
//========================================================

i = 5; 
let m = 13; 
let proizvod = 1;

for (i; i <= m; i++) {
    proizvod *= i;
}
console.log(`Proizvod brojeva od ${i} do ${m} je ${proizvod}`);

//=============================================================

i = 5;
m = 13;
proizvod = 1;

while (i <= 13) {
    proizvod *= i;
    i++;
}
console.log(`Proizvod brojeva je ${proizvod}`);

//8. Odrediti sumu kvadrata brojeva od n do m *
//=================================================================

let sumaKvadrata = 0;
n = 4; 
m = 6; 

for (i = n; i <= m; i++) {
    sumaKvadrata += i ** 2;
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} iznosi ${sumaKvadrata}`);
//=====================================================================

/*9. Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih
1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć 
brojača (iteratora).*/
//================================================================================= 

n = 1;
m = 3;

for(let i = n; i <= m; i++) {
    if(i == 1) {
        document.write(`<img src="1.jpg">`);
    }
    else if (i ==2) {
        document.write(`<img src="2.jpg">`);
    }
    else {
        document.write(`<img src="3.jpg">`);
    }
}

//Drugi nacin
//=======================================================================
for(let i = n; i <= m; i++) {
    document.write(`<img src="${i}.jpg">`);
}

/* 10. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 
20 do 100.*/
//=======================================================================

let broj11 = 11;
let proizvod11 = 1;

n = 20;
m = 100;

for(let i = n; i <=100; i++) {
    if(i % 11 == 0) {
        proizvod11 *= i;
    }
}
console.log(`${proizvod}`);
  
/*11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.*/
//=======================================================================

n = 5; 
m = 150;

for(let i = n; i <= m; i++) {
    if(i % 13 == 0) {
        console.log(i);
    }
}
console.log(`Brojeva deljivih sa 13 ima ${i}`);

/*12. Ispisati aritmetičku sredinu brojeva od n do m.*/
//====================================================================

let sredina = 0; 
let sumaBr = 0;
n = 1; 
m = 3;

for(let i = n; i <= m; i++) {
    sumaBr += i;
    sredina = sumaBr / i;
}
console.log(`Suma brojeva je ${sumaBr}`)
console.log(`Aritmeticka sredina brojeva je ${sredina}`)

/*13. Prebrojati koliko brojeva od n do m je pozitivno, a 
koliko njih je negativno. */
//==================================================================

n = 1;
m = 20;
let pozitivno = 0;
let negativno = 0;

for(let i = n; i <=m; i++) {
    if(i % 2 == 0) {
        pozitivno++;
        
    }
    else {
        negativno++;
    }
}

console.log(`${pozitivno} je pozitivno, a ${negativno} negativno`)

//14. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *
//========================================================================

let deljivi = 0;
n = 5; 
m = 50;

for(let i = n; i <=m; i++) {
    if(i % 5 == 0 || i % 5 ==0) {
        deljivi++;
    }
}
console.log(`ima ${deljivi} brojeva`);

/*15.Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja 
cifra 4.*/
//====================================================================
let sumabr = 0;
let brBrojeva = 0;
n = 1; 
m = 14;

for(let i = n; i <=m; i++) {
    if(i % 10 === 4) {
        brBrojeva++;
     sumabr += i;
    }
}

console.log(`${sumabr} je suma brojeva koji se zavraavju na 4, a i brojevi su ${brBrojeva}`);

//16.Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

//17. Odrediti proizvod brojeva od n do m koji su deljivi brojem a *

//18. Odrediti sa koliko brojeva je deljiv uneti broj k

/*19. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv 
samo sa jedan i sa samim sobom.*/

/*20. Napraviti tabelu sa 6 redova.Svaki red tabele treba da ima po dve ćelije (dve kolone).
Svakom parnom redu dodati klasu „obojen“.Korišćenjem CSS-a, klasi obojen 
postaviti proizvoljnu boju pozadine. */



//////////////////////////////////////////////////////////
//////// DODATNI ZADACI
///////////////////////////////////////////////////////////


//4.1.1 Напиши програм који 30 пута исписује Ja vežbam Python.


for (let i = 0; i <= 30; i++) {
    console.log("ja");
}


//24. Napisati program koji unetom broju N:
// a) Sabira sve cifre
//================================================================

let broj = 11;
let sum = 0;
i= 1;
n = 10;

while (i <= n) {
    sum += broj % 10;
    broj = Math.floor(broj / 10);
    i++;
}
console.log(sum);

// b) Određuje aritmetičku sredinu cifara
//====================================================================

//i = 0; 
n = 6;
arSredina = 0;
let sumaBrojeva = 0;
let brojac = 0;

for (i = 0; i <= n; i++) {
    sumaBrojeva += i;
    brojac++;
    arSredina = sumaBrojeva / brojac;
}

console.log(arSredina);

// c) Ispisuje cifre u obrnutom redosledu
//=================================================================

n = 1;

for (i = 20; i >= n; i--) {
    console.log(i);
}
