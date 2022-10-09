$(function () {
    var $src="";
    var imgName="";
    var qianzhui=$("#qianzhui").val();
    $(".lawsR ul li>div").mouseenter(function () {
        $src=$(this).find("img").attr("src");
        imgName=$src.slice($src.lastIndexOf("/")+1,-4);
        $(this).find("img").attr("src",qianzhui+"images/InvestorGarden/"+imgName+"1.png");
        $(this).find(".n_Name").css("color","rgb(206,16,43)")
    });
    $(".lawsR ul li>div").mouseleave(function () {
        $(this).find("img").attr("src",qianzhui+"images/InvestorGarden/"+imgName+".png");
        $(this).find(".n_Name").css("color","#333333")
    });
    $(".click_Look").mouseenter(function () {
        $(this).find("span").css("color","#E60019");
        $(this).find(".moreW").css("borderColor","#E60019")
    });
    $(".click_Look").mouseleave(function () {
        $(this).find("span").css("color","#CACACA");
        $(this).find(".moreW").css("borderColor","#CACACA")
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