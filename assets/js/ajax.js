$( document ).ready(function() {
    $("form").submit(function(event){
        event.preventDefault();
        var form = this;
        $.ajax({
            url: $(this).attr('action'),
            type: $(this).attr('method'),
            data: new FormData(this),
            dataType: "html",
            contentType: false,
            cache: false,
            processData: false,
            success: function(response){
                result = jQuery.parseJSON(response);
                if('error' in result) $(form).children(".popup__errors").text(result.error);
                if('url' in result) window.location.href  = result.url;
            },
            error: function(response) { // Данные не отправлены
                alert("Ошибка. Данные не отправленны.");
            }
        });
    });

    $(".popup__deleteBlock__buttons--delete").click(function(event){
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: $(this).attr('href'),
            success: function(data){
                alert(data);
            }
        });
    });
});
