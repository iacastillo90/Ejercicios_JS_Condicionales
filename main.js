//Ejercicio 1 -- Realizar un programa que reciba 2 números y que imprima por consola si el primer
console.log("Ejercicio 1");

let numero_1 = prompt("Ingrese el primer número:");
let numero_2 = prompt("Ingrese el segundo número:");

function numeroMayor(p1, p2) {
  if (p1 > p2) {
    console.log("El primer número es mayor que el segundo.");
  } else if (p1 < p2) {
    console.log("El primer número es menor que el segundo.");
  } else {
    console.log("Los números son iguales.");
  }
}

numeroMayor(numero_1, numero_2);


//Ejercicio 2 -- Realizar un programa que reciba 2 números y que imprima por consola si los números
//son iguales o si son diferentes.
console.log("Ejercicio 2");

let Numero1 = prompt("Ingrese el primer número:");
let Numero2 = prompt("Ingrese el segundo número:");

function igualesDiferentes(num1, num2) {
  if (num1 === num2) {
    console.log("Los números son iguales.");
  } else {
    console.log("Los números son diferentes.");
  }
}

igualesDiferentes(Numero1, Numero2);


//Ejercicio 3 -- Realizar un programa que reciba 2 números y que imprima por pantalla cual de los 3
//es el mas chico.
console.log("Ejercicio 3");

let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:");

function esMasChico(numero1, numero2) {
  if (numero1 === numero2) {
    console.log("Ambos números son iguales.");
  } else if (numero1 < numero2) {
    console.log("El número " + numero1 + " es el más chico.");
  } else {
    console.log("El número " + numero2 + " es el más chico.");
  }
}

esMasChico(numero1, numero2);


//Ejercicio 4 -- Realizar un programa que reciba 3 números y que imprima por pantalla cual de los es 
//el mas chico
console.log("Ejercicio 4")
function encontrarElMasChico(num1, num2, num3) {

    let menor;

    if (num1 < num2 && num1 < num3) {
        menor = num1;
    } else if (num2 < num1 && num2 < num3) {
        menor = num2;
    }
    else {
        menor = num3;
    }
    return menor;
}

encontrarElMasChico(2, 3, 2);

//Ejercicio 5 -- Realizar un programa que reciba 2 objetos representando personas con las propiedades:
// *Nombre
// *Edad
// *Altura
//y que imprima por pantalla:
// 1. Cual de las dos personas es la más alta
// 2. Cual es la de mayor edad.
console.log("Ejercicio 5");

let persona1 = {
    nombre: prompt("Ingrese el nombre de la persona 1:"),
    edad: prompt("Ingrese la edad de la persona 1:"),
    altura: prompt("Ingrese la altura de la persona 1 (en cm):")
};

let persona2 = {
    nombre: prompt("Ingrese el nombre de la persona 2:"),
    edad: prompt("Ingrese la edad de la persona 2:"),
    altura: prompt("Ingrese la altura de la persona 2 (en cm):")
};

function mayorEdad(persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        console.log(persona1.nombre + " es mayor de edad.");
    } else if (persona1.edad < persona2.edad) {
        console.log(persona2.nombre + " es mayor de edad.");
    } else {
        console.log("Ambas personas tienen la misma edad.");
    }
}

function masAlto(persona1, persona2) {
    if (persona1.altura > persona2.altura) {
        console.log(persona1.nombre + " es más alto/a.");
    } else if (persona1.altura < persona2.altura) {
        console.log(persona2.nombre + " es más alto/a.");
    } else {
        console.log("Ambas personas tienen la misma altura.");
    }
}

console.log("Datos ingresados:");
console.log("Persona 1:", persona1);
console.log("Persona 2:", persona2);

mayorEdad(persona1, persona2);
masAlto(persona1, persona2);


//Ejercicio 6 -- Realizar un programa que permita ingresar por pantalla:
// *Tu nombre
// *Tu edad
// *Tu altura
// *Tu visión
// y determine si estás capacitado para conducir, para saber esto la persona deberá
// * Tener edad minima 18 años
// * Medir mas de 150 cm
// * Tener una visión como minimo de 8 de 10.
console.log("Ejercicio 6");

let nombre = prompt("Ingrese su nombre:");
let Edad = prompt("Ingrese su edad:");
let altura = prompt("Ingrese su altura en cm:");
let vision = prompt("Ingrese su visión (de 1 a 10):");

