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

    $('#basic-addon2').click(function() {
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

    $('#login-form').submit(function(e) {
        e.preventDefault();

        let validations = $('#login-form').valid();

        if(validations === false) {
            return;
        }

        const requestBody = {
            'email' : $('#email').val(),
            'password' : $('#password').val()
        };

        $.ajax({
            method: 'POST',
            url: 'Cake-Factory/api/v1/login',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            data: JSON.stringify(requestBody)
        }).done(function(response) {
            console.log(response);
        });
    });

})