document.addEventListener('DOMContentLoaded', function()
{
    document.getElementById('signup-form').addEventListener('submit', function(e)
    {
        e.preventDefault();

        fetch('Cake-Factory/api/v1/users', {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                'data' : '2'
            })
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
        });
    
    })
});