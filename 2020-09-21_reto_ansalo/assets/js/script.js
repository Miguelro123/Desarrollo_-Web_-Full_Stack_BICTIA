const A1 = document.getElementById("A1");
const B2 = document.getElementById("B2");
const C3 = document.getElementById("C3");
const D4 = document.getElementById("D4");
const E5 = document.getElementById("E5");
const F6 = document.getElementById("F6");
const G7 = document.getElementById("G7");
const H8 = document.getElementById("H8");
const I9 = document.getElementById("I9");
const J0 = document.getElementById("J0");
const Limpio = document.getElementById("Limpio");

A1.addEventListener("click", () => {
    let actual = document.getElementById("letras").innerHTML;
    let actual1 = document.getElementById("numeros").innerHTML;
    if (actual.length == 0 && actual1.length == 0){
        document.getElementById("letras").innerHTML = actual + "A";
    }else if(actual1.length == 0 && actual.length == 10){
        document.getElementById("numeros").innerHTML = actual1 + "1";
    }else{
        alert("Debe ingresar la secuencia 'ABCDEFGHIJ' o '1234567890'")
    }
});

B2.addEventListener("click", () => {
    let actual = document.getElementById("letras").innerHTML;
    let actual1 = document.getElementById("numeros").innerHTML;
    if (actual.length == 1 && actual1.length == 0){
        document.getElementById("letras").innerHTML = actual + "B";
    }else if(actual1.length == 1 && actual.length == 10){
        document.getElementById("numeros").innerHTML = actual1 + "2";
    }else{
        alert("Debe ingresar la secuencia 'ABCDEFGHIJ' o '1234567890'")
    }
});

C3.addEventListener("click", () => {
    let actual = document.getElementById("letras").innerHTML;
    let actual1 = document.getElementById("numeros").innerHTML;
    if (actual.length == 2 && actual1.length == 0){
        document.getElementById("letras").innerHTML = actual + "C";
    }else if(actual1.length == 2 && actual.length == 10){
        document.getElementById("numeros").innerHTML = actual1 + "3";
    }else{
        alert("Debe ingresar la secuencia 'ABCDEFGHIJ' o '1234567890'")
    }
});

D4.addEventListener("click", () => {
    let actual = document.getElementById("letras").innerHTML;
    let actual1 = document.getElementById("numeros").innerHTML;
    if (actual.length == 3 && actual1.length == 0){
        document.getElementById("letras").innerHTML = actual + "D";
    }else if(actual1.length == 3 && actual.length == 10){
        document.getElementById("numeros").innerHTML = actual1 + "4";
    }else{
        alert("Debe ingresar la secuencia 'ABCDEFGHIJ' o '1234567890'")
    }
});

E5.addEventListener("click", () => {
    let actual = document.getElementById("letras").innerHTML;
    let actual1 = document.getElementById("numeros").innerHTML;
    if (actual.length == 4 && actual1.length == 0){
        document.getElementById("letras").innerHTML = actual + "E";
    }else if(actual1.length == 4 && actual.length == 10){
        document.getElementById("numeros").innerHTML = actual1 + "5";
    }else{
        alert("Debe ingresar la secuencia 'ABCDEFGHIJ' o '1234567890'")
    }
});

F6.addEventListener("click", () => {
    let actual = document.getElementById("letras").innerHTML;
    let actual1 = document.getElementById("numeros").innerHTML;
    if (actual.length == 5 && actual1.length == 0){
        document.getElementById("letras").innerHTML = actual + "F";
    }else if(actual1.length == 5 && actual.length == 10){
        document.getElementById("numeros").innerHTML = actual1 + "6";
    }else{
        alert("Debe ingresar la secuencia 'ABCDEFGHIJ' o '1234567890'")
    }
});

G7.addEventListener("click", () => {
    let actual = document.getElementById("letras").innerHTML;
    let actual1 = document.getElementById("numeros").innerHTML;
    if (actual.length == 6 && actual1.length == 0){
        document.getElementById("letras").innerHTML = actual + "G";
    }else if(actual1.length == 6 && actual.length == 10){
        document.getElementById("numeros").innerHTML = actual1 + "7";
    }else{
        alert("Debe ingresar la secuencia 'ABCDEFGHIJ' o '1234567890'")
    }
});

H8.addEventListener("click", () => {
    let actual = document.getElementById("letras").innerHTML;
    let actual1 = document.getElementById("numeros").innerHTML;
    if (actual.length == 7 && actual1.length == 0){
        document.getElementById("letras").innerHTML = actual + "H";
    }else if(actual1.length == 7 && actual.length == 10){
        document.getElementById("numeros").innerHTML = actual1 + "8";
    }else{
        alert("Debe ingresar la secuencia 'ABCDEFGHIJ' o '1234567890'")
    }
});

I9.addEventListener("click", () => {
    let actual = document.getElementById("letras").innerHTML;
    let actual1 = document.getElementById("numeros").innerHTML;
    if (actual.length == 8 && actual1.length == 0){
        document.getElementById("letras").innerHTML = actual + "I";
    }else if(actual1.length == 8 && actual.length == 10){
        document.getElementById("numeros").innerHTML = actual1 + "9";
    }else{
        alert("Debe ingresar la secuencia 'ABCDEFGHIJ' o '1234567890'")
    }
});

J0.addEventListener("click", () => {
    let actual = document.getElementById("letras").innerHTML;
    let actual1 = document.getElementById("numeros").innerHTML;
    if (actual.length == 9 && actual1.length == 0){
        document.getElementById("letras").innerHTML = actual + "J";
    }else if(actual1.length == 9 && actual.length == 10){
        document.getElementById("numeros").innerHTML = actual1 + "0";
        alert("Reto completado");
    }else{
        alert("Debe ingresar la secuencia 'ABCDEFGHIJ' o '1234567890'")
    }
});

Limpio.addEventListener("click", () => {
    let actual = document.getElementById("letras").innerHTML = "";
    let actual1 = document.getElementById("numeros").innerHTML = "";
});


const retro = document.getElementById("retro");
const dark = document.getElementById("dark");

dark.addEventListener('click', ()=>{
    
    if (dark.checked == true){
        localStorage.setItem("colorTema", 'dark')
        const temaactual = localStorage.getItem('colorTema')
        document.getElementById('container').classList.remove(temaactual)
        document.getElementById('container').classList.add('dark')
    } else {
        document.getElementById('container').classList.remove('dark')
        localStorage.setItem("colorTema", '')
    }
});

retro.addEventListener('click', ()=>{
    if (retro.checked == true){
        localStorage.setItem("colorTema", 'retro')
        const temaactual = localStorage.getItem('colorTema')
        document.getElementById('container').classList.remove(temaactual)
        document.getElementById('container').classList.add('retro')
    } else {
        document.getElementById('container').classList.remove('retro')
        localStorage.setItem("colorTema", '')
    }
});
