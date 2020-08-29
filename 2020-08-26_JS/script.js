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

console.log(sumar(13, 13));


let hola= function() {
    return "hola, como estas"
}

console.log(hola());


/* CONDICIONALES- Flujo del programa a partir de una condición, depende de otra parte del codigo */

let color=prompt("Ingrese un color en Inglés");

if(color == "red") {
    document.write("<h1 style='color:red'> Si el color es red-rojo </h1>")
} else {
    document.write("<h1 style=' color: " + color + "' > No el color no es red, el color elegido fue " + color + "</h1>")
}

/*= ES DE ASIGNACIÓN
OPERADORES DE COMPARACION
== IGUALDAD
=== ESTRICTAMENTE IGUAL TIENES QUE SER EL MISMO TIPO DE DATO .
!= DIFERENTE O DISTINTO
!== NO IDENTICO, HASTA EL TIPO DE DATO DEBE SER DIFERENTE
< MENOR QUE 5 DESDE 4
<= MENOR O IGUAL QUE 5 DESDE 5
> MAYOR QUE 5 DESDE 6
>= MAYOR O IGUAL QUE 5 DESDE 5
*/

let year= 2021;
if (year !=2020) { /* ES DIFERENTE A 2020 */
    document.write("El año es diferente a 2020")
} else { /* SI ES IGUAL */
    document.write("Sí, el año es 2020")    
}

/* OPERADORES LOGICOS
&& AND -- y
|| or -- ó
! NOT - NEGACIÓN, QUE NO SE CUMPLE ALGO
*/

let nota= 3.7;
/* Creamos el rango enter 4.5 y 5 */
if (nota >= 4.5 && nota <= 5) {
    document.write("Felicidades has ganado la beca!!")
  /* Creamos un rango entre 4.499999 y 0 */
} else if(nota < 4.5 && nota >=0){
    document.write("Vuelve a intentarlo !!")
}else {
    document.write("Ingrese un número entre 0 y 5")
}

/* OR Al menos una condición se debe cumplir para que ejecute el bloque de código */

let pais= "peru";

if (pais== "colombia" || pais=="peru" || pais=="mexico"){
    document.write("<br> El áis pertenece a Latino América")
} else {
    document.write("A donde pertenece ese pais?")
}

// CALCULADORA

let operacion = prompt("Escoja una operación: suma, resta, multiplicacion, division");
let num1= parseFloat(prompt("Ingrese un número"));
let num2= parseFloat(prompt("ingrese un segundo número"));
/* La variable que evalua */
switch (operacion) {
    case "suma": /* Si es igual a suma */
        /* parseFloat- parseInt: Son métodos que permite modificar la tipología de un dato. Convirtiendolos a enteros o decimales. */
        document.write("El resultado de la suma es: " + (num1+num2))
        break;
    case "resta":
        document.write("El resultado de la resta es: " + (num1-num2))
        break; /* Se rompe la ejecución de esye boque de código y no sigue evaluando más cosas. */
    case "multiplicacion":
        document.write("El resultado de la multiplicacion es: " + (num1*num2))
        break; 
    case "division":
        document.write("El resultado de la division es: " + (num1/num2))
        break;        
    default: /* Si ninguno de los casos se cumple */
        document.write("Esta operación no existe")
        break;
}

/* Los casos de String se coloca entre "" y en los casos tipo number se deja SIN comillas, libre 1 2 3 */
