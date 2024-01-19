const request = new XMLHttpRequest();

request.addEventListener("readystatechange", function(){
    if(request.readyState == 4 && request.status == 200) {
        //console.log(request.responseText);
        let data = JSON.parse(request.responseText);
        console.log(data);
        console.log(data[5]);
        console.log(data[5].title);
    }
    else if (request.readyState == 4){
        console.log('desila se greska!');
    }
})

request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();

