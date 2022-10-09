$(function() {
	$('.ya-notice-tab a').click(function() {
		var index = $(this).index();
		switch (index) {
            case 0:
                $("#mianbaoxue").html("公司公告");
                document.title = '永安公告_公司公告' + $("#wintitle").val();
                break;
            case 1:
                $("#mianbaoxue").html("交易公告");
                document.title = '永安公告_交易公告' + $("#wintitle").val();
                break;
        }
		$(this).addClass('active').siblings('a').removeClass('active');
		$('.ya-notice-list').eq(index).fadeIn().siblings('.ya-notice-list').fadeOut();
	});
	//公司公告
	$.GetPageList({
		url: "/tools/ajax_article.ashx?action=pagelist",
		param: {
			channel_name: "yongangonggao",
			orderby: "add_time desc"
		},
		listDiv: "#gongsigonggaobox",
		pageDiv: "#gongsigonggaopage",
		template: "#gongsigonggaolist"
	});

	//交易公告
	$.GetPageList({
		url: "/tools/ajax_article.ashx?action=pagelist",
		param: {
			channel_name: "yingyeting",
			orderby: "add_time desc",
			category_id: 69
		},
		listDiv: "#jiaoyigonggaobox",
		pageDiv: "#jiaoyigonggaopage",
		template: "#jiaoyigonggaolist"
	});

	

});