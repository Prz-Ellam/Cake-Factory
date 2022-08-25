$(document).ready(function() {

    // Reglas del formulario de login
    $('#login-form').validate({
        rules: {
            'email' : {
                required: true,
                email: false
            },
            'password' : {
                required: true
            }
        },
        messages: {
            'email' : {
                required: 'El correo electrónico no puede estar vacío.'
            },
            'password': {
                required: 'La contraseña no puede estar vacía.'
            }
        },
        errorElement: 'small',
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent()).addClass('text-danger').addClass('form-text').attr('id', element[0].id + '-error-label');
        }
    });

    $('#btn-password').click(function() {
        let mode = $('#password').attr('type');

        if (mode === 'password') {
            $('#password').attr('type', 'text');
            $(`.fas`).removeClass('fa-eye').addClass('fa-eye-slash');
        }
        else {
            $('#password').attr('type', 'password');
            $(`.fas`).removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });

    
    function jsonEncode(formData, multiFields = null) {
        let object = Object.fromEntries(formData.entries());

        // If the data has multi-select values
        if (multiFields && Array.isArray(multiFields)) {
            multiFields.forEach((field) => {
            object[field] = formData.getAll(field);
            });
        }

        return object;
    }

    $('#login-form').submit(function(e) {

        e.preventDefault();

        let validations = $(this).valid();
        if (validations === false) {
            return;
        }

        const requestBody = jsonEncode(new FormData(this));
        $.ajax({
            method: 'POST',
            url: 'Cake-Factory/api/v1/login',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            dataType: 'json',
            data: JSON.stringify(requestBody),
            success: function(response) {
                // Debe devolver el token
                console.log(response);
            },
            error: function(response, status, error) {
                console.log(status);
            }
        });

    });

})