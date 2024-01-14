//Kreirati klasu Radnik koja sadrži dva atributa - ime i plata ranika.
//Napraviti konstruktor kome se prosleđuju dve vrednosti koje treba postaviti.
class Radnik {
    constructor(ime, plata){
        this.ime = ime;
        this.plata = plata;
    }
//Napraviti odgovarajuće getere i setere.
    set ime(i) {
        this._ime = i;
    }
    set plata(p) {
        this._plata = p;
    }
    get ime() {
        return this._ime;
    }
    get plata() {
        return this._plata;
    }
    stampaj() {
        console.log(`${this.ime} , ${this.plata} `);
    }

}

let radnik1 = new Radnik("Pera" , 15000);
let radnik2 = new Radnik("Zika" , 60000);
let radnik3 = new Radnik("Mika" , 700000);

let radnici = [radnik1, radnik2, radnik3];

//Napraviti funkciju maksPlata kojoj se prosleđuje niz radnika, a ona vraća najveću platu ranika.

let maksPlata = niz => {
let najveca = niz[0];//cuva ceo objekat, inicijalizacija najvece plate sa prvim radnikom u nizu
let plataN = najveca.plata;//cuva samo vrednost plate te osobe

niz.forEach(radnik => {
    if(plataN < radnik.plata) { //Ako je trenutna plata radnika veća od trenutno najveće plate
        plataN = radnik.plata;//Postavljamo novu najveću platu
        najveca = radnik;//Čuvamo ceo objekat (radnika) sa najvećom platom
    }
});
return plataN; //vraca samo vrednost, zato ne moze da koristi metodu stampaj
}

console.log(maksPlata(radnici));

//Napraviti funkciju maksPlataOsoba kojoj se prosleđuje niz ranika, a ona ispisuje sve podatke za svakom od radnika sa maksimalnom platom.

let maksPlataOsoba = niz => {
    let radnikNP = [];
    let najvecaPlata = maksPlata(niz);

    niz.forEach(element => {
        if (element.plata === najvecaPlata) {
            radnikNP.push(element);
        }
    });

    return radnikNP;
}

console.log(maksPlataOsoba(radnici));

//Zbog toga što se dodaje ceo radnik (sa svim svojim svojstvima, uključujući i 
//stampaj metod) u niz radnikNP, kada se kasnije koristi forEach petlju da 
//prolazi kroz niz radnikNP, može se pristupiti svim metodama i svojstvima 
//tog radnika, uključujući i stampaj metodu.
//Dakle, zbir ovih koraka omogućava da se koristite stampaj metod na svakom elementu niza radnikNP


maksPlataOsoba(radnici).forEach(element => {
    element.stampaj();
});


