
$(document).ready(function(){
    $(".boton1").click(function(){
        var idboton=$(this).attr("class");
        $(".div1").text("el titulo dice mi nombre")
    })
})

$(document).ready(function(){
$(".boton2").click(function(){
    var idboton=$(this).attr("class");
    $(".div3").hide()
})
})

$(document).ready(function(){
    $(".boton3").click(function(){
        var idboton=$(this).attr("class");
        $(".div1").css("background-color","red")
    })
    })