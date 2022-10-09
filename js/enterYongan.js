$(function () {
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
    var jm_inner = getUrlParam("jm_inner");
    var jm_sheng = getUrlParam("jm_sheng");

    var href = window.location.hash;

    // if(href.indexOf('#')==-1) return true;
    //setTimeout(function () {
    //    $("html, body").animate({
    //        scrollTop: $(href).offset().top + "px"
    //    }, {
    //        duration: 500,
    //        easing: "swing"
    //    });
    //}, 10);



    $(".switchColumn span").click(function () {
		if ($(this).text() == "总部") {
			$(".switchColumn").find("span").removeClass("active");
            $(this).addClass("active");
            $(".columnList").hide();
            $("#totalB").show();
		}
        if ($(this).text() == "参（控）股机构") {
            $(".switchColumn").find("span").removeClass("active");
            $(this).addClass("active");
            $(".columnList").hide();
            $("#canK").show();
        }
        if ($(this).text() == "分支机构" || (jumpMark == 2 && jm_inner == 2)) {
            $(".switchColumn").find("span").removeClass("active");
            $(this).addClass("active");
            $(".columnList").hide();
            $("#branchJg").show();


            //地图名片
            var infoWindow = "";
            var marker = "";
            var point = "";
            var map = new BMap.Map("allmap");
            var mymap = getData();
            mapFunc(mymap.html, mymap.positionX, mymap.positionY);

            function mapFunc(html, positionX, positionY) {
                point = new BMap.Point(positionX, positionY);
                marker = new BMap.Marker(point); // 创建标注
                map.addOverlay(marker); // 将标注添加到地图中
                map.centerAndZoom(point, 15);
                var opts = {
                    width: 400,
                    height: 150
                };
                infoWindow = new BMap.InfoWindow(html, opts);
                map.openInfoWindow(infoWindow, point); //开启信息窗口
            }

            //联系地址
            function getData() {
                var mymap = new myMap();
                mymap.title = $("#company_name").html();
                mymap.address = $("#dizhi").html();
                mymap.dianhua = $("#dianhua").html();
                mymap.postcode = $("#youbian").html();
                mymap.website = $("#website").html();
                mymap.email = $("#youxiang").html();
                mymap.positionX = $("#positionX").val();
                mymap.positionY = $("#positionY").val();
                mymap.html = "<h3 style='color:#444;font-size:16px;letter-spacing:1px;margin-bottom:10px;'>" + mymap.title + "</h3><p style='font-size:16px;letter-spacing:1px;color:#666;margin-bottom:5px;line-height:20px'>地址：" + mymap.address + "</p>" +
                     "<p style='font-size:16px;letter-spacing:1px;color:#666;'>联系方式：" +
                    mymap.dianhua + "</p>" +
                    "<p style='font-size:16px;letter-spacing:1px;color:#666;'>邮编：" +
                    mymap.postcode + "</p>" +
                    "<p style='font-size:16px;letter-spacing:1px;color:#666;'>网址：" +
                    mymap.website + "</p>" +
                    "<p style='font-size:16px;letter-spacing:1px;color:#666;'>邮箱：" +
                    mymap.email + "</p>";
                return mymap;
            }
            //定义类

            function myMap() {
                this.html = "";
                this.title = "";
                this.address = "";
                this.email = "";
                this.website = "";
                this.postcode = "";
                this.positionX = 0;
                this.positionY = 0;
            }
            marker.addEventListener("click", function () {
                map.openInfoWindow(infoWindow, point); //开启信息窗口
            });

        }
	});

    
    // var switchA = $(".switch_List a");
    // console.log(switchA);
    // for (var i = 0; i < switchA.length; i++) {
    //     (function (index) {
    //         $(switchA[index]).click(function () {
    //             $(".switch_List a").removeClass("active");
    //             $(this).addClass("active");
    //             $(".column").hide();
    //             $(".index" + (index + 1)).show();
    //             if (index == 4 || jumpMark == 5) {
    //                 //地图名片
    //                 var infoWindow = "";
    //                 var marker = "";
    //                 var point = "";
    //                 var map = new BMap.Map("allmap1");
    //                 var mymap = getData();
    //                 mapFunc(mymap.html, mymap.positionX, mymap.positionY);
    //                 function mapFunc(html, positionX, positionY) {
    //                     point = new BMap.Point(positionX, positionY);
    //                     marker = new BMap.Marker(point);  // 创建标注
    //                     map.addOverlay(marker);              // 将标注添加到地图中
    //                     map.centerAndZoom(point, 15);
    //                     var opts = {
    //                        width: 400,
    //                 height: 150
    //                     };
    //                     //联系地址
    //                     infoWindow = new BMap.InfoWindow(html, opts);
    //                     map.openInfoWindow(infoWindow, point); //开启信息窗口
    //                 }

    //                 function getData() {
    //                     var mymap = new myMap();
    //                     mymap.title = $("#company_name").html();
    //                     mymap.address = $("#dizhi").html();
    //                     mymap.dianhua = $("#dianhua").html();
    //                     mymap.postcode = $("#youbian").html();
    //                     mymap.website = $("#website").html();
    //                     mymap.email = $("#youxiang").html();
    //                     mymap.positionX = $("#positionX").val();
    //                     mymap.positionY = $("#positionY").val();
    //                     mymap.html = "<p style='font-size:16px;color:#666;letter-spacing:1px;margin-bottom:5px;line-height:20px'>地址：" + mymap.address + "</p>" +
    //                         "<p style='font-size:16px;letter-spacing:1px;color:#666;'>联系方式：" +
    //                         mymap.dianhua + "</p>" +
    //                         "<p style='font-size:16px;letter-spacing:1px;color:#666;'>邮编：" +
    //                         mymap.postcode + "</p>" +
    //                         "<p style='font-size:16px;letter-spacing:1px;color:#666;'>网址：" +
    //                         mymap.website + "</p>" +
    //                         "<p style='font-size:16px;letter-spacing:1px;color:#666;'>邮箱：" +
    //                         mymap.email + "</p>";
    //                     return mymap;
    //                 }
    //                 function myMap() {
    //                     //定义类
    //                     this.html = "";
    //                     this.address = "";
    //                     this.email = "";
    //                     this.website = "";
    //                     this.postcode = "";
    //                     this.positionX = 0;
    //                     this.positionY = 0;
    //                 }
    //                 marker.addEventListener("click", function () {
    //                     map.openInfoWindow(infoWindow, point); //开启信息窗口
    //                 });
    //                 map.enableScrollWheelZoom(true);
    //             }

    //         })
    //     })(i)
    // }


    


    //处理头部的跳转
    if (jumpMark) {
        setTimeout(()=>{
            $(".column").hide();
            $(".index" + jumpMark).show();
            $(".ya-notice-tab a").removeClass("active");
            $($(".ya-notice-tab a")[Number(jumpMark) - 1]).addClass("active");
           if(index==0){
            $($(".ya-notice-tab a")[1]).addClass("active");
            }
            if(index==4) {
                $($(".switch_List a")[4]).trigger("click");
            }
        },10) 
    }
    if (jm_inner) {//集团化发展中的切换
        $(".columnList").hide();
        $($(".columnList")[jm_inner - 1]).show();
        $(".switchColumn span").removeClass("active");
		 if (jm_inner == 1) {
            $($(".switchColumn span")[0]).addClass("active");
        }
        if (jm_inner == 2) {
            $($(".switchColumn span")[2]).addClass("active");
        }
        if (jm_inner == 3) {
            $($(".switchColumn span")[4]).addClass("active");
            $($(".switchColumn span")[4]).trigger("click");
        }
    }
    $(".clickLook").mouseenter(function () {
        $(this).find("span").css("color", "#E60019");
        $(this).find(".moreW").css("borderColor", "#E60019")
    });
    $(".clickLook").mouseleave(function () {
        $(this).find("span").css("color", "#CACACA");
        $(this).find(".moreW").css("borderColor", "#CACACA")
    });
    $(".click_Look").mouseenter(function () {
        $(this).find("span").css("color", "#E60019");
        $(this).find(".moreW").css("borderColor", "#E60019")
    });
    $(".click_Look").mouseleave(function () {
        $(this).find("span").css("color", "#CACACA");
        $(this).find(".moreW").css("borderColor", "#CACACA")
    });
    // 省市 区
    // var selectP_Jg = "省份";
    // var selectC_Jg = "市";
    // var selectA_Jg = "区";
    // var se = $("#jiGuan select");

    // $.ajax({
    //     type: "GET",
    //     url: "",//请求省接口
    //     data: {},
    //     dataType: "json",
    //     success: function (data) {
    //         for (var i = 0; i < data.length; i++) {
    //             var pro = "<option data-id=" + data[i]._id + " value=" + data[i].name + ">" + data[i].name + "</option>";
    //             $("#jiGuan_province").append(pro);
    //         }
    //         for (var j = 0; j < se.length; j++) {
    //             (function (k) {
    //                 $(se[k]).on("change", function () {
    //                     if (k == 0) {
    //                         if ($(se[k]).val() != selectP_Jg) {
    //                             var selectPro_id = $(se[k]).find("option:selected").attr("data-id");
    //                             $("#jG_province").val(selectPro_id);
    //                             $("#jiGuan_city").empty();
    //                             $("#jiGuan_city").append("<option value='地级市'>地级市</option>");
    //                             $("#jiGuan_county").empty();
    //                             $("#jiGuan_county").append("<option value='区'>区</option>");
    //                             selectP_Jg = $(se[k]).val();
    //                             $.ajax({
    //                                 type: "GET",
    //                                 url: "",//请求市接口
    //                                 data: { provinceId: selectPro_id },//根据省份id获取市
    //                                 dataType: "json",
    //                                 success: function (data) {
    //                                     for (var m = 0; m < data.length; m++) {
    //                                         var city = "<option data-id=" + data[m]._id + " value=" + data[m].name + ">" + data[m].name + "</option>";
    //                                         $("#jiGuan_city").append(city);
    //                                     }
    //                                 }
    //                             });
    //                         }
    //                     } else if (k == 1) {
    //                         if ($(se[k]).val() != selectC_Jg) {
    //                             var selectCity_id = $(se[k]).find("option:selected").attr("data-id");
    //                             $("#jG_city").val(selectCity_id);
    //                             $("#jiGuan_county").empty();
    //                             $("#jiGuan_county").append("<option value='区'>区</option>");
    //                             selectC_Jg = $(se[k]).val();
    //                             $.ajax({
    //                                 type: "GET",
    //                                 url: "",//获取区的接口
    //                                 data: { cityId: selectCity_id },//传市的id
    //                                 dataType: "json",
    //                                 success: function (data) {
    //                                     for (var y = 0; y < data.length; y++) {
    //                                         var area = "<option data-id=" + data[y]._id + " value=" + data[y].name + ">" + data[y].name + "</option>";
    //                                         $("#jiGuan_county").append(area);
    //                                     }
    //                                 }
    //                             });
    //                         }
    //                     } else {
    //                         if ($(se[k]).val() != selectA_Jg) {
    //                             var selectArea_id = $(se[k]).find("option:selected").attr("data-id");
    //                             selectA_Jg = $(se[k]).val();
    //                             $("#jG_area").val(selectArea_id);
    //                         }
    //                     }

    //                 })
    //             })(j)

    //         }
    //     }

    // });
    // // 百度地图添加纯文本信息功能
    // var map = new BMap.Map("allmap");
    // var point = new BMap.Point(120.221174,30.253076);
    // var marker = new BMap.Marker(point);  // 创建标注
    // map.addOverlay(marker);              // 将标注添加到地图中
    // map.centerAndZoom(point, 15);
    // var opts = {
    //     width : 200,     // 信息窗口宽度
    //     height: 100,     // 信息窗口高度
    //     title : "永安期货股份有限公司" , // 信息窗口标题
    //     enableMessage:true,//设置允许信息窗发送短息
    //     message:""
    // };
    // var infoWindow = new BMap.InfoWindow("地址：浙江省杭州市江干区钱江新城新业路200号(新业路与富春路交叉口)", opts);  // 创建信息窗口对象
    // marker.addEventListener("click", function(){
    //     map.openInfoWindow(infoWindow,point); //开启信息窗口
    // });
    //点击搜索

    var inventory = [
         { name: '北京', value: '北京市' },
    { name: '天津', value: '天津市' },
      { name: '内蒙古', value: '内蒙古自治区' },
      { name: '上海', value: '上海市' },
      { name: '广西', value: '广西壮族自治区' },
      { name: '重庆', value: '重庆市' },
      { name: '西藏', value: '西藏自治区' },
      { name: '宁夏', value: '宁夏回族自治区' },
    { name: '新疆', value: '新疆维吾尔自治区' },
    { name: '香港', value: '香港特别行政区' },
    { name: '澳门', value: '澳门特别行政区' }
    ];
    function findCherries(fruit) {
        return fruit.name === 'cherries';
    }

    $("#btnsou").click(function () {
        var sheng = $("#sheng").val();
        var shi = $("#shi").val();
        var jigou = $("#jiGuan_fenJg").val();
        //if (!jigou) {
        //    if (!sheng) {
        //        alert("请选择省份");
        //        return;
        //    }
        //    if (!shi) {
        //        alert("请选择城市");
        //        return;
        //    }
        //    //alert("请选择机构");
        //    //return;
        //}

        var d = dialog();
        $.ajax({
            url: "/tools/jigou.ashx",
            type: "GET",
            timeout: 60000,
            beforeSend: function () {
                d.show();
                $(".searchName").unbind("click");
            },
            data: { "sheng": sheng, "shi": shi, "title": jigou },
            dataType: "json",
            success: function (data, _type) {
                if (data.length > 0) {
                    d.close().remove();
                    var gettpl = document.getElementById('titlelist').innerHTML;
                    laytpl(gettpl).render(data, function (html) {
                        $("#fztitle").empty().append(html);
                    });
                    var gettpl2 = document.getElementById('show').innerHTML;
                    laytpl(gettpl2).render(data, function (html) {
                        $("#fenzhishow").empty().append(html);

                    });
                    //绑定点击事件
                    var searchN = $(".searchName");
                    for (var i = 0; i < searchN.length; i++) {
                        (function (index) {
                            $(searchN[index]).click(function () {
                                $(".searchName").removeClass("active");
                                $(this).addClass("active");
                                $(".lastBox").addClass("hid");
                                $(".index_" + (index + 1)).removeClass("hid");
                                //地图名片
                                var infoWindow = "";
                                var marker = "";
                                var point = "";
                                var map = new BMap.Map("allmap_" + (index + 1));
                                var mymaps = new myMap();
                                mymaps = getData($(".index_" + (index + 1)).data("id"));
                                mapFunc(mymaps.html, mymaps.positionX, mymaps.positionY);
                                function mapFunc(html, positionX, positionY) {
                                    point = new BMap.Point(positionX, positionY);
                                    marker = new BMap.Marker(point);// 创建标注
                                    map.addOverlay(marker);// 将标注添加到地图中
                                    map.centerAndZoom(point, 15);
                                    var opts = {
                                        width: 400,
										height: 80
                                    };
                                    infoWindow = new BMap.InfoWindow(html, opts);
                                    map.openInfoWindow(infoWindow, point); //开启信息窗口
                                }

                                //联系地址
                                function getData(id) {
                                    var mymap = new myMap();
                                    $.ajax({
                                        type: 'GET',
                                        url: "/tools/jigou.ashx?action=action",
                                        async: false,
                                        dataType: 'json', //服务器返回的数据类型
                                        data: {
                                            id: id
                                        },
                                        success: function (data, _textStatus) { //请求成功函数内容
                                            if (textStatus = "success") {
                                                if (data.length > 0) {
                                                    mymap.title = data[0].title;
                                                    mymap.address = data[0].dizhi;
                                                    mymap.postcode = data[0].youbian;
                                                    mymap.website = data[0].link_url;
                                                    mymap.email = data[0].youxiang;
                                                    mymap.phone = data[0].dianhua;
                                                    mymap.positionX = data[0].positionX;
                                                    mymap.positionY = data[0].positionY;
                                                    mymap.html = "<h3 style='color:#444;font-size:16px;letter-spacing:1px;margin-bottom:10px;'>" + mymap.title + "</h3><p style='font-size:16px;letter-spacing:1px;color:#666;margin-bottom:5px;line-height:20px'>客服热线：" + mymap.phone + "</p>" +
                                                        "<p style='font-size:16px;letter-spacing:1px;color:#666;'>地址：" +
                                                        mymap.address + "</p>" ;
                                                      //  "<p style='font-size:12px;color:#666;'>邮编：" +
                                                      //  mymap.postcode + "</p>" +
                                                      //  "<p style='font-size:12px;color:#666;'>网址：" +
                                                      //  mymap.website + "</p>" +
                                                      //  "<p style='font-size:12px;color:#666;'>邮箱：" +
                                                     //   mymap.email + "</p>";
                                                }

                                            }

                                        },
                                        error: function (_jqXHR) { //请求失败函数内容
                                            return;
                                        }
                                    })
                                    return mymap;
                                }
                                //定义类
                                function myMap() {
                                    this.html = "";
                                    this.title = "";
                                    this.address = "";
                                    this.email = "";
                                    this.website = "";
                                    this.postcode = "";
                                    this.phone = "";
                                    this.positionX = 0;
                                    this.positionY = 0;
                                }
                                marker.addEventListener("click", function () {
                                    map.openInfoWindow(infoWindow, point); //开启信息窗口
                                });
                                map.enableScrollWheelZoom(true);
                            })
                        })(i)
                    }
                    $(searchN[0]).trigger("click");
                } else {
                    d.close().remove();
                    var dd = dialog({ content: "没有查询到数据！" }).show();
                    setTimeout(function () {
                        dd.close().remove();
                    }, 2000);
                    var gettpl = document.getElementById('titlelist').innerHTML;
                    laytpl(gettpl).render(data, function (html) {
                        $("#fztitle").empty().append(html);
                    });
                    var gettpl2 = document.getElementById('show').innerHTML;
                    laytpl(gettpl2).render(data, function (html) {
                        $("#fenzhishow").empty().append(html);
                    });
                }
            },
            error: function (_XMLHttpRequest, textStatus, errorThrown) {
                dialog({
                    title: '提示',
                    content: "状态：" + textStatus + "；出错提示：" + errorThrown,
                    okValue: '确定',
                    ok: function () {
                    }
                }).showModal();
            }
        });
    });
    $("#shi").change(function () {
        var sheng = $("#sheng").val();
        var shi = $("#shi").val();
        $.ajax({
            url: "/tools/jigou.ashx",
            type: "GET",
            data: { "sheng": sheng, "shi": shi },
            dataType: "json",
            success: function (data, _type) {
                var valuestr = '<option value>请选择分支机构...</option>';
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        valuestr += '<option value="' + data[i].title + '">' + data[i].title + '</option>';
                    }
                }
                $("#jiGuan_fenJg").empty().html(valuestr);
            },
            error: function (_XMLHttpRequest, textStatus, errorThrown) {
                dialog({
                    title: '提示',
                    content: "状态：" + textStatus + "；出错提示：" + errorThrown,
                    okValue: '确定',
                    ok: function () {
                    }
                }).showModal();
            }
        });
    });
    if (jm_sheng != "" && jm_sheng != null) {
        var flag = false;
        for (var i = 0; i < inventory.length; i++) {
            if (inventory[i].name == jm_sheng) {
                jm_sheng = inventory[i].value;
                flag = true;
            }
        }
        if(!flag)
            jm_sheng += "省";
        $("#sheng").val(jm_sheng);
        $("#btnsou").click();

    }

});

 
//参股机构
$.GetPageList({
    url: "/tools/ajax_article.ashx?action=pagelist",
    param: {
        channel_name: "cangujigou", orderby: "add_time desc"
    },
    listDiv: "#cangujigoulistbox",
    pageDiv: "#cangujigoufenye",
    template: "#cangujigoulist"
});
//诚聘英才
$.GetPageList({
    url: "/tools/ajax_article.ashx?action=pagelist",
    param: {
        channel_name: "zoujinyongan", orderby: "sort_id asc", category_id: 7
    },
    listDiv: "#chengpinyingcaibox",
    pageDiv: "#chengpinyingcaipage",
    template: "#chengpinyingcailist"
});


