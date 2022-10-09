
var d = new Date();
var curd = d.getFullYear();
if ((d.getMonth() + 1) < 10) {
    curd += "0" + (d.getMonth() + 1).toString();
} else {
    curd += (d.getMonth() + 1).toString();
}
if (d.getDate() < 10) {
    curd += "0" + d.getDate().toString();
} else {
    curd += d.getDate().toString();
}
console.log("好：" + curd);//20180718
dispcalendarupdate("../../tools/calendar.ashx?action=get_content&day=" + curd, curd);

function dispcalendarupdate(calendartext, currdatestr) {
    //console.log("测试1" + calendartext);// /bourseService/businessdata/calendar/20180718all.dat   url
    // console.log("测试2" + currdatestr);//20180718
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {//支持IE6，IE7
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp == null) {
        alert("Your browser does not support XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var txt = xmlhttp.responseText;
            if (txt == null || txt.trim() == "null")
                generatecalendarnull(currdatestr);
            else
                generatecalendartext(txt, currdatestr);//获取当前日期的数据内容
        } else if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
            generatecalendarnull(currdatestr);
        }
    };
    xmlhttp.open("GET", calendartext, true);
    xmlhttp.setRequestHeader("If-Modified-Since", "0");
    xmlhttp.send();
}
//这个是当前日期获取的内容
function generatecalendartext(text, currdatestr) {
    getdatedata(currdatestr);
}
//这个是当前日期获取的内容 (无数据)
function generatecalendarnull(currdatestr) {
    getdatedata(currdatestr);
}
function getdatedata(datestr) {
    $.ajax({
        type: 'POST',
        url: '../../tools/calendar.ashx?action=get_content',
        async: false,
        dataType: 'json', //服务器返回的数据类型
        data: { day: datestr },
        success: function (data, textStatus) { //请求成功函数内容
            if (textStatus = "success") {
                $("#titleid").empty();
                $("#fabuid").empty();
                $("#calendartext").empty();
                if (data != null) {
                    $("#titleid").html('<th>' + data.title + '</th>');
                    text = '<td><span>发布时间：</span><span>' + data.add_time + '</span><span class="lookNum">浏览：</span><span>' + data.click + '</span>';
                    $("#fabuid").html(text);
                    $("#calendartext").html('<div class="changeContent"><ul>' + data.content + '</ul></div>');
                }
            }

        },
        error: function (jqXHR) { //请求失败函数内容
            return;
        }
    })
}
