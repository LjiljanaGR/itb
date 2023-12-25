let student = {
    ime: "Marko",
    prezime: "markovic",
    godinaStudija: 4,
    ocene: [6, 10, 7, 10, 10, 6, 10, 10, 10, 10],

    //a) metoda
    /*Napisati metodu koja vraća true ukoliko je student prosečan, 
    u suprotnm vraća false. Student je prosečan ako nema nijednu 
    šesticu i nijednu desetku. */
    
    prosecanNeprosecan: function () {
        let prosecan = true;

        this.ocene.forEach(element => {
            if(element === 6 || element === 10) {
                prosecan = false;
            }
        });
        return prosecan;
    },

    //b) metoda
    /*Napisati metodu koja vraća true ukoliko je student ekstra, 
    u suprotnm vraća false. Student je “ekstra” ako je polagao
    ispite samo sa devetkama i desetkama, i pri tome je broj desetki 
    barem duplo veći od broja devetki.  */

    extraStudent: function() {
       let brDevetki = 0;
       let brDeseti = 0;
       //let ukupno = true;
       
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 8) {
                //ostaleOcene++;
                return false;
            }
            else if(this.ocene[i] == 9) {
                brDevetki++;
            }
            else if (this.ocene[i] == 10) {
                brDeseti++;
            }
                
        }
         return (brDeseti / 2 >= brDevetki) ? true : false;
    },

    //c) metoda
    /*Napisati metodu koja vraća true ukoliko student kida, 
    u suprotnm vraća false. Student “kida” ako je polagao ispite 
    samo sa devetkama i desetkama, a broj devetki je manji od 
    godine studije na kojoj se student nalazi.  */

    studentKida: function() {
      let brojDevetki = 0;
      
      for(let i = 0; i < this.ocene.length; i++) {
        if(this.ocene[i] === 9) {
            brojDevetki++;
        }
        if(this.ocene[i] <= 8) {
            return false;
        }
      }
      return (brojDevetki <= this.godinaStudija) ? true : false;
    },

    //d) metoda
    /*Napisati metodu koja vraća true ukoliko student razbija, 
    u suprotnm vraća false.  Student “razbija” ako je sve ispite
    položio sa ocenom deset. Pri tome, broj desetki ne sme biti 
    manji od broja 5 * (godina_studija - 1). (Dakle, ne može student
    na trećoj godini da razbija ako je položio jedan ispit, 
    kao što nijedan student prve godine još ne može da razbija,
    jer još nije položio sve ispite iz tekuće godine).*/

    razbija: function() {
       let brDesetki = 0;

       for(let i = 0; i < this.ocene.length; i++) {
        if (this.ocene[i] < 10) {
            return false;
        }
        else if(this.ocene[i] === 10) {
            brDesetki++;
        }
       }
       return (brDesetki > this.godinaStudija) ? true : false;

    },

    //e) metoda
    /*Napisati metodu koja vraća true ukoliko je student aljkav, 
    u suprotnm vraća false.  Student je “aljkav” ako nijedan ispit
    nije položio sa ocenom većom od 7.*/

    aljkav: function() {
        let studentJe = true;

        this.ocene.forEach(element => {
            if(element >= 7) {
                studentJe = false; 
            }
        });
        return studentJe;
    }, 

    //f) metoda
    /*Napisati metodu koja vraća true ukoliko se student bruka,
    u suprotnm vraća false. Student se “bruka” ako nije student 
    prve godine, a broj položenih ispita je manji od broja 3 * 
    (godina_studija - 1), i pri tome nijedna ocena nije veća od 7.*/

    bruka: function() {
        let studentBruka = true;
        let brIspita = this.ocene.length;

        for(let i = 0; i <this.ocene.length; i++) {
            if(this.godinaStudija === 1) {
                studentBruka = false;
                break;
            }
            else if(this.ocene[i] > 7) {
                studentBruka = false;   
                break;
            }
        }
        return (brIspita < this.godinaStudija) ? true : false;
    },

    //g) metoda
    /*Napisati metodu koja vraća true ukoliko je student kolekcionar, 
    u suprotnm vraća false. Student je kolekcionar ocena, ukoliko ima 
    svaku od ocena bar jednom upisanu (bar jednu šesticu, sedmicu, osmicu,
    devetku i desetku).*/

    kolekcionar: function() {
        let sestice = 0;
        let sedmice = 0;
        let osmice = 0;
        let devetke = 0;
        let desetke = 0; 
        

        for(let i = 0; i <this.ocene.length; i++) {
            
            if(this.ocene[i] === 6) {
                sestice++;
            }
            else if(this.ocene[i] === 7) {
                sedmice++;
            }
            else if(this.ocene[i] === 8) {
                osmice++;
            }
            else if(this.ocene[i] === 9) {
                devetke++;
            }
            else if(this.ocene[i] === 10) {
                desetke++;
            }
        }
       return (sestice >= 1 && sedmice >= 1 && osmice >= 1 && devetke >= 1 && desetke >= 1) ? true : false;
    },

    //h) metoda
    /*Napisati metodu koja vraća true ukoliko je student skoro pa savršen,
    u suprotnm vraća false. Student je skoro pa savršen, ukoliko ima više 
    od 90% desetki među svojim ocenama i pri tome ima više od 8 ocena.*/

    savrsen: function() {
        
        let ostali = 0;
        let desetke = 0; 
        //let jeSavrsen = true;
        

        for(let i = 0; i < this.ocene.length; i++) { 
            if(this.ocene.length < 8) {
                return false;
            }
            else if(this.ocene[i] === 10) {
                desetke++;
            }
            else if(this.ocene[i] < 10) {
                ostali++;
            }
        }
        return (desetke >= this.ocene.length * 0.9) ? true : false;
    },

    //i) metoda
    /*Napisati metodu koja vraća true ukoliko student napreduje,  
    u suprotnom vraća false. Student napreduje ukoliko mu je prosek prve
    polovine ocena niži od proseka druge polovine ocena. Ukoliko student 
    ima neparan broj ocena, računajte da je manje ocena u prvoj polovini 
    niza.*/

    napreduje: function() {

        let prvaPolovina = this.ocene.slice(0, this.ocene.length/2);
        let sumaPrva = 0;
        let prosekPrvi = 0;
        let drugaPolovina = this.ocene - prvaPolovina;

        for(let i =0; i < this.ocene.length; i++) {}
            
        
},
}


console.log(` Student je prosecan? ${student.prosecanNeprosecan()}`);
console.log(` Student je ekstra? ${student.extraStudent()}`);
console.log(`Student kida? ${student.studentKida()}`);
console.log(`Student razbija? ${student.razbija()}`);
console.log(`Student je aljkav? ${student.aljkav()}`);
console.log(`Student se bruka? ${student.bruka()}`);
console.log(`Student je kolekcionar? ${student.kolekcionar()}`);
console.log(`Student je savrsen? ${student.savrsen()}`);
console.log(`Student napreduje? ${student.napreduje()}`)