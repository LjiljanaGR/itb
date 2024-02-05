let datum1 = new Date("2024-01-26 17:00:00");
let datum2 = new Date("2024-01-26 21:00:00");

db.collection('tasks')
.add({
    title: "Cas ITBootcamp",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Cas iz baza podataka",
    
    //reziser: {
    //    name: "James",
    //    surname: "Cameron"
    //}
})
.then(() => {
    console.log("Uspesno dodat task!");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
});

//doc("...").set()=> kompletno menja ("gazi") sadrzaj dokumenta
//doc("...").update()=> menja sadrzaj postojecih polja

db.collection("users").doc("cust04")
.update({
    age: 28
})
.then(() => {
    console.log("Uspesno promenjene godine!");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
})
