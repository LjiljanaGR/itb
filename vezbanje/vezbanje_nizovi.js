////////////////////////////////////////////////////////////////////
// N I Z O V I 
/////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
/* 1. Ispisati sve elemente niza od 5 stringova. */
//==================================================================

let nizBrojeva = [1, 2, 3, 4, 5];

nizBrojeva.forEach((element, index) => {
    console.log(nizBrojeva[index]);
});

console.log(nizBrojeva);

/////////////////////////////////////////////////////////////////////
/* 2. Odrediti zbir elemenata celobrojnog niza. */
//==================================================================

let zbirElemenata = 0;

for(let i = 0; i < nizBrojeva.length; i++) {
    zbirElemenata += nizBrojeva[i];
}

console.log(zbirElemenata);

let sumaBrojeva = (niz) => {

    let suma = 0;
    for(let i = 0; i <niz.length; i++) {
        suma += niz[i];
    }
    return suma;
}
console.log(`Suma brojeva je ${sumaBrojeva(nizBrojeva)}`);

////////////////////////////////////////////////////////////////////////
/* 3. Odrediti proizvod elemenata celobrojnog niza.*/
//=======================================================================

let proizvodEl = (niz) => {
    
    let proizvod = 1;
    
    for(let i = 0; i < niz.length; i++) {
    proizvod = niz[i] * proizvod;
    
    }
    return proizvod;
}

console.log(`Proizvod elemenata celobrojnog niza je: ${proizvodEl(nizBrojeva)}`);

////////////////////////////////////////////////////////////////////////
/*4. Odrediti srednju vrednost elemenata celobrojnog niza.*/

let srVrednost = (niz) => {
    let suma = 0;
    let srVrednost = 0;
    
    nizBrojeva.forEach((element, index) => {
        suma += element;
        srVrednost = suma / element; 
    });
    return srVrednost;
}

console.log(`Srednja vrednost niza je: ${srVrednost(nizBrojeva)}`);

////////////////////////////////////////////////////////////////////////
/*5. Odrediti maksimalnu vrednost u celobrojnom nizu. */
//=================================================================

let maksBroj = (niz) => {
    let max = niz[0];

    for(let i = 0; i < niz.length; i++) {
        if(niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}
console.log(maksBroj(nizBrojeva));

/////////////////////////////////////////////////////////////////////////
/* 6. Odrediti minimalnu vrednost u celobrojnom nizu.*/
//==================================================================

let minBroj = (niz) => {
    let min = niz[0];

    for(let i = 0; i < niz.length; i++) {
        if(niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}
console.log(minBroj(nizBrojeva));

//////////////////////////////////////////////////////////////////////
/* 7. Odrediti indeks maksimalnog elementa celobrojnog niza.*/
//================================================================

let maksIndVrednost = (niz) => {
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
console.log(maksIndVrednost(nizBrojeva));

//////////////////////////////////////////////////////////////////////
/* 8. Odrediti indeks minimalnog elementa celobrojnog niza.*/
//====================================================================

let minIndex = (niz) => {
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

console.log(minIndex(nizBrojeva));

/////////////////////////////////////////////////////////////////////////
/* 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.*/
//============================================================================

let brEl = (array) => {

    let brojElemenata = 0; 
    let srVrednost = 0;
    let suma = 0;

    for (let index = 0; index < array.length; index++) {
        //let element = array[index];
        suma += array[index];
    }

    srVrednost = suma / array.length;
    //return srVrednost
    for (let index = 0; index < array.length; index++) {
        if(array[index] > srVrednost) {
            brojElemenata++;
        }
        
    }
return brojElemenata;

}

console.log(brEl(nizBrojeva));

//////////////////////////////////////////////////////////////////////
/*10. Izračunati zbir pozitivnih elemenata celobrojnog niza.*/
//=====================================================================

let nizBrojeva1 = [-1, -2, 2, 3, 3, 4];

let zbirPozitivnihElemenata = (array) => {

    let zbirElemenata = 0; 

    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        if(array[index] >=0) {
            zbirElemenata += array[index];
        }
    }
    return zbirElemenata;
}

console.log(zbirPozitivnihElemenata(nizBrojeva1));

/////////////////////////////////////////////////////////////////////////
/* 11. Odrediti broj parnih elemenata u celobrojnom nizu.*/
//=======================================================================

let brParnihEl = (array) => {

    let broj = 0;

    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        if(array[index] % 2 == 0 && array[index] > 0) {
            broj++;
        }
    }
    return broj;
}
console.log(brParnihEl(nizBrojeva1));

/////////////////////////////////////////////////////////////////////////
/* 12. Odrediti broj parnih elemenata sa neparnim indeksom.*/
//=====================================================================

let brojevi = [1, 2, 2, 2, 2];

let brParnihNeparnih = (array) => {
    let brojEl = 0;
    

    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        if(array[index] % 2 == 0 && index % 2 != 0) {
            brojEl++
        }
    }
    return brojEl;
}
console.log(brParnihNeparnih(brojevi));

////////////////////////////////////////////////////////////////////////
/* 13. Izračunati sumu elemenata niza sa parnim indeksom.*/
//======================================================================

let sumaElemenata = (array) => {
    let sumaNiza = 0;

    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        if(index % 2 == 0) {
            sumaNiza = array[index] + sumaNiza;
        }
    }
    return sumaNiza;
}
console.log(sumaElemenata(brojevi));

///////////////////////////////////////////////////////////////////////
/* 14. Promeniti znak svakom elementu celobrojnog niza.*/
//=====================================================================

let brojevi2 = [-1, -2, 3, 4, -3, -3];

let promenaZnaka = (array) => {
   
    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        if(array[index] > 0) {
            array[index] = array[index] - array[index] - array[index];
    }
    else if (array[index] < 0){
        array[index] = array[index] - array[index] - array[index];
    }
}
    return array;
    
}
console.log(promenaZnaka(brojevi2));

//////////////////////////////////////////////////////////////////////////
/* 15.Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.*/
//=========================================================================

let komplikacija = (array) => {
    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        if(array[index] % 2 != 0 && index % 2 == 0  && array[index] > 0) {
            array[index] = array[index] - array[index] - array[index];
        }
        else if (array[index] % 2 != 0 && index % 2 == 0  && array[index] < 0){
            array[index] = array[index] - array[index] - array[index];
        }
    }
    return array;
}

