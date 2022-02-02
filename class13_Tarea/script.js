// Variables

let divContainer = document.createElement("section");

let divCard01 = document.createElement("div");
let image01 = document.createElement("img");
image01.src = "./assets/cell-01.png";
image02.classList.add ("image_card") = ""

let name01 = document.createElement("p");
name01.innerText = "Xiaomi Black Shark 4 Pro";
let description01 = document.createElement("p");
description01.innerText =
  "En los nuevos Black Shark se sigue identificando a la legua el tipo de móvil por la apariencia y la tasa de refresco máxima de 144 Hz, con lo cual están de tú a tú con sus tivales más directos. Una pantalla de 6,67 pulgadas AMOLED con resolución de 2400 x 1080 píxeles. Además, la frecuencia táctil de hasta 720 Hz y el brillo máximo de 1.300 nit. En cuanto al procesador vemos el Snapdragon 888, el más potente de Qualcomm hasta la fecha. RAM ofreciendo variantes de 6, 8 ó 12 GB y en cuanto al almacenamiento, viendo que en el modelo base hay opción de 128 GB y 256 GB. La batería sí vemos igualdad de condiciones, con una pila de 4.500 mAh. Aquí lo que destaca es la carga rápida de hasta 120 W. En la cámara principal encontramos un sensor de 64 megapíxeles.";

let divCard02 = document.createElement("div");
let image02 = document.createElement("img");
image02.src = "./assets/cell-02.jpeg";
let name02 = document.createElement("p");
name02.innerText = "vivo iQOO 8 Pro";
let description02 = document.createElement("p");
description02.innerText =
  "Tiene un tamaño de pantalla de 6,78 pulgadas, se trata de un dispositivo de considerables dimensiones, lo que dificultará su manejo si no tenemos manos acordes a este tamaño. Teniendo en cuenta sus dimensiones, tenemos un dispositivo de 165mm de altura, 75,2mm de ancho y 9,2mm de grosor. Solo podemos decir que no nos gustan los móviles gruesos, ya que su uso no resulta agradable. Su peso es de 202 gramos, nada cómodo, si tenemos que llevarlo en nuestros bolsillos y pretendemos no sentirlo. Fijándonos los materiales utilizados observamos que hace uso de aleación de aluminio. Dispone de una pantalla Super AMOLED con resolución WQHD+(3200x1440 Pixel) Tiene una densidad de 517 píxeles por pulgada, se muestra muy capaz incluso en situaciones adversas. Hace uso de una pantalla prácticamente sin bordes, lo que proporciona al móvil un diseño actual consiguiendo una superficie útil del 89%. Tiene el lector de huellas integrado en pantalla. Podemos adquirirlo en los siguientes colores: negro y blanco, procesador Octa-Core Qualcomm Snapdragon 888+. Dispone de 8GB de memoria, esta cantidad de memoria permite ejecutar varias tareas sin preocuparnos de posibles ralentizaciones en el terminal, a lo anterior sumar una memoria interna de 256GB";

let divCard03 = document.createElement("div");
let image03 = document.createElement("img");
image03.src = "./assets/cell-03.jpeg";
let name03 = document.createElement("p");
name03.innerText = "ZTE nubia Red Magic 6 Pro";
let description03 = document.createElement("p");
description03.innerText =
  "El ZTE nubia Red Magic 6 Pro es la variante avanzada del smartphone para gaming Red Magic 6. Con una pantalla AMOLED de 6.8 pulgadas, el Red Magic 6 Pro cuenta con tasa de refresco de 165Hz y está potenciado por el procesador Snapdragon 888 junto con opciones de 12GB, 16GB y hasta 18GB de memoria RAM. En cuanto a fotografía, el Red Magic 6 Pro cuenta con la misma cámara triple de 64MP + 8MP + 2MP y el lente de 8 megapixels para la cámara selfie. La batería es de 4500 mAh, pero alcanza potencias de carga rápida de hasta 120W.";

divarray.forEach(Element) {


}



let card01 = [image01, name01, description01];
let card02 = [image02, name02, description02];
let card03 = [image03, name03, description03];

card01.forEach((card) => {
  divCard01.appendChild(card);
});
card02.forEach((card) => {
  divCard02.appendChild(card);
});
card03.forEach((card) => {
  divCard03.appendChild(card);
});

document.body.appendChild(divContainer);
divContainer.appendChild(divCard01);
divContainer.appendChild(divCard02);
divContainer.appendChild(divCard03);