var topBarButton = document.getElementById('import');
var display;

$(document).ready(function() {
    $('#import-btn').click(function() {
        $('#plus').show();
        $('.section-1').hide();
        $('.section-2').show();
        $('#portfolio').hide();
    });
    $('#society-btn').click(function() {
        $('#plus').show();
        $('.section-1').hide();
        $('.section-2').show();
        $('#import').hide();
    });
    $('#email-box').click(function() {
        $('.subject').show();
    });
    $('#sms-box').click(function() {
        $('.subject').hide();
    });
    $('#settings').click(function() {
        $('.section-3').show();
    });
    $('#cross').click(function() {
        $('.section-3').hide();
    });
    $('#cross-1').click(function() {
        $('.portfolios').hide();
    });
    $('#portfolio').click(function() {
        $('.portfolios').show();
    });
    $('#plus').click(function() {
        $('.section-2').hide();
        $('.predefined-msgs').show();
        $('#settings').hide();
        $('#back').show();
        display = topBarButton.style.display;
    });
    $('#back').click(function() {
        $('.section-2').show();
        $('.predefined-msgs').hide();
        $('#settings').show();
        $('#back').hide();
        if(display=='none')
            $('#portfolio').show();
        else
            $('#import').show();
    });
    $('#cross-2').click(function() {
        $('.add-new-msg').hide();
    });
    $('#new-msg').click(function() {
        $('.add-new-msg').show();
    });
});