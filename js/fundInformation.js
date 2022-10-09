$(function () {
    var $src="";
    var imgName="";
    var templateskin=$("#templateskin").val();
    $(".topName").mouseenter(function () {
        $src=$(this).find("img").attr("src");
        imgName=$src.slice($src.lastIndexOf("/")+1,-4);
        $(this).find("img").attr("src",templateskin+"images/businessView/"+imgName+"1.png");
        $(this).css("color","rgb(206,16,43)")
    });
    $(".topName").mouseleave(function () {
        $(this).find("img").attr("src",templateskin+"images/businessView/"+imgName+".png");
        $(this).css("color","#333333")
    });
});