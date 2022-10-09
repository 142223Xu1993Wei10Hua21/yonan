$(function () {
    var $src="";
    var imgName="";
    var qianzhui=$("#qianzhui").val();
    $(".manage").mouseenter(function () {
        $src=$(this).find("img").attr("src");
        imgName=$src.slice($src.lastIndexOf("/")+1,-4);
        $(this).find("img").attr("src",qianzhui+"images/businessView/"+imgName+"1.png");
        $(this).find(".n_Name").css("color","rgb(206,16,43)")
    });
    $(".manage").mouseleave(function () {
        $(this).find("img").attr("src",qianzhui+"images/businessView/"+imgName+".png");
        $(this).find(".n_Name").css("color","#333333")
    });

    $(".clickLook").mouseenter(function () {
        $(this).find("span").css("color","#E60019");
        $(this).find(".moreW").css("borderColor","#E60019")
    });
    $(".clickLook").mouseleave(function () {
        $(this).find("span").css("color","#CACACA");
        $(this).find(".moreW").css("borderColor","#CACACA")
    });
});