//////////////////////////////////////////////////////////////////////
//O P E R A T O R I    P O R E DJ E NJ A
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
/* Ispitati jednakost vrednosti 3 i “3” po vrednosti.*/
//////////////////////////////////////////////////////////////////////

let i = 3; 
let n = "3"; 

if(i == n) {
    console.log(`Jednaki su.`);
}
else {
    console.log(`Nisu jednake.`)
}

////////////////////////////////////////////////////////////////////////
/* Ispitati jednakost vrednosti 3 i “3” po vrednosti i tipu*/
////////////////////////////////////////////////////////////////////////

i = 3; 
n = "3";

if(i === n) {
    console.log(`Jednaki su.`);
}
else {
    console.log(`Nisu jednake.`);
}

/////////////////////////////////////////////////////////////////////////
//Z A D A C I   Z A    V E Z B U (I F - E L S E)
/////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
/**1. Za unetu zapreminu proizvoda, u paragrafu zelenom bojom ispisati
“Pack up”, ukoliko je proizvod zapremine veće ili jednake 100ml. 
U suprotnom u paragrafu crvenom bojom ispisati “Throw away”.*/
////////////////////////////////////////////////////////////////////////

let zapremina = 90; 

if(zapremina < 100) {
    document.write(`<p style="color: green;">"Pack up!"</p>`);
}
else(
    document.write(`<p style="color: red;">"Throw away!"</p>`)
)

//Drugi nacin;

let zapremina2 = 10; 
let paraGr = document.getElementById(`paragraf`);

if(zapremina2 < 100) {
    paraGr.style.color = `green`;
    paraGr.innerHTML = `Spakuj!`;
}
else {
    paraGr.style.color = `red`;
    paraGr.innerHTML = `Baci!`;
}

////////////////////////////////////////////////////////////////////////
/*2. Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” 
crvenom bojom ili “Temperatura u minusu” plavom bojom. Ukoliko je 
temperatura nula, računati kao temperaturu u plusu.*/
////////////////////////////////////////////////////////////////////////

let t = -1;

if(t < 0) {
    document.write(`<p style="color: blue">Temperatura u minusu!</p>`);
}
else {
    document.write(`<p style="color: red">Temperatura u plusu!</p>`);
}

//Drugi nacin

let paragrafDva = document.getElementById(`tempParagraf`);
let tem2 = 10;

if(tem2 < 0) {
    paragrafDva.style.color = `blue`;
    paragrafDva.innerHTML = `MINUS`;
}
else {
    paragrafDva.style.color = `red`;
    paragrafDva.innerHTML = `PLUS`;
}

////////////////////////////////////////////////////////////////////////
/*3. Za preuzetu godinu sa računara i unetu godinu rođenja izračunati 
da li osoba ove godine postaje punoletna. Ukoliko postaje, prikazati 
sliku torte sa brojem 18. U suprotnom, izračunati još koliko godina je
preostalo do punoletstva i ispisati tu informaciju u paragrafu.*/
////////////////////////////////////////////////////////////////////////

let datum = new Date();
let godina = datum.getFullYear();
let godinaRodjenja = 2005;
let imaGodina = godina - godinaRodjenja;
let doPunoletstva = 18 - imaGodina;

if(imaGodina == 18) {
    console.log("Postaje punoletna!");
    document.write(`<img src="torta.jpg">`);
}
else if (imaGodina < 18) {
    console.log(`Nije punoletna! Trenutno treba ${doPunoletstva} godine do punoletstva1`);
}
else (
    console.log(`Osoba ima preko 18 godina!`)
)

////////////////////////////////////////////////////////////////////////
/* 4. U odnosu na preuzeto trenutno vreme sa računara, 
u paragrafu ispisati da li je trenutno jutro ili popodne.
Popodne je kada prođe 12:00 sati, računajući i to vreme.*/
////////////////////////////////////////////////////////////////////////

let vreme = new Date();
let preuzetoVreme = vreme.getHours();

if(preuzetoVreme >= 12) {
    document.write(`<p>Sada je popodne</p>`);
}
else {
    document.write(`<p>Sada je jutro!</p>`);
}

////////////////////////////////////////////////////////////////////////
/* 5. U odnosu na pol koji je korisnik uneo u promenljivu  
(“m” za muški pol ili “z” za ženski pol)  na ekranu prikazati 
odgovarajući avatar (odgovarajuću sličicu).*/
////////////////////////////////////////////////////////////////////////

let pol = "m";

if(pol === "m") {
    document.write(`<img src="torta.jpg">`);
}
else {
    document.write(`<img src="torta.jpg" style="border: 5px solid red">`);
}

