$(document).ready(function(){
    $(".col-md-4").hide();

    $(".btn").click(function(){
        let idButton = $(this).attr('id');
        $(".col-md-4").hide();
        $("#div-"+idButton).fadeIn();
    });

    $("#showAll").click(function(){
        $(".col-md-4").fadeIn();
    });
    $("#hideAll").click(function(){
        $(".col-md-4").fadeOut();
    });
});
