import Film from "./film.js"

let film1 = new Film("Cuvari formule" , "Dragan Belogrlic" , 2023, [9, 10, 8, 8, 6, 10, 10,9]); //objekat/primjerak klase film
let film2 = new Film("Klopka" , "Srdjan Golubovic" , 2007, [9, 9, 9, 8, 7, 10, 10, 8, 6]);
let film3 = new Film("Maratonci" , "Slobodan Sijan" , 1982, [8, 9.1, -8, 18, 9]);
let filmovi = [film1, film2, film3];


film1.stampaj();
filmovi[2].stampaj;

console.log(`Ispis for petljim `);

for (let index = 0; index < filmovi.length; index++) {
    //const element = array[index];
    filmovi[index].stampaj();
    
}

console.log(`Ispis forEach petljim `);

filmovi.forEach(element => {
    element.stampaj();
});

console.log(film3);

console.log(`Prosecna ocena filma ${film1.naslov} je: ${film1.prosecna()}`);

//1801-1900 - 19.vek
//1901 -2000 - 20vek
//2001---- 21.vek
 
let vekFilmova = (filmovi, vek) => {
    filmovi.forEach(f => {
        // 1801/100 = 18.01 = Math.ceil 19
        // 1850 / 100 = 18.5 = Math.ceil 19
        // 1900 / 100 = 19 = Math.ceil 19
        let vekFilma = Math.ceil(f.godinaIzdanja / 100);
        if(vekFilma == vek) {
            f.stampaj();
        }
    });
}
vekFilmova(filmovi, 20);
vekFilmova(filmovi, 21);

let prosecnaOcena = niz => {
    let suma = 0;
    let br = 0; 

    niz.forEach(f => {
        f.ocene.forEach(o => {
            suma += o;
            br++;
        })
        
    });
    return suma / br;
}

console.log(`prosecna ocena svih filmova je: ${prosecnaOcena(filmovi)}`);

/*Napisati funkciju najcescaOcena kojoj se prosleđuje niz filmova, a
 ona vraća ocenu koju su filmovi najčešće dobijali (u opticaju su ocene 5, 6, 7, 8, 9 i 10).*/

let najcescaOcena = niz => {
    let br5 = 0;
    let br6 = 0;
    let br7 = 0;
    let br8 = 0;
    let br9 = 0;
    let br10 = 0;
    niz.forEach(el => {
        el.ocene.forEach(o => {

            switch(o) {
                case 5: 
                    br5++;
                    break;
                case 6: 
                    br6++;
                    break;
                case 7: 
                    br7++;
                    break;
                case 8: 
                    br8++;
                    break;
                case 9: 
                    br9++;
                    break;
                case 10: 
                    br10++;
                    break;
            }
        });
    });
    let nizOcena = [br5, br6, br7, br8, br9, br10];
    let maxElemet = nizOcena[0];
    let maxIndex = 0;

    for(let i = 0; i < nizOcena.length; i++) {
        if(maxElemet <= nizOcena[i]) {
            maxElemet = nizOcena[i];
            maxIndex = i;
        }
    }
    return maxIndex + 5;
}
console.log(filmovi);
console.log(`${najcescaOcena(filmovi)}`);

/*Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a 
ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene. */

let iznadOcena = (ocena, niz) => {
    let nizFilmova = [];
    
    niz.forEach(film => {
        let prosecnaOcena = film.prosecna();

        if(prosecnaOcena < ocena) {}
        nizFilmova.push(film);
    })
    return nizFilmova;
}

console.log(iznadOcena(8, filmovi));

/*Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz 
filmova a koja treba da na ekranu da ispiše sve podatke o najnovijem 
filmu koji zadovoljava prosleđenu ocenu. */
/*
let iznadOceneNoviji = (niz, nekaOcena) => {
    let iznadOCeneNiz = iznadOcene(niz, nekaOcena);
    let mladjiFilm = iznadOCeneNiz[0];
    niz.forEach(f => {
        if (f.godinaIzdanja > mladjiFilm.godinaIzdanja) {
            mladjiFilm = f;
        }
    });
    return mladjiFilm;
}
let ocenaZaProsledjivanje = 8;
console.log(iznadOceneNoviji(filmovi, ocenaZaProsledjivanje));
*/

let najboljeOcenjeniFilm = niz => {
    let najboljeOcenjeni = niz[0];
    let najboljaOcena = najboljeOcenjeni.prosecna();

    niz.forEach(film => {
        if(film.prosecna() > najboljaOcena)
        {
            najboljaOcena = film.prosecna();
            najboljeOcenjeni = film;
        }
    });
    return najboljeOcenjeni;
}

console.log(`Najbolje ocenjeni film je: ${najboljeOcenjeniFilm(filmovi).naslov}`); 
console.log(`Najbolje ocenjeni film je: ${najboljeOcenjeniFilm(filmovi)}`); //pokusava da ga vrati kao string 
console.log(najboljeOcenjeniFilm(filmovi));

let najmanjaOcenaNajboljeg = niz => {
    let najboljiFilm = najboljeOcenjeniFilm(niz);
    let najmanjaOcena = najboljiFilm.ocene[0];

    najboljiFilm.ocene.forEach(o => {
        if(o < najmanjaOcena) {
            najmanjaOcena = o;
        }
    });
    return najmanjaOcena;
}
console.log(`Najmanja ocena najbokje ocenjenog filma je: ${najmanjaOcenaNajboljeg(filmovi)}`);

/*Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova. */
let osrednjiFilm = niz => {
    let nekiFilm = niz[0]; // nekiFilm = film jer se trazi OBJEKAT vraca film
    let prosecnaOcenaSvihFilmova = prosecnaOcena(niz);
    let najmanjaProsecnaOcena = niz[0].prosecna();
    let najmanjaRazlika = Math.abs(prosecnaOcenaSvihFilmova - najmanjaProsecnaOcena);
    niz.forEach(film => {
        if(Math.abs(prosecnaOcenaSvihFilmova - film.prosecna()) < najmanjaRazlika) {
            nekiFilm = film;
            najmanjaRazlika = Math.abs(prosecnaOcenaSvihFilmova - film.prosecna());
        }
    })
    return nekiFilm
}
console.log(osrednjiFilm(filmovi));

/*Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a 
koja vraća koja je najmanja ocena koju je bilo koji film dobio.*/

let najmanjaOcena = niz => {
    let minNiz = niz[0];
    let minOcena = minNiz.prosecna();

    niz.forEach(film => {
        if (film.prosecna() < minOcena ) {
            minOcena = film.prosecna();
            minNiz = film;
        }
    });
    return minNiz;
}

console.log(najmanjaOcena(filmovi));

let najmanjaOcena2 = niz => {
    let najmanjaOcena = niz[0].ocene;

    niz.forEach(element => {
        if(element.ocene < najmanjaOcena) {
            najmanjaOcena = element.ocene;
        }
    });
    return najmanjaOcena;
}

console.log(najmanjaOcena2(filmovi));