console.log(`Funkcije`);
/////////////////////////////////////////
//Funkcija za ispis u konzoli
/////////////////////////////////////////

function zdravo(){
    console.log("Hello world!");
}
zdravo(); //Poziv funkcije

///////////////////////////////////////////////////////////////////////
//Funkcija za ispis prosledjenog teksta u konzoli (prosledjuje se jedan parametar)
//////////////////////////////////////////////////////////////////

function ispisiTekst(tekst) {
    console.log(tekst);
}
ispisiTekst("Ovo je neki tekst");
ispisiTekst("Ovo je neki drugi tekst");
let t = "Moj tekst";
ispisiTekst(t);

//////////////////////////////////////////////
//Funkcija kojoj se prosledjuju vise parametara
/////////////////////////////////////////////

function imePrezime(ime, prezime, godine) { // PARAMETRI su u malim zagradama!!
    console.log(`Ulogovana osoba je ${ime} ${prezime}.Osoba ima ${godine} god.`);
}
imePrezime("Jelena", "Matejic", 29); // Ovde su ARGUMENTI u zagradama!!!
let imeOsobe = "Stefan";
let prezimeOsobe = "Stanimirovic";
let godineOsobe = 34;
imePrezime(imeOsobe, "Stanimirovic", godineOsobe);
imePrezime(30, "Milica", 1993);
imePrezime(godine=40, ime="Maja", prezime="Markovic");

////////////////////////////////////////////////////////
//Funkcija koja vrsi sabiranje dva broja
///////////////////////////////////////////////////////////

function zbir(br1, br2) {
    let rezultat = br1 + br2; 
    console.log(`${br1} + ${br2} = ${rezultat}`);
}
zbir(16, 21);
let b1 = -10;
let b2 = 20;
zbir(b1, b2);
zbir(5+4, 50);
zbir("Java", "Script");//Voditi racuna sta prosledjujemo kao argument!

////////////////////////////////////////////////////////////////
//Funkcija koja vraca vrednost
//////////////////////////////////////////////////////////////////

function razlika(umanjenik, umanjilac) {
    let razlikaRezultat = umanjenik - umanjilac;
    return razlikaRezultat;
}
console.log(`Razlika je: ${razlika(60, 45)}`);
let r = razlika(100, 4);
console.log(`Funkcija vraca ${r}`);

let r1 = razlika(6, 3); // upisace r1 = 3;
let r2 = razlika (17, 7); // upisace r2 = 10;
let r3 = razlika (r1, r2);// r3 = -7
console.log(`promenjiva r3 iznosi ${r3}`);
let r4 = razlika(razlika(40, 60), razlika(10, 4)); //razlika(-20, 6) = -26
console.log(`promenjiva r4 iznosi ${r4}`);

////////////////////////////////////////////////////////////////
//Funkcija sa vise return-a
//////////////////////////////////////////////////////////////////

function temperaturaVode(temp) {    
    if(temp <= 0) {
        return "Voda se ledi";
    }
    else if (temp >= 100) {
        return "Voda isparava";
    }
    else {
        return "Voda je u tecnom agregatnom stanju"
    }
}
console.log(temperaturaVode(-5));
let rezTempVode = temperaturaVode(114);
console.log(rezTempVode);

////////////////////////////////////////////////////////////////
//2. Nacin
//////////////////////////////////////////////////////////////////

function temperaturaVode1(temp) {    
    let tekstZaIspis = "";
    if(temp <= 0) {
        tekstZaIspis = "Voda se ledi";
    }
    else if (temp >= 100) {
        tekstZaIspis = "Voda isparava";
    }
    else {
        tekstZaIspis = "Voda je u tecnom agregatnom stanju"
    }
    return tekstZaIspis;
}

console.log(temperaturaVode1(50));

////////////////////////////////////////////////////////////////
//3. Nacin
//////////////////////////////////////////////////////////////////

function temperaturaVode2(temp) {    
    let tekstZaIspis = "Voda je u tecnom stanju";
    if(temp <= 0) {
        tekstZaIspis = "Voda se ledi";
    }
    else if (temp >= 100) {
        tekstZaIspis = "Voda isparava";
    }
    return tekstZaIspis;
}

console.log(temperaturaVode2(-50));

let pTempVode = document.getElementById(`tempVode`);
pTempVode.innerHTML = temperaturaVode2(100);

//////////////////////////////////////////////////////////////////////////////////
// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tekst “Broj je neparan” 
//ukoliko je u pitanju neparan broj ili vraća tekst “Broj je paran” ukoliko broj n nije neparan.
////////////////////////////////////////////////////////////////////////////////////////////

function neparan(n) {
    if (n % 2 != 0) {
        return "Broj je neparan!";
    }
    else {
        return "Broj je paran!";
    }
}

