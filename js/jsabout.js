$(document).ready(function(){


    $(".fa-times").click(function() {
        $(".contWrap").removeClass("appear");
    });

    $("#contBtn").click(function() {
        $(".contWrap").addClass("appear");
    });

    $('.fa-times-circle').click(function() {
        $('.reserveWrap').removeClass('appear1');
    });

    $('#resBtn').click(function() {
        $('.reserveWrap').addClass('appear1');
    });

    $('#bookBtn').click(function() {
        $('.reserveWrap').addClass('appear1');
    });

    $('.disIcon').click(function(){
        $('.disText').toggleClass('hide3');
    });

});