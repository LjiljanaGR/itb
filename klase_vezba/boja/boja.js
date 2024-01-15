//Kreirati klasu Boja koja ima talasnu dužinu u nm, zasićenje i intenzitet.
//Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
class Boja {
    constructor(talasnaDuzina, zasicenje, intenzitet) {
        this.talasnaDuzina = talasnaDuzina; 
        this.zasicenje = zasicenje;
        this.intenzitet = intenzitet;
    }

    //Napraviti odgovarajuće getere i setere.
    // seter se neće automatski pozvati kada se kreira objekat sa vrednostima koje nisu u skladu s postavljenim uslovima,
    
    set talasnaDuzina(nm) {

        if(nm >=450 && nm <= 700) {
            this._talasnaDuzina = nm;
        }
        else {
            this._talasnaDuzina = "Talasna duzina za boji ne postoji";
            //throw new Error("Vrednost ne postoji");
            //seter ce javiti gresku
        }
    }
    set zasicenje(z) {
        if(z >= 0 && z <= 1) {
            this._zasicenje = z;
        }
        else {
            this._zasicenje = "vrednost zasicenja ne postoji";
              //throw new Error("Vrednost  ne postoji"); 
              //seter ce javiti gresku
        }
        
    }
    set intenzitet(i) {
        if(i >= 0 && i <= 1) {
            this._intenzitet = i;
        }
        else {
            this._intenzitet = "vrednost intenziteta ne postoji";
            //throw new Error("Vrednost  ne postoji");
            //seter ce javiti gresku

        }  
    }
    get talasnaDuzina() {
        return this._talasnaDuzina;
    }
    get zasicenje() {
        return this._zasicenje;
    }
    get intenzitet() {
        return this._intenzitet;
    }

    stampaj() {
        console.log(` ${this.talasnaDuzina}, Visina: ${this.zasicenje} , Tezina: ${this.intenzitet}`);
    }
}

//Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true ukoliko su te dve boje iste, u suprotnom vraća false.

let boja1 = new Boja(500, 0.5, 0.5);
let boja2 = new Boja(460, 0.5, 0.5);

let boje = [boja1, boja2];

function ispitajSlicnost(b1, b2) {
    if(b1.talasnaDuzina == b2.talasnaDuzina) {
        return true;
    }
    else if(b1.zasicenje == b2.talasnaDuzina) {
        return true;
    }
    else if (b1. intenzitet == b2.talasnaDuzina) {
        return true;
    }
    else {
        return false;
    }
}

console.log(ispitajSlicnost(boja1, boja2));


console.log(boja1.intenzitet);//pozivanje setera


//Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost srednje talasne dužine.

let srednjaTalasnaDuzina = niz => {
    let ukupno = 0;
    let srednja = 0;
    let brDuzina =0;

    niz.forEach(element => {
        ukupno += element.talasnaDuzina;
        brDuzina++
    });

    return srednja = ukupno / brDuzina; 
} 
console.log(srednjaTalasnaDuzina(boje));

//testiranje setera

console.log("Talasna duzina boje 1 je", boja1.talasnaDuzina);
boja1.talasnaDuzina = 400;
console.log("Nova talasna duzina boje 1 je", boja1.talasnaDuzina);

console.log("Zasicenje boje br. 1 je:", boja1.zasicenje);
boja1.zasicenje = 1;
console.log("Novo zasicenje boje broj1. je:", boja1.zasicenje);


//testiranje metoda
boja1.stampaj();













