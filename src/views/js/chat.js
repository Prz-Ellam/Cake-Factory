$('#basic-addon2').click(function() {

    let message = $('#message').val();

    if (message === '') return;

    postMessage(message);

});

$('#message').on('keydown', function(e) {
    if(e.keyCode == 13)
    {
        let message = $('#message').val();
        if (message === '') return;
        postMessage(message);
    }
});

function postMessage(message)
{
    $('#comment-box').append(`
        <div class="d-flex justify-content-end my-3">
            <small class="bg-primary bg-orange text-light p-2 rounded-2 overflow-auto">${message}</small>
        </div>
    `);
    $('#message').val('');
    $('#comment-box').stop().animate({
        scrollTop: $('#comment-box')[0].scrollHeight
      }, 800);
}