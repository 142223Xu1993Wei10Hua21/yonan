$(function() {
	/**
	 * 取得url参数
	 */
	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg); // 匹配目标参数
		if (r != null) return decodeURI(r[2]);
		return null; // 返回参数值
	}

	var jumpMark = getUrlParam("jumpMark");
	if (jumpMark) {
		$(".innerRisk").hide();
		$(".index" + jumpMark).show();
		$(".ya-notice-tab a").removeClass("active");
		$($(".ya-notice-tab a")[jumpMark - 1]).addClass("active");
                var index = jumpMark-1;
		if (index == 0) {
			$('.innerRisk').eq(0).show().siblings('.innerRisk').hide();
			$("#mianbaoxue").html("业务介绍");
			document.title = '业务一览_境外业务_业务介绍' + $("#wintitle").val();
		}
		if (index == 2) {
			$('.innerRisk').eq(1).show().siblings('.innerRisk').hide();
			$("#mianbaoxue").html("精彩活动");
			document.title = '业务一览_境外业务_精彩活动' + $("#wintitle").val();
		}
	}
	$('.ya-notice-tab a').click(function() {
		var index = $(this).index();
		if (index == 0) {
			$(this).addClass('active').siblings('a').removeClass('active');
			$('.innerRisk').eq(0).show().siblings('.innerRisk').hide();
			$("#mianbaoxue").html("业务介绍");
			document.title = '业务一览_境外业务_业务介绍' + $("#wintitle").val();
		}
		if (index == 2) {
			$(this).addClass('active').siblings('a').removeClass('active');
			$('.innerRisk').eq(1).show().siblings('.innerRisk').hide();
			$("#mianbaoxue").html("精彩活动");
			document.title = '业务一览_境外业务_精彩活动' + $("#wintitle").val();
		}
	});

	//精彩活动
	$.GetPageList({
		url: "/tools/ajax_article.ashx?action=pagelist",
		param: {
			channel_name: "yewuyilan",
			orderby: "add_time desc",
			category_id: 91
		},
		listDiv: "#jingcaihuodongbox",
		pageDiv: "#jingcaihuodongpage",
		template: "#jingcaihuodonglist"
	});
});