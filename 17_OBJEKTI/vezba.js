let student = {
    ime: "Marko",
    prezime: "markovic",
    godinaStudija: 4,
    ocene: [10, 10, 6, 10, 10],

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

}
console.log(` Student je prosecan? ${student.prosecanNeprosecan()}`);
console.log(` Student je ekstra? ${student.extraStudent()}`);
console.log(`Student kida? ${student.studentKida()}`);
console.log(`Student razbija? ${student.razbija()}`);