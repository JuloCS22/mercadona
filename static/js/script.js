$(document).ready(function() {
    function loadData() {
        var form_data = $('form').serialize();
        var url = $('form').attr('action');
        $.ajax({
            type: 'POST',
            url: url,
            data: form_data,
            success: function(data) {
                $('#articles').html(data);
            }
        });
    }

    loadData();

    setInterval(function() {
        loadData();
    }, 5000);


    $('form').submit(function(event) {
        event.preventDefault();
        var form_data = $(this).serialize();
        var url = $(this).attr('action');
        $.ajax({
            type: 'POST',
            url: url,
            data: form_data,
            success: function(data) {
                $('#articles').html(data);
            }
        });
    });
});