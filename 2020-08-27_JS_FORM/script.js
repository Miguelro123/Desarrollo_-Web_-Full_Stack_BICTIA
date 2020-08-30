const inputName = document.getElementById('inputName')
const inputApellido = document.getElementById('inputApellido')
const inputCorreo = document.getElementById('inputCorreo')
const inputPassword = document.getElementById('inputPassword')
const inputCelular = document.getElementById('inputCelular')
const nombreMensaje = document.getElementById('nombreMensaje')

function validarFormulario(event) {
    event.preventDefault()
    if (inputName.value == ""){
        inputName.classList.add('alert')
        nombreMensaje.innerText = 'Llena el campo del nombre por favor'
        inputName.placeholder = 'Ej.Pepito Perez'
    }
    window.location = ""
}
