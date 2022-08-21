const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(e)
{
    e.preventDefault();
    alert('Enviando formulario');

    fetch('Cake-Factory/api/v1/users', {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    });


});