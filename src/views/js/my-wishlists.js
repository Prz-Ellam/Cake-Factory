class Wishlist
{
    constructor(name, description, visibility, images)
    {
        this.name = name;
        this.description = description;
        this.visibility = visibility;
        this.images = images;
    }
}

function getImages(card, images) {

    $.each(images, function(i, image) {

        let reader = new FileReader();
        reader.onload = function(image) {
            const imagesHTML = /*html*/`
            <div class="carousel-item${(i == 0 ? " active" : "")}" data-bs-interval="10000">
                <div class="ratio ratio-4x3">
                    <img src="${image.target.result}" class="card-img-top w-100 h-100">
                </div>
            </div>
            `;
            $(card).find('.card .carousel .carousel-inner').append(imagesHTML);
        };
        reader.readAsDataURL(image);

    });

    var carouselDOM = $(card).find('.card .carousel')[0];
    new bootstrap.Carousel(carouselDOM);
}

function WishlistCard(wishlist) {

    const visibility = (Number(wishlist.visibility) === 1) ? 
    `<p class="text-brown wishlist-visibility" value="1"><i class="fas fa-users" aria-hidden="true"></i> Pública</p>`
    :
    `<p class="text-brown wishlist-visibility" value="2"><i class="fas fa-lock"></i> Privada</p>`;

    const card = $($.parseHTML(/*html*/`
    <div class="col-12 col-md-6 col-lg-4 mb-5 d-flex align-items-stretch">
        <div class="card mx-auto" style="width: 18rem;">
            <div class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title text-brown wishlist-name">${wishlist.name}</h5>
                <p class="card-text text-brown mb-2 wishlist-description">${wishlist.description}</p>
                ${visibility}
                <div class="d-flex justify-content-start">
                    <a href="#" class="btn btn-blue shadow-none rounded-1 me-1 edit-wishlist" data-bs-toggle="modal" data-bs-target="#edit-wishlist">Editar</a>
                    <a href="#" class="btn btn-red shadow-none rounded-1" data-bs-toggle="modal" data-bs-target="#delete-wishlist">Eliminar</a>
                </div>
            </div>
        </div>
    </div>
    `));

    $('#wishlist-container').append(card);
    getImages(card, wishlist.images);
}


const wishlistCard = /*html*/`
<div class="col-12 col-md-6 col-lg-4 mb-5 d-flex align-items-stretch">
    <div class="card mx-auto" style="width: 18rem;">
        <div class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <div class="ratio ratio-4x3">
                        <img src="https://images.hola.com/imagenes/cocina/recetas/20191017151958/ramen-pollo-huevo-cebollino-soja/0-734-730/ramen-adobe-m.jpg" class="card-img-top w-100 h-100">
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title text-brown wishlist-name">Nombre de la lista</h5>
            <p class="card-text text-brown wishlist-description mb-2">Descripción de la lista</p>
            <p class="text-brown wishlist-visibility" value="1"><i class="fas fa-users" aria-hidden="true"></i> Público</p>
            <div class="d-flex justify-content-start">
                <a href="/edit-product" class="btn btn-blue shadow-none rounded-1 me-1 edit-wishlist" data-bs-toggle="modal" data-bs-target="#edit-wishlist">Editar</a>
                <a href="#" class="btn btn-red shadow-none rounded-1" data-bs-toggle="modal" data-bs-target="#delete-wishlist">Eliminar</a>
            </div>
        </div>
    </div>
</div>
`;

for (let i = 0; i < 12; i++)
{
    $('#wishlist-container').append(wishlistCard);
}

