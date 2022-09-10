const wishlistCard = /*html*/`
<div class="col-12 col-md-6 col-lg-4 mb-5 d-flex align-items-stretch">
    <div class="card mx-auto" style="width: 18rem;">
        <div class="ratio ratio-4x3">
            <img src="https://images.hola.com/imagenes/cocina/recetas/20191017151958/ramen-pollo-huevo-cebollino-soja/0-734-730/ramen-adobe-m.jpg" class="card-img-top w-100 h-100">
        </div>
        <div class="card-body">
            <h5 class="card-title">Nombre de la lista</h5>
            <p class="card-text">Descripción de la lista</p>
            <a href="/wishlist" class="btn btn-primary bg-orange shadow-none rounded-1">Ver más</a>
        </div>
    </div>
</div>
`;

const productCard = /*html*/`
<div class="col-lg-4 col-md-6 col-sm-12 car-prueba bg-white text-center car-prueba p-5">
    <a href="/product"><img src="assets/img/E001S011649.jpg" class="img-fluid p-3"></a>
    <h5 class="fw-bold price mb-0">$297.00</h5>
    <p>Tentación de frutas</p>
    <div class="d-flex justify-content-center">
        <button class="btn btn-orange shadow-none rounded-1 me-1 add-cart">Agregar al carrito</button>
        <button class="btn btn-danger shadow-none rounded-1 add-wishlists"><i class="fa fa-heart"></i></button>
    </div>
</div>
`;

for (let i = 0; i < 6; i++)
{
    $('#wishlist-container').append(wishlistCard);
}

for (let i = 0; i < 12; i++)
{
    $('#seller-product-container').append(productCard);
    $('#admin-product-container').append(productCard);
}

$(document).ready(function() {

    $("#main-tab li a").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });

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

    $('.add-cart').click(function() {
        Toast.fire({
            icon: 'success',
            title: 'Tu producto ha sido añadido al carrito'
        });
    });

});