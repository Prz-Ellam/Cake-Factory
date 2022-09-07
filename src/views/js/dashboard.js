const carouselCard = /*html*/`
<div class="item">
    <div class="text-center car-prueba p-4 m-4 rounded">
        <a href="/product"><img src="assets/img/IMG001.jpg" class="p-3"></a>
        <h5 class="fw-bold mb-0">$297.00</h5>
        <p>Fresas con crema</p>
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary shadow-none bg-orange rounded-1 me-1">Agregar al carrito</button>
            <button class="btn btn-danger shadow-none rounded-1"><i class="fa fa-heart"></i></button>
        </div>
    </div>
</div>
`;

const carouselCard2 = /*html*/`
<div class="item">
    <div class="bg-white text-center car-prueba p-4 m-4 rounded">
        <a href="/product"><img src="assets/img/E001S000032.jpg" class="p-3"></a>
        <h5 class="fw-bold price mb-0">$297.00</h5>
        <p>Tres leches combinado</p>
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary shadow-none bg-orange rounded-1 me-1">Agregar al carrito</button>
            <button class="btn btn-danger shadow-none rounded-1"><i class="fa fa-heart"></i></button>
        </div>
    </div>
</div>
`;

const carouselCard3 = /*html*/`
<div class="item">
    <div class="bg-white text-center car-prueba m-4 p-3">
        <a href="/product"><img src="assets/img/E001S007866.jpg" class="p-3"></a>
        <h5 class="fw-bold price h6 mb-0">$297.00</h5>
        <p>Bambino tentación de fresa</p>
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary shadow-none bg-orange rounded-1 me-1">Agregar al carrito</button>
            <button class="btn btn-danger shadow-none rounded-1"><i class="fa fa-heart"></i></button>
        </div>
    </div>
</div>
`;


$('#recomendations').append(carouselCard);
$('#sellers').append(carouselCard);
$('#stars').append(carouselCard);
$('#recents').append(carouselCard);

$('#recomendations').append(carouselCard2);
$('#sellers').append(carouselCard2);
$('#stars').append(carouselCard2);
$('#recents').append(carouselCard2);

$('#recomendations').append(carouselCard3);
$('#sellers').append(carouselCard3);
$('#stars').append(carouselCard3);
$('#recents').append(carouselCard3);


$(document).ready(function()
{

    $('.btn-shopping-cart').click(function() {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu producto ha sido añadido al carrito',
            showConfirmButton: false,
            timer: 1500
          });
    })

    $('#start-shop').click(function() {

        window.location.href = '/search';

    });
    
    $('.sellers').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true, // Es molesto ver un producto y que el carousel se mueva
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            },
            2000: {
                items: 6
            },
            3000: {
                items: 7
            },
            4000: {
                items: 8
            }
        }
    });

});