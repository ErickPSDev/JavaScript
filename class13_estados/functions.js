console.log("Practica clase 14");


let input = document.createElement("input");
input.type = "text";
input.value = "Esto es un texto por defecto";
input.style.margin ="10px";

input.onselect = () => {

}

input.oncopy = () => {
    console.log ("Has activado el evento 'oncopy'");
};
