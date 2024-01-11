
let student1 = {
    ime: "Marko",
    prezime: "Markovic",
    godinaStudija: 3,
    ocene: [8, 9, 7, 10]
  };
  
  let student2 = {
    ime: "Pera",
    prezime: "Peric",
    godinaStudija: 2,
    ocene: [9, 8, 10, 7]
  };
  
  let student3 = {
    ime: "Mika",
    prezime: "Mikic",
    godinaStudija: 4,
    ocene: [10, 9, 8, 9]
  };
  
  let student4 = {
    ime: "Zora",
    prezime: "Zoric",
    godinaStudija: 1,
    ocene: [7, 8, 6, 9]
  };
  
  let studenti = [student1, student2, student3, student4];

/*1. Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, 
a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo*/

let funkcija1 = (niz, string) => {

    niz.forEach(element => {
        if(element.ime.includes(string) || element.prezime.includes(string) ) {
            console.log(`${element.ime}`);
        }
    });

};

funkcija1(studenti, "M");

/*2. Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena 
i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.*/

let funkcija2 = (niz, string1, string2) => {
    niz.forEach(element => {
        if(element.ime.includes(string1) && element.ime.includes(string2)) {
            console.log(`${element.ime} , ${element.prezime}`);
        }
    });
}
funkcija2(studenti, "M", "M");

/*3. Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji
 predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.*/

 let funkcija3 = (niz, broj1) => {
    let brStudenata = 0; 

    niz.forEach(element => {
        if(element.godinaStudija === broj1) {
            brStudenata++;
        }
    })
    return brStudenata;
 }
 
 console.log(funkcija3(studenti, 1));

 /*4. Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime
studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati
ime i prezime bilo kog takvog studenta. */

let funkcija4 = (niz) => {
    let suma = 0;
    let br = 0; 
    let prosek = 0;

        niz.forEach(student => {
            let ocene = student.ocene;

            student.ocene.forEach(ocena => {
                suma += ocena;
                br++;
            })

            prosek = suma/br;
            console.log(prosek);
        });

        niz.forEach(element => {
            let noveOcene = element.ocene;
            if (prosek > element.ocene) {
                console.log(`nesto`);
            }
            else {
                console.log(`${element.prezime}`);
            }

        })

//console.log();

}
funkcija4(studenti);