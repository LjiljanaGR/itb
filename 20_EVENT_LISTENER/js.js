//1. dohvatiti element na koji zelimo da postavimo osluskivac

let btnHello = document.getElementById('hello')

//2. postavimo osluskivac na element koji smo dohvatili 
btnHello.addEventListener("click", () => {
    console.log("Hello!");
});

btnHello.addEventListener("dblclick", () => {
    console.log("Hello hello!!");
});


//ZADACI
//==========================================================


//1. 
/* Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati 
vrednost brojača za 1.*/
//2. 
/* Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto
u konzoli.*/


let btnBroj = document.getElementById('broj')
let pispisBroja = document.getElementById('ispisBroja');
let br = 1;

btnBroj.addEventListener("click" , () => {
    console.log(`broj je ${br}`);
    pispisBroja.innerHTML = `Broj je ${br}`; //2.Zadatak
    br++;
});


//3. zadatak 
let b = 0;
let btnPlus = document.getElementById('plus');
let btnMinus = document.getElementById('minus');
let spanNula = document.getElementById('nula');


btnPlus.addEventListener("click" , () => {
    console.log(`Broj za plus je ${b}`);
    spanNula.innerHTML = `${b}`;
    b++;
});

btnMinus.addEventListener("click", () => {
    console.log(`Broj za minus je ${b}`);
    spanNula.innerHTML = `${b}`
    b--;

    if(b < 0) { //4. zadatak
        b = 0;
    }
});

//5. 
let btnDugme = document.getElementById(`dugme`);
let pIspisTeksta = document.getElementById('ispisiTeksta');
let inputTekst = document.getElementById('tekst');

btnIspisiTekst.addEventListener("click" , () => {
    let preuzmiTekst = inputTekst.value;
    pIspisTeksta.innerHTML = `Zdravo ${preuzmiTekst}`;


});







