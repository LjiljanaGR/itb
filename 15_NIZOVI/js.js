let cars = ["Toyota", "BMW", "Volvo"];
console.log(cars);

let razno = [15, -3.5, "Hello", false, [1, 2, 3]];//vrednost elementa niza
console.log(razno);
console.log(razno[0]);

let niz = [];
niz[1] = "Pera";
niz[4] = "Ivana";
console.log(niz[3]);
console.log(niz[4]);
//niz[] = "Lenka" ne mora redom da se dodeljuju indeksi, ali indeks mora biti dodeljen
niz[1] = "Zika";
console.log(niz);

for (let i = 1; i <  cars.length; i++) {
    console.log(cars[i]);
}

for (let i = 0; i < razno.length; i++) {
    console.log(razno[i]);
}

let unutrasnjiNiz = razno[4];
for(let i = 0; i < unutrasnjiNiz.length; i++) {
    console.log(unutrasnjiNiz[i]);
}

//ili

for(let i = 0; i < razno[4].length; i++) {
    console.log(razno[4][i]);
}

let brojevi = [4, 3.5, 8, 10];
//Uvecati vrednosti svig=h elemenata nisa za 10%;
for(let i =0; i < brojevi.length; i++) {
    brojevi[i] *=1.1;
}

for(let i = 0; i < brojevi.length; i++) {
    console.log(brojevi[i]);
}