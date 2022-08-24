$(document).ready(function() {

    $('#login-form').validate({
        rules: {
            'email' : {
                required: true
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

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    $('#login-form').submit(function(e) {

        console.log(getCookie('token'));

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
                console.log(response);
            },
            error: function(request, status, error) {
                console.log(status);
            }
        });

    });

})