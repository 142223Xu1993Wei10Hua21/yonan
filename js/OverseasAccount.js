$(function () {
    $(".clickLook").mouseenter(function () {
        $(this).find("span").css("color","#E60019");
        $(this).find(".moreW").css("borderColor","#E60019")
    });
    $(".clickLook").mouseleave(function () {
        $(this).find("span").css("color","#CACACA");
        $(this).find(".moreW").css("borderColor","#CACACA")
    });
});