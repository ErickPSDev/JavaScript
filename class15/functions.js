//Primera declaracion de divs
document.body.style.margin = "0";
document.body.style.padding = "0";

let divFont = document.createElement("div");
divFontStyle(divFont);

let divCard = document.createElement("div");
divCardStyle(divCard);

let divCardTitle = document.createElement ("div");
let zona = document.createElement ("h1");
divCardTitleStyle(divCardTitle);

divCardTitle.appendChild (zona);

//Imagenes

let divImage = document.createElement ("div");
divImageStyle(divImage);

let image = document.createElement("img");
imageStyle (image);
divImage.appendChild (image);


//Etiquetas <p> de los valores a extaer
let divDescription = document.createElement

let divFeelLike = document.createElement("div");

let divClouds = document.createElement ("div");

let divHumidity = document.createElement ("div");


navigator.geolocation.getCurrentPosition (function(position){
    // se declaran las variables lat y long y  se leen datos, previos a la ejecución.
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    fetch (
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${api_key}&units=metric`
    ) // las URL se invocan con comillas inversas``.
    .then((Response) => response.json())
    .then ((data) => {
        let 
    })
    

    
});

 document.body.appendChild (divFont);