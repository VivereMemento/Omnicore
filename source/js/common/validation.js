var formValidate = function(){

    var init = function() {
        _setUpListners();
    };

    var _setUpListners = function() {
        $('#contact-me').on('submit', _mailMe);
    };

    var _mailMe = function(e) {
        e.preventDefault();
        var form = $(this);
        if ( valid(form) === false ) return false;

        var from,email,message,data;
        var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i,
            fromName = $("#mail-name").val(),
            fromSurname = $("#mail-surname").val(),
            email = $("#mail-email").val(),
            message = $("#mail-message").val(),
            data = form.serialize();

        if(email != ''){
            if(email.search(pattern) == 0){
                $.ajax({
                    url: '/send',
                    type: 'POST',
                    data: data
                })
                .done(function() {

                })
                .fail(function() {

                })
            } else {
            	$('input#mail-email').parents('.form__text').addClass('error');
            	$('<span class="tooltip">Некорректрый email</span>').prependTo('.error');
            }
        }
    };

    var valid = function(form) {
        var inputs = form.find('input'),
            valid = true;

        $.each(inputs, function(index, val) {
            var input = $(val),
                val = input.val(),
                formGroup = input.parents('.form__item');

            if (val.length === 0){
                formGroup.addClass('error');
                input.on('focus', function(){
                	formGroup.removeClass('error');
                });
                input.on('keydown', function(){
                	formGroup.removeClass('error');
                });
                valid = false;
            }
        });
        return valid;
    }
    return {
        init: init
    }
}();

formValidate.init();
