$(document).ready(function() {

    $('#images').on('change', function(e) {

        const fileList = $(this)[0].files;
        $.each(fileList, function(i, element) {

            let reader = new FileReader();
            reader.onload = function(e) {
                $('#image-list').append(`
                    <span class="position-relative">
                        <button type="button" class="btn btn-outline-info close border-0 rounded-0 shadow-sm text-light position-absolute">&times;</button>
                        <img class="" style="width: 256px; height: 256px; object-fit: cover" src="${e.target.result}">
                    </span>
                `);
            };
            reader.readAsDataURL(element);

        });

    });

    $('#videos').on('change', function(e) {

        const fileList = $(this)[0].files;
        $.each(fileList, function(i, element) {

            let reader = new FileReader();
            reader.onload = function(e) {
                $('#video-list').append(`
                <span class="position-relative">
                    <button type="button" class="btn btn-outline-info close border-0 rounded-0 shadow-sm text-light position-absolute">&times;</button>
                    <video class="" style="width: 320px; height: 240px; object-fit: cover" controls>
                        <source src="${e.target.result}">
                    </video>
                </span>
                `);
            };
            reader.readAsDataURL(element);

        });

    });

    $("#categories").multipleSelect({
        selectAll: false,
        width: '100%',
        filter: true
    });

    $('#create-category-form').validate({
        rules: {
            'category-name': {
                required: true
            },
            'category-description': {
               
            }
        },
        messages: {
            'category-name': {
                required: 'El nombre no puede estar vacío.'
            },
            'category-description': {
                
            }
        },
        errorElement: 'small',
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent()).addClass('text-danger').addClass('form-text').attr('id', element[0].id + '-error-label');
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


    $('#create-category-form').submit(function(e) {

        e.preventDefault();

        let validations = $('#create-category-form').valid();
        if (validations === false) {
            return;
        }

        requestBody = jsonEncode(new FormData(this));
        $.ajax({
            method: 'POST',
            url: 'api/v1/categories',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            data: JSON.stringify(requestBody),
            //dataType: 'json',
            success: function(response) {
                console.log(response);
            },
            error: function(response, status, error) {
                console.log(status);
            }
        });

    });
    
    $('#create-product-form').submit(function(e) {

        e.preventDefault();

        let validations = $('#create-product-form').valid();

        if (validations === false) {
            return;
        }

        const requestBody = new FormData(this);
        $.ajax({
            method: 'POST',
            url: 'api/v1/products',
            data: requestBody,
            //dataType: 'json',
            cache: false,
            contentType: false,
            processData: false,
            success: function(response) {
                console.log(response);
            },
            error: function(response, status, error) {
                console.log(status);
            }
        });

    });

});