const inputName = document.getElementById('inputName')
const inputApellido = document.getElementById('inputApellido')
const inputCorreo = document.getElementById('inputCorreo')
const inputPassword = document.getElementById('inputPassword')
const inputCelular = document.getElementById('inputCelular')
const nombreMensaje = document.getElementById('nombreMensaje')

function validarFormulario(event) {
    event.preventDefault()
    if (inputName.value == ""){
        swal("one problem", "error", "Error");
        inputName.classList.add('alert')
        nombreMensaje.innerText = 'Llena el campo del nombre por favor'
        inputName.placeholder = 'Ej.Pepito Perez'
    }

    if (inputName.value != "") {
        swal("Good job!", "You clicked the button!", "success");
        setTimeout (() =>{
            window.location = ""
        }, 2000)
        
    }
}