/////////////////////////////////////////////////////////////////////////
//Z A D A C I   Z A    V E Z B U (I F,  E L S E  -  I F)
/////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
/* 6.Preuzeti sa računara koji je dan u nedelji i ispitati da li je to 
radni dan ili je u pitanju vikend. */
////////////////////////////////////////////////////////////////////////

let dani = new Date();
let daniUnedelji = dani.getDay()

if (daniUnedelji === 0 || daniUnedelji === 6) {
    console.log(`Vikend je!`);
}
else {
    console.log(`Radni dan je!`);
}

////////////////////////////////////////////////////////////////////////
/* 7.Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje 
od 12 sati ujutru, dobar dan za vreme manje od 18 sati, u ostalim 
slučajevima ispisati dobro veče. */
////////////////////////////////////////////////////////////////////////

let novoVreme = new Date();
let vremeNovo = novoVreme.getHours();

if(vremeNovo <= 12) {
    console.log(`Dobro jutro!`);
}
else if(vremeNovo <= 18) {
    console.log(`Dobar dan!`);
}
else {
    console.log(`Dobro vece!`);
}
////////////////////////////////////////////////////////////////////////
/* 8.Radno vreme jedne programerske firme je od 9h do 17h. 
Preuzeti vreme sa računara i ispitati da li u to vreme firma 
radi ili ne radi. */
////////////////////////////////////////////////////////////////////////

let vremeFirme = new Date();
let novoVremeFirme = vremeFirme.getHours();

if(novoVremeFirme >= 9 && novoVremeFirme <= 17) {
    console.log(`Firma Radi!`);
}
else {
    console.log(`Ne radi!`);
}

////////////////////////////////////////////////////////////////////////
/* 9 .Za unet sat početka i sat kraja radnog vremena dva lekara,  
ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.
(Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom 
nakon ponoći, ovo se podrazumeva i ne ispitivati dodatno) */
////////////////////////////////////////////////////////////////////////

let p1 = 8;
let k1 = 16;

let p2 = 9;
let k2 = 15;

if (k1 <= p2) {
    console.log("Ispisati NE");
   }
       else if(k2 <= p1) {
   console.log('NE');
       }
   else {
       console.log('DA');
   }

////////////////////////////////////////////////////////////////////////
/* 10 .Uneti dva broja. Većem  broju ispisati sledbenik, a 
manjem broju ispisati prethodnik. */
////////////////////////////////////////////////////////////////////////

let br1 = 2;
let br2 = 3;

if(br1 > br2) {
    console.log(`Sledbenik`);
}
else{
    console.log(`Prethodnik!`);
}
////////////////////////////////////////////////////////////////////////
/* 11 .Učitati broj ispitati na ekranu “Ceo broj”, ukoliko je 
učitani broj ceo.  */
////////////////////////////////////////////////////////////////////////

let br3 = 1;

if(br3 % 1 == 0) {
    console.log(`Celi je broj`);
}
else{
    console.log(`Nije celi broj.`)
}

////////////////////////////////////////////////////////////////////////
/* 12. Učitati dva cela broja i ispitati da li je veći od njih paran, 
a manji od njih deljiv sa 3  */
////////////////////////////////////////////////////////////////////////

let prvi = 6; 
let drugi = 8;

if(prvi > drugi) {
    
    if(prvi % 2 == 0) {
        console.log(`Prvi broj je veci i paran je.`)
    }
    else {
        console.log(`Prvi broj nije paran broj`);
    }
    if (drugi % 3 == 0){
        console.log(`Drugi broj je manji broj i deljiv je sa tir.`);
    }
    else {
        console.log(`Drugi broj je manji, ali nije deljiv sa tri`);
    }
}

else { 
    if(drugi % 2 == 0) {
        console.log(`Drugi broj je veci i paran je!`);
    }
    if (prvi % 3 == 0) {
        console.log(`Prvi broj je manji i deljiv je sa tri.`);
    }
    else {
        console.log(`Prvi broj je manji, ali nije deljiv sa tri`);
    }
}

////////////////////////////////////////////////////////////////////////
/* 13. Uneti dva datuma i ispisati onaj koji je raniji. 
Datume unosimo tako što u posebnim promenljivama navedemo dan, 
mesec i godinu, za svaki od njih.  */
////////////////////////////////////////////////////////////////////////

let dan1 = 20; 
let mesec1 = 5;
let godina1 = 2023;

let dan2 = 1;
let mesec2 = 2;
let godina2 = 2024;

if (godina1 == godina2) {

    if (mesec1 > mesec2) {
        console.log(`Drugi je raniji`);
    }

    else if (mesec2 == mesec1) {
        if(dan1 > dan2) {
            console.log(`Drugi je raniji`);
        }
        else {
            console.log(`Prvi je raniji`);
        }
    }

    else {
        console.log(`Prvi je raniji`);
    }
}

