let listItems = document.querySelectorAll("li");
let btnDodaj = document.querySelector('#submit');
let inputZadatka = document.querySelector('#task');
let ulZadaci = document.querySelector("ul");
let nizZadataka = [];

if(localStorage.getItem("zadaci") == null) {
    // Ne postoje jos uvek zadaci u memoriji
    localStorage.setItem("zadaci", JSON.stringify(nizZadataka)); // posto ne razume niz, moramo prvo niz da pretvorimo u string
} else {
    // Postoje zadaci u memoriji i treba ih ispisati na stranici
    nizZadataka = JSON.parse(localStorage.getItem("zadaci"));
    nizZadataka.forEach(zad => {
    let liZad = document.createElement("li");
    liZad.textContent = zad;
    ulZadaci.appendChild(liZad);    
    }); // pretvaram iz stringa u niz
}
/*function restujIspis() {
    inputZadatka.value = " ";
} */
ulZadaci.addEventListener("click", (e) => {
    // console.log(e.target) = ceo element na koji je kliknuto
    // console.log(e.target.tagName) = Tag na koji je kliknuto
    if(e.target.tagName == "LI") {
     //   e.target.classList.toggle('precrtaj');
     e.target.remove(); // BRISANJE LI TAGA KADA SE KLIKNE
     let indexElementa = nizZadataka.indexOf(e.target.textContent);
     nizZadataka.splice(indexElementa, 1);
     localStorage.setItem("zadaci", JSON.stringify(nizZadataka));
    }
});
inputZadatka.addEventListener("keypress", e => { // kada kliknem neki taster i otpustim (bilo koji taster)
  //  e.preventDefault();
   // console.log(e.keyCode);
    // Ako je neko kliknuo na taster enter, njegov keycode je 13
    if(e.keyCode == 13) {
        let tekstZadatka = inputZadatka.value;
        if(inputZadatka.value.trim() != "") {
            let liNoviZadatak = document.createElement('li'); // kreiram novi li
            liNoviZadatak.textContent = tekstZadatka; //Dodajemo tekst u li; ili .innerHTML ili .textContent ili .innerText
            // dodavanje na pocetak i na kraj
            let radioDodaj = document.querySelector("input[name='add']:checked");
            // console.log(radioDodaj, radioDodaj.value);
            if(radioDodaj.value == "beggin") {
                ulZadaci.prepend(liNoviZadatak); // Dodaje ga na pocetak prikaza(liste)
                nizZadataka.unshift(tekstZadatka); // unshift dodaje na POCETAK NIZA
            } else {
                ulZadaci.appendChild(liNoviZadatak); // Dodaje ga na kraj prikaza(liste)
                nizZadataka.push(tekstZadatka); // push dodaje na kraj NIZA
            }
        }
        localStorage.setItem("zadaci", JSON.stringify(nizZadataka));
        inputZadatka.value = "";
    }
});







