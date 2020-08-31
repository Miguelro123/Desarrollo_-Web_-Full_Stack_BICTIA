/* parseInt y parseFloat */
let usu= "Pepito"
let pass= 234

function login() {
    
    let usuario= prompt("Ingrese un usuario");
    let contra= parseInt(prompt("Ingrese una contraseña")); /* Aquí ya ingreso como número */
    
    if (usuario == usu && contra == pass) {
        alert("Bienvenido " + usu)
    } else {
        alert("Usuario o contraseña incorrecto")
    }
}
/* const se utiliza para guardar elementos u etiquetas que no van a cambiar es un valor que no cambia!!! :)
let es una variable que si puede cambiar en este caso lo usamos para traer el valor ingresado dentro de una etiqueta puede cambiar !!! :) */
const eventoForm = document.getElementById("evento");

/* function tipo flecha (arrowFunction) tanto function (tradicional) como la function anónima pueden ser anónima */
let usuarioPrueba = "admin";
let passPrueba = "1234"
eventoForm.addEventListener("click", ()=>{
    event.preventDefault()
    let usuarioF = document.getElementById("usuForm").value;
    let passwordF = document.getElementById("contraForm").value;
    
    /*  */
    if(usuarioF === '' || passwordF === '') {
        swal ( "¡ debes diligenciar todos los campos " );
    }
    else if (usuarioF == usuarioPrueba && passwordF == passPrueba) {
        
        swal("Exitoso!", "ok!", "success");
        setTimeout(() => window.location = "./Calculadora/index.html", 2500)

    } else {
        swal("Fallido!", "usuario incorrecto!", "error");
    }

});
