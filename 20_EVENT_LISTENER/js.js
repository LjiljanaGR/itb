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
let btnIspisiTekst = document.getElementById(`ispisiTekst`);
let pIspisTeksta = document.getElementById('ispisTeksta');
let inputText = document.getElementById('tekst');

btnIspisiTekst.addEventListener("click" , () => {
    let inputTex = inputText.value;
    pIspisTeksta.innerHTML = `Zdravo ${inputTex}`;

});

let radioMuski = document.getElementById("muski");  //queryselector("#muski")
let radioZenski = document.getElementById("zenski");
let radioNeopredeljen = document.getElementById("neopredeljen");
btnIspisiTekst.addEventListener("dblclick", () => {
    // 1. NACIN
    if(radioMuski.checked) {
        console.log(`Osoba muskog pola.`);
    } else if(radioZenski.checked) {
    console.log(`Osoba zenskog pola.`);
    } else {
        console.log(`Osoba se nije oprededlila.`);
    }

    //2.Nacin
    //Selektuj mi input polje ciji atribut name ima vrednost 'pol i pri tome je cekiran 
    let checkedPol = document.querySelector("input[name='pol']:checked");
    //console.log(checkedPol.value, checkedPol.id);
    console.log(`Osoba je ${checkedPol.value} pola`);

    //3.Nacin 
    //selektuj mi sve radio button po name atributu 
    let polRadios = document.getElementsByName('pol');
    polRadios.forEach(radioButton => {
        if(radioButton.checked) {
            console.log(`Osoba je ${radioButton.value} pola`);
        }
    });

    //4.nacin
    //selektuj mi sve radio buttone po name atributu-querySelectorAll
    let polRadiosInput = document.querySelectorAll("input[name='pol']");
    polRadiosInput.forEach(rb => {
        if(rb.checked) {
            console.log(`Osoba ${rb.value}`);
        }
           
    });

});

//7. ZADATAK
//==============================================================
let brojZaKvadrat = 0;
let inputBroja = document.getElementById('brojevi');
let btnRezultat = document.getElementById('izracunaj');

btnRezultat.addEventListener("click" , () => {
    let inputNovi = inputBroja.value; 
    
    brojZaKvadrat = inputNovi * inputNovi;
    console.log(`Rezultat je ${brojZaKvadrat}`);
    paragraf.innerHTML = `Rezultat je: ${brojZaKvadrat}`;

});


let brojZaPrepolovljen = 0;
let inputPrepolovljen = document.getElementById('prepolovljenBr');
let izracunajDrugi = document.getElementById('izracunajDrugi')

izracunajDrugi.addEventListener('click' , () => {
    let inputPrepolovljenNovi = inputPrepolovljen.value;
    
    brojZaPrepolovljen = inputPrepolovljenNovi / 2;
    console.log(`Prepolovljen broj je ${brojZaPrepolovljen}`);
    paragrafDrugi.innerHTML = `Rezultat prepolovljenog broje je: ${brojZaPrepolovljen}`

});




