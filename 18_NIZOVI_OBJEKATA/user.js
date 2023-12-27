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

//////////////////////////////////////////////////////////

let user1 = {
    username: "JelenaMatejic",
    age: 29,
    blogs: [blog1, blog3],
    logBlogs: function() {
        this.blogs.forEach(elem => {
            console.log(elem.title);
        });
    }
};
let user2 = {
    username: "stefanStanimirovic",
    age: 34,
    blogs: [blog2],
    logBlogs: function() {
        this.blogs.forEach(elem => {
            console.log(elem.title);
        });
    }
};
/////////////////////////////////////////////////////

console.log(user1.blogs[0].title);
console.log(user1.blogs[0]["title"]);
//console.log(user1.["blogs"][0]["title"]);

user1.logBlogs();
user2.logBlogs();

//1. Zadatak
/* Napraviti niz korisnika gde svaki od korisnika 
sadrži niz blogova. Svaki blog u ovom nizu je objekat.*/

let users = [user1, user2];

//Ispis username polja iz users niza

users.forEach(u => {
    console.log(u.username);
});

//ispis svih naslova blogova koje su korisnici kreirali
users.forEach(u => {
    u.logBlogs();
});

//Bez metode
users.forEach(u => {
    let userBlogs = u.blogs; //niz blogova korisnika 
    //Iteriram nizom objekata, gdje je svaki objekat po jedan blog. Iy tog objekta blog mogu uzeti naslov
    userBlogs.forEach(b => {
        console.log(b.title);
    });
})

//3.Zadatak
/* Ispisati naslove onih blogova koji imaju više od 50 lajkova*/

users.forEach(u => {
    let userBlogs= u.blogs;//niz blogova korisnika

    userBlogs.forEach(b => {
        if(b.likes > 50) {
            console.log(b.title);
        }
    });
});

// Zadatak 2
users.forEach((user) => {
  if (user.age < 18) {
    console.log(user.username);
  }
});
// Zadatak 4
users.forEach((user) => {
  if (user.username === "JohnDoe") {
    user.logBlogs();
  }
});

//5. ZADATAK
users.forEach(user => {
    let sumaLikes = 0;

    user.blogs.forEach(blog => {    
        sumaLikes += blog.likes;
    });
    if(sumaLikes > 100) {
        console.log(user.username);
    }
});

//6.ZADATAK

/*Ispisati naslove onih blogova koji imaju
natprosečan broj pozitivnih ocena */
let suma = 0;
let br = 0; 

users.forEach(user => {
      user.blogs.forEach(blog => {
        suma += blog.likes;
        br++;
      });  

});
let prosek = suma / br;
/*
users.blogs.forEach(user => {
    user.blogs.forEach(blog => {
        if(blog.likes > prosek) {
            console.log(blog.title);
        }
    });
});
*/


//7. ZADATAK
//Ispisati naslove onih blogova koji imaju natprosečan broj 
//pozitivnih ocena i ispodprosečan broj negativnih ocena

let sumaLaj = 0;
let brblog = 0;

users.forEach(user => {
   
    user.blogs.forEach(b => {
        sumaLaj += b.likes;
        brblog++;
    })
    console.log(sumaLaj);
});
let pros = sumaLaj / brblog;

users.forEach(user => {

    user.blogs.forEach(b => {
        if(b.likes > pros) {
            console.log(`Nadprosecan je ${b.title}`);
        }
        else if(b.likes < pros){
            console.log(`Ispodprosela ${b.title}`);
        }
    })
});

let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-3, -4, -6, -7, -6, -4, -10, 0]
};
let dan2 = {
    datum: "2023/12/24",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [3, 4, 6, 7, 9, 8, 5, 3]
};
let dan3 = {
    datum: "2023/12/25",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [3, 4, 6, 6, 7, 5, 4, 3]
};


/*Napraviti arrow funksiju koja ispisuje datum u kome je 
najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
Ispisati prvi od njih
Ispisati poslednji od njih */

let dani = [dan1, dan2, dan3];

let najvisemerenja = dani[0].temperature.length;
let indexPrvog = 0;
let indexDrugog = 0;
/*
dani.forEach(d, index => {
    if(najvisemerenja < d.temperature.length) {
        najvisemerenja = d.temperature.length;
        indexPrvog = index;
    }    
    if(najvisemerenja >= d.temperature.length) {
        najvisemerenja = d.temperature.length;
        indexDrugog = index;
    } 
});
*/
//Ispisati svaki takav datum
dani.forEach(d => {
    if(d.temperature.length === najvisemerenja) {
        console.log(d.datum);
    }
});

//ispisati prvi od njih
console.log(dani[indexPrvog].datum);


//2.nacin
/*
for(let i = 0; i < dani.length; i++) {
    if(maxBrMerenja == dani[i].temperature.length) {
        console.log(dani[i].datum);
        break;
    }
}
*/


//ispisati psolednji 
//1.nacin
/*
console.log((dani[indexDrugog].datum));
//2. Nacin
for(let i= dani.length - 1; i >= 0; i--) {
    if(maxBrMerenja == dani[i].temperature.length) {
        console.log(dani[i].datum);
    }
}
*/
/* Napraviti arrow funksiju koja prebrojava i 
ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana 
i koliko je bilo oblačnih dana*/

// zadatak 4
let brNatprosecnihDana = niz => {
    let zbirTemp = 0;
    let brTemp = 0;
    let brDana = 0;
    niz.forEach(dan => {
        dan.temperature.forEach(t => {
            zbirTemp += t;
            brTemp++;
        });
    });
    let prosekUkupno = zbirTemp / brTemp;
    console.log(prosekUkupno);
    niz.forEach(dan => {
        let zbirLok = 0;
        let brLok = 0;
        dan.temperature.forEach(t => {
            zbirLok+= t;
            brLok++;
        });
        let prosLok = zbirLok / brLok;
        console.log(prosLok);
        if(prosLok > prosekUkupno) {
            brDana++;
        }
    });
    return brDana;
}
console.log(`Broj dana sa natprosecnom temperaturom: ${brNatprosecnihDana(dani)}`);