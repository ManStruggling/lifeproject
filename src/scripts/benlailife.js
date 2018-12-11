define(["jquery"], function () {

    //点击关闭，本来生活置顶广告
    $("#appstore_banner_close").on("click", function () {
        $("#appstore_banner").hide();
    })

    //head-bar 轮播图
    var $headBarIndex = 1;
    setInterval(() => {
        $("header .head-bar a").eq($headBarIndex).stop().animate({ "opacity": 1 }, 200).siblings().stop().animate({ "opacity": 0 }, 200);
        $headBarIndex++;
        if ($headBarIndex == 9) {
            $headBarIndex = 0;
        }
    }, 3000);

})