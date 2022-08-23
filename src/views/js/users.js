$(document).ready(function() {

    $('#user-form').validate({
        rules: {
            'email': {
                required: true
            },
            'username': {
                required: true
            },
            'first-name': {
                required: true
            },
            'last-name': {
                required: true
            },
            'birth-date': {
                required: true
            },
            'password': {
                required: true
            },
            'confirm-password': {
                required: true
            }
        },
        messages: {
            'email': {
                required: 'El correo electrónico no puede estar vacío.'
            },
            'username': {
                required: 'El nombre de usuario no puede estar vacío.'
            },
            'first-name': {
                required: 'El nombre no puede estar vacío.'
            },
            'last-name': {
                required: 'El apellido no puede estar vacío.'
            },
            'birth-date': {
                required: 'La fecha de nacimiento no puede estar vacía.'
            },
            'password': {
                required: 'La contraseña no puede estar vacía.'
            },
            'confirm-password': {
                required: 'Confirmar contraseña no puede estar vacío.'
            }
        }
    });

    $('#user-form').submit(function(e) {

        e.preventDefault();

        let validations = $('#user-form').valid();

        if(validations === false) {
            return;
        }

    });

});