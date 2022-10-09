$(function () {
    var switchA=$(".switch_List a");
    for(i=0;i<switchA.length;i++){
        (function (index) {
            $(switchA[index]).click(function () {
                $(".switch_List a").removeClass("active");
                $(this).addClass("active");
                $(".switchTag").hide();
                $(".index"+(index+1)).show();
            })
        })(i)
    }
});