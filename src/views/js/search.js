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