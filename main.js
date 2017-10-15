const hideObj = (obj) => $(obj).hide();
const showObj = (obj) => $(obj).fadeIn();

$(document).ready(function(){
    hideObj(".col-md-4");

    $(".btn").click( function() {
        let obj = "#div-" + $(this).attr('id');
        hideObj('.col-md-4');
        showObj(obj);
    });

    $("#showAll").click( () => showObj(".col-md-4"));
    $("#hideAll").click( () => hideObj(".col-md-4"));
});
