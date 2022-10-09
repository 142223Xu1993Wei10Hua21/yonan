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
        $(".ya-notice-list").hide();
        $($(".ya-notice-list")[jumpMark-1]).show();
        $(".ya-notice-tab a").removeClass("active");
        $($(".ya-notice-tab a")[jumpMark - 1]).addClass("active");
        var index = jumpMark-1;
        $('.ya-notice-list').eq(index).fadeIn().siblings('.ya-notice-list').fadeOut();
        switch (index) {
            case 0:
                $("#mianbaoxue").html("国家法律");
                document.title = '教育园地_法律法规_国家法律' + $("#wintitle").val();
                break;
            case 1:
                $("#mianbaoxue").html("国家政策");
                document.title = '教育园地_法律法规_国家政策' + $("#wintitle").val();
                break;
            case 2:
                $("#mianbaoxue").html("行政法规");
                document.title = '教育园地_法律法规_行政法规' + $("#wintitle").val();
                break;
            case 3:
                $("#mianbaoxue").html("司法解释");
                document.title = '教育园地_法律法规_司法解释' + $("#wintitle").val();
                break;
            case 4:
                $("#mianbaoxue").html("部门规章");
                document.title = '教育园地_法律法规_部门规章' + $("#wintitle").val();
                break;
            case 5:
                $("#mianbaoxue").html("自律规则");
                document.title = '教育园地_法律法规_自律规则' + $("#wintitle").val();
                break;
        }
    }



    $('.ya-notice-tab a').click(function() {
        var index =$(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.ya-notice-list').eq(index).fadeIn().siblings('.ya-notice-list').fadeOut();
        switch (index) {
            case 0:
                $("#mianbaoxue").html("国家法律");
                document.title = '教育园地_法律法规_国家法律' + $("#wintitle").val();
                break;
            case 1:
                $("#mianbaoxue").html("国家政策");
                document.title = '教育园地_法律法规_国家政策' + $("#wintitle").val();
                break;
            case 2:
                $("#mianbaoxue").html("行政法规");
                document.title = '教育园地_法律法规_行政法规' + $("#wintitle").val();
                break;
            case 3:
                $("#mianbaoxue").html("司法解释");
                document.title = '教育园地_法律法规_司法解释' + $("#wintitle").val();
                break;
            case 4:
                $("#mianbaoxue").html("部门规章");
                document.title = '教育园地_法律法规_部门规章' + $("#wintitle").val();
                break;
            case 5:
                $("#mianbaoxue").html("自律规则");
                document.title = '教育园地_法律法规_自律规则' + $("#wintitle").val();
                break;
        }
    });
    //国家法律列表
	$.GetPageList({
		url: "/tools/ajax_article.ashx?action=pagelist",
		param: {
			channel_name: "jiaoyuyuandi",
			orderby: "add_time desc",
			category_id: 99
		},
		listDiv: "#guojiafalvbox",
		pageDiv: "#guojiafalvpage",
		template: "#guojiafalvlist"
	});
	//国家政策列表
	$.GetPageList({
		url: "/tools/ajax_article.ashx?action=pagelist",
		param: {
			channel_name: "jiaoyuyuandi",
			orderby: "add_time desc",
			category_id: 100
		},
		listDiv: "#guojiazhengcebox",
		pageDiv: "#guojiazhengcepage",
		template: "#guojiazhengcelist"
	});
	//行政法规列表
	$.GetPageList({
		url: "/tools/ajax_article.ashx?action=pagelist",
		param: {
			channel_name: "jiaoyuyuandi",
			orderby: "add_time desc",
			category_id: 101
		},
		listDiv: "#xingzhengfaguibox",
		pageDiv: "#xingzhengfaguipage",
		template: "#xingzhengfaguilist"
	});
	//司法解释列表
	$.GetPageList({
		url: "/tools/ajax_article.ashx?action=pagelist",
		param: {
			channel_name: "jiaoyuyuandi",
			orderby: "add_time desc",
			category_id: 102
		},
		listDiv: "#sifajieshibox",
		pageDiv: "#sifajieshipage",
		template: "#sifajieshilist"
	});
	//部门规章列表
	$.GetPageList({
		url: "/tools/ajax_article.ashx?action=pagelist",
		param: {
			channel_name: "jiaoyuyuandi",
			orderby: "add_time desc",
			category_id: 103
		},
		listDiv: "#bumenguizhangbox",
		pageDiv: "#bumenguizhangpage",
		template: "#bumenguizhanglist"
	});
	//自律规则列表
	$.GetPageList({
		url: "/tools/ajax_article.ashx?action=pagelist",
		param: {
			channel_name: "jiaoyuyuandi",
			orderby: "add_time desc",
			category_id: 104
		},
		listDiv: "#zilvguizebox",
		pageDiv: "#zilvguizepage",
		template: "#zilvguizelist"
	});
});