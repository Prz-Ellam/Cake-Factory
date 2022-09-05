$(document).ready(function() {

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

    $(".rating-star").click(function() {

        const stars = $(this).parent().children();
    
        //let position = $(this).position();
        let starIndex = parseInt($(this).attr('value'));
    
        for (let i = starIndex; i > 0; i--) {
            stars[i - 1].className = 'rating__star fas fa-star';
        }
        
        for (let i = starIndex; i < 6; i++) {
            stars[i].className = 'rating__star far fa-star';
        }
        
    });
    
    
        $(".zoom").ezPlus({
            zoomType: 'inner',
            cursor: 'crosshair',
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500
        }/*{
            zoomType: "inner",
            zoomLevel: 2,
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500
        }*/);

})