$(document).ready(function()
{   
    $("#invite-form").on('submit', function()
    {   
        var inviteeEmail = $("#email").val();
        console.log(inviteeEmail)

        if (!inviteeEmail || !inviteeEmail.length) {
            alert('Please enter an email');
            return false;
        }

        $.ajax({
          type: "POST",
          url: "/",
          headers: {
            'X-CSRFToken': csrfToken,
            },
          data: { email: inviteeEmail},
          success: function(data) {
            handleResponse(data);
          }
        });
        return false;
    });        
});

function handleResponse(data) {
    document.data = data
    if (data.status === 'success') {
      console.log('success')
      Materialize.toast('Success!', 4000)
    }
    if (data.status === 'fail') {
      Materialize.toast(data.error, 4000)
    }
}