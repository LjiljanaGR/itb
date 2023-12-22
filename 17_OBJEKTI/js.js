let blog1 = {
    title: "HTML",
    content: "osnovni HTML tagovi",
    autor: "Jelena",
    likes: 10,
    comment: true
};

//ispis objekta
console.log(blog1);
console.log(typeof blog1);

//Ispis odredjene osobine iz objekta
console.log(blog1.title);
console.log(blog1.autor);
console.log(blog1[`content`]);//moze se koristiti sa tackom ili sa uglastim zagradama

//Izmena odredjene osobine
blog1.content = "HTML tabele";
console.log(blog1.content);
blog1['content'] = "HTML liste"; //drugi nacin za menjanje osobine
console.log(blog1.content);
blog1.likes = 7;
console.log(blog1);
blog1.comment = false;
console.log(blog1);

////////////////////////////////////////////////////////////////////////

let user1 = {
    username: "Jelena Matejic",
    age: 29,
    blogs: ["Naredba grananja" , "Nizovi" , "Objekti"],
    login: function() {
        console.log(`Ulogovani ste`);
        console.log(this);
    },
    logout: function() {
        console.log(`Izlogovani ste`)
    },
    logBlogs: function(){
        this.blogs.forEach(element => { // this se koristi kada se poziva properti ili metod unutar objekta!!
            console.log(element);
        });
    },
    hello: function() {
        return `Hello ${this.username}`;
    }
};
user1.login();
user1.logout();
user1.logBlogs();
console.log(user1.hello());
console.log(this);//kao da ispise body sekciju....nesto sto obuhvata sve elemente

user1.blogs.forEach(blog => {
    document.write(`<p>${blog}</p>`)
});

//ZADACI!

//1. Zadatak
//==========================================================================

let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [3, 4, 6, 7, 6, 4],
    //1.metoda Određuje i vraća prosečnu temperaturu izmerenu tog dana.

    prosecna: function() {
        let suma = 0;

        this.temperature.forEach(t => {
            suma += t;
        });
        return suma / this.temperature.length;
    },
    //2.metoda Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.

    brNatprosecnih: function() {
        let br = 0;
        let pros = this.prosecna();

        this.temperature.forEach(t => {
            if(t > pros) {
                br++;
            }
        });
        return br;
    },
    //3. metoda Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.

    maksimalna: function() {
        let max = this.temperature[0];

        this.temperature.forEach(t => {
            if(t > max) {
                max = t;
            }
        });
        return max;
    }, 

    maksimalneTemp: function() {
        let brTemp = 0;
        let maxi = this.maksimalna();

        this.temperature.forEach(t => {
            if(t == maxi) {
                brTemp++;
            }
        });
        return brTemp;
    }, 
    //4. metod

    //5. metoda

    iznadProsekaUVeciniDana: function() {
        let brDana = this.brNatprosecnih();
        
        if(brDana > this.temperature.length / 2 ) {
            return true;
        }
        else {
            return false;
        }
    },
    //6. metoda
    leden: function() {
//Preko forech petlje
        //let ledenDan = true;
        //this.temperature.forEach(t => {
          //  if(t > 0) {
            //    ledenDan = false;
            //}
        //});
        //return ledenDan;
//preko for petlje
        for(let i = 0; i <this.temperature.length; i++) {
            if(this.temperature[i] > 0) {
                return false;
            }
        }
        return true;
    }, 
    //8.metod

    nepovoljan: function() {
        for(let i = 0; i < this.temperature.length - 1; i++) {
            if(Math.abs (this.temperature[i] - this.temperature[i+1]) > 8) {
                return true;
            }
        }
        return false;
    }

};

console.log(`prosecna temperatura je ${dan1.prosecna()}`);
console.log(`Broj natprosecnih merenja u danu je ${dan1.brNatprosecnih()}`);
console.log(`${dan1.maksimalna()} je maksimalna temperatura`);
console.log(`${dan1.maksimalneTemp()} je bila maksimalna `);

console.log(`${dan1.iznadProsekaUVeciniDana()}`);
console.log(`Da li je dan bio leden? ${dan1.leden()}`);
console.log(`Da li je dan bio nepovoljan? ${dan1.nepovoljan()}`);