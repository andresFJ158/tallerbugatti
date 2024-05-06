document.getElementById("boton-reserva").addEventListener("click", function() {
    window.location.href = "#reserva";
});

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Agrega el evento click al botón
    document.getElementById("boton").addEventListener("click", enviarFormulario);
});

function enviarFormulario() {
    // Captura los valores de los campos de entrada
    const nombreInput = document.getElementById('nombre').value;
    const marcaInput = document.getElementById('marca').value;
    const modeloInput = document.getElementById('modelo').value;
    const servicioInput = document.getElementById('servicio').value;

    // Valida que los campos obligatorios estén completos
    if (nombreInput.trim() === '' || marcaInput.trim() === '' || modeloInput.trim() === '' || servicioInput.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Genera el mensaje con los detalles del servicio
    const mensaje = `Hola, soy ${nombreInput}. Requiero el servicio de ${servicioInput} para mi vehículo ${marcaInput}, ${modeloInput}.`;

    // Codifica el mensaje para incluirlo en la URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Abre WhatsApp con el mensaje prellenado
    window.open(`https://api.whatsapp.com/send?phone=59160854979&text=${mensajeCodificado}`);
}
