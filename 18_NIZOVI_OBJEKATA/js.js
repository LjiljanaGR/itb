let blog1 = {
    title: "If naredba grananja", 
    likes: 50,
    dislikes: 21, 
};

let blog2 = {
    title: "While petlja",
    likes: 25,
    dislikes: 36,
};

let blog3 = {
    title: "For petlja",
    likes: 100,
    dislikes: 12, 
};

let arrBlogs = [blog1, blog2, blog3];

//Ispis niza obejakata
console.log(arrBlogs);

//Ispis jednog elementa iz niza objekta
console.log(arrBlogs[1]);

//ispis jednog propertia iz niza objekata
console.log(arrBlogs[1].title);
console.log(arrBlogs[1]["title"]);

//ispis naslova svih elemenata iz niza - koriscenjem FOR petlje 
for(let i = 0; i < arrBlogs.length; i++) {
    console.log(arrBlogs[i].title);
}

arrBlogs[1].title = "While ciklus";
//ispis naslova svih elemenata iz niza koristenjem forEach petlje
arrBlogs.forEach(obj => {
    console.log(obj.title, obj.likes);
});

//1. Zadatak
/* Napraviti arrow funkciju kojoj se prosleđuje niz objekata,
a ona vraća ukupan broj lajkova */
//==============================================================
let sumLikes = arr => {
    let sum = 0;

    arr.forEach(obj => {
        sum += obj.likes;
    });
    return sum;
}

//2. Zadatak
/* Napraviti arrow funkciju kojoj se prosleđuje niz objekata,
 a ona vraća prosečan broj lajkova */
//==============================================================

let avrgLikes = arr => {
    //let s = sumLikes(arr);
    //let n = arr.length;
    //let avr = s / n;

    //return avr;
    
    return sumLikes(arr) / arr.length;
}

//3. Zadatak
/* Napraviti arrow funkciju kojoj se prosleđuje niz objekata,
a ona ispisuje sve one naslove blogova koji imaju više pozitivnih 
nego negativnih ocena */
//==============================================================

let pozitivniNegativni = arr => {

    arr.forEach(obj => {
        if(obj.likes > obj.dislikes) {
            console.log(obj.title);
        }
    });

}
pozitivniNegativni(arrBlogs);

//4. Zadatak
/* Napraviti arrow funkciju kojoj se prosleđuje niz objekata,
a ona ispisuje sve one naslove blogova koji imaju najmanje duplo
više pozitivnih nego negativnih ocena */
//==============================================================

let duploVise = arr => {

    arr.forEach(obj => {
        if(obj.likes * 2 > obj.dislikes) {
            console.log(obj.title);
        }
    });

}
duploVise(arrBlogs);

//5. Zadatak
/* Napisati arrow funkciju kojoj se prosleđuje niz objekata
a ona ispisuje sve naslove koji se završavaju uzvičnikom */
//==============================================================
let blogTitles3 = (arr) => {
    arr.forEach((blog) => {
      // if (blog.title.endsWith("!")) {
      //   console.log(blog.title);
      // }
      if (blog.title[blog.title.length - 1] == "!") {
        console.log(blog.title);
      }
    });
  };
  blogTitles3(arrBlogs);

console.log(`Suma lajkova je: ${sumLikes(arrBlogs)}`);
console.log(`Prosecan broj lajkova je: ${avrgLikes(arrBlogs)}`);
//console.log(`Prosecan broj lajkova je: ${pozitivniNegativni(arrBlogs)}`);

