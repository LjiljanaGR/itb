class Film {
   
    constructor(n, r, g, o) {
        this.naslov = n,
        this.reziser = r;
        this.godinaIZdanja = g;
        this.ocene = o; 
        
        // kada ima donju crtu, postavlja pdoatak direktno u polje, 
    } //a kada nema donju crtu, prvo se podaci salju u seter, a onda u konstruktor


    //SETERI ILI SET METODE ZA POSTAVLJANJE PODATAKA.Pozeljno je imati za svako polje podataka
    set naslov(n) {
        this._naslov = n;
    }

    set reziser (r) {
        this._reziser = r;
    }

    set godinaIzdanja(gi) {
        if(gi < 1800) {
            this._godinaIZdanja = 1800;
        }
        else {
            this._godinaIZdanja = gi;
        }
    }
    set ocene(o) {
        for(let i = 0; i < o.length; i++) {
            if(o[i] < 5 || o[i] > 10 || o[i]!=Math.ceil(o[i])) {
                o[i] = 5;
            }
        }
        this._ocene = o;
    }

    //GETERI pozeljno bi bilo da imamo geter za svako polje. oni vracaju vrednost polja
    get naslov() {
        return this._naslov;
    }

    get reziser() {
        return this._reziser;
    }

    get godinaIzdanja() {
        return this._godinaIZdanja;
    }
    get ocene() {

        return this._ocene;
    }
    stampaj() {
        console.log(`Naslov: ${this.naslov}`);//ovo poziva geter za naslov
    }
    prosecna() {
        let suma = 0;
        this.ocene.forEach(element => {
            suma += element;
        });
        return suma/this.ocene.length;
    }
}

export default Film;

/*
let film1 = new Film("Cuvari formule" , "Dragan Belogrlic" , 2023); //objekat/primjerak klase film
let film2 = new Film("Klopka" , "Srdjan Golubovic" , 2007);
console.log(film1);
console.log(film2);
film1.stampaj();
film1.godinaIZdanja = 2024;//ovo poziva seter
console.log(film1);
console.log(`Film: ${film2.naslov}, Godina izdanja: ${film2.godinaIZdanja}`);*/