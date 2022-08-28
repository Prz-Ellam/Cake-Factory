$(document).ready(function()
{
    $('#shopping-cart-id').DataTable();

    $('#finish-order').click(function() {
        window.location.href = '/checkout';
    });
});