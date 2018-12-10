require(["../scripts/config.js"], function () {
    require(["jquery", "swiper", "benlailife"], function ($, swiper) {
        //某一楼层内的导航列表切换
        $("#goods .goods-nav dl").find("dt").mouseover(function () {
            $(this).parents(".goods").find("dt").removeClass("on").siblings().hide();
            $(this).addClass("on").siblings().show();
        })
        //某一楼层内的广告下标签的切换
        $(".goods-banner li").mouseover(function () {
            $(this).find("a").css({ "background": "#a6ca44", "color": "#fff" }).end().siblings().find("a").css({ "background": "#fff", "color": "#78a000" })
        })
        $(".goods-banner li").mouseout(function () {
            $(".goods-banner li").find("a").css({ "background": "#fff", "color": "#78a000" });
        })

        //商品分类列表切换
        $("nav .all_type dl").mouseover(function () {
            $(this).find("dd").show().end().siblings().find("dd").hide();
        })
        $("nav .all_type").mouseout(function () {
            $(this).find("dd").hide();
        })

        //banner 广告轮播图
        var $bannerIndex = 1;//轮播图的索引
        var $bannerAutoPlay = null;
        function AutoPlay() {
            clearInterval($bannerAutoPlay);
            $bannerAutoPlay = setInterval(() => {
                $("#banner .banner-pic a").eq($bannerIndex).fadeIn(300).siblings().fadeOut(300);//显示索引图片
                $("#banner .banner-pic ul li").eq($bannerIndex).addClass("on").siblings().removeClass("on");//对应导航变色
                $bannerIndex = $bannerIndex + 1;
                if ($bannerIndex == 6) {
                    $bannerIndex = 0;
                }
            }, 3000);
        }
        //鼠标进入banner图停止轮播,显示按钮+导航
        $("#banner .banner-pic").mouseover(function () {
            $("#banner .banner-btn dl").show();//显示左右按钮
            $("#banner .banner-pic ul").stop().animate({"top":370},400);//导航栏弹出
            $("#banner .banner-pic ul").find("span").css("background","rgba(255,255,255,.75)")//导航列表变色
            clearInterval($bannerAutoPlay);//停止轮播
            //底部导航栏划入效果
            $("#banner .banner-pic ul li").mouseenter(function(){
                $(this).addClass("on").siblings().removeClass("on");//划入li改变li的样式
                var $listIndex = $(this).index();
                $bannerIndex = $listIndex;
                $("#banner .banner-pic a").eq($bannerIndex).fadeIn(300).siblings().fadeOut(300);//改变对应轮播图的图片
            })
            //左右按钮点击效果
            // $("#banner .banner-btn dt a").on("click",function(){
            //     $bannerIndex -= 1;
            //     console.log($bannerIndex);
            //     $("#banner .banner-pic a").eq($bannerIndex).fadeIn(300).siblings().fadeOut(300);
            // })
            // $("#banner .banner-btn dd a").on("click",function(){
            //     console.log(2);
            //     $("#banner .banner-pic a").eq($bannerIndex).fadeIn(300).siblings().fadeOut(300);
            // })
        })
        //鼠标移出banner图开启轮播
        $("#banner").mouseleave(function () {
            $("#banner .banner-btn dl").hide();//隐藏左右按钮
            $("#banner .banner-pic ul").stop().animate({"top":396},400,function(){
                $("#banner .banner-pic ul").find("span").css("background","rgba(162,162,147,1)");//导航列表回复颜色
            });//导航栏隐藏
            console.log("out");
            AutoPlay();
        })
        AutoPlay();






        //好评如潮和新品上线的切换
        $("main .main-c .newbaby-list dl").mouseover(function () {
            $(this).find("dt").addClass("on").end().siblings().find("dt").removeClass("on");
            $(this).find("dd").css("display", "block").end().siblings().find("dd").css("display", "none");
            $(this).find("dt a").css({ "marginLeft": "26px", "color": "#78a000" }).end().siblings().find("dt a").css({ "marginLeft": "30px", "color": "#626252" });
        })

        //划入商品列表显示加购物车按钮
        $(".show-add-car").mouseover(function () {
            $(this).find(".box").css("border", "4px solid #f8f8f6");
            $(this).find("p").eq(0).stop().animate({ marginTop: 10 }, 200);
            $(this).find("p").eq(1).stop().animate({ marginTop: 5 }, 200);
            $(this).find("p").eq(1).next().stop().animate({ marginTop: 2 }, 200);
            $(this).find(".addcar-btn").stop().animate({ top: 223 }, 200);
        })
        $(".show-add-car").mouseout(function () {
            $(this).find(".box").css("border", "4px solid #fff");
            $(this).find("p").eq(0).stop().animate({ marginTop: 15 }, 200);
            $(this).find("p").eq(1).stop().animate({ marginTop: 15 }, 200);
            $(this).find("p").eq(1).next().stop().animate({ marginTop: 7 }, 200);
            $(this).find(".addcar-btn").stop().animate({ top: 260 }, 200);
        })

        //买家力荐导航
        function sparkle() {
            $(".main-b-nav dt .ico03").animate({ "width": 35, "height": 35, "opacity": .3, "marginTop": -6, "marginLeft": -5 }, 1000, "linear", function () {
                $(this).css({ "width": 1, "height": 1, "opacity": .7, "marginTop": 22, "marginLeft": 12 });
                sparkle();
            })
        }
        sparkle()

        $(".main-b-nav dd").click(function () {
            var $index = $(this).index();
            if ($index == 1) {
                $(this).siblings().eq(0).stop().animate({ top: 31, left: 229 }, 300);
            }
            if ($index == 2) {
                $(this).siblings().eq(0).stop().animate({ top: 20, left: 423 }, 300);
            }
            if ($index == 3) {
                $(this).siblings().eq(0).stop().animate({ top: 47, left: 615 }, 300);
            }
            if ($index == 4) {
                $(this).siblings().eq(0).stop().animate({ top: 23, left: 804 }, 300);
            }
            if ($index == 5) {
                $(this).siblings().eq(0).stop().animate({ top: 37, left: 1017 }, 300);
            }
        })
        //买手力荐列表
        $(".main-b-list li").mouseover(function () {
            $(this).css({ "background": "#fff", "boxShadow": "1px 1px 8px rgba(227,227,227,.9)" });
            $(this).find(".photo").stop().animate({ marginTop: 15 }, 200);
            $(this).find(".list-name").stop().animate({ marginTop: 10 }, 200);
            $(this).find(".price").stop().animate({ marginTop: 3 }, 200);
            $(this).find(".add-btn").stop().animate({ top: 242 }, 200);

        })
        $(".main-b-list li").mouseout(function () {
            $(this).css({ "background": "", "boxShadow": "none" });
            $(this).find(".photo").stop().animate({ marginTop: 25 }, 200);
            $(this).find(".list-name").stop().animate({ marginTop: 15 }, 200);
            $(this).find(".price").stop().animate({ marginTop: 7 }, 200);
            $(this).find(".add-btn").stop().animate({ top: 280 }, 200);
        })



    })
})