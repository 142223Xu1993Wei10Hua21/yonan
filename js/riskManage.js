$(function () {
    /**
     * 取得url参数
     */
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  // 匹配目标参数
        if (r != null) return decodeURI(r[2]);
        return null; // 返回参数值
    }

    var jumpMark=getUrlParam("jumpMark");
    if(!jumpMark)
        jumpMark=1;
    if(jumpMark){
        $(".innerRisk").hide();
        $(".index"+jumpMark).show();
        $(".ya-notice-tab a").removeClass("active");
        $($(".ya-notice-tab a")[jumpMark-1]).addClass("active");
        var index=jumpMark-1;
        $('.innerRisk').eq(index).show().siblings('.innerRisk').hide();

        switch (index) {
            case 0:
                $("#mianbaoxue").html("业务介绍");
                document.title = '业务一览_风险管理_业务介绍' + $("#wintitle").val();
                break;
            case 1:
                $("#mianbaoxue").html("品种委员会");
                document.title = '业务一览_风险管理_品种委员会' + $("#wintitle").val();
                break;
            case 2:
                $("#mianbaoxue").html("信息公示");
                document.title = '业务一览_风险管理_信息公示' + $("#wintitle").val();
                break;
             case 3:
                $("#mianbaoxue").html("风险提示");
                document.title = '业务一览_风险管理_风险提示' + $("#wintitle").val();
                break;
        }
    }

    $('.ya-notice-tab a').click(function() {
        var index =$(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.innerRisk').eq(index).show().siblings('.innerRisk').hide();

        switch (index) {
            case 0:
                $("#mianbaoxue").html("业务介绍");
                document.title = '业务一览_风险管理_业务介绍' + $("#wintitle").val();
                break;
            case 1:
                $("#mianbaoxue").html("品种委员会");
                document.title = '业务一览_风险管理_品种委员会' + $("#wintitle").val();
                break;
            case 2:
                $("#mianbaoxue").html("信息公示");
                document.title = '业务一览_风险管理_信息公示' + $("#wintitle").val();
                break;
            case 3:
                $("#mianbaoxue").html("风险提示");
                document.title = '业务一览_风险管理_风险提示' + $("#wintitle").val();
                break;
        }
    });
});