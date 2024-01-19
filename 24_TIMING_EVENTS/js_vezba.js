const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const ispisBrojac = document.querySelector(`#ispis`);

let brojac;

btn1.addEventListener("click", function(e) {
    e.preventDefault();

    brojac = setInterval(() => {
        //brojac++;
        ispis.innerHTML = `${brojac}`;
    }, 1000);
});

btn2.addEventListener("click", function(e) {
    e.preventDefault()
    clearInterval(brojac);
    brojac = undefined;
})

/*const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const input = document.getElementById("number");
console.log(input.value);
let clock;
btn1.addEventListener("click", function(e) {
    e.preventDefault();
    if (clock === undefined) {
        clock = setInterval(() => {
            input.value++;
        }, 1000);
    }
});
btn2.addEventListener("click", function(e) {
    e.preventDefault();
    clearInterval(clock);
    clock = undefined;
}); */
