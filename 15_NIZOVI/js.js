let cars = ["Toyota", "BMW", "Volvo"];
console.log(cars);

let razno = [15, -3.5, "Hello", false, [1, 2, 3]];//vrednost elementa niza
console.log(razno);
console.log(razno[0]);

let niz = [];
niz[1] = "Pera";
niz[4] = "Ivana";
console.log(niz[3]);
console.log(niz[4]);
//niz[] = "Lenka" ne mora redom da se dodeljuju indeksi, ali indeks mora biti dodeljen
niz[1] = "Zika";
console.log(niz);

for (let i = 1; i <  cars.length; i++) {
    console.log(cars[i]);
}

for (let i = 0; i < razno.length; i++) {
    console.log(razno[i]);
}

let unutrasnjiNiz = razno[4];
for(let i = 0; i < unutrasnjiNiz.length; i++) {
    console.log(unutrasnjiNiz[i]);
}

//ili

for(let i = 0; i < razno[4].length; i++) {
    console.log(razno[4][i]);
}

let brojevi = [4, 3.5, 8, 10];
//Uvecati vrednosti svig=h elemenata nisa za 10%;
for(let i =0; i < brojevi.length; i++) {
    brojevi[i] *=1.1;
}

for(let i = 0; i < brojevi.length; i++) {
    console.log(brojevi[i]);
}

/////////////////////////////////////////////////////
/*1. Ispisati sve elemente niza od 5 stringova.*/
////////////////////////////////////////////////////

let nizBrojeva = ["Jedan", "Dva" , "Tri" , "Cetir" , "Pet"];
console.log(nizBrojeva);

///////////////////////////////////////////////////
/*2. Odrediti zbir elemenata celobrojnog niza.*/
//////////////////////////////////////////////////

let zbirNiza = [2, 1, 1, 1, 1];
let zbirRezultat = 0;

for(let i = 0; i < zbirNiza.length; i++) {
zbirRezultat += zbirNiza[i];    
}
console.log(zbirRezultat);

// Test primeri
let brojevi1 = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4= [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8, 5];

// Zadatak 2: Odrediti zbir elemenata celobrojnog niza

let sumaElem = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma = suma + niz[i];  // suma += niz[i];
    }
    return suma;
}
console.log(sumaElem(brojevi1));
console.log(sumaElem(brojevi2));
console.log(sumaElem(brojevi3));

// Zadatak 3: Odrediti proizvod elemenata celobrojnog niza

let proizvodElem = niz => {
    let proizvod = 1;
    for (let i = 0; i < niz.length; i++) {
        proizvod = proizvod * niz[i];
    }
    return proizvod;
}
console.log(proizvodElem(brojevi1));
console.log(proizvodElem(brojevi2));
console.log(proizvodElem(brojevi3));

/////////////////////////////////////////////////////
/*4. Odrediti srednju vrednost elemenata celobrojnog niza.*/
///////////////////////////////////////////////////////////

let srednjaVrednostElemenata = niz => {
    
    let suma = 0;
    for(let i = 0; i <niz.length; i++) {
        suma += niz[i];
    }
    let srVr = suma / niz.length
    return srVr;
}

console.log(srednjaVrednostElemenata(brojevi3));

let srednjaVrednostElemenata2 = niz => sumaElem(niz) / niz.length;

console.log(proizvodElem(brojevi1));
console.log(proizvodElem(brojevi2));
console.log(proizvodElem(brojevi3));

///////////////////////////////////////////////
/*Odrediti srednju vrednost parnih elemenata celobrojnog niza*/
////////////////////////////////////////////////////////

let srVrednostParnih = niz => {
    let suma = 0;
    let brParnih = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0) {
            suma = suma + niz[i];
            brParnih++;
        }
    }
    return suma / brParnih;
}
console.log(srVrednostParnih(brojevi1));
console.log(srVrednostParnih(brojevi2));
console.log(srVrednostParnih(brojevi3));



///////////////////////////////////////////////////
/*5.Odrediti maksimalnu vrednost u celobrojnom nizu.*/
/////////////////////////////////////////////////////////

//Koraci: 
//1. Proglasiti prvi element niza za maksimalni 
//2. Proci kroz ostale elemente niza i utvrditi nema li veceg elemnta od do sada
//nadjenog maksimuma
//  Ako ima, azurirati ovu vrednost
//
let maksimalnaVrednost = niz => {
    let max = niz[0]; //Korak 1.
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] > max)
        max = niz[i];
    }
    return max; 
}
console.log(maksimalnaVrednost(brojevi1));
console.log(maksimalnaVrednost(brojevi2));
console.log(maksimalnaVrednost(brojevi3));


////////////////////////////////////////////////////////
/*6. Odrediti minimalnu vrednost u celobrojnom nizu.*/
///////////////////////////////////////////////////////

let minVrednost = niz => {
    let min = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] < min)
        min = niz[i]; 
    }
    return min;
}
console.log(minVrednost(brojevi1));
console.log(minVrednost(brojevi2));
console.log(minVrednost(brojevi3));
console.log(minVrednost(brojevi4));
console.log(minVrednost(brojevi5));

///////////////////////////////////////////////////////
/*7. Odrediti indeks maksimalnog elementa celobrojnog niza.*/
///////////////////////////////////////////////////////

