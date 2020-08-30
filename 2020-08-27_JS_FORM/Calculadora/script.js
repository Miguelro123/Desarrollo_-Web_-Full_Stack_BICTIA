const promedio= document.getElementById("promedio"); /* Lamamos el boton */
const respuesta= document.getElementById("respuesta");

promedio.addEventListener("click", ()=>{
    let num1= parseFloat(document.getElementById("num1").value); /* Me trae y almacena el valor del input */
    let num2= parseFloat(document.getElementById("num2").value);
    let num3= parseFloat(document.getElementById("num3").value);

    /* let resultado= ((num1 + num2 + num3)/3).toFixed(3); */
    let resultado= (num1 + num2 + num3)/3;

    /* respuesta.innerHTML= "<i>" + resultado + "</i>";*/
    respuesta.innerHTML= "<i>" + resultado.toFixed(3) + "</i>";
    /* respuesta.textContent */
})
