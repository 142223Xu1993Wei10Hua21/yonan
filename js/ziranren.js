$(function() {
	$('.ya-notice-tab>a').click(function() {
        var index =$(this).index();
        switch (index) {
            case 0:
                $("#mianbaoxue").html("自然人");
                document.title = '居间人_自然人' + $("#wintitle").val();
                break;
            case 1:
                $("#mianbaoxue").html("法人");
                document.title = '居间人_法人' + $("#wintitle").val();
                break;
        }
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.innerRisk').eq(index).show().siblings('.innerRisk').hide();
    });
	$("#searchbtn").click(function() {
		var xingming = $("#xingming").val();
		//if (!xingming) {
		//	alert("请填写姓名！");
		//	return;
		//}
		var bumen = $("#bumen").val();
		//if (!bumen) {
		//	alert("请填写部门！");
		//	return;
		//}
		$.ajax({
			type: "POST",
			url: "/tools/ajax.ashx?action=search_ziranren",
			data: {
				xingming: xingming,
				bumen: bumen,
				channelName:"jujianren",
				category_id:116
			},
			dataType:"json",
			success: function(data) {
				if (data.status == 1) {
					var gettpl = document.getElementById('demo').innerHTML;
					laytpl(gettpl).render(data.list, function(html) {
						$("#ziranrenbox").empty().append(html);
					});
				}
			}
		});

	});

	//自然人
	// $.GetPageList({
	// 	url: "/tools/ajax_article.ashx?action=pagelist",
	// 	param: {
	// 		channel_name: "jujianren",
	// 		orderby: "add_time desc",
	// 		category_id: 116
	// 	},
	// 	listDiv: "#ziranrenbox",
	// 	pageDiv: "#ziranrenpage",
	// 	template: "#ziranrenlist"
	// });

	//法人
	// $.GetPageList({
	// 	url: "/tools/ajax_article.ashx?action=pagelist",
	// 	param: {
	// 		channel_name: "jujianren",
	// 		orderby: "add_time desc",
	// 		category_id: 117
	// 	},
	// 	listDiv: "#farenbox",
	// 	pageDiv: "#farenpage",
	// 	template: "#farenlist"
	// });


});