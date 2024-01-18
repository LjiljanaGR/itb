let lista = document.querySelectorAll('li');

lista.forEach(element => {
    element.addEventListener('click' , () => {
        //1.nacin
        if(element.style.textDecoration == "line-through") {
            element.style.textDecoration = "none";
        }
        else {
            element.style.textDecoration = "line-through";
        }
    }) 
})



