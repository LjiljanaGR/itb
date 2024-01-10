let generateImg = src => {
    let img = document.createElement('img');
    img.src = src;
    img.alt = "Alternativni tekst";
    img.style.whidth = "400px";
    return img;
}

export{generateImg};
