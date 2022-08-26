$(document).ready(function() {

    var date = new Date();
    var dateFormat = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0')
    document.getElementById('birth-date').value = dateFormat;

    // RFC
    $.validator.addMethod('email5322', function(value, element) {
        return this.optional(element) || /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value);
    }, 'Please enter a valid email');

    // Date Range
    $.validator.addMethod("dateRange", function(value, element, parameter) {
        return this.optional(element) ||
        !(Date.parse(value) > Date.parse(parameter[1]) || Date.parse(value) < Date.parse(parameter[0]));
    }, 'Please enter a valid date');

    // Data size (no puede pesar mas de 8MB)
    $.validator.addMethod('filesize', function(value, element, parameter) {

        let result;
        if (element.files[0] === undefined) {
            return this.optional(element) || result; 
        }

        const size = (element.files[0].size / 1024 / 1024).toFixed(2);
        result = (parseFloat(size) > parameter) ? false : true;

        return this.optional(element) || result;
    }, 'Please enter a valid file');

    $('#sign-up-form').validate({
        rules: {
            'profile-picture': {
                required: true,
                filesize: 8
            },
            'email': {
                required: true,
                email: false,
                email5322: true,
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
            'gender': {
                required: true
            },
            'birth-date': {
                required: true,
                date: true,
                dateRange: ['1900-01-01', dateFormat]
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
            'profile-picture': {
                required: 'La foto de perfil no puede estar vacía.',
                filesize: 'El archivo es demasiado pesado (máximo de 8MB)'
            },
            'email': {
                required: 'El correo electrónico no puede estar vacío.',
                email5322: 'El correo electrónico que ingresó no es válido.',
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
                date: 'La fecha de nacimiento debe tener formato de fecha.',
                dateRange: 'La fecha de nacimiento no puede ser antes de la fecha actual'
            },
            'gender': {
                required: 'El género no puede estar vacío.'
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

    function getBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      }

    $('#sign-up-form').submit(function(e) {

        e.preventDefault();

        if($('#sign-up-form').valid() === false) {
            return;
        }

        const reader = new FileReader();        
        reader.onload = function() {

            var requestBody = jsonEncode(new FormData(this));
            requestBody['profile-picture'] = reader.result;
            // Send Sign Up Request
            $.ajax({
                method: 'POST',
                url: 'Cake-Factory/api/v1/users',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                data: JSON.stringify(requestBody),
                //dataType: 'json',
                success: function(response) {
                    // Debe devolver un token con el inicio de sesion
                    console.log(response);

                    window.location.href = "Cake-Factory/home";
                },
                error: function(jqXHR, status, error) {
                    console.log(status);
                }
            });

        }

        reader.readAsDataURL($('#profile-picture')[0].files[0]);

    });

    $('#profile-picture').on('change', function(e) {
        
        // Si se le da Cancelar, se pone la imagen por defecto y el path vacio
        //if($(this)[0].files[0].size === 0){
        //    let img = document.getElementById('picture-box');
        //    img.setAttribute('src', 'Assets/blank-profile-picture.svg');
            
        //    var fileInputPhoto = document.getElementById('photo');
        //    fileInputPhoto.value = '';
        //    return;
        //}
        
        let fReader = new FileReader();
        fReader.readAsDataURL($(this)[0].files[0]);
        
        // A PARTIR DE AQUI ES TEST PARA VALIDAR QUE SOLO SE INGRESEN IMAGENES
        var filePath = $('#profile-picture').val();
             
        // Allowing file type
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
                 
        if (!allowedExtensions.exec(filePath)) {
                //alert('Invalid file type' + fileInput.value);
                fileInput.value = '';
                
                fReader.onloadend = function(e) {
                    let img = document.getElementById('picture-box');
                    img.setAttribute('src', 'Assets/blank-profile-picture.svg');
                    img.style.opacity = '1';
                    photo.style.opacity = '1';
                };
                
                return;
         }     
          // AQUI TERMINA LA VALIDACION PARA EL TIPO DE IMAGEN
        
        fReader.onloadend = function(e) {
            let img = $('#picture-box');
            img.attr('src', e.target.result);
        };
    });

});