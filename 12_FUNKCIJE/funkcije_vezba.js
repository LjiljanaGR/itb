///////////////////////////////////////////////////////////////////////
/*1. Napisati funkciju suma kojoj se prosleđuju parametri n i m, 
dok funkcija vraća sumu kubova brojeva od n do m.
Pozvati funkciju i njen rezultat ispisati u konzoli.*/
//////////////////////////////////////////////////////////////////////

function suma(n, m) {
    
    sumaKubova = 0;

    for(let i = n; i <= m; i++) {
        sumaKubova += i ** 3;
    }
    return sumaKubova;
}

console.log(suma(1, 10));

///////////////////////////////////////////////////////////////////////
/*2. Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.
Parametar godRodjenja predstavlja godinu rođenja neka osobe. 
Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba. 
Broj godina osobe izračunati na osnovu prosleđene godine 
rođenja i trenutne godine koju preuzimate sa računara. 
Pozvati funkciju i dobijeni rezultat ispisati u konzoli.*/
///////////////////////////////////////////////////////////////////////

function godina(godRodjena) {
    let datum = new Date();
    let godina = datum.getFullYear();
    let godine = 0;

    godine = godina - godRodjena;
    return godine;
}

console.log(godina(1994));

/////////////////////////////////////////////////////////////////////
/*3. Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. 
Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su 
deljivi brojem k. Pozvati funkciju*/
//////////////////////////////////////////////////////////////////////

function deljiv (n, m, k) {

    let brDeljivih = 0;

    for (let i = n; i <= m; i++) {
        if (i % k == 0) {
            //console.log(i);
            brDeljivih++;
    }
}
console.log(`Ukupan broj brojeva je ${brDeljivih}`);
return brDeljivih;
}
console.log(deljiv(1, 15, 5));

///////////////////////////////////////////////////////////////////
/*4. Pilot želi da napravi program gde unosi vreme polatanja 
(sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59)
 i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja 
aviona između 0 i 59). 

Napisati funkciju pilot kojoj se prosleđuje vreme poletanja i 
vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova 
i minuta je trajao njegov let. 

Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je 
ispravno uneo vrednosti poletanja i sletanja.*/
////////////////////////////////////////////////////////////////////

function pilot(satPoletanja, minutPoletanja, satSletanja, minutSletanja) {
    
    satPoletanja = satPoletanja * 60;
    let ukupnoMinutaPoletanja = satPoletanja + minutPoletanja;

    satSletanja = satSletanja * 60;
    let ukupnoMinutaSletanja = satSletanja + minutSletanja;

    let trajanjeLetaMinute = 0;
    trajanjeLetaMinute = ukupnoMinutaSletanja - ukupnoMinutaPoletanja;
    
    let ukupno = 0;
    ukupno = trajanjeLetaMinute / 60;

    
    return ukupno;
}

console.log(pilot(22, 0, 23, 0));

/////////////////////////////////////////////////////////////////////
/* 5. Specijalitet jedne poslastičare je slatkiš po imenu jaban 
koje se pravi od jabuka i banana. 

Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane. 
Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. 

U svakoj isporuci ima 20% oštećenih jabuka koje se ne mogu iskoristiti 
za pripremu jaban slatkiša. 

Napisati funkciju jaban koja za prosleđeni broj isporučenih jabuka i 
prosleđeni broj isporučenih banana, određuje i vraća koliko porcija 
jaban slatkiša je moguće da poslastičar napravi. 

Broj oštećenih jabuka zaokružiti na najbliži ceo broj */
/////////////////////////////////////////////////////////////////////

function jaban(jabuke, banane) {

    let osteceneJabuke = 0;
    osteceneJabuke = 0.20 * jabuke;

    let porcijaJabuke = 0;
    porcijaJabuke = (jabuke - osteceneJabuke) / 2;
  
    let porcijaBanana = 0;
    porcijaBanana = banane / 3;

    let porcija = 0; 
    
    //porcija = Math.min(porcijaJabuke, porcijaBanana);
    porcija = porcijaJabuke/2 + porcijaBanana/3;

    return `Od ${jabuke} jabuka i ${banane} banana, moze da se napravi ${porcija}`; 
    
}

console.log(jaban(2, 3));

