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
        $(".index"+jumpMark).show();
        $(".ya-notice-tab a").removeClass("active");
        $($(".ya-notice-tab a")[jumpMark - 1]).addClass("active");
        var index = jumpMark - 1;
        switch (index) {
            case 0:
                $("#mianbaoxue").html("业务介绍");
                document.title = '业务一览_资产管理_业务介绍' + $("#wintitle").val();
                break;
            case 1:
                $("#mianbaoxue").html("投资团队");
                document.title = '业务一览_资产管理_投资团队' + $("#wintitle").val();
                break;
            case 2:
                $("#mianbaoxue").html("产品公告");
                document.title = '业务一览_资产管理_产品公告' + $("#wintitle").val();
                break;
            case 3:
                $("#mianbaoxue").html("人员公示");
                document.title = '业务一览_资产管理_人员公示' + $("#wintitle").val();
                break;
            case 4:
                $("#mianbaoxue").html("商品指数");
                document.title = '业务一览_资产管理_商品指数' + $("#wintitle").val();
                break;

        }
        $(this).addClass('active').siblings('a').removeClass('active');
    }

    $('.ya-notice-tab a').click(function() {
        var index =$(this).index();
        switch (index) {
            case 0:
                $("#mianbaoxue").html("业务介绍");
                document.title = '业务一览_资产管理_业务介绍' + $("#wintitle").val();
                break;
            case 1:
                $("#mianbaoxue").html("投资团队");
                document.title = '业务一览_资产管理_投资团队' + $("#wintitle").val();
                break;
            case 2:
                $("#mianbaoxue").html("产品公告");
                document.title = '业务一览_资产管理_产品公告' + $("#wintitle").val();
                break;
            case 3:
                $("#mianbaoxue").html("人员公示");
                document.title = '业务一览_资产管理_人员公示' + $("#wintitle").val();
                break;
            case 4:
                $("#mianbaoxue").html("商品指数");
                document.title = '业务一览_资产管理_商品指数' + $("#wintitle").val();
                break;

        }
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.innerRisk').eq(index).show().siblings('.innerRisk').hide();
         //if(index==4){
         //    $(".threeTu").show();
         //    $(".img_wrap").hide();
         //}else{
         //    $(".threeTu").hide();
         //    $(".img_wrap").show();
         //}
        if(index==1){
            function G(s){
                return document.getElementById(s);
            }

            function getStyle(obj, attr){
                if(obj.currentStyle){
                    return obj.currentStyle[attr];
                }else{
                    return getComputedStyle(obj, false)[attr];
                }
            }

            function Animate(obj, json){
                if(obj.timer){
                    clearInterval(obj.timer);
                }
                obj.timer = setInterval(function(){
                    for(var attr in json){
                        var iCur = parseInt(getStyle(obj, attr));
                        iCur = iCur ? iCur : 0;
                        var iSpeed = (json[attr] - iCur) / 5;
                        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                        obj.style[attr] = iCur + iSpeed + 'px';
                        if(iCur == json[attr]){
                            clearInterval(obj.timer);
                        }
                    }
                }, 30);
            }

            var oPic = G("picBox");
            var oList = G("listBox");

            var oPrev = G("prev");
            var oNext = G("next");
            var oPrevTop = G("prevTop");
            var oNextTop = G("nextTop");

            var oPicLi = oPic.getElementsByTagName("li");
            var oListLi = oList.getElementsByTagName("li");
            var len1 = oPicLi.length;
            var len2 = oListLi.length;

            var oPicUl = oPic.getElementsByTagName("ul")[0];
            var oListUl = oList.getElementsByTagName("ul")[0];
            var w1 = oPicLi[0].offsetWidth;
            var w2 = oListLi[0].offsetWidth;

            oPicUl.style.width = w1 * len1 + "px";
            oListUl.style.width = w2 * len2 + "px";

            var index = 0;

            var num = 5;
            var num2 = Math.ceil(num / 2);

            function Change(){

                Animate(oPicUl, {left: - index * w1});

                if(index < num2){
                    Animate(oListUl, {left: 0});
                }else if(index + num2 <= len2){
                    Animate(oListUl, {left: - (index - num2 + 1) * w2});
                }else{
                    Animate(oListUl, {left: - (len2 - num) * w2});
                }

                for (var i = 0; i < len2; i++) {
                    oListLi[i].className = "";
                    if(i == index){
                        oListLi[i].className = "on";
                    }
                }
            }
			oNextTop.onmouseover=function(){
				$(this).css("background-image","url(.../main/images/businessView/right1.png");
			}
			oNextTop.onmouseout=function(){
				$(this).css("background-image","url(.../main/images/businessView/right.png");
			}
			oPrevTop.onmouseover=function(){
				$(this).css("background-image","url(.../main/images/businessView/left1.png");
			}
			oPrevTop.onmouseout=function(){
				$(this).css("background-image","url(.../main/images/businessView/left.png");
			}
            oNextTop.onclick = oNext.onclick = function(){//点击下一个按钮
			
				oNextTop.onmouseover=null;
				oNextTop.onmouseout=null;
				oPrevTop.onmouseover=function(){
					$(this).css("background-image","url(.../main/images/businessView/left1.png");
				}
				oPrevTop.onmouseout=function(){
					$(this).css("background-image","url(.../main/images/businessView/left.png");
				}
				$(this).css("background-image","url(.../main/images/businessView/right1.png");
				$("#prevTop").css("background-image","url(.../main/images/businessView/left.png");
				
                index ++;
                index = index == len2 ? 0 : index;
                $(".introduceCon").addClass("hid");
                $(".index_"+index).removeClass("hid");
                Change();
                var href=$(".index_"+index).find(".dizhi").val();
              //  $("#urllink").attr("href",href);

            };

            oPrevTop.onclick = oPrev.onclick = function(){//点击前一个按钮
				oPrevTop.onmouseover=null;
				oPrevTop.onmouseout=null;
				oNextTop.onmouseover=function(){
					$(this).css("background-image","url(.../main/images/businessView/right1.png");
				}
				oNextTop.onmouseout=function(){
					$(this).css("background-image","url(.../main/images/businessView/right.png");
				}
				$(this).css("background-image","url(.../main/images/businessView/left1.png");
				$("#nextTop").css("background-image","url(.../main/images/businessView/right.png");
                index --;
                index = index == -1 ? len2 -1 : index;
                $(".introduceCon").addClass("hid");
                $(".index_"+index).removeClass("hid");
                Change();
                var href=$(".index_"+index).find(".dizhi").val();
               // $("#urllink").attr("href",href);
            };

            for (var i = 0; i < len2; i++) {
                oListLi[i].index = i;
                oListLi[i].onclick = function(){//点击小图
                    index = this.index;
                    $(".introduceCon").addClass("hid");
                    $(".index_"+index).removeClass("hid");
                    Change();
                    var href=$(".index_"+index).find(".dizhi").val();
                	//$("#urllink").attr("href",href);
                }
            }
        }
    });
	//产品公告
	$.GetPageList({
		url:"/tools/ajax_article.ashx?action=pagelist",
		param:{channel_name:"chanpingonggao",orderby:"add_time desc"},
		listDiv:"#chanpingonggaobox",
		pageDiv:"#chanpingonggaopage",
		template:"#chanpingonggaolist"
	});

	//人员公示
	$.GetPageList({
		url:"/tools/ajax_article.ashx?action=pagelist",
		param:{channel_name:"renyuangongshi",orderby:"add_time desc"},
		listDiv:"#renyuangongshibox",
		pageDiv:"#renyuangongshipage",
		template:"#renyuangongshilist"
	});
});