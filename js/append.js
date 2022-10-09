function initAPD() {
	if ($(window).width() <= 960) {
		$(".switchMenu >ul>li[data-submenu]").off("mouseenter").off("mouseleave");
		$(".sub-nav").off("mouseenter").off("mouseleave");

		$(".navbar-close").remove();
		$(".navbar-ds").append('<a class="navbar-close">返回上一页</a>');

		$(".navbar-ds .navbar-close").on("click", function (e) {
			$(".navbar-ds").removeClass("opened");
		});

		$(".switchMenu >ul>li[data-submenu] a").on("click", function (e) {
			var submenu = $(this).parent().data("submenu");
			$("#" + submenu).show();
			$("#" + submenu)
				.siblings(".sub-nav")
				.hide();
			if ($(".navbar-ds").hasClass("opened")) {
				$(".navbar-ds").removeClass("opened");
			} else {
				$(".navbar-ds").addClass("opened");
			}
			return false;
		});

		$(".btn-toggle-menu")
			.off("click")
			.on("click", function () {
				$("body").toggleClass("opened");
			});

		$(".navbar-ds .sub-nav a").on("click", function () {
			$(".navbar-ds").removeClass("opened");
			$("body").removeClass("opened");
		});

		$(".nkv1").remove();
		$("#yonganIndex").before('<a href="/jiaoyuyuandi.html" class="tzzyd"></a>');
//		$(".tzzyd").append(
//			'<img src="http://demo.stogram.net.cn/yongan/tjyd.jpeg" class="nkv1" />'
//		);

		$(".ya-content .ya-con img").attr("width", "").attr("height", "");

		// $(".ya-content .ya-con img")
		// 	.off("click")
		// 	.on("click", function () {
		// 		var src = $(this).attr("src");
		// 		window.open(src);
		// 		return false;
		// 	});
	} else {
		$(".navbar-close").remove();
		$(".nkv1").remove();
	}
}

$(".btn-toggle-menu").remove();
$(".tzzyd").remove();
$(".menuList.jumpA").append('<a class="btn-toggle-menu"><i></i></a>');
$(".main .top_Tu").after('<a href="/jiaoyuyuandi.html" class="tzzyd"></a>');
// $("#china-map").css("position", "absolute");

$.fn.ready(function () {
	initAPD();
});

$(window).resize(function () {
	initAPD();
});
