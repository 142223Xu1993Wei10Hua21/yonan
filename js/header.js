$(function () {
    $switchLi=$(".switchMenu ul li");
    $switchLi.mouseenter(function () {
       $(".sub-nav").hide();
       $("#"+$(this).data("submenu")).show();
    });
    $switchLi.mouseleave(function () {
        $(".sub-nav").hide();
    });
    $(".sub-nav").mouseenter(function () {
        $(this).show();
    });
    $(".sub-nav").mouseleave(function () {
        $(this).hide();
    });
    $switchLi.click(function () {
        $switchLi.removeClass("activeLi");
        $(this).addClass("activeLi");
    });

    $(".jumpA a").click(function () {
        var href=$(this).attr("href");
        var hash=href.substring(href.indexOf("#"));
        if(hash.indexOf('#')==-1) return true;
        $("html, body").animate({
            scrollTop: $(hash).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });

    });
});

//搜索查询
function SiteSearch2(send_url, divTgs) {
	var str = $.trim($(divTgs).val());
	if (str.length > 0 && str != "输入关健字") {
	    window.location.href = send_url + "?keyword=" + encodeURI($(divTgs).val());
	}
	return false;
}
// 还有没有js文件引入的