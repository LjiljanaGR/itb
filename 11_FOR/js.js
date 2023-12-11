// 1.Ispisati brojeve od 1 do 20 
 
//Pomocu WHILE petlje
let i = 1;
while (i <= 20) {
    console.log(`Broj ${i}`);
    i++; // i += 1; i = i + 1; 
}

//Pomocu FOR petlje
for (let j = 1; j <= 20; j++) {
    console.log(`ovo je broj ${j}`);
}

//2. Ispisati brojeve od 20 do 1 

for (let k = 20; k >= 1; k--) {
    console.log(`Ovo je broj ${k}`);
}

//3. Ispisati parne brojeve od 1 do 20 

for (i = 1; i <= 20; i++) {
    if (i % 2 ==0) {
        console.log(`Ovo su svi parni brojevi: ${i}`);
    }
}

//Drugi nacin 
for (i = 2; i <= 20; i++)
    {
    console.log(i);
    }

//4. Ispisati dvostruku vrednost brojeva od 5 do 15 *
for (i = 5; i <= 15; i++) {
    console.log(`${i*2} je dvostruka vrednost broja ${i}`);
}

//5. Odrediti sumu brojeva od 1 do n
let suma = 0;
let n = 5;

for(let p = 1; p <= n; p++) {
    suma += 5;// suma = suma + p;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

//6. Odrediti sumu brojeva od n do m * 

suma = 0;
let m = 5;

for (let n = 1; n <= m; n++ ) {
    suma += n; 
}
console.log (suma);

//7. Odrediti proizvod brojeva od n do m

let proizvod = 1;
let j = 5;
let k = 13;
for (j; j<=k; j++)
{
    proizvod *= j;
}
console.log(`Proizvod brojeva od j do k je ${proizvod}`);

//8. Odrediti sumu kvadrata brojeva od n do m *

let suma_kvadrata = 0;
n = 4;
m = 6;
for (i = n; i <= m; i++) {
  suma_kvadrata = suma_kvadrata + i ** 2; // suma_kvadrata += i*i
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${suma_kvadrata}`);

/*9. Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).*/

for (i = 1; i <= 3; i++) {
    console.log(i);
    document.write(`<img src="${i}.jpg">`);
}

//10. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. 
/*
let proizvoD = 1;
n = 20;
m = 100;

for (i = n; n <= m; i++) {
    if (i % 11 == 0) {
        proizvoD *= i;
    }
}
console.log(proizvoD);

*/


//11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
/*
let brojevi = 0;
n = 5; 
m = 150;

for (i = n; i <=m; i++) {
    if (i % 13 ==0) {
        brojevi++;
    }
}
console.log(`Brojevi deljivi sa 13: ${brojevi}`);*/

//12. Ispisati aritmetičku sredinu brojeva od n do m.
n = 3;
m = 6;
suma = 0;
let br = 0;

for (i = n; i <= m; i++) {
    suma += i;//suma = suma +1
    br++; //br += 1 // br = br + 1
}
let arsr = suma / br;
console.log(`Aritmeticka sredina brojeva od ${n} do ${m} je ${arsr}`);

// 13.Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *

let pozitivni_brojevi = 0;
let negativni_brojevi = 0;

n = -1;
m = 15;

for (i = n; i <= m; i++) {
    if (i > 0) {
       pozitivni_brojevi++;
    }
    else {
        negativni_brojevi++;
    }
}

console.log(`Broj pozitivnih brojeva je ${pozitivni_brojevi}, a broj negativnih brojeva je ${negativni_brojevi}`);

//14. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *

brojevi = 0;
n = 5;
m = 50;

for (i = n; i <= m; i++) {
    if (i % 3 == 0 || i % 5 ==0) {
        brojevi++;
    }
}
console.log(brojevi);


//15. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

suma = 0;
let brBrojeva = 0;
n = 2; 
m = 5; 

for (i = n; i <= m; i++) {
    if (i % 10 === 4) {
        brBrojeva++;
        suma += i;
    }
}
console.log(brBrojeva);
console.log(suma);


//16. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
/*
n = 3; 
m = 9;
suma = 0; 
a = 4; 

for (i = n; i <= m; i++) {
    if (i % a != 0) {
        suma += i;
    }
}
console.log(`Suma brojeva od ${n} do ${m} koji NISU deljivi sa brojem ${a} je ${suma}`);
*/

//17. Odrediti proizvod brojeva od n do m koji su deljivi brojem a **/
/*let k = 4;
let j = 12;
let a = 3;
let proizvod = 1;
for(i = k; i <= j; i++)
{
    if(i % a === 0)
    {
        proizvod *= i;
    }
}
console.log(proizvod);
*/
//18. Odrediti sa koliko brojeva je deljiv uneti broj k

k = 15;
let brojBrojeva = 0;

for (i = 1; i <= k; i++) {
    if (k % i == 0) {
        brojBrojeva++;
    }
}
console.log(`Broj ${k} je deljiv sa ${brojBrojeva}`);

//2. nacin:

k = 12;
if (k == 1) {
    brBrojeva = 1;
}
else {
    brBrojeva = 2;
    for (i = 2; i <= k/2; i++) {
        if (k % i == 0) {
            brBrojeva++
        }
    }
}
console.log(`Broj ${k} je deljiv sa ${brojBrojeva}`);

//19. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

/*
Odrediti da li je dati prirodan broj n prost.
*/
console.log("----- Zadatak 19");
n = 1;
br = 0;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    br++;
  }
}
console.log(br);
if (br > 2) {
  console.log(`Broj ${n} je složen broj`);
} else {
  console.log(`Broj ${n} je prost broj`);
}
// 1 nije prost broj
// Drugi način
let prost = true;
k = 13;
for (i = 2; i <= Math.sqrt(k); i++) {
  if (k % i == 0) {
    prost = false;
    break;
  }
}
if (prost) {
  console.log(`Broj ${k} je prost.`);
} else {
  console.log(`Broj ${k} je složen.`);
}


/* 20.Napraviti tabelu sa 6 redova.
Svaki red tabele treba da ima po dve ćelije (dve kolone).
Svakom parnom redu dodati klasu „obojen“.
Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. */

let divTabela = document.getElementById(`tabela`);
let tabele = `<table>`;
for (i = 1; i <= 6; i++) {
    if (1 % 2 ==0) {
    let obojen = "belo";
    if (i % 2 ==0)
    }
    tabele +=
    <tr class="${obojen}">
        <td>Tekst</td>
        <td>Tekst</td>
    </tr>;
}
tabele += `</table>`;
divTabela.innerHTML = tabela;