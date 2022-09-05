$(document).ready(function() {

    $("#main-tab li a").click(function(e) {
        e.preventDefault();
        $(this).tab("show");


    });

});