$(document).ready(function() {

    $('#table-users').DataTable({
        responsive: true,
        bAutoWidth: false,
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontró información",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros disponibles",
            "infoFiltered": "(Filtrados _MAX_ registros en total)",
            "paginate": {
                "first":      "Primero",
                "last":       "Último",
                "next":       "Siguiente",
                "previous":   "Anterior"
            },
            "search":         "Buscar:"
        }
    });

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

    $('#btn-side-bar').click(function() {
        $('.side-bar').toggleClass('active');
    });

});