import Pacijent from "./pacijent.js"

let pacijent1 = new Pacijent("Mika" , 280, 200);
let pacijent2 = new Pacijent("pera" , 200, 50);
let pacijent3 = new Pacijent("Zika", 200, 250);

pacijent1.stampaj();

let pacijent = [pacijent1, pacijent2, pacijent3];

let pacijentSaNajmanjomTezinom = niz => {
    let minTezinaPacijent = niz[0]; //cuva ceo objekat
    let minTezina = minTezinaPacijent .tezina; //cuva samo tezinu

    niz.forEach(p => {
        if(p.tezina < minTezina) {
            minTezina = p.tezina;
            minTezinaPacijent = p;
        }
    });
    return minTezinaPacijent;
}
let rez = pacijentSaNajmanjomTezinom(pacijent);
rez.stampaj();

// moze i ovako
//pacijentSaNajmanjomTezinom(pacijent).stampaj();


//Ispisati podatke o pacijentu sa najvećim bmi vrednošću

let najveciBMI = niz => {

let pacijentsaNajvecimBMI = niz[0];
let najveci = pacijentsaNajvecimBMI.bmi();

niz.forEach(pacijent => {
    if(pacijent.bmi() > najveci) {
        najveci = pacijent.bmi();
        pacijentsaNajvecimBMI = pacijent;
    }
});
return pacijentsaNajvecimBMI;

}

let rezultat = najveciBMI(pacijent);
rezultat.stampaj();

//Ispisati sve pacijente čije ime sadrži slovo A.

let pacijentSaA = niz => {
    let pacijentiA = [];
    niz.forEach(pacijent => {
        if(pacijent.ime.includes('a') || pacijent.ime.includes('A')) {
            pacijentiA.push(pacijent);
            // console.log(pacijent);
        }
    });
    return pacijentiA;
}

pacijentSaA(pacijenti).forEach(p => {
    p.stampaj();
});

let srednjaVisina = niz => {
    let sumaVisina = 0;
    
    niz.forEach(p => {
        sumaVisina += p.visina;//geter za visinu
    });
    return sumaVisina / niz.length;
}
console.log(`Srednja visina pacijenata je: ${srednjaVisina(pacijenti)}`);