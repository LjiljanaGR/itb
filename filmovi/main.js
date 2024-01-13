import Film from "./film.js"

let film1 = new Film("Cuvari formule" , "Dragan Belogrlic" , 2023); //objekat/primjerak klase film
let film2 = new Film("Klopka" , "Srdjan Golubovic" , 2007);
let film3 = new Film("Maratonci" , "Slobodan Sijan" , 1982);
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