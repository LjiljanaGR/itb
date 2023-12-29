console.log(document); // document je objekat 
console.log(document.body); //body svojstvo document objekta je objekat


//DODAVANJE ELEMENTA BY TAG NAME
//======================================================================
// jedinstven objekat iz DOM stabla (koji ima ovaj ID)

let el1 = document.getElementById("p2");
console.log(el1);

//DPDAVANJE ELEMENTA BY CLASSNAME
//=======================================================================
//HTML kolekcija objekata iz DOM stabla

let el2 = document.getElementsByClassName("par");
console.log(el2); 

//Pristup elementima HTML kolekcija samo FOR PETLJOM
//_____________________________________________________________________

for(let i = 0; i < el2.length; i++) {
    console.log(el2[i]);
}

//NIJE MOGUCE FOREACH PETLJOM 
//=========================================================================

//el2.forEach(element => {
//    console.log(element);
//});

let niz = Array.from(el2);
niz.forEach(el => {
    console.log(el);
});

//
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


let divE = document.querySelectorAll("div.error"); //Nodlista i moze preko forEach petlje
 
divE.forEach(div => {

  div.innerHTML += `<h1>GRESKA!</h1>`;
  div.style.color = "red";

});

// 9. 
/* Neka je n broj paragrafa u datm dokumentu. U svakom i-tom paragrafu dodati broj i 
na kvadrat, za svako i = 1, 2, ...n. */

let paragrafN = document.querySelectorAll('p');
    
    paragrafN.forEach((e, index) => {
        let kv = (index + 1 ) * (index + 1)
        e.innerHTML += `${index+1}<sup>2</sup> = ${kv}`
});

//10.
/*Svim slikama dodati alternativni tekst*/

let sveSlike = document.querySelectorAll("img");

sveSlike.forEach( sl => {
   //sl.setAttribute("alt" , "TEKST")
   sl.alt = "Neki TEKST"
});

//11. 
/* Svim paragrafima posaviti atribut style tako da bude obojen ljubicastom bojom*/

let ljubicasti = document.querySelectorAll("p");

ljubicasti.forEach(p => {
    p.style.color = "purple";
});

//12. Poslednji zadatak sa slajda 8
/*
for (let i = 0; i < sviParagrafi.length; i++) {
  if (i % 2 === 1) {
    sviParagrafi[i].style.backgroundColor = "green";
  } else {
    sviParagrafi[i].style.backgroundColor = "red";
  }
};
*/
//13. 
/*Svim linkovima na stranici postaviti padding na 5px,
font size na 18px i text-decoration na none.
Parnim linkovima staviti zelenu pozadinsku boju i 
ljubicastu boju teksta, a neparnim linkovima plavu 
pozadinsku boju i belu boju teksta. */

let sviLinkovi = document.querySelectorAll('a');

sviLinkovi.forEach((e, index) => {
e.style.padding = "50px";
e.style.fontSize = "18px";
e.style.textDecoration = "none";

    if(index % 2 == 0) {
        e.style.backgroundColor = "green";
        e.style.color = "purple";
    }
    else {
        e.style.backgroundColor = "blue";
        e.style.color = "white";
    }
});

console.log(sviLinkovi);

//13
/* Svim slikama na stranici koja su sa 
ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju.*/

let diV = el1.parentNode;
console.log(div);