function akip() {
    var switchA = $(".switch_List a");
    console.log(switchA);
    for (var i = 0; i < switchA.length; i++) {
        (function (index) {
            $(switchA[index]).click(function () {
                console.log(index)
                function  myFunction(ids) {
                    // var ids = '';
                    let data = { categoryId: ids }
                    console.log(ids)
                    console.log(data)
                    Ajax(function (res) {
                        console.log(data)
                        console.log(res)  //请求返回
                        if (res.code == 200) {
                            markList = res.data.list
                            attach = res.data.attach
                            var html = ''
                            var html3 = ''
                            var html4 = ''
                            var html5 = ''
                             // 公司概况
            html += ` 
           
            <span id="office_Introduce"></span>
            <div class="column index1">
                <div class="officeIntroduce" >
                    <div class="topTitle officeTitle">
                        <img src="./images/index/titleBg.png">
                        <span>${markList[0]&&markList[0].title}</span>
                    </div>
                    <div class="office_I">
                        <div class="fJ_tu">
                            <img src="${markList[0]&&markList[0].imgUrl}">
                        </div>

                        <div class="office_word">
                            <p>${markList[0]&&markList[0].content}</p>
                        </div>

                    </div>
                </div>
                <!--组织架构-->
                <div id="office_organize"></div>
                <div class="organStructure" >
                    <div class="topTitle organizeTitle ">
                        <img src="./images/index/titleBg.png">
                        <span>${markList[1]&&markList[1].title}</span>
                    </div>
                    <img src="${markList[1]&&markList[1].imgUrl}">
                </div>

                <div class="hengLine"><div><img src="./images/enterYongan/hua.png"></div></div>

                <!--发展轨迹-->
                <div id="office_developG"></div>
                <div class="developG">
                    <div class="GJ">
                        <div class="gjTitle">
                            <img src="./images/index/titleBg.png">
                            <span>${markList[2]&&markList[2].title}</span>
                        </div>
                        <div class="h_line"></div>
                        <div class="s_line"></div>
                        <div class="gjTu">
                            <img src="${markList[2]&&markList[2].imgUrl}">
                        </div>
                    </div>

                </div>
                <div class="hengLine"><div><img src="./images/enterYongan/hua.png"></div></div>
                <div class="lastContent">
                    <ul>
                        <li>
                            <div>
                                <span id="office_feature"></span>
                                <span id="office_diW"></span>
                                <div >
                                    <div class="topTitle officeTitle">
                                        <img src="./images/index/titleBg.png">
                                        <span>${markList[3]&&markList[3].title}</span>
                                    </div>
                                    <div class="wordN">
                                        <p>${markList[3]&&markList[3].content}</p>
                                    </div>
                                </div>
                                <span id="office_YUJ"></span>
                                <div>
                                    <div class="topTitle officeTitle">
                                        <img src="./images/index/titleBg.png">
                                        <span>${markList[5]&&markList[5].title}</span>
                                    </div>
                                    <div class="wordN">
                                        <p>${markList[5]&&markList[5].content}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div>
                                    <div class="topTitle officeTitle">
                                        <img src="./images/index/titleBg.png">
                                        <span>${markList[4]&&markList[4].title}</span>
                                    </div>
                                    <div>
                                        <!--<p class="industryTitle">行业地位行业地位行业地位行业地位</p>-->
                                        <div class="industryDescribe">${markList[4]&&markList[4].content}</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>`

            //诚聘英才
          
     
            
            html4 +=`<div class="talentedPeople">`
            
            markList.forEach((item, _ind) => {
                console.log(item) //
            html4 += `
                        
                            <ul id="chengpinyingcaibox">
                                
                            </ul>
                            <div id="chengpinyingcaipage" class="digg">
                            
                        </div>
                            <ul id="huangpulianmeng">
                                <li>
                                    <div>
                                        <span>${item.title}</span>
                                        <p>${item.content}
                                        </p>
                                        <div class="clickLook">
                                            <a href="${item.linkUrl}"
                                                target="_blank"><span>VIEW</span><span class="moreW">MORE</span><span
                                                    class="arrowB">></span></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                       
                    `
                })
                    html4 += ` </div>`      
          
            //联系我们
            html5 += `
                        <div class="contactUs">
                                <div class="contact_us">
                                    <div id="allmap1"></div>
                                </div>
                                <div class="rightAddress">
                                    <div>
                                        <div><span>公司地址：</span><span>${markList[0].dizhi}</span></div>
                                        <div><span>联系方式：</span><span>${markList[0].dianhua}</span></div>
                                        <div><span>邮编：</span><span> ${markList[0].youbian}</span></div>
                                        <div><span>网址：</span><span>${markList[0].website}  </span></div>
                                        <div><span>邮箱：</span><span>${markList[0].youxiang}  </span></div>
                                    </div>
                                </div>
                        </div>
            
            `
                            $(".index1").html(html)  //公司概况
                            // $(".index3").html(html3)  //人员公示/信息公示
                            $(".index4").html(html4)  //诚聘英才
                            $(".index5").html(html5)  //联系我们
                        }
                    }, data, '/zoujinyongan/getSonList', 'get', 'application/x-www-form-urlencoded ')
                }

                //走进永安--- 类目导航 
                Ajax(function (res) {
                    console.log(res)  //请求返回 
                    if (res.code == 200) {
                        var html = ''
                        markList = res.data;
                        markList.forEach((item, ind) => {
                            // console.log(item.id)
                            if(index==ind){
                                myFunction(item.id) 
                            }
                    })
                }
                }, data, '/articleCategory/zoujinyongan', 'get', 'application/x-www-form-urlencoded ')

            
        
                $(".switch_List a").removeClass("active");
                $(this).addClass("active");
                $(".column").hide();
                $(".index" + (index + 1)).show();
                if (index == 4 || jumpMark == 5) {
                    //地图名片
                    var infoWindow = "";
                    var marker = "";
                    var point = "";
                    var map = new BMap.Map("allmap1");
                    var mymap = getData();
                    mapFunc(mymap.html, mymap.positionX, mymap.positionY);
                    function mapFunc(html, positionX, positionY) {
                        point = new BMap.Point(positionX, positionY);
                        marker = new BMap.Marker(point);  // 创建标注
                        map.addOverlay(marker);              // 将标注添加到地图中
                        map.centerAndZoom(point, 15);
                        var opts = {
                        width: 400,
                        height: 150
                        };
                        //联系地址
                        infoWindow = new BMap.InfoWindow(html, opts);
                        map.openInfoWindow(infoWindow, point); //开启信息窗口
                    }

                    function getData() {
                        var mymap = new myMap();
                        mymap.title = $("#company_name").html();
                        mymap.address = $("#dizhi").html();
                        mymap.dianhua = $("#dianhua").html();
                        mymap.postcode = $("#youbian").html();
                        mymap.website = $("#website").html();
                        mymap.email = $("#youxiang").html();
                        mymap.positionX = $("#positionX").val();
                        mymap.positionY = $("#positionY").val();
                        mymap.html = "<p style='font-size:16px;color:#666;letter-spacing:1px;margin-bottom:5px;line-height:20px'>地址：" + mymap.address + "</p>" +
                            "<p style='font-size:16px;letter-spacing:1px;color:#666;'>联系方式：" +
                            mymap.dianhua + "</p>" +
                            "<p style='font-size:16px;letter-spacing:1px;color:#666;'>邮编：" +
                            mymap.postcode + "</p>" +
                            "<p style='font-size:16px;letter-spacing:1px;color:#666;'>网址：" +
                            mymap.website + "</p>" +
                            "<p style='font-size:16px;letter-spacing:1px;color:#666;'>邮箱：" +
                            mymap.email + "</p>";
                        return mymap;
                    }
                    function myMap() {
                        //定义类
                        this.html = "";
                        this.address = "";
                        this.email = "";
                        this.website = "";
                        this.postcode = "";
                        this.positionX = 0;
                        this.positionY = 0;
                    }
                    marker.addEventListener("click", function () {
                        map.openInfoWindow(infoWindow, point); //开启信息窗口
                    });
                    map.enableScrollWheelZoom(true);
                }

            })
        })(i)
    }
}

