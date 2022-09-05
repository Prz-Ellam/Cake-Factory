$(document).ready(function()
{
    $('#shopping-cart-id').DataTable({
        responsive: true,
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros por página",
            "zeroRecords": "No se encontró información",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros disponibles",
            "infoFiltered": "(Filtrados _MAX_ registros en total)"
        }
    });

    $('#finish-order').click(function() {
        window.location.href = '/checkout';
    });
});