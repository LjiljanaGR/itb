//Kreirati klasu Datum koja sadrži tri atributa - dan, mesec i godina.
//Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.

class Datum {
    constructor(dan, mesec, godina) {
        this.dan = dan;
        this.mesec = mesec;
        this.godina = godina;
    }
//Napraviti odgovarajuće getere i setere.
    set dan(d) {
        this._dan = d;
    }

    set mesec(m) {
        this._mesec = m;
    }
   
    set godina(g) {
        this._godina = g;
    }
    get dan() {
        return this._dan;
    }
    get mesec() {
        return this._mesec;
    }
    get godina() {
        return this._godina;
    }
}


//Napraviti funkciju ranijiDatum koja za dva prosleđena datuma ispisuje raniji od ta dva datuma. Ukoliko su datumi jednaki onda na ekranu ispisati “Datumi su jednaki”.
 let datum1 = new Datum(20, 4, 2020);
 let datum2 = new Datum(16, 4, 2020);


function ranijiDatum(d1, d2) {

    if (d1.godina == d2.godina && d1.mesec == d2.mesec && d1.dan == d2.dan) {
        return `Datumi su jednaki!`;
    }
    else if (d1.godina == d2.godina && d1.mesec > d2.mesec) {
        return `Drugi datum je raniji`;
    }
    else if (d1.godina == d2.godina && d1.mesec < d2.mesec) {
        return `Prvi datum je raniji!`;
    }
    else if (d1.godina == d2.godina && d1.mesec == d2.mesec && d1.dan > d2.dan) {
        return `Drugi datum je raniji`;
    }
    else if(d1.godina == d2.godina && d1.mesec == d2.mesec && d1.dan < d2.dan) {
        return `Prvi datum j eraniji!`
    }

    else if (d1.godina > d2.godina) {
        return `Drugi datum je raniji`;
    }
    else  {
        return `prvi datum datum je raniji`;
    }
}
console.log(ranijiDatum(datum1, datum2));


//jednostavniji i optimalniji kod
/*
function ranijiDatum(d1, d2) {
    if (d1.godina !== d2.godina) {
        return d1.godina < d2.godina ? `Prvi datum je raniji!` : `Drugi datum je raniji`;
    } else if (d1.mesec !== d2.mesec) {
        return d1.mesec < d2.mesec ? `Prvi datum je raniji!` : `Drugi datum je raniji`;
    } else if (d1.dan !== d2.dan) {
        return d1.dan < d2.dan ? `Prvi datum je raniji!` : `Drugi datum je raniji`;
    } else {
        return `Datumi su jednaki!`;
    }
}
console.log(ranijiDatum(datum1, datum2));
*/