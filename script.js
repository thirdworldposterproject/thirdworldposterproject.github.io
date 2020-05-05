$(document).ready(function () {

    $("#p1, #p2").hide();

    $("#btn1").click(function(){
         $("#p1").toggle();
    });

    $("#btn2").click(function(){
         $("#p2").toggle();
    });
});
