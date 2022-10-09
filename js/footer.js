// 底部下拉菜单
$('.linkselect-panel i').click(function(event) {
    $(this).next('.linkselect-con').slideToggle();
});
$('.linkselect-con').hover(function() {
    $(this).show();
}, function() {
    $(this).hide();
});
