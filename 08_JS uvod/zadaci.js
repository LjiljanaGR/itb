// Zadatak 1.
let sati = 1;
let minuti = 58;

let odPonoci = sati * 60 + minuti;
console.log("Minuta od ponoci:" + odPonoci);

//console.log("Minuta od ponoci: " + (sati * + minuti));

//Zadatak 1.1 - Minuti ostalo od ponoci

let doPonoci = 24 * 60 - odPonoci;
console.log("Minuta do ponoci: " + doPonoci);

//Zadatak 2: 
odPonoci = 30; 
let sat1 = Math.floor(odPonoci / 60);
let min1 = odPonoci % 60;
console.log(sat1, min1);


//Zadatak 3:
let cena = 500;
let novcanica = 1000;

let kusur = novcanica - cena;
console.log("Vas kusur: " + kusur);

//Zadatak 6:
let ukupnoEur = 70;
let kursEura = 117.29;

let ukupnoDin = ukupnoEur * kursEura;
console.log(ukupnoDin);

//Druga konverzija
let novacDinara = 5000;
let novacEura = novacDinara/kursEura;
console.log(novacEura);

//Zadatak 7:
/ Zadatak 7
// Prva konverzija = eur => dol uz pomoc din
let brojEur = 100;
let kursDol = 106.79;
// let brojDin = brojEur * kursEur;
// let brojDol = brojDin / kursDol;
let brojDol = brojEur * kursEur / kursDol;
console.log(brojDol);
// Druga konverzija - iz dolara u evre uz pomoc din
let noviDol = 120;
let noviDin = noviDol * kursDol;
let noviEur = noviDin / kursEur;
console.log(noviEur)
// Zadatak 8
let tempCel = 38;
let noviFar = tempCel * 1.8 + 32;
console.log("Temperatura u Farenhajtu iznosi: " + noviFar);
let tempFar = 46;
let noviCel = (tempFar - 32) / 1.8;
console.log("Temperatura u Celzijusu iznosi: " + noviCel);
// Zadatak 9
tempCel = 38;
let noviKel = tempCel + 273.15;
console.log("Temperatura u Kel. iznosi: " + noviKel);
tempKel = 273.15
let noviCel1 = tempKel - 273.15;
console.log("Temperatura u Cel. iznosi: " + noviKel);