function verificarCapacidadConducir(edad, altura, vision) {
  if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log("Estás capacitado para conducir.");
  } else {
    console.log("No estás capacitado para conducir.");
  }
}

verificarCapacidadConducir(Edad, altura, vision);


//Ejercicio 7 -- Realizar un programa que permia el ingreso por pantalla de los siguientes datos:
// * Nombre del cliente
// * Pase (vip o normal)
// * Si posee entrada (si o no)
// Las personas que posean:
// Tu mismo nombre tiene ingreso libre (mostrar un mensaje de bienvenida) ó
//Pase Vip tiene ingreso libre (mostrar un mensaje de bienvenida)
//Y por ultimo en caso de :
//No tener el mismo nombre y no tener un pase vip y no tener entrada, preguntar ¿desea comprar?
//en caso:
//negativo (mostrar mensajes de despedida)
//afirmativo preguntar dinero disponible, si posee:
//$1000 o mas, (mostrar un mensaje venta exitosa y de bienvenida)
//Menos de $1000 (mostrar un mensaje de rechazo de venta)
console.log("Ejercicio 7");

let nombreDelCliente = prompt("Ingrese el nombre del cliente: ");
let pase = prompt("Tipo de pase (vip o Normal): ");
let poseeEntrada = prompt("¿Posee entrada? (si o no): ");

if (nombreDelCliente === "Ivan" || pase === "vip") {
  console.log("¡Bienvenido/a! Puede ingresar libremente.");
} else if (poseeEntrada === "si") {
  let utilizarEntrada = prompt("¿Desea utilizar la entrada? (si o no): ");
  if (utilizarEntrada === "si") {
    console.log("¡Bienvenido/a! Puede ingresar utilizando su entrada.");
  }
} else {
  let deseaComprar = prompt("¿Desea comprar una entrada? (si o no): ");
  if (deseaComprar === "si") {
    let dineroDisponible = prompt("Ingrese el dinero disponible: ");
    if (dineroDisponible >= 1000) {
      console.log("¡Venta exitosa y bienvenida! Puede ingresar.");
    } else {
      console.log("Lo sentimos, no cumple con el monto mínimo para la compra.");
    }
  } else {
    console.log("Gracias, vuelva pronto.");
  }
}


//Ejercicio 8 -- Realizar un juego de adinanza estableciendo un valor entre 1 y 10 en una variable
//llamando numeroIncognita y que permita en 3 intentos adivinar el número. El usuario
//deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
//guardar en una variable llamada numeroIngresado, y en cada intento deberás
//mostrarle un mensaje al usuario diciendo: "El numero ingresado es mayor, "vuelve a 
//intentarlo " o "el numero ingresado es menor, vuelve a intentarlo" o en caso de adivinar, 
//un mensaje que diga: "Ganaste, has adivinado el número." No te preocupes si usas mucho 
//codigo repedido, mas adelante verás como realizar este juego de manera más eficiente.
console.log("Ejercicio 8");

let numeroIncognita = 6;
let intentos = 3;

while (intentos > 0) {
  let numeroIngresado = prompt("Adivina el número: del 1 al 10");
  
  if (numeroIngresado > numeroIncognita) {
    console.log("El número ingresado es mayor. Vuelve a intentarlo.");
  } else if (numeroIngresado < numeroIncognita) {
    console.log("El número ingresado es menor. Vuelve a intentarlo.");
  } else {
    console.log("¡Ganaste! Has adivinado el número.");
    break;
  }
  
  intentos--;
}

if (intentos === 0) {
  console.log("Lo siento, has agotado tus intentos. El número correcto era " + numeroIncognita + ".");
}


//Ejercicio 9 -- Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años),
//adolescente (13 a 18 años), un mayor joven (19 a 45 años) o un anciano (más de 45 años), y em caso de 
//de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.
console.log("Ejercicio 9");

let edad = prompt("Ingresa tu edad");

function edadMayor(edad) {
  if (edad > 100) {
    console.log("¿Estás seguro de que esa es tu edad?");
  } else if (edad <= 12) {
    console.log("Eres un infante");
  } else if (edad <= 18) {
    console.log("Eres un adolescente");
  } else if (edad <= 45) {
    console.log("Eres un adulto joven");
  } else {
    console.log("Eres un anciano");
  }
}

edadMayor(edad);

//Ejercicio 10 -- Crear un programa que permita el ingreso de "PIEDRA", "PAPEL" O "TIJERAS" a 2
//jugadores y muestre en pantalla cuál de los 2 ha ganado o si han empatado. En caso de algún ingreso 
//incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.
console.log("Ejercicio 10");

