let x = 5; // pomocna promjenljiva

//............

let rezultat = x + 5; //promjenljiva koja pamti rezultat

let racunaj = () => {
    console.log(rezultat +10); //funkcija koja se trazi od mene
}

export {rezultat, racunaj}; //sta nudimo ostalima