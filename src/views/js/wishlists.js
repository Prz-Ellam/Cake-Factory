$(document).ready(function() {

    $('#wishlist-form').validate({
        rules: {
            'name': {
                required: true
            },
            'description': {
                required: true
            }
        },
        messages: {
            'name': {
                required: 'El nombre de la lista de deseos no puede estar vacío.'
            },
            'description': {
                required: 'La descripción de la lista de deseos no puede estar vacía.'
            }
        },
        errorElement: 'small',
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent()).addClass('text-danger').addClass('form-text').attr('id', element[0].id + '-error-label');
        }
    });

    $('#wishlist-table').DataTable({
        responsive: true,
        language: {
            lengthMenu: "Mostrar _MENU_ registros por página",
            zeroRecords: "No se encontró información",
            info: "Mostrando página _PAGE_ de _PAGES_",
            infoEmpty: "No hay registros disponibles",
            infoFiltered: "(Filtrados _MAX_ registros en total)"
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

    $('#wishlist-form').submit(function(e) {

        e.preventDefault();

        let validations = $(this).valid();
        if (validations === false) {
            return;
        }

        const requestBody = jsonEncode(new FormData(this));

        modal = document.getElementById('exampleModal');
        modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();

        const reader = new FileReader();        
        reader.onload = function() {

            const session = 1;
            $.ajax({
                method: 'POST',
                url: `Cake-Factory/api/v1/users/${session}/wishlists`,
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                data: JSON.stringify(requestBody),
                dataType: 'json',
                success: function(response) {
                    // TODO: Esconde la scroll bar
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: '¡La categoría se ha guardado!',
                        showConfirmButton: false,
                        showCloseButton: true,
                        timer: 1500
                    });
                },
                error: function(jqXHR, status, error) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: '¡Hubo un error!',
                        showConfirmButton: false,
                        showCloseButton: true,
                        timer: 1500
                    });
                },
                complete: function() {

                    const table = $('#wishlist-table').DataTable();
                    table.row.add([
                        1,                          // ID
                        `<img class="img-fluid rounded-circle" width="40" height="40" src="${reader.result}"> ${requestBody.name}</td>`,           // Name
                        requestBody.description,    // Description
                        requestBody.visibility,     // Visibility
                        ''
                    ]).draw(false);



                    $('#wishlist-name').val("");
                    $('#wishlist-description').val("");
                }
            });

        }

        reader.readAsDataURL($('#profile-picture')[0].files[0]);

        /*
        http://kp.bkd.sidoarjokab.go.id/website/lib/DataTables-1.10.7/examples/api/add_row.html#:~:text=New%20rows%20can%20be%20added,be%20added%20using%20the%20rows.
        */
    })
    
});
