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