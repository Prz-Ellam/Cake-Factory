$(document).ready(function() {

    $('#wishlist-table').DataTable({
        responsive: true
    });

    $('#wishlist-form').submit(function(e) {

        e.preventDefault();

        const submitBtn = document.getElementById('submit-wishlist');
        modal = document.getElementById('exampleModal');
        modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();

        const name = document.getElementById('wishlist-name');
        const description = document.getElementById('wishlist-description');
        const visibility = document.getElementById('wishlist-visibility');
        const requestBody = {
            'name'          : name.value,
            'description'   : description.value,
            'visibility'    : visibility.value
        }

        name.value = "";
        description.value = "";
        visibility.value = "";

        console.log(requestBody);

        const tableBody = document.getElementById('wishlist-table-body');

        const id = String(new Date().getTime());
        const template = document.createElement('template');
        var html = `
            <tr role="button" id="${id}">
                <td scope="row">1</td>
                <td><img class="img-fluid rounded-circle" width="40" height="40" src="https://cdn.pixabay.com/user/2014/05/07/00-10-34-2_250x250.jpg"> ${requestBody.name}</td>
                <td>${requestBody.description}</td>
                <td>Publica</td>
                <td>
                    <button class="btn btn-primary shadow-none rounded-1 btn-edit" row="${id}"><i class="fa fa-pencil"></i></button>
                    <button class="btn btn-danger shadow-none rounded-1 btn-delete" row="${id}"><i class="fa fa-trash"></i></button>
                </td>
            </tr>
        `;
        html = html.trim();
        template.innerHTML = html;

        const btnEdit = template.content.querySelector('.btn-edit');
        //btnEdit.addEventListener('click', edit);

        const btnDelete = template.content.querySelector('.btn-delete');
        //btnDelete.addEventListener('click', deleteRow);

        tableBody.appendChild(template.content.firstChild);

        $('#wishlist-table').DataTable();

        Swal.fire({
            title: 'Do you want to save the changes?'
        });

        /*
        http://kp.bkd.sidoarjokab.go.id/website/lib/DataTables-1.10.7/examples/api/add_row.html#:~:text=New%20rows%20can%20be%20added,be%20added%20using%20the%20rows.
        */
    })

    
});

/*
document.addEventListener('DOMContentLoaded', function()
{
    const submitBtn = document.getElementById('submit-wishlist');
    submitBtn.addEventListener('click', function()
    {      
        Swal.fire({
            title: 'Do you want to save the changes?'
        });

        modal = document.getElementById('exampleModal');
        modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();

        const name = document.getElementById('wishlist-name');
        const description = document.getElementById('wishlist-description');
        const visibility = document.getElementById('wishlist-visibility');
        const requestBody = {
            'name'          : name.value,
            'description'   : description.value,
            'visibility'    : visibility.value
        }

        name.value = "";
        description.value = "";
        visibility.value = "";

        console.log(requestBody);

        const tableBody = document.getElementById('wishlist-table-body');

        const id = String(new Date().getTime());
        const template = document.createElement('template');
        var html = `
            <tr role="button" id="${id}">
                <td scope="row">1</td>
                <td><img class="img-fluid rounded-circle" width="40" height="40" src="https://cdn.pixabay.com/user/2014/05/07/00-10-34-2_250x250.jpg"> ${requestBody.name}</td>
                <td>${requestBody.description}</td>
                <td>Publica</td>
                <td>
                    <button class="btn btn-primary shadow-none rounded-1 btn-edit" row="${id}"><i class="fa fa-pencil"></i></button>
                    <button class="btn btn-danger shadow-none rounded-1 btn-delete" row="${id}"><i class="fa fa-trash"></i></button>
                </td>
            </tr>
        `;
        html = html.trim();
        template.innerHTML = html;

        const btnEdit = template.content.querySelector('.btn-edit');
        btnEdit.addEventListener('click', edit);

        const btnDelete = template.content.querySelector('.btn-delete');
        btnDelete.addEventListener('click', deleteRow);

        tableBody.appendChild(template.content.firstChild);
    
    });

    function edit()
    {
        
    }

    function deleteRow()
    {
        Swal.fire({
            title: 'Do you want to save the changes?'
        }).then((result) => {
            const rowId = this.getAttribute("row");
            document.getElementById(rowId).remove();
        });
    }
});
*/