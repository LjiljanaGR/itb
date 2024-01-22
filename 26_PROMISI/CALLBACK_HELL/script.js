let getJSON = (resource, callback) => {
    //1. kreiranje XML objekta
    const request = new XMLHttpRequest();//nova instanca klase

    request.addEventListener("readystatechange", () => {
        if(request.readyState == 4 && request.status == 200) {
        //sve ok
            let data = JSON.parse(request.responseText);//dohvatamo podatke
            callback(data, undefined);
        }
         else if (request.readyState == 4){
        //nesto nije ok
            callback(undefined, 'Desila se greska!');
        }
});

//Otvaramo kreirani zahtev
    request.open("GET", resource);

//slanje zahteva
    request.send();
}

getJSON("../JSON/prvi.json", (data, err) => {
    if(data) {
        console.log(data);//sve je proslo ok u prvi JSON i vraca podatke (DATA) iz prvi.json
        //ako je sve bilo OK sa prvim fajlom, onda uzmi drugi fajl
        getJSON("../JSON/drugi.json", (data, err) => {
            if(data) {
                console.log(data);//sve je proslo ok u drugi.json i vraca podatke (DATA) u drugi.json
                getJSON("../JSON/treci.json", (data, err) => {
                    if(data) {
                        console.log(data);//sve je proslo ok u treci.json
                    }
                    else {
                        console.log(err);//ispisuje gresku iz treci.json
                    }
                });
            }
            else {
                console.log(err);//ispisuje gresku iz drugi.json
            }
        });
    }
    else {
        console.log(err);//ispisuje gresku iz prvi.jason
    }
});



