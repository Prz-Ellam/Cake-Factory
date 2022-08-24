$(document).ready(function() {

    var date = new Date();
    var dateFormat = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0')
    document.getElementById('birth-date').value = dateFormat;

    $('#sign-up-form').validate({
        rules: {
            'email': {
                required: true,
                email: true,
                remote: {
                    type: 'POST',
                    url: 'Cake-Factory/isEmailAvailable',
                    data: {
                        'email' : function() { return $('#email').val() }
                    },
                    dataType: 'json'
                }
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
                required: 'El nombre de usuario no puede estar vacío.'
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

        return JSON.stringify(object);
    }

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
            success: function(response) {
                console.log(response);
            },
            error: function(request, status, error) {
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