// 12.zadatak 
/*Učitati dva cela broja i ispitati da li 
je veći od njih paran, a manji od njih deljiv sa 3.
*/

let br1 = 5;
let br2 = 6;

//ispituje da li je veci broj deljiv sa 2 tj., da li je paran 
if (br1 > br2) {
    console.log("veci broj je" + br1 , "a manji broj je " + br2);

    if (br1 % 2 ==0) {
        console.log("veci broj je paran");
    } else {
        console.log("veci broj je paran");
    }
        //ispituje da li je manji broj deljiv sa 3
        if (br1 % 3 == 0) {
        console.log('Manji broj je deljiv sa 3');
} else {
    console.log("manji broj nije deljiv sa 3");
}} 
else {
    console.log("Veci broj je" + br2 , "a manji broj je" + br1);
}

//2. nacin 
/*
br1 = 15;
br2 = 19;
let veci = br1;
if(br > veci) {
    veci = br2;
}

let manji = br1 + br2  - veci;
if(veci % 2 == 0) {
    console.log("Veci broj deljiv sa dva");
}
else {
    console.log("Veci broj nije deljiv sa 2")

}
if (manji % 3 ==0) {
    console.log('Manji broj deljiv sa 3'); 
}
else {
    console.log(:Manji broj nije deljiv sa 3);
}

/* 13.Uneti dva datuma i ispisati onaj koji je raniji. 
Datume unosimo tako što u posebnim promenljivama navedemo dan,
 mesec i godinu, za svaki od njih.*/

 let godina1= 2018;
 let godina2 = 2018;
 let mesec1=6;
 let mesec2= 5;
 let dan1 = 6;
 let dan2 = 7;
  if(godina1 < godina2) {
     console.log( `${godina1} je ranija od ${godina2}`);
 }
 else if (godina2< godina1){
    console.log( `${godina2} je ranija od ${godina1}`);
 }
 else if(godina1 == godina2) {
    if(mesec1 < mesec2) {
        console.log(`Ranije prvi datum`);
    } 
    else if(mesec2<mesec1) {
        console.log(`Raniji je drugi datum`);
    }
    else if(mesec1 == mesec2) {
        if(dan1<dan2) {
            console.log(`Ranije je prvi dan`);
        }else if(dan2<dan1)
         {
            console.log(`Raniji je drugi datum`);
         } else {
            console.log(`Datumi su isti`);
         }
    }
 }

/*Napraviti program koji za uneti pol i broj godina korisnika
 ispisuje da li je korisnik muškarac ili žena i da li je punoletan*/

 let pol = "m";
 let godine = 18;
 if(pol == "z"){
     if(godine >= 18){
        console.log(`Korisnik je zenskog pola i punoletan je`);
     }else {
         console.log(`Korisnik je zenskog pola i maloletan je`);
     }
 } 
 else if(pol == "m"){
     if(godine >= 18){
         console.log(`Korisnik je muskog pola i punoletan je`);
     } else {
        console.log(`Korisnik je muskog pola i maloletan je`);
     }
 }

 /*15. U promenljivu uneti broj koji predstavlja temperaturu vazduha. 
Na ekranu ispisati „ekstremna temperatura“ ukoliko je temperatura
 manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.*/

 let temp = -20;

 if (temp < -15 || temp >40) {
    console.log("Ekstremna temperatura");
 }
 else {
    console.log('Nije ekstremna');
 }

 //2.nacin
 if (temp >= 15 && temp <40) {
    console.log('Nije ekstremna temperatura');
 }
 else {
    console.log('ekstremna temperatura');
 }
 

 /*16. Ispitati da li je trenutna godina prestupna. 
 (godinu preuzeti iz vremena na Vašem računaru).
 Godina je prestupna ako je deljiva sa 4 i nije deljiva sa
  100 ili ako je deljiva sa 400.*/


let god = new Date();
let ovaGod = god.getFullYear;

ovaGod = 2023;

if (ovaGod % 4 ==0 && ovaGod % 100 !== 0) {
    console.log('Prestupna');
}
else {
    console.log("Nije prestupna godina");
}


/* 17. Jedan butik ima radno vreme od 9h do 20h 
radnim danima, a vikendom od 10h do 18h. 
Preuzeti dan i vreme sa računara, ispitati 
“otvoreno” ukoliko je butik trenutno otvoren.
U suprotnom ispisati “zatvoreno”.*/


let vrm = new Date();
let nvr = vrm.getHours();
let ndn = vrm.getDay();

//let ndn = "";
//let nvr = 12; 

if (ndn === "saturday" && nvr < 10 && nvr > 18) {
    console.log("Ne radi, vikend je.");
}
else if(ndn === "sunday" && nvr > 10 && nvr < 18) {
    console.log("Radi, vikend je.");
}
else if (ndn !=="saturday" && nvr > 10 && nvr < 18) {
    console.log("Radni dan je, radi.");
}
else if (ndn !=="sunday" && nvr > 10 && nvr < 18) {
}
else {
    console.log('Ne radi');
}
/*
if (dan != 0 && dan != 6 && vreme >= 9 && vreme < 20) {
    document.write('<img src="https://images.pexels.com/photos/1544420/pexels-photo-1544420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">');
} else if ((dan == 6 || dan == 0) && vreme >= 10 && vreme < 18){
    document.write('<img src="https://images.pexels.com/photos/1544420/pexels-photo-1544420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">');
} else {
    document.write('<img src="https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">');
}
*/
/* Odrediti i u paragrafu ispisati najveći od tri uneta broja:
Samo uz pomoć if naredbi (bez korišćenja if-else strukture, 
    logičkih operatora ili ugnježdenog grananja)*/

let b1 = 6;
let b2 = -5;
let b3 = 10;

let maks = b1; 

if(b2 > maks) {
    maks = b2;
}

if (b3 > maks) {
    maks = b3;
}

console.log('najveci od brojeva je' + maks);


// drugi nacin 

let maksimum = null;
if(b1 > b2) {
maksimum = b1
}
else {
    maksimum = b2;
}
if (maksimum < b3) {
    maksimum = b3;
}

//Korišćenjem if – else strukture
//Korišćenjem ugnježdenog grananja.
if(b1 > b2) {
    if (b1 > b3) {
        console.log('Najveci je ' + b1);
    } 
    else {
    console.log('Najveci je' + b3);
    }
}

else if (b2 > b3) {
    //..
}


//Korišćenjem logičkih operatora*/

let a = 9;
let b = 10;
let c = 7;

if(a > b && a > c) {
console.log(a + 'je najveci br'); 
}
else if(b > a && b > c) {
    console.log(b + 'je najveci br');
}
else {
    console.log(c + 'je najveci'); 
}

