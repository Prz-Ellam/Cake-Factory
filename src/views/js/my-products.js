const productCard = /*html*/`
        <div class="bg-white col-lg-4 col-md-6 col-sm-12 text-center p-5">
            <a href="/product"><img src="assets/img/E001S000032.jpg" class="img-fluid p-3"></a>
            <h5 class="fw-bold mb-0">$298.00</h5>
            <p>Tentación de frutas</p>
            <div class="d-flex justify-content-center">
                <a href="/edit-product" class="btn btn-primary shadow-none rounded-1 me-1">Editar</a>
                <a href="#" class="btn btn-danger shadow-none rounded-1" data-bs-toggle="modal" data-bs-target="#delete-product">Eliminar</a>
            </div>
        </div>
`;

for (let i = 0; i < 12; i++)
{
    $('#products-container').append(productCard);
}

$(document).ready(function() {

    var element;

    $('#btn-delete-product').click(function(e) {

        element.parent().parent().remove();

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '¡El producto ha sido eliminado!',
            showConfirmButton: false,
            showCloseButton: true,
            timer: 1500
        });

    });

    $('.btn-danger').click(function() {
        element = $(this);
    })

});