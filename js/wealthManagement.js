$(function () {
    var $src="";
    var imgName="";
    
    var qianzhui=$("#qianzhui").val();
    $(".wealthList ul li").mouseenter(function () {
        $src=$(this).find("img").attr("src");
        imgName=$src.slice($src.lastIndexOf("/")+1,-4);
        $(this).find("img").attr("src",qianzhui+"images/businessView/"+imgName+"1.png");
        $(this).find(".n_Name").css("color","rgb(206,16,43)")
    });
    $(".wealthList ul li").mouseleave(function () {
        $(this).find("img").attr("src",qianzhui+"images/businessView/"+imgName+".png");
        $(this).find(".n_Name").css("color","#333333")
    });
    $("#certificate").click(function () {
        $(".supernatant").show();
        $(".mask").show();
    });
    $("#close").click(function () {
        $(".supernatant").hide();
        $(".mask").hide();
    })

});