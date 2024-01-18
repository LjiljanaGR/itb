let listItems = document.querySelectorAll("li");
let btnDodaj = document.querySelector('#submit');
let inputZadatka = document.querySelector('#task');
let radioPocetak = document.querySelector('#pocetak')



let ulZadaci = document.querySelector("ul");

ulZadaci.addEventListener("click", (e) => {
    // console.log(e.target) = ceo element na koji je kliknuto
    // console.log(e.target.tagName) = Tag na koji je kliknuto
    if(e.target.tagName == "LI") {
        //e.target.classList.toggle('precrtaj');
        e.target.remove();
    }
});

inputZadatka.addEventListener("keyup", e => {
    //e.preventDefault();

    //console.log(e.keyCode);

    //ako je neko kliknuo na taster enter njegov keyCode je 13
    if(e.keyCode == 13) {
        let tekstZadatka = inputZadatka.value;
        if(inputZadatka.value.trim() != "") {
            let liNoviZadatak = document.createElement('li'); // kreiram novi li
            liNoviZadatak.textContent = tekstZadatka; //Dodajemo tekst u li; ili .innerHTML ili .textContent ili .innerText
            // dodavanje na pocetak i na kraj
            let radioDodaj = document.querySelector("input[name='add']:checked");
            if(radioDodaj.value == "beggin") {
                ulZadaci.prepend(liNoviZadatak); // Dodaje ga na pocetak liste
            } else {
                ulZadaci.appendChild(liNoviZadatak); // Dodaje ga na kraj liste
            }
        }
        inputZadatka.value = "";
    }


});




