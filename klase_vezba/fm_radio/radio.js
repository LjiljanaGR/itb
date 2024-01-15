//Kreirati klasu FMRadio koja sadrži atribute - stanica, frekvencija i jačina tona.
class FMRadio {
    constructor(st, fr, j) {
        this.st = st; 
        this.fr = fr;
        this.j = j;
    }

//Klasa treba da sedrži odgovarajući konstruktor, getere i setere koji zadovoljavaju uslov da se frekvencija nalazi u opsegu 
//od 87.5MHz do 108MHz. Jačina zvuka treba da se nalazi u opsegu od 0 do 20.
    set st(st) {
        this._st = st;
    }
    set fr(fr) {
        if(fr >= 87.5 && fr <= 108) {
            return this._fr = fr;
        }
        else {
            return this._fr = `Frekvencija ne postoji!`
        }
    }
    set j(j) {
        if(j >= 0 && j <= 20) {
            this._j = j;
        }
        else {
            this._j = `Jacina zvuka ne postoji!`
        }
        
    }
    get st() {
        return this._st;
    }
    get fr() {
        return this._fr;
    }
    get j() {
        return this._j;
    }

/*Napraviti metodu promeniZvuk kojoj se prosleđuje simbol plus ili minus i koja  po pozivu jačinu zvuka menja isključivo za 1 stupanj. 
Ukoliko je prosleđen simbol + povećati jačinu zvuka za 1, u suprotnom smanjiti jačinu zvuka za 1. Voditi računa o tome da jačina zvuka ne 
sme biti manja od 0 i veća od 20 (Ova metoda ništa ne vraća, samo promeni vrednost zvuka). */

    promeniZvuk(simbol) {

        if(simbol === '+' && this.j <= 19) {
            this._j += 1;
        }
        else if (simbol == '-' && this.j >= 0) {
            this._j -= 1;
        }
    }
//Napraviti metodu frekvencijaIskljuci koja vrednost funkcije postavlja na najmanju moguću frekvenciju 
//(na 87.5MHz). (I ova metoda takođe ništa ne vraća, samo postavi vrednost frekvencije)

    frekvencijaIskljuci() {
        this._fr = 87.5; 
    }

}
//Napisati funkciju srednjaFrekvencija kojoj se prosleđuje niz radio stanica, a ona vraća koja je prosečna frekvencija prosleđenih radio stanica.

let radio1 = new FMRadio("Radio" , 90, 20);
let radio2 = new FMRadio("Radio1", 95.5, 10);

let radio = [radio1, radio2];

let srednjaFrekvencija = niz => {
    let brStanica = 0;
    let ukupnoFr = 0;
    let prosecnaFR = 0;

    niz.forEach(element => {
        ukupnoFr += element.fr;
        brStanica++
    });
    return prosecnaFR = ukupnoFr / brStanica;
}

console.log(srednjaFrekvencija(radio));

//Napisati funkciju najbliziMaks kojoj se prosleđuje niz radio stanica, a funkcija vraća onu radio stanicu čija je 
//frekvencija najbliža maksimalnoj frekvenciji.

let najbliziMaks = niz => {
    let maxNiz = niz[0];
    let maksVrednost = maxNiz.fr;
    

    niz.forEach(element => {
        if(element.fr > maksVrednost){
            maksVrednost = element.fr;
            maxNiz = element;
            
        }
    });
    return maxNiz;
}
console.log(najbliziMaks(radio));


//testiranje seteraa:
radio1.fr = 500;
console.log("Nova FM", radio1.fr);


radio1.j = 1;
console.log("Nova jacina  je:" , radio1.j);


//Testirati rad napravljenih metoda.

console.log("Trenutna jačina", radio1.j); 

radio1.promeniZvuk('+'); //pozivanje metode
console.log("Nakon povećanja:", radio1.j);  //ispisivanje rezultata

radio1.promeniZvuk('-');
console.log("Nakon smanjenja:", radio1.j); 

radio1.frekvencijaIskljuci();
console.log("Nakon isključivanja:", radio1.fr);