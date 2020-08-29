const suma= document.getElementById("Sumar"); 
const resta= document.getElementById("Restar"); 
const multiplicacion= document.getElementById("Multiplicar"); 
const division= document.getElementById("Dividir"); 

function reset() {
    num1=parseFloat(document.getElementById("num1").value = "");
    num2=parseFloat(document.getElementById("num2").value = "");
}

function setValue() {
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    return[num1, num2];
} 
suma.addEventListener("click", ()=>{
    
    [num1,num2]=setValue();
    let ans= num1 + num2;
    reset();
    document.getElementById("res").value = ans;
})
resta.addEventListener("click", ()=>{
    [num1,num2]=setValue();
    let ans= num1 - num2;
    reset();
    document.getElementById("res").value = ans;
    
})
division.addEventListener("click", ()=>{
    [num1,num2]=setValue();
    let ans= num1 / num2;
    reset();
    document.getElementById("res").value = ans;
})
multiplicacion.addEventListener("click", ()=>{
    [num1,num2]=setValue();
    let ans= num1 * num2;
    reset();
    document.getElementById("res").value = ans;
   
})
