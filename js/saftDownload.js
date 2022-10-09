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
        $(".innerList").hide();
        $(".index"+jumpMark).show();
        $(".ya-notice-tab a").removeClass("active");
        $($(".ya-notice-tab a")[jumpMark-1]).addClass("active");
         $("#mianbaoxue").html($($(".ya-notice-tab a")[jumpMark-1]).html());
        document.title = '网上营业厅_软件下载_'+$($(".ya-notice-tab a")[jumpMark-1]).html()+"_" + $("#wintitle").val();
    }

    var $src="";
    var imgName="";
    $(".btnList>span").mouseenter(function () {
        $src=$(this).find("img").attr("src");
        imgName=$src.slice($src.lastIndexOf("/")+1,-4);
        $(this).find("img").attr("src","./main/images/softDown/"+imgName+"1.png");
        $(this).css("color","rgb(206,16,43)").css("borderColor","rgb(206,16,43)");
        $(this).find(".shuG").css("color","rgb(206,16,43)");
		 $(this).find("a").css("color","rgb(206,16,43)");

    });
    $(".btnList>span").mouseleave(function () {
        $(this).find("img").attr("src","./main/images/softDown/"+imgName+".png");
        $(this).css("color","#C3C3C3").css("borderColor","#E8E8E8");
        $(this).find(".shuG").css("color","#E8E8E8");
		 $(this).find("a").css("color","#C7C7C7");
    });
    $('.ya-notice-tab a').click(function() {
        var index =$(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.innerList').eq(index).show().siblings('.innerList').hide();

        $("#mianbaoxue").html($(this).html());
        document.title = '网上营业厅_软件下载_'+$(this).html()+"_" + $("#wintitle").val();
    });

    var exchange=$("#jW_Change span");
    for(var i=0;i<exchange.length;i++){
        (function (index) {
            $(exchange[index]).click(function () {
                exchange.removeClass("active");
                $(this).addClass("active");
                $(".changeList").addClass("hid");
                $(".index_"+(index+1)).removeClass("hid");
                $("#mianbaoxue").html($(this).html());
        		document.title = '网上营业厅_软件下载_境外交易软件_'+$(this).html()+"_" + $("#wintitle").val();
            })
        })(i)
    }
    var exchangeN=$("#exchangeN span");
    for(var i=0;i<exchangeN.length;i++){
        (function (index) {
            $(exchangeN[index]).click(function () {
                exchangeN.removeClass("active");
                $(this).addClass("active");
                $(".change_List").addClass("hid");
                $(".i_"+(index+1)).removeClass("hid");
                
                $("#mianbaoxue").html($(this).html());
        		document.title = '网上营业厅_软件下载_正式行情交易_'+$(this).html()+"_" + $("#wintitle").val();
            })
        })(i)
    }
});