function jugar(jugador1, jugador2) {
  const opcionesValidas = ["PIEDRA", "PAPEL", "TIJERAS"];

  if (!opcionesValidas.includes(jugador1) || !opcionesValidas.includes(jugador2)) {
    return "Uno de los jugadores hizo trampa";
  } else if (jugador1 === jugador2) {
    return "Empate";
  } else if (
    (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
    (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
    (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
  ) {
    return "Jugador 1 ha ganado";
  } else {
    return "Jugador 2 ha ganado";
  }
}

let jugador1 = prompt("Jugador 1, ingresa tu opción (PIEDRA, PAPEL o TIJERAS):");
let jugador2 = prompt("Jugador 2, ingresa tu opción (PIEDRA, PAPEL o TIJERAS):");

let resultadoGame = jugar(jugador1, jugador2);
console.log(resultadoGame);



//Ejercicio 11 -- Realizar un programa que permita el ingreso de un color y utlizando "switch" mostrar
//por pantalla los siguientes mensajes según las opciones:
// * Blanco o Negro: Falta de color.
// * Verde: El color de la naturaleza.
// * Azul: El color del agua.
// * Amarillo: El color del sol.
// * Rojo: El color del fuego.
// * Marrón: El color de la tierra.
// * y para cualquier otro valor: Excelente elección, no lo teníamos pensado.
console.log("Ejercicio 11");

let color = prompt("Ingrese un color:");

switch (color) {
  case 'Blanco':
  case 'Negro':
    console.log("Falta de color");
    break;
  case 'Verde':
    console.log("El color de la naturaleza");
    break;
  case 'Azul':
    console.log("El color del agua");
    break;
  case 'Amarillo':
    console.log("El color del sol");
    break;
  case 'Rojo':
    console.log("El color del fuego");
    break;
  case 'Marron':
    console.log("El color de la tierra");
    break;
  default:
    console.log("Excelente elección, no lo teníamos pensado");
    break;
}

//Ejercicio 12 -- Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
//Según sea la operación ingresada (suma, resta, multiplicacición, división) el programa deberá mostrar
//en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación
//siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.
console.log("Ejercicio 12");

function calcularOperacion() {
  let valor1 = prompt("Ingrese el primer valor:");
  let valor2 = prompt("Ingrese el segundo valor:");
  let operacion = prompt("Ingrese la operación (suma, resta, multiplicación, división):");

  let resultado;
  let mensaje;

  switch (operacion) {
    case "suma":
      resultado = valor1 + valor2;
      mensaje = "El resultado de la suma es: " + resultado;
      break;
    case "resta":
      resultado = valor1 - valor2;
      mensaje = "El resultado de la resta es: " + resultado;
      break;
    case "multiplicación":
      resultado = valor1 * valor2;
      mensaje = "El resultado de la multiplicación es: " + resultado;
      break;
    case "división":
      if (valor2 !== 0) {
        resultado = valor1 / valor2;
        mensaje = "El resultado de la división es: " + resultado;
      } else {
        mensaje = "ERROR: No se puede dividir entre cero (0).";
      }
      break;
    default:
      mensaje = "Operación no válida.";
  }

  console.log(mensaje);
}

calcularOperacion();


//Ejercicio 13 --Crear un programa que permita ingresar todos los datos de tu documento nacional de
//identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y preguntate si están 
//correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y 
//mostrarlos por consola con console.table() más un mensaje de registro exitoso, en caso de que la persona 
//rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.
console.log("Ejercicio 13");

function ingresarDatosDNI() {
  let numero = prompt("Ingrese el número de DNI:");
  let nombre = prompt("Ingrese su nombre:");
  let apellido = prompt("Ingrese su apellido:");
  let fechaNacimiento = prompt("Ingrese su fecha de nacimiento:");

  console.log("Número de DNI: " + numero);
  console.log("Nombre: " + nombre);
  console.log("Apellido: " + apellido);
  console.log("Fecha de nacimiento: " + fechaNacimiento);

  let confirmacion = prompt("¿Los datos ingresados son correctos?");

  if (confirmacion) {
    let dni = {
      numero: numero,
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento
    };
    console.log("Registro exitoso. Los datos ingresados son:");
    console.table(dni);
  } else {
    console.log("Vuelva a intentarlo en 1 mes.");
  }
}

ingresarDatosDNI();







