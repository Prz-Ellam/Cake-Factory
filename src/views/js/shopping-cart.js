$(document).ready(function()
{
    $('#shopping-cart-id').DataTable({
        responsive: true,
        bAutoWidth: false,
        language: {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontró información",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros disponibles",
            "infoFiltered": "(Filtrados _MAX_ registros en total)",
            "paginate": {
                "first":      "Primero",
                "last":       "Último",
                "next":       "Siguiente",
                "previous":   "Anterior"
            },
            "search":         "Buscar:"
        }
    });

    $('.btn-danger').click(function() {
        $(this).parent().parent().remove();
    });

    $('#finish-order').click(function() {
        window.location.href = '/checkout';
    });

    $('#back').click(function() {
        window.location.href = '/home';
    });
});