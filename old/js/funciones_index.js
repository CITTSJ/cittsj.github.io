const modals = document.querySelectorAll('.modal');

function closeAllModals() {
    modals.forEach(modal => {
        if ($(modal).hasClass('show')) {
            const modalId = $(modal).attr('id');
            $(`#${modalId}`).modal('hide');
        }
    });
}

document.getElementById('unirseButton').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el enlace recargue la página
    closeAllModals();
    $('#modal-Unirse').modal('show');
});

document.getElementById('quieroUnirmeButton').addEventListener('click', function() {
    closeAllModals();
    $('#modal-QuieroUnirme').modal('show');
});

document.getElementById('yaSoyMiembroButton').addEventListener('click', function() {
    closeAllModals();
    $('#modal-YaSoyMiembro').modal('show');
});

function iniciarSesion() {
    const correo = document.getElementById('correoInstitucional').value.toLowerCase();
    const contrasena = document.getElementById('contrasena').value;

    // Validar correo y contraseña
    if (correo === 'ejemplo.@gmail.com' && contrasena === 'Test123') {
        // Redireccionar a wiki.html
        window.location.href = 'wiki.html';
    } else {
        alert('Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
}