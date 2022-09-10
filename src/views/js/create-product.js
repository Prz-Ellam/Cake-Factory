$(document).ready(function() {

    $('#sell').click(function() {
        $('#price').removeAttr('disabled');
    });

    $('#cotizar').click(function() {
        $('#price').attr('disabled', 'true');
    });
    
    $('#categories').multipleSelect({
        selectAll: false,
        width: '100%',
        filter: true
    });

    const images = [];
    var imageCounter = 0;
    $('#images').on('change', function(e) {

        const files = $(this)[0].files;
        $.each(files, function(i, file) {

            let fileReader = new FileReader();
            fileReader.onload = function(e) {
                $('#image-list').append(/*html*/`
                    <span class="position-relative" id="image-${imageCounter}">
                        <button type="button" class="btn btn-outline-info bg-dark image-close border-0 rounded-0 shadow-sm text-light position-absolute">&times;</button>
                        <img class="product-mul" src="${e.target.result}">
                    </span>
                `);
                images.push({
                    'id': imageCounter,
                    'file': file
                });
                imageCounter++;
                if (images.length >= 3)
                {
                    $('#images-error-label').remove();
                }
            };
            fileReader.readAsDataURL(file);

        });

    });

    $(document).on('click', '.image-close', function(event) {

        const imageHTML = $(this).parent();
        const id = Number(imageHTML.attr('id').split('-')[1]);

        const deletedImage = images.filter((image) => {
            return image.id === id;
        })[0];

        images.forEach((element, i) => {
            if (element.id === deletedImage.id)
            {
                images.splice(i, 1);
            }
        });

        imageHTML.remove();

    });

    const videos = [];
    var videoCounter = 0;
    $('#videos').on('change', function(e) {

        const files = $(this)[0].files;
        $.each(files, function(i, file) {

            let reader = new FileReader();
            reader.onload = function(e) {
                $('#video-list').append(`
                <span class="position-relative" id="video-${videoCounter}">
                    <video class="product-mul" controls>
                        <source src="${e.target.result}">
                    </video>
                </span>
                <button type="button" class="btn bg-dark btn-outline-info video-close border-0 rounded-0 shadow-sm text-light">&times;</button>
                `);
                videos.push({
                    'id': videoCounter,
                    'file': file
                });
                videoCounter++;
                if (videos.length >= 1)
                {
                    console.log('Videos correctos');
                }
            };
            reader.readAsDataURL(file);

        });

    });

    $(document).on('click', '.video-close', function(event) {

        const videoHTML = $(this).prev();
        const id = Number(videoHTML.attr('id').split('-')[1]);

        const deletedVideo = videos.filter((video) => {
            return video.id === id;
        })[0];

        videos.forEach((element, i) => {
            if (element.id === deletedVideo.id)
            {
                videos.splice(i, 1);
            }
        });

        videoHTML.remove();
        $(this).remove();

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
            'price': {
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
            'price': {
                required: 'Si el producto es para vender, el precio no puede estar vacío'
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


    $('#create-category-form').submit(function(event) {

        event.preventDefault();

        let validations = $(this).valid();
        if (validations === false) {
            return;
        }

        const requestBody = jsonEncode(new FormData(this));
        console.log(requestBody);
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
            },
            complete: function() {
                console.log('Complete');
            }
        });

    });
    
    $('#create-product-form').submit(function(e) {

        e.preventDefault();

        let validations = $(this).valid();

        let valids = true;
        if (images.length < 3)
        {
            const element = $('#images');
            const error = $.parseHTML('<small>La cantidad de imagenes debe ser mínimo 3</small>')
            $(error).insertAfter($('#images').parent().next()).addClass('text-danger').addClass('form-text').attr('id', element[0].id + '-error-label');
            valids = false;
        }

        if (videos.length < 1)
        {
            console.log('Faltan videos');
            valids = false;
        }

        if (validations === false || valids === false) {
            return;
        }

        const requestBody = new FormData(this);
        console.log([...requestBody]);
        return;
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