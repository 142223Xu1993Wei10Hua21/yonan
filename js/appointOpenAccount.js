$(function () {
    // 省市 区
    var selectP_Jg = "省份";
    var selectC_Jg = "市";
    var selectA_Jg = "区";

    var se = $("#jiGuan select");
    $.ajax({
        type: "POST",
        url:"",//请求省接口
        data: {},
        dataType: "json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                var pro = "<option data-id=" + data[i]._id + " value=" + data[i].name + ">" + data[i].name + "</option>";
                $("#jiGuan_province").append(pro);
            }
            for (var j = 0; j < se.length; j++) {
                (function (k) {
                    $(se[k]).on("change", function () {
                        if (k == 0) {
                            if ($(se[k]).val() != selectP_Jg) {
                                var selectPro_id = $(se[k]).find("option:selected").attr("data-id");
                                $("#jG_province").val(selectPro_id);
                                $("#jiGuan_city").empty();
                                $("#jiGuan_city").append("<option value='地级市'>地级市</option>");
                                $("#jiGuan_county").empty();
                                $("#jiGuan_county").append("<option value='区'>区</option>");
                                selectP_Jg = $(se[k]).val();
                                $.ajax({
                                    type: "POST",
                                    url:"",//请求市接口
                                    data: {provinceId: selectPro_id},//根据省份id获取市
                                    dataType: "json",
                                    success: function (data) {
                                        for (var m = 0; m < data.length; m++) {
                                            var city = "<option data-id=" + data[m]._id + " value=" + data[m].name + ">" + data[m].name + "</option>";
                                            $("#jiGuan_city").append(city);
                                        }
                                    }
                                });
                            }
                        } else if (k == 1) {
                            if ($(se[k]).val() != selectC_Jg) {
                                var selectCity_id = $(se[k]).find("option:selected").attr("data-id");
                                $("#jG_city").val(selectCity_id);
                                $("#jiGuan_county").empty();
                                $("#jiGuan_county").append("<option value='区'>区</option>");
                                selectC_Jg = $(se[k]).val();
                                $.ajax({
                                    type: "POST",
                                    url: "",//获取区的接口
                                    data: {cityId: selectCity_id},//传市的id
                                    dataType: "json",
                                    success: function (data) {
                                        for (var y = 0; y < data.length; y++) {
                                            var area = "<option data-id=" + data[y]._id + " value=" + data[y].name + ">" + data[y].name + "</option>";
                                            $("#jiGuan_county").append(area);
                                        }
                                    }
                                });
                            }
                        } else {
                            if ($(se[k]).val() != selectA_Jg) {
                                var selectArea_id = $(se[k]).find("option:selected").attr("data-id");
                                selectA_Jg = $(se[k]).val();
                                $("#jG_area").val(selectArea_id);
                            }
                        }

                    })
                })(j)

            }
        }

    });


    $("#btnS").click(function () {
        if($("#name").val().trim()==""){
            $("#name").next().removeClass("hid");
        }else{
            $("#name").next().addClass("hid");
        }
        if($("#office").val().trim()==""){
            $("#office").next().removeClass("hid");
        }else{
            $("#office").next().addClass("hid");
        }
        if($("#sheng").val()==""){
            $("#city").removeClass("hid");
        }else{
            $("#city").addClass("hid");
        }
        if($("#yanCode").val().trim()==""){
            $("#yanCode").next().removeClass("hid");
        }else{
            $("#yanCode").next().addClass("hid");
        }
        if($("#tel").val().trim()==""){
            $("#tel").next().removeClass("hid");
        }else{
            $("#tel").next().addClass("hid");
        }
    })
});