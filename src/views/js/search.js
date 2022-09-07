const productSearchCard = /*html*/`
<div class="bg-white col-lg-4 col-md-6 col-sm-12  text-center p-5">
    <a href="/product"><img src="assets/img/E001S011649.jpg" class="img-fluid p-3"></a>
    <h5 class="fw-bold mb-0">$299.00</h5>
    <p>Tentación de frutas</p>
    <div class="d-flex justify-content-center">
        <button class="btn btn-primary shadow-none bg-orange rounded-1 me-1">Agregar al carrito</button>
        <button class="btn btn-danger shadow-none rounded-1"><i class="fa fa-heart"></i></button>
    </div>
</div>
`;

for (let i = 0; i < 12; i++)
{
    $('#product-search-container').append(productSearchCard);
}

$(document).ready(function() {

    // Con esto cambiamos entre los tabs
    $("#main-tab li a").click(function(e) {
        e.preventDefault();
        $(this).tab("show");

        if ($(this).text() === 'Productos')
        {
            $('#users-section').addClass('d-none');
            $('#products-section').removeClass('d-none');
        }
        else if ($(this).text() === 'Usuarios')
        {
            $('#products-section').addClass('d-none');
            $('#users-section').removeClass('d-none');
        }

    });


});