class Category {
    constructor(name, description)
    {
        this.name = name;
        this.description = description;
    }
}

$(document).ready(function() {

    var category;

    var table = $('#categories').DataTable({
        responsive: true,
        bAutoWidth: false,
        language: {
            lengthMenu: "Mostrar _MENU_ registros",
            zeroRecords: "No se encontró información",
            info: "Mostrando página _PAGE_ de _PAGES_",
            infoEmpty: "No hay registros disponibles",
            infoFiltered: "(Filtrados _MAX_ registros en total)",
            paginate: {
                first:      "Primero",
                last:       "Último",
                next:       "Siguiente",
                previous:   "Anterior"
            },
            search:         "Buscar:"
        }
    });

    $('#btn-side-bar').click(function() {
        $('.side-bar').toggleClass('active');
    });

    $('#create-category-form').validate({
        rules: {
            'category-name': {
                required: true
            },
            'category-description': {
               
            }
        },
        messages: {
            'category-name': {
                required: 'El nombre no puede estar vacío.'
            },
            'category-description': {
                
            }
        },
        errorElement: 'small',
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent()).addClass('text-danger').addClass('form-text').attr('id', element[0].id + '-error-label');
        }
    });

    $('#edit-category-form').validate({
        rules: {
            'category-name': {
                required: true
            },
            'category-description': {
               
            }
        },
        messages: {
            'category-name': {
                required: 'El nombre no puede estar vacío.'
            },
            'category-description': {
                
            }
        },
        errorElement: 'small',
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent()).addClass('text-danger').addClass('form-text').attr('id', element[0].id + '-error-label');
        }
    });

    function jsonEncode(formData, multiFields = null) {
        let object = Object.fromEntries(formData.entries());

        // If the data has multi-select values
        if (multiFields && Array.isArray(multiFields)) {
            multiFields.forEach((field) => {
                object[field] = formData.getAll(field);
            });
        }

        return object;
    }

    var row;
    $('.edit-category').click(function() {

        row = $(this).parent().parent();
        const dataTable = $('#categories').DataTable();
        const data = dataTable.row(row).data();

        category = new Category(data[1], data[2]);

        $('#edit-category-name').val(category.name);
        $('#edit-category-description').val(category.description);

    });

    $('#create-category-form').submit(function(event) {

        event.preventDefault();

        let validations = $(this).valid();
        if (validations === false) {
            return;
        }

        modal = document.getElementById('create-category');
        modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();

        const requestBody = jsonEncode(new FormData(this));
        console.log(requestBody);
        return;
        $.ajax({
            method: 'POST',
            url: 'api/v1/categories',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            data: JSON.stringify(requestBody),
            //dataType: 'json',
            success: function(response) {
                console.log(response);
            },
            error: function(response, status, error) {
                console.log(status);
            },
            complete: function() {
                console.log('Complete');
            }
        });

    });

    $('#edit-category-form').submit(function(event) {

        event.preventDefault();

        let validations = $(this).valid();
        if (validations === false) {
            return;
        }

        $($(row).children()[1]).html($('#edit-category-name').val());
        $($(row).children()[2]).html($('#edit-category-description').val());

        table.draw(false)

    });

});