$(document).ready(function() {

    $('.btn-search').on('click', function () {

        // Esto es muy raro pero funcionara por ahora
        const id = $(this).parent()[0].children[0].innerHTML;
        // window.location.href = `/wishlist/${id}`;
        window.location.href = '/wishlist';
        
    });

    var element;

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        showCloseButton: true,
        timer: 1500,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    $('#btn-delete-wishlist').click(function() {

        element.parent().parent().parent().parent().remove();

        Toast.fire({
            icon: 'success',
            title: 'Tu lista de deseos ha sido eliminada'
        });

    });

    $('.btn-red').click(function() {
        element = $(this);
    })

    $('.ratio').click(function() {

        window.location.href = '/wishlist';

    });

    var editCard;
    $(document).on('click', '.edit-wishlist' ,function(){
        
        editCard = $(this).parent().parent();

        $('#edit-wishlist-name').val($(editCard).find('.wishlist-name').text());
        $('#edit-wishlist-description').val($(editCard).find('.wishlist-description').text());
        $('#edit-wishlist-visibility').val($(editCard).find('.wishlist-visibility').attr('value'));

    });
    

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

    $('#wishlist-form').validate({
        rules: {
            'name': {
                required: true
            },
            'description': {
                required: true
            },
            'visibility': {
                required: true
            }
        },
        messages: {
            'name': {
                required: 'El nombre de la lista de deseos no puede estar vacío.'
            },
            'description': {
                required: 'La descripción de la lista de deseos no puede estar vacía.'
            },
            'visibility': {
                required: 'La visibilidad no puede estar vacía.'
            }
        },
        errorElement: 'small',
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent()).addClass('text-danger').addClass('form-text').attr('id', element[0].id + '-error-label');
        }
    });

    var wishlistImages = [];
    $('#images').on('change', function(e) {

        const fileList = $(this)[0].files;
        $.each(fileList, function(i, element) {

            let reader = new FileReader();
            reader.onload = function(e) {
                $('#image-list').append(`
                    <span class="position-relative">
                        <button type="button" class="btn btn-outline-info bg-dark close border-0 rounded-0 shadow-sm text-light position-absolute" onclick="$(this).parent().remove()">&times;</button>
                        <img class="product-mul" src="${e.target.result}">
                    </span>
                `);
            };
            wishlistImages.push(element);
            reader.readAsDataURL(element);

        });

        $(this).val('');

    });


    $('#wishlist-image').on('change', function(e) {
            
        // Si se le da Cancelar, se pone la imagen por defecto y el path vacio
        //if($(this)[0].files[0].size === 0){
        //    let img = document.getElementById('picture-box');
        //    img.setAttribute('src', 'Assets/blank-profile-picture.svg');
            
        //    var fileInputPhoto = document.getElementById('photo');
        //    fileInputPhoto.value = '';
        //    return;
        //}
        
        let reader = new FileReader();
        reader.readAsDataURL($(this)[0].files[0]);
        
        // A PARTIR DE AQUI ES TEST PARA VALIDAR QUE SOLO SE INGRESEN IMAGENES
        var filePath = $('#wishlist-image').val();
            
        // Allowing file type
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
                
        if (!allowedExtensions.exec(filePath)) {
                //alert('Invalid file type' + fileInput.value);
                fileInput.value = '';
                
                reader.onloadend = function(e) {
                    let img = document.getElementById('picture-box');
                    img.setAttribute('src', 'Assets/blank-profile-picture.svg');
                    img.style.opacity = '1';
                    photo.style.opacity = '1';
                };
                
                return;
        }     
        // AQUI TERMINA LA VALIDACION PARA EL TIPO DE IMAGEN
        
        reader.onloadend = function(e) {
            let img = $('#picture-box');
            img.attr('src', e.target.result);
        };
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

    $('#wishlist-form').submit(function(event) {

        event.preventDefault();

        let validations = $(this).valid();
        if (validations === false) {
            return;
        }

        const requestBody = new FormData(this);
        wishlistImages.forEach((image) => { requestBody.append('images', image); });
        console.log([...requestBody]);

        modal = document.getElementById('create-wishlist');
        modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
        
        $.ajax({
            method: 'POST',
            url: `Cake-Factory/api/v1/users/${1}/wishlists`,
            data: requestBody,
            //dataType: 'json',
            cache: false,
            contentType: false,
            processData: false,
            success: function(response) {
                Toast.fire({
                    icon: 'success',
                    title: 'Tu lista de deseos se ha guardado'
                });
            },
            error: function(jqXHR, status, error) {
                Toast.fire({
                    icon: 'success',
                    title: 'Hubo un error...'
                });
            },
            complete: function() {

                const wishlist = new Wishlist(
                    requestBody.get('name'),
                    requestBody.get('description'),
                    requestBody.get('visibility'),
                    requestBody.getAll('images')
                );

                $('#wishlist-container').append(WishlistCard(wishlist));

                $('#wishlist-name').val('');
                $('#wishlist-description').val('');
                $('#wishlist-visibility').val('');
                
            }
        });
        
    })

    $('#edit-wishlist-form').submit(function(event) {

        event.preventDefault();

        const requestBody = new FormData(this);

        const wishlist = new Wishlist(
            requestBody.get('name'),
            requestBody.get('description'),
            requestBody.get('visibility'),
            requestBody.getAll('images')
        );

        modal = document.getElementById('edit-wishlist');
        modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();

        console.log(wishlist);
        editCard.find('.wishlist-name').text(requestBody.get('name'));
        editCard.find('.wishlist-description').text(requestBody.get('description'));
        editCard.find('.wishlist-visibility').html(
            (Number(requestBody.get('visibility')) === 1) ?
            /*html*/`<i class="fas fa-users" aria-hidden="true"></i> Pública</p>`
            :
            /*html*/`<i class="fas fa-lock"></i> Privada</p>`
        );

        Toast.fire({
            icon: 'success',
            title: 'Tu lista de deseos se ha actualizado'
        });

    });
    
});
