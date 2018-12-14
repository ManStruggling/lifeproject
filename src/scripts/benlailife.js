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

    //商品分类列表切换
    $("nav .all_type dl").mouseover(function () {
        $(this).find("dd").show().end().siblings().find("dd").hide();
    })
    $("nav .all_type").mouseout(function () {
        $(this).find("dd").hide();
    })

    //百度的搜素接口
    $("header .search-box .txt").on("input",function(){
        $.ajax({
            url:`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${$(this).val()}&json=1&p=3&sid=22084_1436_13548_21120_22036_22073&req=2&csor=0`,
            dataType:"jsonp",
            jsonp:"cb",
            success:function(data){
                $("header .search-box ul").empty();
                data.s.forEach(item => { 
                    $("header .search-box ul").append( `<li>${item}</li>` )
                });
                
            }
        })
    })

    //显示隐藏二维码
    $(".two_code").click(function(){
        $(".twoCode").toggle();
    })

    $(window).scroll(function(){
        if( $(this).scrollTop()>500 ){
            $("#goTop .go_top").show();
        }else{
            $("#goTop .go_top").hide();
        }
    })
    $("#goTop .go_top").click(function(){
        $("body,html").stop().animate({scrollTop:0},500);
    })
})