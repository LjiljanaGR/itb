console.log(document); // document je objekat 
console.log(document.body); //body svojstvo document objekta je objekat

let el1 = document.getElementById("p2");
console.log(el1);// jedinstven objekat iz DOM stabla (koji ima ovaj ID)

let el2 = document.getElementsByClassName("par");
console.log(el2); //HTML kolekcija objekata iz DOM stabla

//Pristup elementima HTML kolekcija
for(let i = 0; i < el2.length; i++) {
    console.log(el2[i]);
}

//Ne poseduju forEach petlju 
//el2.forEach(element => {
//    console.log(element);
//});

let niz = Array.from(el2);
niz.forEach(el => {
    console.log(el);
});

let el3 = document.getElementsByTagName("p");//Vraca HTML kolekciju
console.log(el3);

let el4 = document.getElementsByName("p");//Vraca NodLista
console.log(el4);

el4.forEach(element => {
    console.log(el4);
});

//Array (forEach), HTML Collection, NodList(forEach);

let t1 = document.querySelector("#p2");
console.log(t1);

let t2 = document.querySelector(".par");//vraca objekat iz DOM stabla
console.log(t2);

let t3 = document.querySelectorAll(".par");
console.log(t3);

t3.forEach(el => {
    console.log(el);
});

let t4 = document.querySelectorAll("div p.par div a p.par");//U divu sve paragrafe koji imaju klasu par i u divu sve linkove koji imaju klasu par
console.log(t4);

//ZADACI
//===============================================================================================
//1. Dohvatiti prvi paragraf na stranici.

let paragraf = document.querySelector("div p.par");
console.log(paragraf);

//2. Dohvatiti prvi div tag sa klasom „error“.

let div = document.querySelector("div.error");
console.log(div);

//3. Dohvatiti poslednji red u tabeli.

let poslednjiRed = document.querySelector("table tr:last-child");
console.log(poslednjiRed);

//4. Dohvatiti sve linkove na stranici.

let linkovi = document.getElementsByTagName("a");
console.log(linkovi);

//5. Dohvatiti sve slike na stranici.

let slike = document.getElementsByTagName("img");
console.log(slike);

//6. Sve elemente ispisati u konzoli

console.log(document.body);



//==========================================================================================================
let link = document.querySelector("a");
link.innerHTML = "<span style='font-weight: bold;'>Novi tekst</span>prvog linka";// += dodatje tekst, kada se stavi = onda se menja tekst;
//link.href = "https://www.google.com";
link.setAttribute("href", "https://www.google.com");
//link.target = "_blank"; 
link.setAttribute("target" , "_blank");
;IDBKeyRange.id = "pera";


let lin = document.querySelectorAll("a");

lin.forEach(link => {

    link.style.color = "red";
    link.style.fontSize = "20px";
    link.style.textDecoration = "none";
});

//ZADACI
//===================================================================================================

//7. 
//Selektovati sve paragrafe i u svakom od njih pridodati tekst VAZNO!
let sviparagrafi = document.querySelectorAll("p");

sviparagrafi.forEach( par => {

    par.innerHTML += `VAZNO!!!`;


}); 

//8. 
/*Svim divovima na stranici sa klasom "error", dodati po jedan naslov najvece velicine 
sa tekstom GRESKA */

// let divE = document.getElementsByClassName("error"); //HTMCOLECTION i ne moze preko foreach petlje
let divE = document.querySelectorAll(".error"); //Nodlista i moze preko forEach petlje
//console.log(divE); 

divE.forEach(div => {

  div.innerHTML += `<h1>GRESKA!</h1>`;
  div.style.color = "red";

});

// 9. 
/* Neka je n broj paragrafa u datm dokumentu. U svakom i-tom paragrafu dodati broj i na kvadrat, 
za svako i = 1, 2, ...n. */


//10.
/*Svim slikama dodati alternativni tekst*/

let sveSlike = document.querySelectorAll("img");

sveSlike.forEach( sl => {
    
    sl.setAttribute("alt" , "TEKST")

});

//11. 
/* Svim paragrafima posaviti atribut style tako da bude obojen ljubicastom bojom*/

let ljubicasti = document.querySelectorAll("p");

ljubicasti.forEach(p => {

    p.style.color = "purple";

});

//12.
/*Svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, 
a svim neparnim paragrafima postaviti pozadinu  crvene boje*/

let crvenaZelena = document.querySelectorAll("p");

crvenaZelena.forEach((p, index) => {

    if(index % 2 == 0 ) {
        p.style.backgroundColor = "green"; 
    }
    else {
        p.style.backgroundColor = "red"; 
    }
    
});

//13 
/* */







/* Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.
Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.
Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju. 
Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank. 
Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati:
Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.
U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.
U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele.
*/