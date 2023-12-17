//////////////////////////////////////////////////////////////////////
/*1. Date su dve promenljive u kojima su dati vreme u satima i minutima. 
Izračunati koliko minuta je prošlo od ponoći.*/
//////////////////////////////////////////////////////////////////////

let sati = 1;
let minuti = 10;

let minutaOdponoci = sati * 60 + minuti;
console.log(minutaOdponoci); 

//2. nacin

let sat = new Date ();
let sat1 = sat.getHours()

let doPonoci = 24 - sat1;
console.log(doPonoci);

///////////////////////////////////////////////////////////////////
/*2. Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko
je to u satima i minutima.*/
//////////////////////////////////////////////////////////////

let minutiOdPonoci = 95;

let satiOdPonoci = minutiOdPonoci / 60;
console.log(satiOdPonoci); 

//////////////////////////////////////////////////////////////
/*3. Date su dve promenljive kojima se zadaje cena robe i 
uneta novčanica kojom kupac plaća račun. Ispisati koliki 
kusur kasirka treba da mu vrati.*/
////////////////////////////////////////////////////////////////

let cena = 100;
let novcanica = 50;

let kusur = cena - novcanica;
console.log(kusur);

//////////////////////////////////////////////////////////////
/*4. Uraditi zadatak 1 tako da se dohvati trenutno vreme, 
i za njega odredi koliko minuta je prošlo od ponoći.*/
////////////////////////////////////////////////////////////////

let trenutnoVreme = new Date ();
let saT = trenutnoVreme.getHours();
let minU = trenutnoVreme.getMinutes();

let sadaJeProslo = saT * 60 + minU;
console.log(sadaJeProslo); 

/////////////////////////////////////////////////////////
/*5. Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. 
i yyyy/mm/dd.*/
/////////////////////////////////////////////////////////////
let now = new Date();
let year = now.getFullYear() // return year
let month = now.getMonth() + 1 // return month(0 - 11)
let date = now.getDate() // return date (1 - 31)

console.log(date + "." + month + "." + year);
console.log(year + "." + month + "." + year);

//////////////////////////////////////////////////////////
/* 6. Data je promenljiva u kojoj je ukupan broj evra koji
posedujemo, kao i promenljiva u kojoj je vrednost trenutnog kursa. 
Odrediti koliko ćemo imati dinara nakon razmene. Uraditi isto i 
za konverziju iz dinara u evre.*/
///////////////////////////////////////////////////////////

let evri = 100;
let kurs = 120;
let dinari = 5000;

let ukupnoDinara = evri * kurs;
let ukupnoEvra = dinari / kurs;

console.log(ukupnoDinara);
console.log(ukupnoEvra);

//////////////////////////////////////////////////////////////
/*7. Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, 
kao i promenljive u kojima je vrednost kurseva evro-dinar, 
kao i dolar-dinar, redom. Odrediti koliko ćemo imati dolara nakon
razmene. Uraditi isto i za konverziju iz dolare u evre.*/
/////////////////////////////////////////////////////////////////////

let ukEvra = 100; 
let kursEvroDin = 120;
let kursDolarDin = 110;


let dinariUkupno = ukEvra * kursEvroDin;
console.log(dinariUkupno);


let dolari = dinariUkupno / kursDolarDin
console.log(dolari);

//////////////////////////////////////////////////////////////////
/*8.Temperatura iz Celzijusa u Farenhajte i obrnuto.*/
///////////////////////////////////////////////////////

let tUc = 10;
let fer = 50;

let feren = tUc* 1.8 + 32;
console.log(feren);

let cel = (fer - 32) / 1.8;
console.log(cel);

//////////////////////////////////////////////
/*9. Temperatura iz Celzijusa u Kelvine i obrnuto.*/
//////////////////////////////////////////////////

let k = 300;

let kelvin = tUc + 273.15;
console.log(kelvin);

let c = k - 273.15;
console.log(c);

//////////////////////////////////////////////////
/*Izvršiti konverziju zapremine iz galona u litre i obratno,
ako važi da je: 1 galon = 3.785 litara.*/
////////////////////////////////////////////////////////////

let l = 7;
let g = 3;

let galon = l * 3.785;
console.log(galon);

let litre = l / 3.785;
console.log(litre);




