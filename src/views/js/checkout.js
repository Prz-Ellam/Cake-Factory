$(document).ready(function() {

    $.validator.addMethod('email5322', function(value, element) {
        return this.optional(element) || /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value);
    }, 'Please enter a valid email');

    $('#msform').validate({
        rules: {
            'names': {
                required: true
            },
            'last-name': {
                required: true
            },
            'street-address': {
                required: true
            },
            'city': {
                required: true
            },
            'state': {
                required: true
            },
            'postal-code': {
                required: true,
                number: true
            },
            'email': {
                required: true,
                email: false,
                email5322: true
            },
            'phone': {
                required: true,
                number: true
            }
        },
        messages: {
            'names': {
                required: 'El nombre no puede estar vacío.'
            },
            'last-name': {
                required: 'El apellido no puede estar vacío.'
            },
            'street-address': {
                required: 'La calle y el número no puede estar vacío'
            },
            'city': {
                required: 'La ciudad no puede estar vacío'
            },
            'state': {
                required: 'El estado no puede estar vacío'
            },
            'postal-code': {
                required: 'El código postal no puede estar vacío',
                number: 'El código postal que ingresó no es válido'
            },
            'email': {
                required: 'El correo electrónico no puede estar vacío',
                email5322: 'El correo electrónico que ingresó no es válido.'
            },
            'phone': {
                required: 'El teléfono no puede estar vacío',
                number: 'El teléfono solo puede tener números'
            }
        },
        errorElement: 'small',
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent()).addClass('text-danger').addClass('form-text').attr('id', element[0].id + '-error-label');
        }
    });

    $(".next").click(function() {

        let validations = $('#msform').valid();

        if (validations === false) {
            return;
        }
            
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        
        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        
        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
        step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;
            
            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });

            next_fs.css({'opacity': opacity});
            },
            duration: 600
        });

        window.scrollTo({ top: 0, behavior: 'smooth' })

    });

    $(".previous").click(function() {
        
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        
        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        
        //show the previous fieldset
        previous_fs.show();
        
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;
                
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                
                previous_fs.css({'opacity': opacity});
            },
            duration: 600
        });

        window.scrollTo({ top: 0, behavior: 'smooth' })
    });

    $('#msform').submit(function(event) {

        event.preventDefault();

        console.log($(this).serialize());

        console.log('Enviando el msform');

    });

    $('#radio-card').click(function() {
        $('#card-section').removeClass('d-none');
        $('#paypal-section button').addClass('d-none');
    });

    $('#radio-paypal').click(function() {
        $('#card-section').addClass('d-none');
        $('#paypal-section button').removeClass('d-none');
    });

});