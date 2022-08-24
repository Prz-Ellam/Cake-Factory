$(document).ready(function() {

    $('#create-category-form').validate({
        rules: {
            'name': {
                required: true
            },
            'description': {
               
            }
        },
        messages: {
            'name': {
                required: 'El nombre no puede estar vacío.'
            },
            'description': {
                
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
            },
            'stock': {
                required: true,
                number: true
            }
        },
        messages: {
            'name': {
                required: 'El nombre del producto no puede estar vacío.'
            },
            'description': {
                required: 'La descripción del producto no puede estar vacía.'
            },
            'stock': {
                required: 'La cantidad de producto no puede estar vacía',
                number: 'La cantidad debe ser un número'
            }
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


    $('#create-category-form').submit(function(e) {

        e.preventDefault();

        let validations = $('#create-category-form').valid();
        if (validations === false) {
            return;
        }

        console.log(jsonEncode(new FormData(this)));
        
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