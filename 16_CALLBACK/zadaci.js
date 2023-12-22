//Test primeri 
let a = [6, 8, 9, 3, 1];

/////////////////////////////////////////////////
/* 2. Odrediti zbir elemenata celobrojnog niza.*/
//////////////////////////////////////////////////
/*
let nizBrojevi = [1, 2, 3, 4, 5];
let zbir = 0;

for(let i = 0; i < nizBrojevi.length; i++) {
   zbir += nizBrojevi[i];   
}
console.log(zbir);
*/

let sumaElemenata = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;
    }
        )
        return suma;
}

console.log(sumaElemenata(a));

//////////////////////////////////////////////////////
/* 3. Odrediti proizvod elemenata celobrojnog niza.*/
/////////////////////////////////////////////////////
/*
nizBrojevi = [1, 2, 3, 4, 5];
let proizvod = 1;

for(let i = 0; i < nizBrojevi.length; i++) {
    proizvod *= nizBrojevi[i];
}
console.log(proizvod);

//=========================================================*/

let proizvodElemenata = niz => {
    let proizvod = 1;

    niz.forEach(el => {
        proizvod *=el; 
    });
    return proizvod;
}
console.log(proizvodElemenata(a));

//////////////////////////////////////////////////////////////
/* 4. Odrediti srednju vrednost elemenata celobrojnog niza.*/
/////////////////////////////////////////////////////////////
/*
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
*/

let srednjaVrednostElemenata = niz => {
    let arVrednost = 0;
    let zbir = 0;

    niz.forEach(el => {
        zbir += el;
    });
    arVrednost = zbir / niz.length;
    return  arVrednost;
}

console.log(srednjaVrednostElemenata(a));


////////////////////////////////////////////////////////////
/* 5. Odrediti maksimalnu vrednost u celobrojnom nizu.*/
///////////////////////////////////////////////////////////
/*
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
*/

let maxVr = niz => {
    let max = niz[0];
    niz.forEach(elem => {
        if (elem > max) {
            max = elem;
        }
    });
    return max;
}
console.log(maxVr(a));

////////////////////////////////////////////////////////////
/* 6. Odrediti minimalnu vrednost u celobrojnom nizu.*/
///////////////////////////////////////////////////////////
/*
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
console.log(min(nizBrojevi));*/

let minVr = niz => {
    let min = niz[0];
    niz.forEach(el => {
        if(el < min) {
            min = el;
        }
    });
    return min;
}

console.log(minVr(a));

//////////////////////////////////////////////////////////////
/* 7. Odrediti indeks maksimalnog elementa celobrojnog niza.*/
//////////////////////////////////////////////////////////////


let maxIndex = niz => {
    let maxVr = niz[0];
    let maxInd = 0;

    niz.forEach((el, i) => {
    if(el >= maxVr) {
        maxVr = el;
        maxInd = i;
    }
    });
    return maxInd;
}


let b = [1, 2];
a = [6, 8, 9, 3, 1];
console.log(maxIndex(a));
console.log(maxIndex(b));

//Vratiti sve indexe pojavljivanja maksimalne vrednosti

let sviIndeximaxVr = niz => {
    let maxVr = niz[0];
    let sviIndex = [];

    niz.forEach((elem, i) => {
        if(elem > maxVr) {
            maxVr = elem;
            sviIndex.push(i);
        }
    })
    return sviIndex;
}
console.log(sviIndeximaxVr(a));







//////////////////////////////////////////////////////////////
/* 8. Odrediti indeks minimalnog elementa celobrojnog niza.*/
//////////////////////////////////////////////////////////////


let minIndex = niz => {
    let min = niz[0];
    let index = 0;

    niz.forEach((el, i) => {
        if(el < min) {
            min = el;
            index = i;
        }
    });
    return index;
}

console.log(minIndex(a));
console.log(minIndex(b));

//////////////////////////////////////////////////////////////
/* 9. Odrediti broj elemenata celobrojnog niza koji su veći 
od srednje vrednosti.*/
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
/* 19. Ispisati dužinu svakog elementa u nizu stringova*/
//////////////////////////////////////////////////////////////
let duzinaSvihStringova = niz => {
    niz.forEach(el => {
        console.log(el.length);
    })
}
let imena = ["stefan" , "Vladislav", "Nikola" , "Milan" , "Nevena" , "Maja"];
duzinaSvihStringova(imena);

//////////////////////////////////////////////////////////////
/* 20. Odrediti element u nizu stringova sa najvećom dužinom.*/
//////////////////////////////////////////////////////////////

let stringMaxDuzina = niz => {
    let maxVr = niz[0];
    let duzina = niz[0].length;
    niz.forEach(el => {
        if(el.length > duzina) {
            maxVr = el;
            duzina = el.length;
        }
    });
    return maxVr
}
console.log(stringMaxDuzina(imena));// undefined

//24.
let zad24 = (a, b) => {
    let c = [];
    a.forEach((el, i) => {
       // c.push(a[i], b[i]);
       c.push(el, b[i]);
    });
    return c;
}

//25. 
let zad25 = (a, b) => {
    let n = a.length;//n = b.lengh;
    let c = [];
    for(let i= 0; i < n; i++) {
        c[i] = a[i] * b[i];//c.push*(a[i] * b[i]);
    }
    return c;
}
let n1 = [1, 2, 3];
let n2 = [5, 6, 7];

console.log(zad24(n1, n2));
console.log(zad25(n1, n2));

let zad25forEach = (a, b) => {
    let c = [];
    a.forEach((elem, i) => {
        c.push(elem * b[i]);
    });
return c;
} 
console.log(zad25forEach(n1, n2));

//26.
//b[i] = (a[i] + a[2n - 1 - i] ) /2
let zad26for = a => {
    let k = a.length;
    let n = k / 2;
    let b = [];
    for(let i = 0; i < n; i++) {
        b[i] = (a[i] + a[2 * n - 1 -i]) /2;
    }
    return b;
}
console.log((n1));

let zad26forEach = a => {
    let b = [];
    let k = a.length; //k = 6
    let n = k / 2; //n = 3;
    a.forEach((el, i) => {
        if(i <n) {
            b[i] = (a[2 * n - 1 -i]) / 2;
        }
        
    });
    return b;
}
console.log(zad25forEach(n1, n2));
