//1. 
/*Svim parnim paragrafima na stranici dodati klasu error, 
a svim neparnim paragrafima dodati klasu success */

let paragraf = document.querySelectorAll('p');

paragraf.forEach((element, index) => {
    
    if(index % 2 == 0) {
        element.classList.add('error')
    }
    else {
        element.classList.add('success')
    }
});

//2. 
/* Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px 
i veličinom od 25px.*/

paragraf.forEach((element, index) => {
    if(index % 3 == 0)
    {
        element.style.fontSize = "15px";
    }
    else if (index % 3 != 0) {
        element.style.fontSize = "20px";
    }
    else {
        element.style.fontSize = "25px";
    }
});

//3. 
/*Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, 
svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. 
Ostale klase paragrafa ne modifikovati. */

paragraf.forEach((element, index) => {
    if (element.textContent.includes('sucess')){
        element.classList.add('sucess');
    } else if (element.textContent.includes('error')){
        element.classList.add('error');
    }
    element.classList.toggle('error');
});

//4. 
/*Dodati novi DIV tag dokumentu*/

let noviDiv = document.createElement('div');
noviDiv.innerHTML = 'Div kreiran u JS-u';
noviDiv.style.backgroundColor = "green";
document.body.appendChild(noviDiv);

let noviNaslov = document.createElement('h3');
noviNaslov.innerHTML = 'Novi Naslov';
noviDiv.appendChild(noviNaslov);

//Formirati ul listu sa stavkama čiji je sadržaj proizvoljan tekst, i dodati je div elementu.

let lista = document.createElement("ul");
noviDiv.append(lista);

let li1 = document.createElement('li');
li1.innerHTML = "Prva stavka liste"
let li2 = document.createElement('li');
li2.innerHTML = "Druga stavka liste"
let li3 = document.createElement('li');
li3.innerHTML = "Treva stavka liste";

lista.append(li1, li2, li3);

//Iz ul izbaci ul2
//lista.removeChild(li1);
//lista.removeChild(lista.firstChild);
lista.removeChild(lista.childNodes[0]);

//Ul Listu zameniti drugom stavkom liste 
let li4 = document.createElement('li');
li4.innerHTML = 'Cetvrta stavka liste';

lista.replaceChild(li4, li3);

//dodati jos jednu stavku 

let li5 = document.createElement('li');
lista.appendChild(li5);
let slika = document.createElement('img');
alika.src="slika.jpg";
slika.alt = "neka slika"
li5.appendChild(slike);

