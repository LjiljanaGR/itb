// 1.Ispisati brojeve od 1 do 20 
 
//Pomocu WHILE petlje
let i = 1;
while (i <= 20) {
    console.log(`Broj ${i}`);
    i++; // i += 1; i = i + 1; 
}

//Pomocu FOR petlje
for (let j = 1; j <= 20; j++) {
    console.log(`ovo je broj ${j}`);
}

//2. Ispisati brojeve od 20 do 1 

for (let k = 20; k >= 1; k--) {
    console.log(`Ovo je broj ${k}`);
}



//5. Odrediti sumu brojeva od 1 do n
let suma = 0;
let n = 5;

for(let p = 1; p <= n; p++) {
    suma += 5;// suma = suma + p;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

//Ispisati parne brojeve od 1 do 20 

for (b = 1; b <= 20; b++) {
  if (b % 2 == 0) {
    console.log(b);
  }
}


let proizvod = 1;

for (b = 1; b <= 5; b++) {
    proizvod *= b;
    
 }
 console.log(`${proizvod}`);

let proizvoD = 1;
let c = 5;

let e = 1;

while (e <= c) {
    proizvoD *= e;
    e++;
}
console.log(`${proizvoD}`);