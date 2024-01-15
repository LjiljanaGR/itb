//Kreirati kalsu Autobus koja ima podatke o registarskom broju autobusa i o broju sedišta u autobusu.
//Napraviti konstruktor kome se prosleđujeu odgovarajuće vrednosti.
class Autobus {
    constructor(rbr, brs) {
        this.rbr = rbr;
        this.brs = brs; 
    }

//Napraviti odgovarajuće getere i setere.

    set rbr(rbr) {
        this._rbr = rbr;
    }
    set brs(brs) {
        this._brs = brs;
    }

    get rbr() {
        return this._rbr;
    }
    get brs() {
        return this._brs;
    }

    //Napraviti metodu koja ispisuje podatke o autobusu.
    stampaj() {
        console.log(`Br.registracije: ${this.rbr} , broj sedista: ${this.brs}`);
    }
}

//Napraviti niz autobusa.

let a1 = new Autobus(23564, 56);
let a2 = new Autobus(58974, 100);
let a3 = new Autobus(58984, 101);

let autobusi = [a1, a2, a3];
//Napraviti funkciju ukupnoSedista kojoj se prosleđuje niz autobusa a koja određuje i vraća koliko ukupno 
//sedišta sadrže svi autobusi koji se nalaze u nizu autobusa.

let ukupnoSedista = niz => {
    let ukupno = 0;

    niz.forEach(element => {
        ukupno += element.brs;        
    });
    return ukupno;
}

console.log(ukupnoSedista(autobusi));

//Napraviti funkciju maksSedista koja ispisuje podatke o autobusu koji ima najveći broj sedišta.

let maksSedista = niz => {
    let sedistaNiz = niz[0];
    let maksBrSedista = sedistaNiz.brs;

    niz.forEach(element => {
        if(maksBrSedista < element.brs) {
            maksBrSedista = element.brs;
            sedistaNiz = element;
        }
    });
    //return maksBrSedista;
    return sedistaNiz;
}

console.log(maksSedista(autobusi));

//Napraviti funkciju ljudi kojoj se prosleđuje broj ljudi i niz autobusa a funkcija vraća 
//true ukoliko je moguće toliko ljudi smestiti u autobuse, u suprotnom vraća false.

function ljudiUbusu (brLjudi, niz) {
    let brSedista = ukupnoSedista(niz);
    
    if(brSedista >= brLjudi) {
        return true
    } 
   
    
    else {
        return false;
    }
    
}

console.log(ljudiUbusu(2225, autobusi));


//testiranje metode
a1.stampaj();
a2.stampaj();

//testiranje funkcija
console.log("Autobus koji ima najvise sedista je:", maksSedista(autobusi));
console.log("Da li je moguce smestiti toliko ljudi:", ljudiUbusu(225, autobusi));