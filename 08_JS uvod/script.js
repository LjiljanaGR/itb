document.getElementById("d1").innerHTML = "Ja se zovem Ljiljana Grab Radic";

console.log("Zdravo!");
console.log("pera");
console.log("Mika");

//LITERALI:

//1. brojevi:
console.log(5);
console.log(-5.185);
console.log(3+4);
console.log("3" + "4"); //Konkatenacija(spajanje stringova)
console.log("3 + 4");
console.log('3 + 4 =', 3 + 4);
console.log('3 + 4 = ' +  (3 + 4 ));

//2. Stringovi
console.log("It`s alright!");

//3. logicke vrednosti
console.log(true);
console.log(false);


//PROMENLJIVE
let x; // 1. deklaracija promenljive(uvodjenje promenljive u program)

x = 5; 
console.log(x);

x = "Laza";
console.log(x);

let y = true // 2. definicija promenjive (deklaracija + dodela vrednosti)
console.log(y);

const z = -7.6;
// z = 6; // ne moze! 
console.log(z);

let age;
console.log(age, age + 3); // undefined, NuN -(not a number)

age = null;
console.log(age, age + 3); //null, 3


//Aritmetika

let broj = 3 + 4 * 2; //11
console.log(broj);

broj = (3 + 4) * 2; //14
console.log(broj);

//broj += 6;
//console.log (broj);

broj = broj + 6; //14 + 6 = 20
console.log(broj);

broj *=5; //broj = broj * 5 = 100
console.log(broj);

x = 6;
x++;
console.log(x); //7

++x;
console.log(x); //8

x = 6;
console.log(x++);// 6 post-increment (prvo se iskoristiti stara vrednost pom x, pa se onda uveca)
console.log(x);//7
console.log(++x);// 8pre-increment (prvo se uveca vrednost promenljive x, pa se onda koristi)


// Beba ima 28 meseci
//28/12 i trazimo kolicnik i ostatak. Kolicnik kaze koliko je godina, a ostatak koliko ostatak
//console.log(28 / 12);
//Kolicnik
console.log(Math.floor(28 / 12));//2
//Ostatak: 
console.log(28 % 12); //4
//28 = 2 * 12 + 4
//     (k)      (o)    

console.log(7 % 3); //1
console.log(24 % 18); //6

x = 5;
y = 3;
console.log(x ** y); // 5 * 5 * 5 = 125