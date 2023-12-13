let i = 1;
while (i <= 5) 
{
    console.log(i);    
    i++; 
}
console.log("Kraj Petlje");
console.log(i);

/* 
    PRE PETLJE: i = i;
    1. ITERACIJA: log(1), i = 2;
    2. ITERACIJA: log(2), i = 3;
    3. ITERACIJA: log(3), i = 4;
    4. ITERACIJA: log(4), i = 5;
    5. ITERACIJA: log(5), i = 6;
*/

//DRUGI NACIN: 

i = 1;
while (i <= 5) 
{
    console.log(i++);
}

//TRECI NACIN:

i = 0;
while(i < 5)
{
    i++
    console.log(i);
}

//1. Ispisati brojeve od 1 do 20:
//a. Svaki u istom redu
//___________________________________

i = 1;
let poruka = "";
while(i <= 20) 
{
    poruka = poruka + i + " ";
    i++;
}
console.log(poruka);

/*
#   | i | poruka
--------------------
0   | 1  | ""
1   | 2  | "1 "
2   | 3 | "1 2 "
3   | 4 | "1 2 3 "
----|---|------------
20  | 21|   "1 2 ......20 " 
*/

//1. b.Svaki u novom redu
//___________________________________

i = 1;
while (i <= 20)
{
    console.log(i);
    i++;
}
console.log("Kraj petlje!")


//2. Ispisati brojeve od 20 do 1.
//______________________________________

//PRVI NACIN 

i = 20;
while (i >=1 ) 
{
    console.log(i);
    i--;
}
console.log("Kraj Petlje");
console.log(i);

// DRUGI NACIN 

i = 1;
while(i <= 20)
{
    console.log(21 - i);
    i++;
}

/* 
i = 1 => 20 = 21 - i
i = 2 => 19 = 21- i
i = 2 => 18 = 21- i
--------------
i = 19 => 2 = 21-19
i = 20 = > 1= 21-20
*/

//3. Ispisati parne brojeve od 1 do 20.
//________________________________________

//PRVI NACIN:

i = 1;
while (i <= 20)
{
    if (i % 2 == 0)
    {
        console.log(i);
    }    
    i++;
}

//DRUGI NACIN: 

i = 2;
while(i <= 20) 
{
    console.log(i);
    i = i + 2; 
}

/* 4. Kreirati n paragrafa sa proizvoljnim tekstom i 
naizmenično ih obojiti u tri različite boje */
//______________________________________________________

//MOJE RESENJE: 

let boja = 1;

while (boja <=20) 
{
    if (boja % 3 == 1) {
        document.write("<p style = 'color: green;'> Paragraf </p>");
    }
    else if (boja % 3 == 2) {
        document.write("<p style = 'color: red;'> Paragraf </p>");
    }
    else {
        document.write("<p style = 'color: blue;'> Paragraf </p>");
    }
    boja++;
}

// RESENJE SA CASA:

let n = 7;
i = 1;

while (i <= n) {

    if (i % 3 == 1)
    {
        document.body.innerHTML += `<p class = 'plava'>Paragraf broj ${i}</p>`; 
    }
    else if (i % 3 == 2) 
    {
        document.body.innerHTML += `<p class = 'crvena'>Paragraf broj ${i}</p>`; 
    }

    else 
    {
        document.body.innerHTML += `<p class = 'zelena'>Paragraf broj ${i}</p>`; 
    }
    
    i++;
}

/* 5.Kreirati n proizvoljnih slika i staviti im naizmenično dva 
različita okvira */
//______________________________________________________________

let slike = 1;
  
while(slike <= 20) {
    if (slike % 2 === 0) {
        document.write('<img src="torta.jpg" style="border: 23px solid blue;">');
    } else {
        document.write('<img src="dog.jpg" style="border: 23px solid red; width: 200px;">');
    }
    slike++;
}

//6. Odrediti sumu brojeva od 1 do 100
//________________________________________________________________

let suma = 0;
i = 1;

while (i <= 100) {
    suma = suma + i;
    i++;
}
console.log(suma)

// 7. Odrediti sumu brojeva od 1 do n
//____________________________________________________________________

suma = 0;
i = 1;
n = 200;

while (i <= n) {
    suma = suma + i;
    i++;
}

console.log(`Suma brojeva od 1 do ${n} jedna je ${suma}`);

//8. Odrediti sumu brojeva od n do m
//_______________________________________________________________

let sumaN = 0;
n = 10;
let m = 5000;

while (n <= m) {
    sumaN = sumaN + n;
    n++;
}
console.log(`Suma brojeva od 1 do ${m} jedna je ${sumaN}`);

// RESENJE SA CASA

n = 5;
i = n; 
suma = 0;
m = 10;

while (i <= m) {
    suma += i;
    i++;
}

console.log(`Suma brojeva od promenljiva ${n} do promenljiva ${m} jedna je ${suma}`);

//9. Odrediti proizvod brojeva od n do m
//_______________________________________________________________

let proizvod = 1;

b = 20;
i = n;
n = 3;

while (i <= b) {
    proizvod *= i;
    ii++;
}
console.log(`${proizvod}`);

/* 10. Odrediti sumu kvadrata parnih i sumu kubova 
neparnih brojeva od n do m*/
//_________________________________________________________________

let sKvadrataParnih = 0;
let sKubovaNeparnih = 0;

i = n; 
n = 1; 
m = 5;

while (i <= m) {
    if (i % 2 == 0) {
    sKvadrataParnih += (i ** 2);
}
    else {
        sKubovaNeparnih += (i **3); // i * i * i
    }

    i++;
}

    console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} jednaka je ${sKvadrataParnih} i ${sKubovaNeparnih}`);

// 2* 2 + * 4 = 4 + 16 = 20 Suma kvadrata parnih

//11. Odrediti sa koliko brojeva je deljiv uneti broj k
//___________________________________________________________________

let k = 9;
i = 1;
let brDelioca = 0;

while (i <= k) {
    if (k % i ==0) {
        brDelioca++;
    }
    i++
}

console.log(`Broj delioca broja ${k} jednak je ${brDelioca}`);

//12. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
//_____________________________________________________________________

n = 103;
i = 1;
brDelioca = 0;

while (i <= n) {
    if (n % i == 0) {
        brDelioca++;
    }
    i++
}

if (brDelioca == 2) {
    console.log(`Broj ${n} je prost`);
}
else {
    console.log(`Broj ${n} je slozen`)
}


/*
let sedmica = 1;

while (sedmica <= 3) {
    if(sedmica <= 1) {
        document.write("<p> Super! Bas san uzbudjena sto krece kurs, a i super mi ide HTML!</p>");
    }
    else if (sedmica == 2) {
        document.write("<p>Ma opusteno! Jos smo na CSSu. Ne znam zasto uporno govore kako je ovo intenzivan kurs. Bas je super do sad!</p>");
    }
    else {
        document.write("<p>Padam u beskonacnu depresiju!</p>");
    }

    sedmica++;
    console.log('kraj petlje')
}
*/




















