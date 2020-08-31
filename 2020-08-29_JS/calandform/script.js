const inputName = document.getElementById('inputName')
const inputApellido = document.getElementById('inputApellido')
const inputCorreo = document.getElementById('inputCorreo')
const inputPassword = document.getElementById('inputPassword')
const inputCelular = document.getElementById('inputCelular')
const nombreMensaje0 = document.getElementById('nombreMensaje0')
const nombreMensaje1 = document.getElementById('nombreMensaje1')
const nombreMensaje2 = document.getElementById('nombreMensaje2')
const nombreMensaje3 = document.getElementById('nombreMensaje3')
const nombreMensaje4 = document.getElementById('nombreMensaje4')

function validarFormulario(event) {
    event.preventDefault()
    if (inputName.value == ""){
        swal("Error", "Llena el campo del 'Nombre' por favor", "error");
        inputName.classList.add('alert')
        nombreMensaje0.innerText = "Llena el campo del 'Nombre' por favor"
        inputName.placeholder = 'Ej. Ana Elena'
    }
    
    else if (inputApellido.value == ""){
        swal("Error", "Llena el campo del 'Apellido' por favor", "error");
        inputApellido.classList.add('alert')
        nombreMensaje1.innerText = "Llena el campo del 'Apellido' por favor"
        inputApellido.placeholder = 'Ej. Garcia Perez'
    }

    else if (inputCorreo.value == ""){
        swal("Error", "Llena el campo del 'Correo' por favor", "error");
        inputCorreo.classList.add('alert')
        nombreMensaje2.innerText = "Llena el campo del 'Correo' por favor"
        inputCorreo.placeholder = 'Ej. Anonimo@gmail.com'
    }

    else if (inputPassword.value == ""){
        swal("Error", "Llena el campo del 'Password' por favor", "error");
        inputPassword.classList.add('alert')
        nombreMensaje3.innerText = "Llena el campo del 'Password' por favor"
        inputPassword.placeholder = 'Ej. Clave2020'
    }

    else if (inputCelular.value == ""){
        swal("Error", "Llena el campo del 'Celular' por favor", "error");
        inputCelular.classList.add('alert')
        nombreMensaje4.innerText = "Llena el campo del 'Celular' por favor"
        inputCelular.placeholder = 'Ej. 3146297856'
    }

    else {
        // swal("Good job!", "You clicked the button!", "success");
        swal({
            title: "Felicitaciones!",
            text: "Acceso garantizado!",
            icon: "success",
            buttons: false
          });
        setTimeout (() =>{
            window.location = "./Calculadora/index.html"
        }, 2000);
    
    }
}
