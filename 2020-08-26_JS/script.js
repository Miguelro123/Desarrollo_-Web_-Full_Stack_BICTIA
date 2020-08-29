/* Var me permite realizar modificaciones a las variables. Al igual que let.
Const- Constante que no permite cambiar su valor y se debe asignarle el valor una vez declarada */

//ES5- GLOBAL

var nombre5= "Maria Perez";

nombre5= "Maria Sanchez"; /* Me permite modificar su valor */
console.log(nombre5);

//ES6
let nombreLet= "Laura Martinez"; /* Let puede ser modificado */
nombreLet = "Laura Perez";
console.log(nombreLet);

const nombre6= "Pedro Sanchez"; /* Al declarar su valor no puede ser modificado y el navegador nos presentara error */
nombre6= "Pedro Garcia"; 


/* Alcance global - Alcance Local */

/* GLOBAL - se puede modificar en cualquier seccion del codigo */

var global= 0; /* Entra como 0 */

function varGlobal(){
    for (var i = 0; i < 5; i++) {
        global = 1; /* En cada vuelta el valor de la variable i se le va asignar a la global */
    }
}
varGlobal();
console.log(global) /* Nos imprime 4 */

/* var LOCAL- es declarado dentro de un bloque de codigo */

function varLocal() {
    var local= "Hola mundo!!"; /* ESTO YA ES UNA VARIABLE LOCAL */
    console.log(local)
}

varLocal();
/* console.log(local) Nos arroja un error, ya que es una variable local */

var x=90; //global
function varPrueba() {
    var x = 70;
    if (true) { /* Se cumple la función */
        var x= 50;
        console.log(x); // Aquí aparece 50
    }
    console.log(x); // Aquí aparece 50
}
console.log(x)


function letPrueba() {
    let y = 30;
    if (true) {
        let y = (30*2); // Variable diferente, solo se queda entre sus llaves. Solo existe dentro de estas llaves-bloque
        console.log("La multiplicación dio: " + y); // Me imprime 60
    }
    console.log("El valor inicial es: " + y); /* Me imprime 30 */
}

/* Let: Se limita al bloque (scope) o su alcance.
CONST: No permite una vez declarado o asignado un valor.
VAR: Modifica la variable sin importar su bloque o alcance. */

let variable= document.getElementById("variable")
function name(params) {

}
variable.onclick= function () {
     nombreFuncion()
}

/* EVENT */
variable.addEventListener("click", ()=>{

})

/* FUNCIONES!! */

/* Función tradicional, se define con la palabra reservada function */
function soyUnaFuncion(num1, num2) {
    /* Retorna un valor o el resultado del proceso. Finaliza la ejecución del function */    
    return num1+num2;
}

console.log(soyUnaFuncion(5,3)); /* Me va arrojar la estructura de la función */

/* FUNCIONES ANONIMAS */

/* Se utilizan directamete sin un nombre,
En el caso de función flecha */

let sumar=(a,b)=> a+b;
console.log(sumar(10, 15));

let hola= function() {
        return "hola, como estas"
}
console.log(hola());

// CONDICIONALES- flujo del programa dependiendo de unas condiciones que se cumplen

let color=prompt("INgrese el color en INgles");

if(color == "red") {
    document.write("<h1 style='color:red'> Si el color es red-rojo </h1>")
} else {
    document.write("<h1 style= ' color: " + color + "' > No el color es red, el color elegido fue " + color + "</h1>")
}

// OPERADORES DE COMPARACION

// == IGAULDAD
// === ESTRICTAMENTE IGUAL TIENES QUE SER EL MISMO TIPO DE DATO 
// != DIFERENTE O DISTINTO
// !== NO IDENTICO, HASTA EL TIPO DE DATO DEBE SER DIFERENTE

// CALCULADORA

let operacion = "suma";
switch (operacion) {
    case "suma":
        let num1= parseFloat(prompt("ingrese un numero"))
        let num2= parseFloat(prompt("ingrese segundo numero"))
        document.write("El resultado de la suma es: " + (num1+num2))
        break;
    case "resta":
        let num1= parseFloat(prompt("ingrese un numero"))
        let num2= parseFloat(prompt("ingrese segundo numero"))
        document.write("El resultado de la resta es: " + (num1-num2))
        break; 
    case "multiplicar":
        let num1= parseFloat(prompt("ingrese un numero"))
        let num2= parseFloat(prompt("ingrese segundo numero"))
        document.write("El resultado de la multiplicacion es: " + (num1*num2))
        break; 
    case "dividir":
        let num1= parseFloat(prompt("ingrese un numero"))
        let num2= parseFloat(prompt("ingrese segundo numero"))
        document.write("El resultado de la division es: " + (num1/num2))
        break;        
    default:
        break;
}
