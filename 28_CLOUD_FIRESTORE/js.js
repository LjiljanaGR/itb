console.log(db);

let users = db.collection('users');
console.log(users);


let d1 = users.doc("ljgrab");
console.log(d1);

let d2 = db.doc("users/ljgrab");
console.log(d2);

/*
CRUD - Create, Read, Update, Delete
Za pristup dokumentu:
let doc = db.collection('....').doc('....');
Kod dokumenta imamo sledece metode: 
- doc.set(....) -> Create
- doc.get(....) -> Read
-doc.update(.....) -> Update
-doc.delete(...) -> Delete
Sve ove cetiri metode kao rezultat vracaju PROMISE
Nakon ovih poziva lancaju se .then() i catch()
*/

// 1. Create (set)
let cust1 = {
    name: "Mika",
    age: 38,
    adressess: ["Loznica" , "Valjevo"],
    salary: 400.60
};//JS objekat - a na osnovu njega kreiramo dokument u bazi podataka 

db.collection('customers').doc('cust1')
.set(cust1)
.then(() => {
    document.body.innerHTML += "Korisnik dodat u bazu!";
})
.catch(e => {
    document.body.innerHTML += `Greska ${e}`;
});

db.collection(customers).doc()
.set({
    name: "Zika",
    age: 22,
    addresses: ["Nis"],
    salary: 600
})
.then(() => {
    document.body.innerHTML += "Korisnik dodat u bazu";
})
.catch(e => {
    document.body.innerHTML += `Greska: ${e}`;
});