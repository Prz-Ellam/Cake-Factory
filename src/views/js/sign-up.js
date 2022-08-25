$(document).ready(function() {

    var date = new Date();
    var dateFormat = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0')
    document.getElementById('birth-date').value = dateFormat;

    // RFC
    $.validator.addMethod('email', function(value, element) {
        return this.optional(element) || /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    }, 'Please enter a valid email');

    $('#sign-up-form').validate({
        rules: {
            'email': {
                required: true,
                email: true,
                remote: {
                    type: 'POST',
                    url: 'Cake-Factory/isEmailAvailable',
                    data: {
                        'email': function() { return $('#email').val() }
                    },
                    dataType: 'json'
                }
            },
            'username': {
                required: true,
                remote: {
                    type: 'POST',
                    url: 'Cake-Factory/isUsernameAvailable',
                    data: {
                        'username': function() { return $('#username').val() }
                    },
                    dataType: 'json'
                }
            },
            'first-name': {
                required: true
            },
            'last-name': {
                required: true
            },
            'birth-date': {
                required: true,
                date: true
            },
            'password': {
                required: true
            },
            'confirm-password': {
                required: true,
                equalTo: '#password' // Igual que la contraseña
            }
        },
        messages: {
            'email': {
                required: 'El correo electrónico no puede estar vacío.',
                email: 'El correo electrónico que ingresó no es válido.',
                remote: 'El correo electrónico está siendo usado por alguien más.'
            },
            'username': {
                required: 'El nombre de usuario no puede estar vacío.',
                remote: 'El nombre de usuario está siendo usado por alguien más.'
            },
            'first-name': {
                required: 'El nombre no puede estar vacío.'
            },
            'last-name': {
                required: 'El apellido no puede estar vacío.'
            },
            'birth-date': {
                required: 'La fecha de nacimiento no puede estar vacía.',
                date: 'La fecha de nacimiento debe tener formato de fecha.'
            },
            'password': {
                required: 'La contraseña no puede estar vacía.'
            },
            'confirm-password': {
                required: 'Confirmar contraseña no puede estar vacío.',
                equalTo: 'Confirmar contraseña no coincide con contraseña'
            }
        },
        errorElement: 'small',
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent()).addClass('text-danger').addClass('form-text').attr('id', element[0].id + '-error-label');
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

    $('#btn-password').click(function() {
        let mode = $('#password').attr('type');

        if (mode === 'password') {
            $('#password').attr('type', 'text');
            $('#password-icon').removeClass('fa-eye').addClass('fa-eye-slash');
        }
        else {
            $('#password').attr('type', 'password');
            $('#password-icon').removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });

    $('#btn-confirm-password').click(function() {
        let mode = $('#confirm-password').attr('type');

        if (mode === 'password') {
            $('#confirm-password').attr('type', 'text');
            $('#confirm-password-icon').removeClass('fa-eye').addClass('fa-eye-slash');
        }
        else {
            $('#confirm-password').attr('type', 'password');
            $('#confirm-password-icon').removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });

    $('#sign-up-form').submit(function(e) {

        e.preventDefault();

        if($('#sign-up-form').valid() === false) {
            return;
        }

        const requestBody = jsonEncode(new FormData(this));
        $.ajax({
            method: 'POST',
            url: 'Cake-Factory/api/v1/users',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            data: requestBody,
            dataType: 'json',
            success: function(response) {
                console.log(response);
            },
            error: function(jqXHR, status, error) {
                console.log(status);
            }
        });

    });

});

/*
document.addEventListener('DOMContentLoaded', function()
{
    var date = new Date();
    var dateFormat = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0')
    document.getElementById('birth-date').value = dateFormat;

    document.getElementById('signup-form').addEventListener('submit', function(e)
    {
        e.preventDefault();

        const file = document.getElementById('profile-picture');
        var reader = new FileReader();
        let image;
        reader.onload = async (e) =>
        {
            image = reader.result;

            const requestBody = {
                'username' : document.getElementById('username').value,
                'email' : document.getElementById('email').value,
                'first-name' : document.getElementById('first-name').value,
                'last-name' : document.getElementById('last-name').value,
                'user-role' : document.getElementById('user-role').value,
                'gender' : document.getElementById('gender').value,
                'birth-date' : document.getElementById('birth-date').value,
                'password' : document.getElementById('password').value,
                'confirm-password' : document.getElementById('confirm-password').value,
                'profile-picture' : image
            };
    
    
            fetch('Cake-Factory/api/v1/users', {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(requestBody)
            }).then(response => {
                return response.text();
            }).then(data => {
                console.log(data);
            });
        
        };
        reader.readAsDataURL(file.files[0]);


    })
});
*/