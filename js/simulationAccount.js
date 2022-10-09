$(function () {
    $('.ya-notice-tab a').click(function() {
        var index =$(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.ya-notice-list').eq(index).fadeIn().siblings('.ya-notice-list').fadeOut();
        switch (index) {
            case 0:
                $("#mianbaoxue").html("自然人开户");
                document.title = '网上营业厅_开户大厅_仿真开户_自然人开户' + $("#wintitle").val();
                break;
            case 1:
                $("#mianbaoxue").html("法人开户");
                document.title = '网上营业厅_开户大厅_仿真开户_法人开户' + $("#wintitle").val();
                break;
        }
    });
});