let getJSON = resource => {
    //1. kreiranje XML objekta
    const request = new XMLHttpRequest();//nova instanca klase

    //Otvaramo kreirani zahtev
    request.open("GET", resource);

    //slanje zahteva
    request.send();

    return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if(request.readyState == 4 && request.status == 200) {
            //sve ok
                let data = JSON.parse(request.responseText);//dohvatamo podatke
                resolve(data);
            }
             else if (request.readyState == 4){
            //nesto nije ok
                reject("Doslo je do greske!"); 
            }
        });
    });
}

getJSON("../JSON/prvi.json").then(sadrzaj => {
    console.log("prvi.json", sadrzaj);
    return getJSON("../JSON/drugi.json");//vraca instancu promise, koja moze imati .then i .catch
}).then(sadrzaj2 => {
    console.log("drugi.json", sadrzaj2);//ako je drugi.json resolved onda ispisuje njegove podatke
    return getJSON("..//JSON/treci.json");
}).then(sadrzaj3 => {
    console.log("treci.json", sadrzaj3);
}).catch(greska => {
    console.log("GRESKA U FAJLU", greska);//ako je bilo koji fajl bio rejected, upada u catch granu
});





