document.addEventListener('DOMContentLoaded', function()
{
    document.getElementById('signup-form').addEventListener('submit', function(e)
    {
        e.preventDefault();

        const file = document.getElementById('profile-picture');
        var reader = new FileReader();
        let image;
        reader.onload = async (e) =>
        {
            image = reader.result;

            const requestBody = {
                'username' : document.getElementById('username').value,
                'email' : document.getElementById('email').value,
                'first-name' : document.getElementById('first-name').value,
                'last-name' : document.getElementById('last-name').value,
                'user-role' : document.getElementById('user-role').value,
                'gender' : document.getElementById('gender').value,
                'birth-date' : document.getElementById('birth-date').value,
                'password' : document.getElementById('password').value,
                'confirm-password' : document.getElementById('confirm-password').value,
                'profile-picture' : image
            };
    
    
            fetch('Cake-Factory/api/v1/users', {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(requestBody)
            }).then(response => {
                return response.text();
            }).then(data => {
                console.log(data);
            });
        
        };
        reader.readAsDataURL(file.files[0]);


    })
});