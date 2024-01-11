////////////////////////////////////////////////////////////////////
// O B J E K A T  u  O B J E K T U
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

////////////////////////////////////////////////////////////////////
/*1.Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. 
Svaki blog u ovom nizu je objekat. */
//=============================================================

let user1 = {
    username: "John Doe",
    age: 30,
    blogs: [blog1, blog2]
};
let user2 = {
    username: "Zarka Smarka",
    age: 17,
    blogs: [blog3]
};

let user = [user1, user2];

////////////////////////////////////////////////////////////////////
/*2.Ispisati imena onih autora koji imaju ispod 18 godina. */
//=============================================================

let autori = (arry) => {
   
    arry.forEach(element => {
        if(element.age < 18) {
            console.log(element.username);
        }        
    });

};

autori(user);

////////////////////////////////////////////////////////////////////
/*3. Ispisati naslove onih blogova koji imaju više od 50 lajkova. */
//=============================================================

let lajkovi = (array) => {

    array.forEach(el => { // => prvo ulazi u niz User
        
        let element = el.blogs; // => tu kazemo da je svaki element niza jedan blog


        element.forEach(blog => { //=> zatim ulazimo u svaki blog
            
            if(blog.likes > 50) {
                console.log(blog.title);
            }
        });

    });
};
lajkovi(user);

////////////////////////////////////////////////////////////////////
/*4. Ispisati sve blogove autora čiji je username ’JohnDoe’. */
//=============================================================

let JohDoe = (array) => {

    array.forEach(element => {
        let noviUser = element.blogs;
        let neki = element.username
        

        noviUser.forEach(blog => {
            if(neki === "John Doe") {
                console.log(blog.title);
            }
        })
    });

};
JohDoe(user);

////////////////////////////////////////////////////////////////////
/*5. Ispisati imena onih autora koji imaju ukupno više od 100 
lajkova za blogove koje su napisali */
//=============================================================


//ZA SVE BLOGOVE: 

let viseOdSto = (array) => {
    array.forEach(autor => {
        let sumaLajkova = 0; 
        let imenaAutora = autor.username;
        let blogovi = autor.blogs; 

        blogovi.forEach(blog => {
            sumaLajkova += blog.likes;
        })
        //console.log(sumaLajkova);
        
        if(sumaLajkova > 100) {
            console.log(imenaAutora);
        }
    });
}

viseOdSto(user);

//ZA JEDAN BLOG: 

let imenaAutora = (array) => {
    
    array.forEach(element => {
        let imena = element.username;
        let blogovi = element.blogs;
        
        blogovi.forEach(blog => {
            if(blog.likes  > 50) {
                console.log(imena);
            }

        });
    });

}
imenaAutora(user);

////////////////////////////////////////////////////////////////////
/*6.Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena*/
//=============================================================

////////////////////////////////////////////////////////////////////
/*7. Ispisati naslove onih blogova koji imaju natprosečan broj 
pozitivnih ocena i ispodprosečan broj negativnih ocena*/
//=============================================================

let suma = 0;
let br = 0;


    user.forEach(element => {
        
        let blogNiz = element.blogs; 

            element.blogs.forEach(blog => {
                suma += blog.likes;
                br++;
                //console.log(suma);
            })
         
    });

    let prosek = suma /br;
    user.forEach(element => {
        element.blogs.forEach(blog => {
            if(prosek > blog.likes)  {
                console.log("da1!");
            }
            else {
                console.log("NE!");
            }
            
        });
    });