console.log(komplikacija(brojevi2));

//////////////////////////////////////////////////////////////////////////
/* 16.Dat je niz stavki za kupovinu (članovi niza su stringovi). 
Prolaskom kroz niz napraviti neuređenu listu i ispisati je u 
                    H T M L  D O K U M E N T U.*/
//=========================================================================

//===========================================================================
/* P R V I   N  A  C  I  N */
//==========================================================================
let kupovina = ["hleb" , "mleko" , "maslac"];

let spisakKupovina = (array) => {

for (let index = 0; index < array.length; index++) {
    //const element = array[index];
    document.write(`<ul><li style="color: red">${array[index]}</li></ul>`);
    }
}

spisakKupovina(kupovina);

//===========================================================================
/* D R U G I   N  A  C  I  N */
//==========================================================================

let spisakKupovina3 = (array) => {
    array.forEach(element => {
           document.write(`<ul><li style="color: purple">${element}</li></ul>`) 
    });
}

spisakKupovina3(kupovina);

//===========================================================================
/* T R E C I   N  A  C  I  N */
//==========================================================================

let spisakZaKupovinu2 = (array) => {

    let div = document.getElementById(`nekiDiv`);
    let spisak = `<ul>`;

    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        spisak += `<li style="color: orange">${array[index]}</li>`
    }

    spisak += `</ul>`;
    div.innerHTML = spisak;

} 
spisakZaKupovinu2(kupovina);

//===========================================================================
/* C E T V R T I   N  A  C  I  N */
//==========================================================================

let spisakZakupovinu4 = (array) => {
    let div = document.getElementById('cetvrti');
    let lista = `<ul>`

    array.forEach(element => {
        lista += `<li style="color: pink">${element}</li>`
    });
    lista += `</ul>`;
    div.innerHTML = lista;
}
spisakZakupovinu4(kupovina);

//===========================================================================
/* P E T I  N  A  C  I  N */
//==========================================================================

let spisakKupovina5 = (array) => {
    let div = document.createElement('div');

    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        let lista = document.createElement(`ul`);
        let stavke = document.createElement(`li`);

        stavke.textContent = `${array[index]}`;
        stavke.style.color = `green`;

        lista.appendChild(stavke);
        div.appendChild(lista);
    }
    document.body.appendChild(div);
}
spisakKupovina5(kupovina);

//===========================================================================
/* S E S T I  N  A  C  I  N */
//==========================================================================

let spisakZakupovinu6 = (array) => {
    let div = document.createElement(`div`);

    array.forEach(element => {
        let lista = document.createElement(`ul`);
        let stavke = document.createElement(`li`);
        
        stavke.textContent = `${element}`;

        lista.appendChild(stavke);
        div.appendChild(lista);
    });

    document.body.appendChild(div);
}
spisakZakupovinu6(kupovina);

//////////////////////////////////////////////////////////////////////////
/* 17.Dat je niz imena košarkaškog tima. Prolaskom kroz niz 
formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u 
                    H T M L  D O K U M E N T U.*/
//=========================================================================

//===========================================================================
/* P R V I   N  A  C  I  N */
//==========================================================================

let timovi = ["prvi" , "drugi" , "treci"];

let funkcija1 = (array) => {
    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        document.write (`<table><tr><td style="border: 2px solid red">${index}${array[index]}</td></tr></table>`);
    }
}
funkcija1(timovi);
//console.log(funkcija1(timovi));

//===========================================================================
/* D R U G I   N  A  C  I  N */
//==========================================================================

let funkcija2 = (array) => {

    array.forEach((element, index) => {
        document.write(`<table><tr><td>${index+1} ${element}</td></tr></table>`)
    });
}
funkcija2(timovi);

