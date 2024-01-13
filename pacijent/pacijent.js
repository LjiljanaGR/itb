class Pacijent {
    
    constructor(ime, visina, tezina) {
        this.ime = ime;
        this.visina = visina;
        this.tezina = tezina; 
    }

    //SETERI
    set ime(i) {
        this._ime = i;
    }

    //seterima proveri da li je visina između 0 i 250,
    set visina(v) {
        
        if(v >= 0 && v <= 250) {
            this._visina = v;
        }
        else {
            this._visina = 100;
        }

    }

    //težina između 0 i 550.
    set tezina(t) {
        
        if(t >= 0 && t <= 550) {
            this._tezina = t;
        }
        else {
            this.tezina = 50;
        }
    }

    //GETERI
    get ime() {
        return this._ime
    }
    get visina() {
        return this._visina;
    }
    get tezina() {
        return this._tezina;
    }

    stampaj() {
        console.log(`Ime: ${this.ime}, Visina: ${this.visina} , Tezina: ${this.tezina}`);
    }

    bmi() {
        let vrednost = this._tezina / (this._visina / 100) ** 2;
        console.log(`${vrednost}`);
        return vrednost;
    }

    kritican() {
        if(this.bmi() < 15 || this.bmi() > 40) {
            return true;
        }
        return false;

} 
}

export default Pacijent;