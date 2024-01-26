const form = document.querySelector("#order");
const capacity = document.querySelector("#capacity");
const div = document.querySelector("#result");

function getItemsReturnPromise(resource) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener("readystatechange", function() {
            if(request.readyState === 4 && request.status === 200) {
                // sve ok, obradi zahtev
                let data = JSON.parse(request.responseText);
                resolve(data);  // funkcija radi nesto sa podacima koji su stigli sa servera
            }
            else if(request.readyState === 4) {
                // desila se neka greska
                reject("Desila se greska");
            }
        });
        request.open("GET", resource);
        request.send();
    });
}

function name(params) {
    
}
form.addEventListener("sumbmit", sumbitFormVarijanta3);