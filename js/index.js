$(function () {

    /**
     * 取得url参数
     */
    function getUrlParam(name) {
        alert(123)
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  // 匹配目标参数
        if (r != null) return decodeURI(r[2]);
        return null; // 返回参数值
    }

    var $src = "";
    var imgName = "";
    $(".WhiteBg").mouseenter(function () {
        $(this).find("img").eq(0).hide();
        $(this).find("img").eq(1).show();
        // $src = $(this).find("img").attr("src");
        // imgName = $src.slice($src.lastIndexOf("/") + 1, -4);
        // $(this).find("img").attr("src", "../images/index/" + imgName + "1.png");
    });
    $(".WhiteBg").mouseleave(function () {
        $(this).find("img").eq(1).hide();
        $(this).find("img").eq(0).show();
        // $(this).find("img").attr("src", "../images/index/" + imgName + ".png");
    });

    // $(".clickLook").mouseenter(function () {
    //     $(this).find("span").css("color", "#E60019");
    //     $(this).find(".moreW").css("borderColor", "#E60019")
    // });
    // $(".clickLook").mouseleave(function () {
    //     $(this).find("span").css("color", "#CACACA");
    //     $(this).find(".moreW").css("borderColor", "#CACACA")
    // });

    //$(".titleN").click(function () {
    //    document.location.href = "../public/indexModel.shtml";
    //});

    $('.dowebok').liMarquee({
        direction: 'up',
        runshort: false,/*内容不足时不滚动*/
		scrollamount:20
    });

    $(".topLun .carousel-inner").mouseover(function () {
        $(".topLun .swiperBtn").show();
    });
    $(".topLun .swiperBtn").mouseover(function () {
        $(" .topLun .swiperBtn").show();
        $(this).addClass("mouseStyle");
    });
    $(".topLun .swiperBtn").mouseleave(function () {
        $(this).removeClass("mouseStyle");
    });
    $(".topLun .carousel-inner").mouseleave(function () {
        $(" .topLun .swiperBtn").hide();
    });
});