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

    var jumpMark = getUrlParam("jumpMark");
    var jm_inner = getUrlParam("jm_inner");

    var switchA = $(".switchList a");
    for (i = 0; i < switchA.length; i++) {
        (function (index) {
            $(switchA[index]).click(function () {
                $(".switchList a").removeClass("active");
                $(this).addClass("active");
                $(".nextContent").hide();
                $(".index" + (index + 1)).show();
                if (index == 3) {
                    var data = [];
                    function setOption(data) {
                        //中国地图
                        var myChart = echarts.init(document.getElementById('china-map'));
                        var option = {
                            title: {
                                x: 'center'
                            },
                            tooltip: { //提示框组件。
                                trigger: 'item', //数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。

                                formatter: function (params) {
                                    var info = "";
									if(params.data["area"].length>0){
										for (var i = 0; i < params.data["area"].length; i++) {
											info += '<span class="cityList">' + params.data["area"][i] + '</span>';
										}
										return '<div class="businessDepart">'+info+'</div>';
									}
                                    
                                },
                                backgroundColor: "#ffffff", //提示标签背景颜色
                                textStyle: {
                                    color: "#B72427"
                                }, //提示标签字体颜色
                                borderColor: "#C9555A",
                                borderWidth: "1"
                            },
                            legend: {
                                // orient:'horizontal',
                                x: 'center',
                                top: 0
                            },
                            visualMap: { //颜色的设置  dataRange
                                orient: 'horizontal',
                                x: 'center',
                                y: 'top',
							
                                splitList: [
                                {start: 12, end:14,color:'#CC0000'},
                                {start:10, end:12,color:'#D32626'},
                                {start:8, end:10,color:'#DB4C4C'},
                                {start: 6, end: 8, label: '10 到 200（自定义label）',color:'#E27272'},
                                {start: 4,end: 6,color: '#EA9999'},
                                {start: 2, end:4, label: '5（自定义特殊颜色）',color:'#F2BFBF'},
                                {start:0,end:2,color: '#F9E5E5'},
                                {start:0,end:0,color: '#ffffff'}],
                                text: ['多', '少'], // 文本，默认为数值文本
								textStyle: {
									fontSize: '16'
								},
                            },
                            roamController: { //控制地图的上下左右放大缩小 图上没有显示
                                show: true,
                                x: 'right',
                                mapTypeControl: {
                                    'china': true
                                }
                            },
                            series: [{
                                type: 'map',
                                mapType: 'china',
                                roam: false, //是否开启鼠标缩放和平移漫游
                                itemStyle: { //地图区域的多边形 图形样式
                                    normal: { //是图形在默认状态下的样式
                                        label: {
                                            show: true, //是否显示标签
                                            textStyle: {
                                                color: "#333333",
												fontSize: '14'
                                            }
                                        },
                                        borderWidth: .5, //区域边框宽度
                                        borderColor: '#000000', //区域边框颜色
                                    },
                                    emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                                        label: {
                                            show: true,
											textStyle: {
												fontSize: '14'
											}
                                        },
                                        borderWidth: .5,
                                        borderColor: '#4b0082',
                                        areaColor: "#ffdead",
                                    }
                                },
                                top: "3%", //组件距离容器的距离
                                data: data,
								fontSize: '16'
                            }]
                        };
                        myChart.setOption(option);
                        myChart.on('click', function (params) {
                            var dataIndex = params.dataIndex;
                            window.location.href = "/zoujinyongan.html?jumpMark=2&jm_inner=3&jm_sheng=" + params.data.name + "#jiT_D";
                        });
                    }
                    function getMapData() {
                        $.ajax({
                            type: "post",
                            url: "../../tools/map.ashx",
                            data: {},
                            dataType: "jsonp",
                            success: function (sdata, textStatus) {
                                if (textStatus = "success") {
                                    for (var i = 0; i < sdata.length; i++) {
                                        var dName = sdata[i].name;
                                        var dValue = sdata[i].value;
                                        var dArea = sdata[i].area;
                                        var oneData = {};
                                        var oneData = { name: dName, value: dValue, area: dArea };
                                        data.push(oneData);
                                    }
                                    setOption(data);//执行setOption函数。传参
                                } else {
                                    top.dialog({
                                        title: '提示',
                                        content: '对不起，AJAX检测map.ashx?action=map_nameandvalue未能获取数据！',
                                        okValue: '确定',
                                        ok: function () { },
                                        onclose: function () {
                                            $("#urlKey", currDocument).focus();
                                        }
                                    }).showModal();
                                }
                            }
                        });
                    }
                    getMapData();
                }
            })
        })(i)
    }
    //处理头部的跳转
    if (jumpMark) {
        $(".nextContent").hide();
        $(".index" + jumpMark).show();
        $(".ya-notice-tab a").removeClass("active");
        $($(".ya-notice-tab a")[jumpMark - 1]).addClass("active");
        if (jumpMark == 4) {
            $($(".switchList a")[3]).trigger("click");
        }
		if(jumpMark == 9){
			$(".nextContent").hide();
			$(".index4").show();
			$(".ya-notice-tab a").removeClass("active");
			$($(".ya-notice-tab a")[3]).addClass("active");
			$($(".switchList a")[3]).trigger("click");
		}
    }






    var $src = "";
    var imgName = "";
    var qian = $("#qianzhui").val();
    $(".innerSaft ul li").mouseenter(function () {
        $src = $(this).find("img").attr("src");
        imgName = $src.slice($src.lastIndexOf("/") + 1, -4);
        $(this).find("img").attr("src", qian + "images/onlineHall/" + imgName + "1.png");
    });
    $(".innerSaft ul li").mouseleave(function () {
        $(this).find("img").attr("src", qian + "images/onlineHall/" + imgName + ".png");
    });


    $(".clickLook").mouseenter(function () {
        $(this).find("span").css("color", "#E60019");
        $(this).find(".moreW").css("borderColor", "#E60019")
    });
    $(".clickLook").mouseleave(function () {
        $(this).find("span").css("color", "#CACACA");
        $(this).find(".moreW").css("borderColor", "#CACACA")
    });
});