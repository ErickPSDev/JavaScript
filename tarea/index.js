console.log("Bienvenido Al Sistema De Registro y Control Escolar" + "\n -- A continuación proceda con el registro del alumno --");
//Variables
let name = prompt("Por favor introduce el nombre completo");
let surname = prompt("Por favor introduce el primer apellido");
let lastname = prompt("Por favor introduce el segundo apellido");
let age = prompt("Por favor introduce la edad en números");
let address = prompt("Por favor introduce la dirección completa del domicilio");
let group = prompt("Por favor introduce el grupo al que pertenece el alumno");
let students = [];
let grade = [];
let average = [];
let firstId, secondId, thirdId, fullId;
let español, matematicas, cienciasNaturales, deportes, inglés, artesVisuales = 0;
let averageScore = 0;

function id() {
  firstId = name.substring(0, 2); //Extrae los 2 primeros caracteres del nombre, que conforman la primera sección del ID (matrícula)
  secondId = surname.substring(0, 2);//Extrae los 2 primeros caracteres del primer apellido, que conforman la segunda sección del ID (matrícula)
  thirdId = lastname.substring(0, 2);//Extrae los 2 primeros caracteres del segundo apellido, que conforman la tercera sección del ID (matrícula)
  fullId = (firstId + secondId + thirdId + age + group).toUpperCase();
  console.log('La matricula del alumno registrado es: \n' + fullId);
  // Then the alumn id (matricula) is printed by calling all the variables and transformed that separated strings to uppercase, for a better presentation.
  students.push([name, surname, lastname, age, address, group]);
  //element added to array students .
}
console.log(id());
console.log('El número de estudiantes registrados es:\n' + students.length); // Prints the number of students registered.

function studentScore() {
  console.log('A continuación ingrese las calificaciones de las materias, se admiten valores de 0 a 10'); // ask the score by class

  español = parseFloat(validation(prompt('Español: ')));
  matematicas = parseFloat(validation(prompt('Matematicas: ')));
  cienciasNaturales = parseFloat(validation(prompt('Ciencias Naturales: ')));
  deportes = parseFloat(validation(prompt('Deportes: ')));
  ingles = parseFloat(validation(prompt('Inglés: ')));
  artesVisuales = parseFloat(validation(prompt('Artes Visuales: ')));
  grade.push[español, matematicas, cienciasNaturales, deportes, ingles, artesVisuales]; // added to array grade
  averageScore = averageCalc(español, matematicas, cienciasNaturales, deportes, ingles, artesVisuales);
  average.push(averageScore);
  console.log('Promedio:' + averageScore);
}

function validation(score) { //validate that the input score is between the range 0 to 10.
  if (score >= 0 && score <= 10) {
    return score;
  } else {
    do {
      score = 0;
      score = prompt("Error: El valor ingresado debe ser un número entre 0 y 10: ")
    } while (score < 0 || score > 10);
    return score;
  }
}

function averageCalc(a, b, c, d, e, f) { // Function to get the average score.
  return (a + b + c + d + e + f) / 6;
}