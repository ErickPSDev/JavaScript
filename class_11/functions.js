let divGeneral = document.createElement("div");

let titlePage = document.createElement('h1');
titlePage.innerText = 'Hola esto es un h1';

let subtitlePage = document.createElement ('h2');
subtitlePage.innerText = "Esto es un h2";

let img = document.createElement("img");
img.src = "./Images/iPhone.jpeg";

let imgDescription = document.createElement ("p");
imgDescription.innerText = "iPhones de la chamba";


console.log(titlePage.textContent);
console.log(subtitlePage.textContent);

let elementosHTML = [titlePage, subtitlePage, img, imgDescription];

// si sale .array aqui ignorarlo
elementosHTML.forEach(element => { 
    divGeneral.appendChild(element); 
});


console.log(titlePage.nextSibling);

console.log(titlePage.previousSibling);

document.body.appendChild(divGeneral);

console.log(document.body.childNodes);
console.log(divGeneral.childNodes);