let indMaxNiza = niz => {
    let max = niz[0];
    let index = 0;
    for(let i = 1; i < niz.length; i++ ) {
        if(niz[i] > max) {
            max = niz[i];
            index = i; 
        }
    }
    return index;
}

console.log(indMaxNiza(brojevi1));
console.log(indMaxNiza(brojevi2));
console.log(indMaxNiza(brojevi3));
console.log(indMaxNiza(brojevi4));
console.log(indMaxNiza(brojevi5));

///////////////////////////////////////////////////////
/*8. Odrediti indeks minimalnog elementa celobrojnog niza.*/
///////////////////////////////////////////////////////

let indexMinNiz = niz => {
    let min = niz[0];
    let index = 0;
    for(let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
            index = i;
        }
    }
    return index;
}

/*
let brojevi1 = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4= [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8, 5];
*/

console.log(indexMinNiz(brojevi1));
console.log(indexMinNiz(brojevi2));
console.log(indexMinNiz(brojevi3));
console.log(indexMinNiz(brojevi4));
console.log(indexMinNiz(brojevi5));

///////////////////////////////////////////////////////////////
/*9. Odrediti broj elemenata celobrojnog niza koji su veći od 
srednje vrednosti. */
///////////////////////////////////////////////////////////

let brElemenataVecih = niz => {
 
    let nesto = 0;

    for(let i = 0; i < niz.length; i++) {
        if (niz[i] > srednjaVrednostElemenata) {
            nesto++
        }
    }
    return nesto;
}

console.log(brElemenataVecih(brojevi1));
console.log(brElemenataVecih(brojevi2));
console.log(brElemenataVecih(brojevi3));
console.log(brElemenataVecih(brojevi4));
console.log(brElemenataVecih(brojevi5));

/*
let brojevi1 = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4= [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8, 5];
*/

/////////////////////////////////////////////////////
/*10. Izračunati zbir pozitivnih elemenata celobrojnog niza.*/
////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////
/*11.
////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////
/*12 Odrediti broj parnih elemenata sa neparnim indeksom.*/
////////////////////////////////////////////////////////////

let paranNeparan = niz => {
 let brParnih = 0;


 for(let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0 && i % 2 !=0) {
        brParnih = niz[i];
    }
 }
    return brParnih
}

console.log(paranNeparan(brojevi1));
console.log(paranNeparan(brojevi2));
console.log(paranNeparan(brojevi3));
console.log(paranNeparan(brojevi4));
console.log(paranNeparan(brojevi5));
let brojevi6 = [1, 2, 1, 2, 1];
console.log(paranNeparan(brojevi6));



/*
let brojevi1 = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4= [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8, 5];
*/

/////////////////////////////////////////////////
/*13.Izračunati sumu elemenata niza sa parnim indeksom.*/
/////////////////////////////////////////////////////////
let sumElemParnih = niz => {

    let suma = 0;
    let index = niz[i];

    for(let i = 1; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            suma += i;
        }
    }
    return suma;
}

console.log(paranNeparan(brojevi1));
console.log(paranNeparan(brojevi2));
console.log(paranNeparan(brojevi3));
console.log(paranNeparan(brojevi4));
console.log(paranNeparan(brojevi5));

/*
let brojevi1 = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4= [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8, 5];
*/


/////////////////////////////////////////////////
/*19.Ispisati dužinu svakog elementa u nizu stringova. */
/////////////////////////////////////////////////////////
let imena = ["stefan" , "Jelena" , "Marko" , "Milos", "Bratislav", "Ljiljana"];


let duzinasvakogElementa =  niz => {
    for(let i =0; i < niz.length; i++) {
        let s = niz[i];
        console.log(s.length);
    }
}

duzinasvakogElementa(imena);

/////////////////////////////////////////////////
/*20.Odrediti element u nizu stringova sa najvećom dužinom. */
/////////////////////////////////////////////////////////

let najduziString = niz => {
    let max = niz[0].length;
    let s = niz[0];

    for(let i = 0; i < niz.length; i++) {
        let maxi = niz[i].length;

        if(maxi > max) {
            s = niz[i];
            max = maxi;
        }
    }

return s;
}
console.log(najduziString(imena));

/////////////////////////////////////////////////
/*21.Odrediti broj elemenata u nizu stringova čija je dužina 
veća od prosečne dužine svih stringova u nizu. */
/////////////////////////////////////////////////////////

let prosecnaDuzina = niz => {
    let zbirDuzina = 0; 
    for(let i = 0; i < niz.length; i++) {
        let s = niz[i];
        zbirDuzina +=s.length; 
    }
    return zbirDuzina / niz.length;
}
let brojNatprosecnoDugih = niz => {
    let pd = prosecnaDuzina(niz);
    let broj = 0;

    for(let i =0; i <niz.length; i++) {
        let s = niz[i];
        if (s.length > pd) {
            broj++;
        }
    }
    return broj;
}

console.log(prosecnaDuzina(imena));
console.log(brojNatprosecnoDugih(imena));

/////////////////////////////////////////////////
/*22.Odrediti broj elemenata u nizu stringova koji sadrže slovo
 'a’. */
/////////////////////////////////////////////////////////

