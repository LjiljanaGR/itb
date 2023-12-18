/////////////////////////////////////////////////
/* 1. Ispisati sve elemente niza od 5 stringova.*/
//////////////////////////////////////////////////

let nizString = ["Jedan", "Dva" , "Tri", "Cetir", "Pet"];

for(let i = 0; i < nizString.length; i++) {
    console.log(nizString[i]);
}
console.log(nizString);

/////////////////////////////////////////////////
/* 2. Odrediti zbir elemenata celobrojnog niza.*/
//////////////////////////////////////////////////

let nizBrojevi = [1, 2, 3, 4, 5];
let zbir = 0;

for(let i = 0; i < nizBrojevi.length; i++) {
   zbir += nizBrojevi[i];   
}
console.log(zbir);

//////////////////////////////////////////////////////
/* 3. Odrediti proizvod elemenata celobrojnog niza.*/
/////////////////////////////////////////////////////

nizBrojevi = [1, 2, 3, 4, 5];
let proizvod = 1;

for(let i = 0; i < nizBrojevi.length; i++) {
    proizvod *= nizBrojevi[i];
}
console.log(proizvod);

//=========================================================

nizBrojevi = [1, 2, 3, 4, 5];

let proizvodElemenata = niz => {
    let proizvodNiza = 1;
    for(let i = 0; i < niz.length; i++) {
        proizvodNiza *= niz[i];
    }
    return proizvodNiza;
}
console.log(proizvodElemenata(nizBrojevi))

//////////////////////////////////////////////////////////////
/* 4. Odrediti srednju vrednost elemenata celobrojnog niza.*/
/////////////////////////////////////////////////////////////

nizBrojevi = [1, 2, 3, 4, 5];
let brojevi2 = [1, 2]

let srednjaVrednost = niz => {
    let arSredina = 0;
    let zbir = 0; 
    for(let i = 0; i <niz.length; i++) {
        zbir += niz[i];
        //arSredina = zbir / niz[i]; moze i ovako, ali pravila je druga verzija
    } 
    arSredina = zbir / niz.length;
    return arSredina;
}
console.log(srednjaVrednost(nizBrojevi));
console.log(srednjaVrednost(brojevi2));

////////////////////////////////////////////////////////////
/* 5. Odrediti maksimalnu vrednost u celobrojnom nizu.*/
///////////////////////////////////////////////////////////

nizBrojevi = [1, 2, 3, 4, 5];

let maks = niz => {
    let max = niz[0];
    for(let i = 0; i < niz.length; i++) {
        if(max < niz[i]) {
            max = niz[i];
        }
    }
    return max;
}
console.log(maks(nizBrojevi));

////////////////////////////////////////////////////////////
/* 6. Odrediti minimalnu vrednost u celobrojnom nizu.*/
///////////////////////////////////////////////////////////

nizBrojevi = [1, 2, 3, 4, 5];

let min = niz => {
    let min = niz[0];
    for(let i = 0; i < niz.length; i++) {
        if(min > niz[i]) {
            min = niz[i];
        }
    }
    return min;
}
console.log(min(nizBrojevi));

//////////////////////////////////////////////////////////////
/* 7. Odrediti indeks maksimalnog elementa celobrojnog niza.*/
//////////////////////////////////////////////////////////////

nizBrojevi = [1, 2, 3, 4, 5];

let maxIndex = niz => {
    let max = niz[0];
    let index = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] > max) {
            max = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(maxIndex(nizBrojevi));

//////////////////////////////////////////////////////////////
/* 8. Odrediti indeks minimalnog elementa celobrojnog niza.*/
//////////////////////////////////////////////////////////////

nizBrojevi = [1, 2, 3, 4, 5];

let minIndex = niz => {
    let min = niz[0];
    let index = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] < min) {
            min = niz[i];
            index = i;
        }
    }
    return index;
} 
console.log(minIndex(nizBrojevi));

//////////////////////////////////////////////////////////////
/* 9. Odrediti broj elemenata celobrojnog niza koji su veći 
od srednje vrednosti.*/
//////////////////////////////////////////////////////////////

