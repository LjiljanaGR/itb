////////////////////////////////////////////////////////////////////
// N I Z O V I   O B J E K A T A
/////////////////////////////////////////////////////////////////////

let blog1 = {
    title: "Neki blog1",
    likes: 100,
    dislikes: 30
};

let blog2 = {
    title: "Neki blog2",
    likes: 30,
    dislikes: 8
};

let blog3 = {
    title: "Neki blog3!",
    likes: 16,
    dislikes: 10
};

let arrBlogs = [blog1, blog2, blog3];

////////////////////////////////////////////////////////////////////
/*1.Napraviti arrow funkciju kojoj se prosleđuje niz objekata, 
a ona vraća ukupan broj lajkova */
//=============================================================

let ukupnoLajkova = (array) => {
    let ukupno = 0;

    array.forEach(blog => {
        ukupno += blog.likes;
    });
    return ukupno;
}
console.log(`Ukupno lajkova je bilo ${ukupnoLajkova(arrBlogs)}`);

////////////////////////////////////////////////////////////////////
/*2.Napraviti arrow funkciju kojoj se prosleđuje niz objekata,
 a ona vraća prosečan broj lajkova */
//=============================================================

let prosecanBrLajkova = (array) => {
    let prosek = 0;
    let ukupno = ukupnoLajkova(arrBlogs);

    return prosek = ukupno / arrBlogs.length;

}
console.log(`Prosecan broj lajkova je bio: ${prosecanBrLajkova(arrBlogs)}`)

////////////////////////////////////////////////////////////////////
/*3.Napraviti arrow funkciju kojoj se prosleđuje niz objekata, 
a ona ispisuje sve one naslove blogova koji imaju više pozitivnih 
nego negativnih ocena */
//=============================================================

let visePozitivnih = (array) => {

    array.forEach(element => {
        if(element.likes > element.dislikes) {
            console.log(element.title);
        }
    });

}
visePozitivnih(arrBlogs)
//console.log(`Blogovi koji imaju vise pozitivnih od negativnih ocena su: ${visePozitivnih(arrBlogs)}`);

////////////////////////////////////////////////////////////////////
/*4. Napraviti arrow funkciju kojoj se prosleđuje niz objekata,
a ona ispisuje sve one naslove blogova koji imaju najmanje duplo 
više pozitivnih nego negativnih ocena*/
//=============================================================

let najmanjeDuplo = (array) => {
    
    array.forEach(element => {
        if(element.likes > element.dislikes * 2) {
            console.log(element.title);
        }    
    });
}
najmanjeDuplo(arrBlogs);
////////////////////////////////////////////////////////////////////
/*5. Napisati arrow funkciju kojoj se prosleđuje niz objekata a 
ona ispisuje sve naslove koji se završavaju uzvičnikom*/
//=============================================================

let uzvicnici = (array) => {

    array.forEach(element => {

        if(element.title.includes(`!`)) {
            console.log(element.title);
        }
    });

}

uzvicnici(arrBlogs);

