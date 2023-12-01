let a = -5;
let b = 5;

if ( a > b ) {
    console.log("a je vece od b");
} 
else{
    console.log("a nije vece od b");
}
/*Za unetu zapreminu proizvoda, u paragrafu zelenom bojom ispisati “Pack up”, ukoliko je proizvod zapremine veće ili jednake 100ml. 
U suprotnom u paragrafu crvenom bojom ispisati “Throw away”.
*/
let zapremina = 70;
if(zapremina <= 100) {
    document.write("<p style='color: green;'>Pack up!</p>");
}
else {
    document.write("<p style='color: red;'>Throw away!</p>");
}

/* Za preuzetu godinu sa računara i unetu godinu rođenja
 izračunati da li osoba ove godine postaje punoletna. 
 Ukoliko postaje, prikazati sliku torte sa brojem 18.
  U suprotnom, izračunati još koliko godina je preostalo
   do punoletstva i ispisati tu informaciju u paragrafu.
 */

   let datum = new Date();
   let godina = datum.getFullYear();
   let godinaRodj = 2015;
   let ima_godina = godina - godinaRodj;


   if (ima_godina >= 18) {
    console.log("Osoba je punoletna");
    document.write('<img src=torta.jpg');
   }
   else {
    console.log("Osoba je maloletna");
    let ostalo_do_punoletstva = 18 - ima_godina;
    document.write(`<p>Do punoletstva ostalo je ${ostalo_do_punoletstva} godina</p>`);

   }

   /*Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. 
Ukoliko je temperatura nula, računati kao temperaturu u plusu.
*/

let t = 15;
if(t >= 0) {
let paragraf = document.getElementById('temperatura');//Preuzmem paragraf iz HTML po njegovom IDu
paragraf.innerHTML = 'temperatura je u plusu';//Upisem u paragraf preko innerHTML
paragraf.style.color = 'red';
}
else {
    let.paragraf = document.getElementById('temperatura');
    paragraf.innerHTML = 'temperatura je u minusu';
    paragraf.style.color = 'blue';
}


/*U odnosu na preuzeto trenutno vreme sa računara, u paragrafu ispisati da li je trenutno jutro ili popodne.
Popodne je kada prođe 12:00 sati, ne računajući i to vreme.*/
let vreme = new Date();
let sati = vreme.getHours();
if ( sati >= 12 ){
    document.write('PoPodne');
} else {
    document.write('Jutro');
}
  

   /*U odnosu na pol koji je korisnik uneo u promenljivu  
(“m” za muški pol ili “z” za ženski pol)  na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu).*/ 
let pol = `m`;
if (pol === `m`){
    document.write(`<img src="https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png" alt="man avatar">`);
} else {
    document.write(`<img src="https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg" alt="woman avatar">`);