//===========================================================================
/* T R E C I   N  A  C  I  N */
//==========================================================================

let funkcija3 = (array) => {
    let tabelaNeka = document.getElementById('tabela');
    let tabela = `<table>`;

    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        tabela += `<tr><td style="border: 2px solid green">${array[index]}</td></tr>`
    }
    tabela += `</table>`;
    tabelaNeka.innerHTML = tabela;
}
funkcija3(timovi);

//===========================================================================
/* C E T V R T I   N  A  C  I  N */
//==========================================================================

let funkcija4 = (array) => {
    let div = document.getElementById('tabela1');
    let tabela = `<table>`

    array.forEach(element => {
        tabela += `<tr><td>${element}</tr></tr>`
    });

    tabela += `</table>`;
    div.innerHTML = tabela;
}
funkcija4(timovi)

//===========================================================================
/* P E T I  N  A  C  I  N */
//==========================================================================

let funkcija5 = (array) => {
    let tabela = document.createElement('table');

    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        let tr = document.createElement('tr');
        let td = document.createElement('td');

        td.textContent = `${array[index]}`;
        td.style.border = `2px solid pink`;

        tr.appendChild(td);
        tabela.appendChild(tr);
    }
    document.body.appendChild(tabela);
}
funkcija5(timovi)

//===========================================================================
/* S E S T I  N  A  C  I  N */
//==========================================================================

let funkcija6 = (array) => {
    let novaTabela = document.createElement('table');

    array.forEach(element => {
        let tr = document.createElement('tr');
        let td = document.createElement('td');

        td.textContent = `${element}`;
        td.style.border = `2px solid blue`;

        tr.appendChild(td);
        novaTabela.appendChild(tr)
    });
    document.body.appendChild(novaTabela)
}

funkcija6(timovi)

//////////////////////////////////////////////////////////////////////////
/* 18.Dat je niz stringova čiji su članovi putanje do slika. 
Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu..*/
//=========================================================================

//===========================================================================
/* P R V I   N  A  C  I  N */
//==========================================================================


let slike = ["1.jpg" , "2.jpg" , "3.jpg"];

let nekaFUnkcija = (array) => {
    array.forEach(element => {
        document.write(`<img src="${element}" style="width: 100px">`)
    });
}
nekaFUnkcija(slike)

//===========================================================================
/* D R U G I   N  A  C  I  N */
//==========================================================================

let slikeFunkcija = (array) => {
    let novaTabela = document.createElement('table');

    array.forEach(element => {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let img = document.createElement('img');

        img.src = `${element}`;
        img.style.width = `100px`;
        td.style = `2px solid blue`;

        td.appendChild(img);
        tr.appendChild(td);
        novaTabela.appendChild(tr)
    });
    document.body.appendChild(novaTabela)
}

slikeFunkcija(slike);


//////////////////////////////////////////////////////////////////////////
/* 19.Ispisati dužinu svakog elementa u nizu stringova. */
//=========================================================================
let nizStringova = ["nika" , "Aleksandra" , "Borislavkajejoje" , "magdalena"];

let duzinaStringova = (array) => {
    
    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        let niz = array[index];
        console.log(niz.length);
    }
    
}

duzinaStringova(nizStringova)

//////////////////////////////////////////////////////////////////////////
/* 20.Odrediti element u nizu stringova sa najvećom dužinom.*/
//=========================================================================

let najvecaDuzian = (array) => {
    let najduzi = array[0].length;
    let najNaj; 

    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        if(array[index].length > najduzi) {
            najduzi = array[index].length;
            najNaj = najduzi;

        }
    }
    return najNaj;
}
console.log(najvecaDuzian(nizStringova));

//////////////////////////////////////////////////////////////////////////
/* 21.Odrediti broj elemenata u nizu stringova čija je dužina 
veća od prosečne dužine svih stringova u nizu.*/
//=========================================================================
nizStringova = ["nika", "Borislavkajejoje", "aaaaaaaaaaa" , "ggggg" , "ddddddddddddd"];

let brojElemenata = (array) => {
    let prosecna = 0; 
    let ukupnaDuzina = 0;
    let indeX = 0;
    let brElemenata = 0;
    
    array.forEach((element, index) => {
        ukupnaDuzina += element.length;
        indeX = index + 1;
    });

    prosecna = ukupnaDuzina / indeX;
    //return prosecna;
    array.forEach(element => {
        if(element.length > prosecna)  {
            brElemenata++;
        }
    });
    return brElemenata;
    
}
console.log(brojElemenata(nizStringova));
//////////////////////////////////////////////////////////////////////////
/* 22.Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. */
//=========================================================================

let slovoa = (array) => {
    let broj = 0;

    array.forEach(element => {
        if(element.includes('a')) {
            broj++;
        }
    });
    return broj;
}

console.log(slovoa(nizStringova));

//////////////////////////////////////////////////////////////////////////
/* 23.Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. */
//=========================================================================

