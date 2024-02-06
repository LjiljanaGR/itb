//dohvatanje dokumenata iz kolekcije po redosledu polja
//(dokument mora da sadrzi to polje da bi bio dohvacen)
//ako ima vise od jedno polja, neophodno je prvo kreirati index(samao jednom)
/*
db.collection('users')
.orderBy('name', 'desc')
.orderBy('age', 'asc')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

//dohvatanje odredjenog broja dokumenata(limitiranje)
/*
db.collection('users')
//.orderBy('name', 'desc')
.orderBy('age', 'asc')
.limit(2)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

//dohvatanje dokumenata koji zadovoljavaju odredjene uslove (filtriranje)

//Dohvati sve klijente koji imaju: 
//Imaju platu veću ili jednaku od 500

/*
db.collection('customers')
.where('salary', ">=", 500)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

//imaju platu izmedju 300 i 800

/*
db.collection('customers')
.where('salary', ">=", 300)
.where('salary', "<=", 800)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

//imaju platu manju od 900, a imaju 30godina

/*
db.collection('customers')
.where('salary', "<=", 900)
.where('age', "==", 30)
//.orderBy('salary') moze da se kombinuje sa nekim uslovima
//.orderBy('name')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

//dohvati sve klijente koji imaju preko 25 godina, sortirane po imenu

/*
db.collection('customers')
.where('age', ">", 25)
.orderBy('age')
.orderBy('name')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

//klijenti koji imaju adresu u nisu

/*
db.collection('customers')
.where('adressess', "array-contains", 'Loznica')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

//klijenti koji imaju adresu u nisu ili beogradu
/*

db.collection('customers')
.where('adressess', "array-contains-any", ['Loznica', 'Beograd'])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

//sve klijente koji imaju 22, 25 ili 28 godina
/*
db.collection('customers')
.where('age', 'in', [22, 25, 28])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

//Iz kolekcije tasks, pročitati sve zadatke, i koji:
//Su prioritetni,

/*
db.collection('tasks')
.where('priority', '==' , false) //zato sto u bazi nemam true
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

//Treba da se izvrše u tekućoj godini,
let datum = new Date();
let godina = datum.getFullYear();//tekuca godina
let datum1 = new Date(godina, 0, 1);//1.januar tekuce godine
let datum2 = new Date(godina +1, 0, 1);//1.januar sledece godine
let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);
/*
db.collection('tasks')
.where('due_date', ">=", ts1) 
.where('due_date', "<=", ts2) 
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/
//Su završeni,

/*
let datumm = new datum();
db.collection('tasks')
.where('due_date', "<=", datumm) 
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

//Tek treba da počnu.
/*
db.collection('tasks')
.where('due_date', ">=", datumm) 
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

//Iz kolekcije movies, pročitati sve filmove:
//Koje je režirao George Lucas,
/*
db.collection('filmovi')
.where('director.name', '==', 'Quentin')
.where('director.surname', '==', 'Tarantino')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

/*
//Čija je ocena između 5 i 10,
db.collection('filmovi')
.where('rating', '>=', 5)
.where('rating', '<=', 10)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

//Kojima je žanr komedija, tragedija ili drama,
/*
db.collection('filmovi')
.where('genres', 'array-contains-any', ['crime', 'drama'])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/


//Koji su izašli u 21. veku.
/*
db.collection('filmovi')
.where('release', '>=', 2000)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

/*
//Prikazati sve informacije o najbolje rangiranom filmu.
db.collection('filmovi')
.orderBy('rating', 'desc')
.limit(1)
//.orderBy('age', 'asc')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/

//Prikazati sve informacije o najslabije rangiranoj drami.
/*
db.collection('filmovi')
.orderBy('rating', 'asc')
.limit(1)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Err: ${err}`);
});
*/