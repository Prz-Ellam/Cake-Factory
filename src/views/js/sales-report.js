$(document).ready(function() {

    var detailedSalesReport = $('#detailed-sales-report').DataTable({
        responsive: true,
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros por página",
            "zeroRecords": "No se encontró información",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros disponibles",
            "infoFiltered": "(Filtrados _MAX_ registros en total)"
        }
    });
    var groupSalesReport = $('#group-sales-report').DataTable({
        responsive: true,
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros por página",
            "zeroRecords": "No se encontró información",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros disponibles",
            "infoFiltered": "(Filtrados _MAX_ registros en total)"
        }
    });

    for (let i = 0; i < 10; i++)
    {
        detailedSalesReport.row.add(['7', '7', '7', '7', '7', '7']).draw();
    }

    for (let i = 0; i < 10; i++)
    {
        groupSalesReport.row.add(['7', '7', '7', '7', '7', '7']).draw();
    }

});

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [ 0, 10, 5, 2, 20, 30, 45 ],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);