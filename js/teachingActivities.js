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
    if(jumpMark){
        $(".innerRisk").hide();
        $(".index"+(jumpMark)).show();
        $(".ya-notice-tab a").removeClass("active");
        $($(".ya-notice-tab a")[jumpMark - 1]).addClass("active");
        var index = jumpMark - 1;
        $('.innerRisk').eq(index).show().siblings('.innerRisk').hide();
        switch (index) {
            case 0:
                $("#mianbaoxue").html("每月计划");
                document.title = '教育园地_投教活动_每月计划' + $("#wintitle").val();
                break;
            case 1:
                $("#mianbaoxue").html("精彩聚焦");
                document.title = '教育园地_投教活动_精彩聚焦' + $("#wintitle").val();
                break;
            case 2:
                $("#mianbaoxue").html("活动回顾");
                document.title = '教育园地_投教活动_活动回顾' + $("#wintitle").val();
                break;
        }
    }

    $('.ya-notice-tab>a').click(function() {
        var index =$(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.innerRisk').eq(index).show().siblings('.innerRisk').hide();
        switch (index) {
            case 0:
                $("#mianbaoxue").html("每月计划");
                document.title = '教育园地_投教活动_每月计划' + $("#wintitle").val();
                break;
            case 1:
                $("#mianbaoxue").html("精彩聚焦");
                document.title = '教育园地_投教活动_精彩聚焦' + $("#wintitle").val();
                break;
            case 2:
                $("#mianbaoxue").html("活动回顾");
                document.title = '教育园地_投教活动_活动回顾' + $("#wintitle").val();
                break;
        }
    });
    //每月计划
	$.GetPageList({
		url:"/tools/ajax_article.ashx?action=pagelist",
		param:{channel_name:"jiaoyuyuandi",orderby:"add_time desc",category_id:105},
		listDiv:"#meiyuejihuabox",
		pageDiv:"#meiyuejihuapage",
		template:"#meiyuejihualist"
	});

	//精彩聚焦
	$.GetPageList({
		url:"/tools/ajax_article.ashx?action=pagelist",
		param:{channel_name:"jiaoyuyuandi",orderby:"add_time desc",category_id:106},
		listDiv:"#jingcaijujiaobox",
		pageDiv:"#jingcaijujiaopage",
		template:"#jingcaijujiaolist"
	});

	//活动回顾
	$.GetPageList({
		url:"/tools/ajax_article.ashx?action=pagelist",
		param:{channel_name:"jiaoyuyuandi",orderby:"add_time desc",category_id:107},
		listDiv:"#huodonghuigubox",
		pageDiv:"#huodonghuigupage",
		template:"#huodonghuigulist"
	});
});