nizBrojevi = [1, 2, 3, 4, 5];
brojevi2 = [1, 2]

let veciOdNiza = niz => {
    let brElemenata = 0;
    let suma = 0;
    let srVrednost = 0;

    for(let i = 0; i < niz.length; i++) {
        suma += niz[i];
        }
        srVrednost = suma / niz.length;

        for(let i = 0; i < niz.length; i++) {
            if (niz[i] > srVrednost) {
                brElemenata++;
            }
        }
        return brElemenata;
}
    
console.log(veciOdNiza(nizBrojevi));
console.log(veciOdNiza(brojevi2));

//////////////////////////////////////////////////////////////
/* 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.*/
//////////////////////////////////////////////////////////////

nizBrojevi = [1, 2, 3, 4, 5];
brojevi2 = [1, 2, 3, -1, -2];

let zbirPozitivnih = niz => {
    let suma = 0;

    for(let i = 0; i < niz.length; i++) {
        if(niz[i] > 0) {
            suma += niz[i];
        }
    }
    return suma;
}

console.log(zbirPozitivnih(brojevi2));
console.log(zbirPozitivnih(nizBrojevi));

//////////////////////////////////////////////////////////////
/* 11. Odrediti broj parnih elemenata u celobrojnom nizu.*/
//////////////////////////////////////////////////////////////

nizBrojevi = [1, 2, 3, 4, 5];
brojevi2 = [1, 2, 3, -1, -2, 2];

let parniElementi = niz => {
    let brParnih = 0;

    for(let i = 0; i < niz.length; i++)
        if(niz[i] % 2 ==0 && niz[i] > 0) {
            brParnih++;
    }
    return brParnih;
}

console.log(parniElementi(nizBrojevi));
console.log(parniElementi(brojevi2));

//////////////////////////////////////////////////////////////
/* 12. Odrediti broj parnih elemenata sa neparnim indeksom.*/
//////////////////////////////////////////////////////////////

nizBrojevi = [1, 2, 3, 4, 5];
brojevi2 = [1, 2, 3, -1, -2, 2];
let nekibrojevi = [1, 2, 2];

let parniNeparni = niz => {
    let index = 0; 

    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0 && i % 2 != 0) {
            index++;
        }
    }
    return index;
}
console.log(parniNeparni(nizBrojevi));
console.log(parniNeparni(nekibrojevi));

//////////////////////////////////////////////////////////////
/* 13. Izračunati sumu elemenata niza sa parnim indeksom.*/
//////////////////////////////////////////////////////////////

nizBrojevi = [1, 2, 3, 4, 5];
brojevi2 = [1, 2, 3, -1, -2, 2];
nekibrojevi = [1, 1, 1, 1, 1];

let sumaNiza = niz => {
    let suma = 0;

    for(let i = 0; i < niz.length; i++) {
        if(i % 2 == 0 && i != 0) {
            suma += niz[i];
        }
    }
    return suma;
}
console.log(sumaNiza(nekibrojevi));
console.log(sumaNiza(nizBrojevi));

//////////////////////////////////////////////////////////////
/* 14. Promeniti znak svakom elementu celobrojnog niza.*/
//////////////////////////////////////////////////////////////

nizBrojevi = [1, 2, 3, 4, 5];
brojevi2 = [1, 2, 3, -1, -2, 2];
let nekibrojevi2 = [1, 1, 1, -2, -3];

let menjanjeZnaka = niz => {
    for (let i = 0; i < niz.length; i++){
        niz[i] = niz[i] - (2 * niz[i])
    }
    return niz;
}
//////////////////////////////////////////////////////////////
/* 15. Promeniti znak svakom neparnom elementu celobrojnog 
niza sa parnim indeksom.*/
//////////////////////////////////////////////////////////////

let promenitiZnak2 = niz => {
    for(let i=0; i<niz.length; i+=2){
        if (niz[i] % 2 != 0) {
            niz[i] = niz[i]*(-1);
        }
    }
    return niz;
}
console.log(promenitiZnak2(brojevi1));