console.log(neparan(5));

//////////////////////////////////////////////////////////////////////////////////////////
//4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati 
//funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
///////////////////////////////////////////////////////////////////////////////////////////

function maks2(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(maks2(22, 2));

function maks4(a, b, c, e) {
    if (a > b && a > c && a > c) {
        return a;
    }
    else if (b > a && b > c && b > c) {
        return b;
    }
    else if (c > a && c > b && c > e) {
        return c;
    }
    else {
        return e;
    }
}
console.log(maks4(12, 222, 3, 4));

////////////////////////////////////////////////
//DRUGI NACIN
/////////////////////////////////////////////////
const maks2Function = (broj1, broj2) => {
    if (broj1 > broj2) {
        return broj1;
    } else {
        return broj2;
    }
}
const maks4Function = (a, b, c, d) => {
    let veciPrvaDva = maks2Function(a, b);
    let veciDrugaDva = maks2Function(c, d);
    return maks2Function(veciPrvaDva, veciDrugaDva);
}
console.log(maks4Function(5, 7, 10, 15));
const maks4Function2 = (a, b, c, d) => {
    return maks2Function(maks2Function(a, b), maks2Function(c, d));
}
console.log(maks4Function2(20, 11, 16, 18));

//////////////////////////////////////////////////////////////
//5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
/////////////////////////////////////////////////////////////////////

function prikaziSliku(adresa) {
    document.write(`<img src="${adresa}">`);
}
prikaziSliku("data:image/jpeg;base64,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");
prikaziSliku("1.jpg");

////////////////////////////////////////////////
//5. a) KOMPLEKSNIJE resenje
//////////////////////////////////////////////////////

function prikaziSLikuUElementu(putanja, id) {
    let element = document.getElementById(id);
    element.innerHTML = `<img src="${putanja}">`;
}
prikaziSLikuUElementu("1.jpg", "slika1");

////////////////////////////////////////////////
// 6. Napisati funkciju koja za unetu boju
// na engleskom jeziku boji tekst paragrafa u tu boju.
///////////////////////////////////////////////////////

function bojaParagrafa (boja) {
    let paragraf = document.getElementById(`nekiParagraf`);
    paragraf.style.color = `${boja}`;
}
bojaParagrafa(`blue`);

////////////////////////////////////////////////
// 7. Napisati program koji sadrži funkciju sedmiDan koja za uneti 
//broj n u konzoli ispisuje n-ti dan u nedelji 
//(npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, 
//za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
//Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
///////////////////////////////////////////////////////

function sedmiDan(n) {
    if (n%7 == 0) {
        console.log(`Nedelja`);
    }else if ( n %7== 1) {
        console.log(`Ponedeljak`);
    }else if ( n%7 == 2) {
        console.log(`Utorak`);
    }else if ( n %7== 3) {
        console.log(`Sreda`);
    }else if ( n%7 == 4) {
        console.log(`Cetvrtak`);
    }else if ( n%7 == 5) {
        console.log(`Petak`);
    }else if ( n%7 == 6) {
        console.log(`Subota`);
    }
}
sedmiDan(4);

////////////////////////////////////////////////
// 8. Napisati funkciju deljivSaTri koja se koristi u 
//ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.
///////////////////////////////////////////////////////

function deljivSaTri(n, m) {
    let brojac = 0;
    for (let i = n; i <= m; i++) {
        if(i % 3 == 0) {
            console.log(i);
            brojac++;
        }
    }
    console.log(`U intervalu od ${n} do ${m} ima ${brojac} brojeva deljivih sa 3.`)
}

deljivSaTri(10, 30);

//Ako funkcija ima return, onda mozemo da koristimo Console.log 
//sa imenom funkcije npr. console.log(nazivfunkcije(argumenti));
//Ukoliko nema returna u funkciji, onda funkciju pozivamo 
//tako sto pisemo samo ime funkcije sa argumentima!!!!


//////////////////////////////////////////////////////////
//9. Napisati funkciju sumiraj koja određuje i vraća sumu
//brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
/////////////////////////////////////////////////////////////////

function sumiraj(n, m) {
    let suma = 0;

    for(let i = n; i <= m; i++ ) {
        suma += i;
    }

    return suma;
}

console.log(sumiraj(1, 5));


///////////////////////////////////////////////////////////////////
//10. Napisati funkciju množi koja određuje i vraća proizvod brojeva 
//od n do m. Brojeve n i m proslediti kao parametre funkciji.
///////////////////////////////////////////////////////////////////

function mnozi(n, m) {
    let proizvod = 1;
    for(let i = n; i <= m; i++) {
        proizvod *= i;
    }

    return proizvod;
}

console.log(mnozi(2, 3));

//////////////////////////////////////////////////////////////////////////
//11. Napraviti funkciju aritmeticka koja vraća aritmetičku sredinu 
//brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
/////////////////////////////////////////////////////////////////////////////////

function aritmeticka(n, m) {
    let arVrednost = 0;
    let brojacBrojeva = 0;
    let suma = 0;

    for(let i = n; i <= m; i++) {
        brojacBrojeva++;
        suma += i;
    }

    arVrednost = suma / brojacBrojeva;

    return arVrednost;
}
console.log(aritmeticka(1, 5));

//////////////////////////////////////////////////////////////////////////////////
//12. Napisati funkciju aritmetickaTri koja vraća aritmetičku
// sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. 
//Brojeve n i m proslediti kao parametre funkciji.
//////////////////////////////////////////////////////////////////////////////////////////

function aritmetickaSredina(n, m) {
    
    let suma = 0;
    let brojac = 0;
   
    for(let i = n; i <= m; i++) {
        if(i % 10 == 3) {
            console.log(i);
            suma += i;      
            brojac++;   
        }
    }
   console.log(`${suma}`);

   let ariVrednost = suma / brojac;
   console.log(`${ariVrednost}`);
   return ariVrednost;
   
}

console.log(aritmetickaSredina(1, 13));

///////////////////////////////////////////////////////////////////
//13. Napisati funkciju velicinaFonta kojoj se prosleđuje ceo broj a 
//ona ispisuje tekst koji ima prosleđenu veličinu fonta.
/////////////////////////////////////////////////////////////////

function velicinaFonta(n, str1) {
    
    let paragraf = document.getElementById(`obojeniParagraf`);
    paragraf.style.fontSize = `${n}px`;
    paragraf.innerHTML = `${str1}`;
}

velicinaFonta(55, 'Neka recenica');

//////////////////////////////////////////////////////////////////////
//14. Napisati funkciju recenica5 koja pet puta ispisuje istu
//rečenicu, a veličina fonta rečenice treba da bude jednaka 
//vrednosti iteratora.
////////////////////////////////////////////////////////////////////////

function recenica5() {

    for (let i = 10; i <= 50; i++) 
    {
        document.write(`<p style="font-size: ${i}px">Neki Paragraf</p>`);
    }
}
recenica5();

/////////////////////////////////////////////////////////////////////
//15. Dobili ste plaćenu programersku praksu u trajanju od n meseci. 
//Prvog meseca, plata će biti a dinara, a ako budete vredno radili 
//svakog narednog meseca ćete dobiti povišicu od d dinara. 
//Brojeve n, a i d određujete sami.Napišite funkciju poslednjaPlata 
//kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati kolika
// će vam plata biti poslednjeg meseca prakse, ukoliko svakog meseca 
//budete dobijali povišicu.

//Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

//Napišite funkciju ukupnaPlata kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati 
//vrednost koliko ćete ukupno navca zaraditi na praksi, ukoliko svakog meseca budete 
//dobijali povišicu.
//Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

function poslednjaPlata(n, a, d) {
    return a + (n - 1) * d;
  }
  console.log(poslednjaPlata(6, 1000, 100));


  function ukupnaPlata(n, a, d) {
    return ((a + poslednjaPlata(n, a, d)) / 2) * n;
  }
  console.log(ukupnaPlata(3, 1000, 100));
  
function ukupnaPlata(n, a, d) {
    let ukupnaPlata = n * a;
    let ukupnaPovisica = n * d;
    let ukupnoNaKraju = ukupnaPlata + ukupnaPovisica;
    return ukupnoNaKraju
}
console.log(ukupnaPlata(10, 50000, 5000));

/*16. Na igrama bez granica, ekipi je postavljen 
zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni 
most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. 
Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. 
od početka merenja) most počinje da se podiže. Ukoliko takmičar  
pre podizanja mosta kroči na most, zadržaće ga svojom težinom i 
most se neće podići tj. takmičar će moći nesmetano da pređe most. 
Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i 
prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje
spušten. Takmičari za čekanje kod mosta dobijaju negativne poene,
pa je tim rešio da napravi program koji će im tačno odrediti u 
kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali
negativne poene. Pomozite timu da napravi funkciju na osnovu
prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi
nakon početka merenja vremena treba da pođe, kako bi prošli 
poligon bez zaustavljanja.
npr: t=15, p=20, n=25, čekanje je 0s
npr: t=15, p=10, n=12, čekanje je 7s*/

function igreBezGranica (t, p, n) {
    if (t < p || t> p + n) {
        console.log(`Cekanje je 0s.`)
    }
    else {
        let cekanje = p + n - t;
        console.log(`Takmicar je potrebno da saceka ${cekanje}s.`)
    }
}
igreBezGranica(15, 20, 25);
igreBezGranica (15, 10, 12);
