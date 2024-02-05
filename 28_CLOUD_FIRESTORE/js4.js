/*let movie1 = {
    name: "The Matrix",
    director: {
        name: "Lilly",
        surname: "Wachowski" 
    },
    release: 1999,
    genres: ["action" , "sci-fi"],
    rating: 8.7
}

db.collection('movies').doc('movie1')
.set(movie1)
.then(() => {
    console.log("uspesno je dodan film!");
})
.catch((e) => {
    console.log(`Desila se greska: ${e}`);
});

let movie2 = {
    name: "Die Hard",
    director: {
        name: "John ",
        surname: "McTiernan" 
    },
    release: 1989,
    genres: ["action" , "trillers"],
    rating: 8.2
}

db.collection('movies').doc('movie2')
.set(movie2)
.then(() => {
    console.log("uspesno je dodan film!");
})
.catch((e) => {
    console.log(`Desila se greska: ${e}`);
});

//Menjanje podataka
db.collection("movies").doc("movie1")
.update({
    director: {
        name: "Larry ",
        surname: "Wachowski" 
    }
})
.then(() => {
    console.log("Uspesno promena imena rezisera!");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
})

//dohvatanje dokumenta

db.collection('movies').doc('movie1')
.get()
.then((doc) => {
    if(doc.exists) {
        let data = doc.data();
        console.log("Uspesno skinut dokument: " + doc.id);
        console.log(data);
    }
    else {
        console.log("Ne postoji ovaj dokument!");
    }
})
.catch((e) => {
    console.log(`Greska: ${e}`);
});

//dohvatanje svih dokumenata iz kolekcije
db.collection('customers')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(doc.id, " => ", data);
    });
})
.catch((e) => {
    console.log(`Greska: ${e}`);
});
*/