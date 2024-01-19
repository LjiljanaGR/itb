////////////////////////////////////////////////////////////////
//Ispisati u konzoli one korisnike čiji website ima domen „.com“.

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", function(){
    if(request.readyState == 4 && request.status == 200) {

        let data = JSON.parse(request.responseText);
        console.log(data);

        data.forEach(element => {
            if(element.website.includes('.com')) {
                console.log(element);
                
            }
        });
    }

    else if(request.readyState == 4) {
        console.log("DESILA SE GRESKA!");
    }

});

request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();


/////////////////////////////////////////////////////////////////////
//Ispisati korisnike čije ime sadrži reč „Clementin“.

const request1 = new XMLHttpRequest();

request1.addEventListener("readystatechange", function(){
    if(request1.readyState == 4 && request1.status == 200) {

        let data = JSON.parse(request1.responseText);

        data.forEach(element => {
            if(element.name.includes('Clementin')) {
                console.log(element.name);
            }
        });
    }
    else if (request1.readyState == 4){
       console.log("DOSLO JE DO GRESKE!");
    }
})

request1.open("GET", "https://jsonplaceholder.typicode.com/users");
request1.send();

////////////////////////////////////////////////////////////////////////////////////////
//Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 

let request2 = new XMLHttpRequest();

request2.addEventListener("readystatechange", function(){
    if(request2.readyState == 4 && request2.status == 200) {
        let data = JSON.parse(request2.responseText);
        //console.log(data);
        data.forEach(element => {
            if(element.company.name.includes('Group') || element.company.name.includes('LLC')) {
                console.log(element.company.name);
            }
            
        })
    }
    else if (request2.readyState == 4){
        console.log('DOSLO JE DO GRESKE');
    }
})

request2.open("GET", "https://jsonplaceholder.typicode.com/users");
request2.send();

////////////////////////////////////////////////////////////
//Ispisati sve različite gradove u kojima rade ovi korisnici.

let request3 = new XMLHttpRequest();

request3.addEventListener("readystatechange", function() {

    if (request3.readyState == 4 && request3.status == 200) {
        let data = JSON.parse(request3.responseText) 

        data.forEach(element => {
            console.log(element.address.city);
        });
    }
    else if(request3.readyState == 4) {
        console.log('DOSLO JE DO GRESKE');
    }

})

request3.open("GET", "https://jsonplaceholder.typicode.com/users");
request3.send();


////////////////////////////////////////////////////////
//Ispisati broj korisnika koji žive na adresi čije su obe 
//vrednosti geografske dužine i geografske širine negativni brojevi.

let request4 = new XMLHttpRequest();

request4.addEventListener("readystatechange", function() {
    if(request4.readyState == 4 && request4.status == 200) {
        let data = JSON.parse(request4.responseText);

        data.forEach(element => {
            if(element.address.geo.lat < 0 && element.address.geo.lng < 0) {
                console.log(element.address.geo);
            }
        });
    }

    else if(request4.readyState == 4) {
        console.log("NEMA NISTA");
    }
})

request4.open("GET", "https://jsonplaceholder.typicode.com/users");
request4.send();