else if(godina1 > godina2) {
    console.log(`Drugi datum je raniji`);
}

else {
    console.log(`Prvi datum je raniji`);
}

////////////////////////////////////////////////////////////////////////
/* 14. Napraviti program koji za uneti pol i broj godina korisnika
ispisuje da li je korisnik muškarac ili žena i da li je punoletan  */
////////////////////////////////////////////////////////////////////////

pol = "z";
let godine = 26;

if (pol ==="m") {
    if (godine >= 18) {
        console.log(`Muskarac je punoletan`);
    }
    else {
        console.log(`Muskarac, ali nij epunoletan.`);
    }
}

else {
    if (godine >= 18) {
        console.log(`Zena, punoletna.`);
    }
    else {
        console.log(`Zena, nije punoletna.`)
    }
}

////////////////////////////////////////////////////////////////////////
/* 15. U promenljivu uneti broj koji predstavlja temperaturu vazduha. 
Na ekranu ispisati „ekstremna temperatura“ ukoliko je temperatura manja 
od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.  */
////////////////////////////////////////////////////////////////////////

let temp = 38;
if(temp <= -15 || temp >= 40) {
    console.log(`EKSTREMNA TEMPERATURA!`);
}
else {
    console.log(`OK!`);
}

////////////////////////////////////////////////////////////////////////
/* 16. Ispitati da li je trenutna godina prestupna. 
(godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna 
ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400. */
////////////////////////////////////////////////////////////////////////

let godinaOva = new Date();
let prestupna = godinaOva.getFullYear();

if (prestupna % 4 == 0 && prestupna % 400 ==0) {
    console.log(`Godina ${prestupna} je prestupna`);
}
else{
    console.log(`${prestupna} nije prestupna!`);
} 

////////////////////////////////////////////////////////////////////////
/* 17. Jedan butik ima radno vreme od 9h do 20h radnim danima, 
a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, 
ispitati “otvoreno” ukoliko je butik trenutno otvoren.U suprotnom
ispisati “zatvoreno”. (Ko bude imao vremena: Ukoliko je butik 
trenutno otvoren, prikazati sličicu otvorenih vrata na ekranu. 
Ukoliko je butik trenutno zatvoren, prikazati sličicu zatvorenih vrata.) */
////////////////////////////////////////////////////////////////////////

let radVr = new Date();
let radnoVreme = radVr.getDay();
let sati = radVr.getHours();

if(radnoVreme === 0 || radnoVreme === 6) {
    if (sati < 10 && sati > 18) {
        console.log(`Vikend je i radi!`);
    }
    else {
        console.log(`Vikend je! Ne radi!`);
        document.write(`<img src="torta.jpg" style="border: 3px solid pink;">`);
    }
}
else {
    if (sati > 9 && sati < 20) {
        console.log(`Radni dan je! radi!`);
    }
    else {
        console.log(`Radni dan je! NE radi!`);
    }
}

////////////////////////////////////////////////////////////////////////
/* 18. Odrediti i u paragrafu ispisati najveći od tri uneta broja:
a) Samo uz pomoć if naredbi (bez korišćenja if-else strukture, 
    logičkih operatora ili ugnježdenog grananja)
b) Korišćenjem if – else strukture
c) Korišćenjem ugnježdenog grananja.
d) Korišćenjem logičkih operatora */
////////////////////////////////////////////////////////////////////////

//a) 

let broj1 = 10; 
let broj2 = 16;
let broj3 = 27; 

let maks = broj1; 

if (broj2 > maks) {
    maks = broj2;
}
if ( broj3 > maks) {
    maks = broj3;
}
console.log(`${maks} je najveci broj`)


//b) 

if(broj2 > maks) {
    console.log(`${broj2} je najveci`);
}
else if(broj3 > maks) {
    console.log(`${broj3} je najveci`);
}
else {
    console.log(`${maks} je najveci`);
}

//c)

if(maks > broj2) {
   
    if(maks > broj3) {
        console.log(`${maks} je najveci`);
    }
    else{
        console.log(`${broj3} je najveci`); 
    }
}

else if(broj2 > maks) { 

    if(broj2 > broj3) {
        console.log(`${broj2} je najveci`);
    }
    else {
        console.log(`${broj3} je najveci`); 
    }
    
}
else {
  console.log(`${broj3} je najveci`);
}
    
//d) 

if(maks > broj2 || maks > broj3 ) {
    console.log(`${maks} je najveci broj`);
}
else if(broj2 > maks || broj2 > broj3) {
    console.log(`${broj2} je najveci broj`);
} 
else {
    console.log(`${broj3} je najveci`);
}