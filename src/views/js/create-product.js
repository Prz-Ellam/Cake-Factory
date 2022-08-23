$(document).ready(function() {

    $('#create-category-form').validate({
        rules: {
            'name': {
                required: true
            },
            'description': {
                required: true
            }
        },
        messages: {
            'name': {
                required: 'El nombre no puede estar vacío.'
            },
            'description': {
                required: 'La descripción no puede estar vacía.'
            }
        }
    });

    $('#create-product-form').validate({
        rules: {
            'name': {
                required: true
            },
            'description': {
                required: true
            }
        },
        messages: {
            'name': {
                required: 'El nombre del producto no puede estar vacío.'
            },
            'description': {
                required: 'La descripción del producto no puede estar vacía.'
            }
        }
    });

    $('#create-category-form').submit(function(e) {

        e.preventDefault();

        let validations = $('#create-category-form').valid();
        if (validations === false) {
            return;
        }
        
        const requestBody = {
            'name': $('#category-name').val(),
            'description': $('#category-description').val()
        }

        $.ajax({
            method: 'POST',
            url: 'Cake-Factory/api/v1/categories',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            data: JSON.stringify(requestBody)
        }).done(function(response) {
            console.log(response);
        });

    });
    
    $('#create-product-form').submit(function(e) {

        e.preventDefault();

        let validations = $('#create-product-form').valid();

        if (validations === false) {
            return;
        }

        $.ajax({
            method: 'POST',
            url: 'Cake-Factory/api/v1/products',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            dataType: 'json'//,
            //data: JSON.stringify(requestBody)
        }).done(function(response) {
            console.log(response);
        });

    });

});