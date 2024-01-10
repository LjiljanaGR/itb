////////////////////////////////////////////////////////////////////
// O B J E K T I
/////////////////////////////////////////////////////////////////////

/*1. Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).
Napisati metode koje:
*/

let dan = {
    datum: "2023/8/26",
    kisa: true,
    sunce: true,
    oblacno: true,
    temperatura: [5, 8, 15, 19],

/* 1. Određuje i vraća prosečnu temperaturu izmerenu tog dana.*/
//====================================================================

    prosecna: function () {
        let suma = 0;
        let brMerenja = this.temperatura.length;
        let prosek = 0;
        
        this.temperatura.forEach(t => {
            suma += t;

        });
        prosek = suma / brMerenja;
        return prosek;
    },

/* 2. Prebrojava i vraća koliko merenja je bilo sa natprosečnom 
temperaturom.*/
//====================================================================

    natprosecna: function() {
        let natrposecnih = 0;
        let prosecna = this.prosecna();

        this.temperatura.forEach(t => {
            if( prosecna > t) {
                natrposecnih++;
            }
        });
        return natrposecnih;
    },

/* 3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.*/
 //====================================================================

    maksimalna: function() {
        let maks = this.temperatura[0];
        

        this.temperatura.forEach(t => {
            if(t > maks) {
                maks = t;
                
            }
        });
        return maks; 

    },

    kolikoMaksimalnih: function() {
    let maksimalna = this.maksimalna();
    let brTemp = 0;

        this.temperatura.forEach(t => {
            if(t == maksimalna) {
                brTemp++;
            }
      });
      return brTemp;  
    },
    
/* 4. Prima dva parametra koji predstavljaju dve temperature.
Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost
između ove dve zadate temperature (ne uključujući te dve vrednosti).*/
//====================================================================

    izmedjuDva: function(t1, t2) {
        
        let brMerenja = 0;

        this.temperatura.forEach(t => {
            if(t > t1 && t < t2) {
                brMerenja++;
            }
        });
        return brMerenja;
    },

/* 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. 
U suprotnom vraća false.*/
//====================================================================

vecinaDana: function() {
    let prosek = this.kolikoMaksimalnih();

    if(this.temperatura.length/2 > prosek) {
        return true;
    }
    else {
        return false; 
    }
},

/* 6. Za dan se smatra da je leden ukoliko nijedna temperatura 
izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true 
ukoliko je dan bio leden, u suprotnom metod vraća false.*/
//====================================================================

leden: function() {
    let led = true;

    this.temperatura.forEach(t => {
      if(t > 0) {
        led = false;
      }
    });
    return led;
},

/* 7. Za dan se smatra da je tropski ukoliko nijedna temperatura 
izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true 
ukoliko je dan bio tropski, u suprotnom vraća false.*/
//====================================================================

tropski: function() {

    let trop = true;
    
    this.temperatura.forEach(t => {
        if(t < 24) {
            trop = false;
        }
    });
    return trop;
},

/* 8. Dan je nepovoljan ako je razlika između neka dva uzastopna 
merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio 
nepovoljan, u suprotnom vraća false.*/
//====================================================================

nepovoljan: function() {
    for(let i = 0; i < this.temperatura.length - 1; i++) {
        if(Math.abs (this.temperatura[i] - this.temperatura[i+1]) > 8) {
            return true;
        }
    }
    return false;
},

/* 9. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni,
 ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i
  sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom 
  vraća false.*/
//====================================================================

neuobicajen: function() {
    let neo = false;

    this.temperatura.forEach(t => {
        if(this.kisa === true && t < -5 || this.oblacno == true && t > 25 || this.kisa === true && this.oblacno == true && this.sunce == true) {
            neo = true;
        }
        else {
            neo = false;
        }
        
    });
    return neo;
}

};

//1. 
console.log(`Prosecna temperatuda ${dan.datum} je bila ${dan.prosecna()}`);
//2
console.log(`Na dan ${dan.datum} je bilo ukupno ${dan.natprosecna()} nadprosecnih temperatura`);
//3.
console.log(`Maksimalna temperatura je ${dan.maksimalna()}`);
console.log(`Merenja sa maksimalnom temperaturom je bilo ${dan.kolikoMaksimalnih()}`);
//4.
console.log(`Bilo je ${dan.izmedjuDva(1,4)} merenja`);
//5.
console.log(`Bilo je ${dan.vecinaDana()} merenja`);
//6.
console.log(`Dan je bio ${dan.leden()}`);
//7. 
console.log(`Dan je bio tropski: ${dan.tropski()}`);
//8. 
console.log(`Uzastopna merenja: ${dan.nepovoljan()}`);
//9. 
console.log(`dan je bio neuobicajen ${dan.neuobicajen()}`);











