$(document).ready(function() {

    $('#categories').multipleSelect({
        selectAll: false,
        width: '100%',
        filter: true
    });

    $('#product-edition').submit(function(event) {

        event.preventDefault();

    });

});