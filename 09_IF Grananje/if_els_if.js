/*Radno vreme jedne programerske firme je od 9h do 17h. 
Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.*/ 

let datum = new Date ();
let sati = datum.getHours();

if(sati < 9) {
console.log('ne radi');
} else if (sati >=17) {
console.log("firma trenutno ne radi ")
}
else {
console.log("firma radi")
}

/*Preuzeti sa računara koji je dan u nedelji i ispitati da li je to radni dan 
ili je u pitanju vikend. */

let datum1 = new Date ();
let dan = datum1.getDay()

//let dan = "monday";

if (dan == "saturday") {
 console.log("Da!");
}
else if (dan == "sunday") {
console.log("da");
}
else {
    console.log("ne");
}

/*Za vreme preuzeto sa računara ispisati 
dobro jutro za vreme manje od 12 sati ujutru, 
dobar dan za vreme manje od 18 sati,
u ostalim slučajevima ispisati dobro veče.
*/

/*let datum1 = new Date();
let dan = datum1.getDay();
if(dan == 0) {
  console.log(`Vikend je.`);
}
else if(dan == 6) {
  console.log(`Vikend je.`);
}
else {
  console.log(`Radni dan je.`);
}
*/ 

let datum2 = new Date ();
let sati1 = datum2.getHours();

//let sat = 13;

if(sati1 < 12) {
console.log("Dobro jutro");
}
else if (sati1 < 18) {
    console.log("Dobro dan");
}
else {
    console.log("ostalo"); 
}