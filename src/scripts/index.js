require(["../scripts/config.js"], function () {
    require(["jquery", "swiper", "template","benlailife"], function ($, swiper,template) {
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
            $("#banner .banner-pic ul").stop().animate({ "top": 370 }, 400);//导航栏弹出
            $("#banner .banner-pic ul").find("span").css("background", "rgba(255,255,255,.75)")//导航列表变色
            clearInterval($bannerAutoPlay);//停止轮播
            //底部导航栏划入效果
            $("#banner .banner-pic ul li").mouseenter(function () {
                $(this).addClass("on").siblings().removeClass("on");//划入li改变li的样式
                var $listIndex = $(this).index();
                $bannerIndex = $listIndex;
                $("#banner .banner-pic a").eq($bannerIndex).fadeIn(300).siblings().fadeOut(300);//改变对应轮播图的图片
            })
        })
        //鼠标移出banner图开启轮播
        $("#banner").mouseleave(function () {
            $("#banner .banner-btn dl").hide();//隐藏左右按钮
            $("#banner .banner-pic ul").stop().animate({ "top": 396 }, 400, function () {
                $("#banner .banner-pic ul").find("span").css("background", "rgba(162,162,147,1)");//导航列表回复颜色
            });//导航栏隐藏
            AutoPlay();
        })
        AutoPlay();

        //好评如潮和新品上线的切换
        $("main .main-c .newbaby-list dl").mouseover(function () {
            $(this).find("dt").addClass("on").end().siblings().find("dt").removeClass("on");
            $(this).find("dd").css("display", "block").end().siblings().find("dd").css("display", "none");
            $(this).find("dt a").css({ "marginLeft": "26px", "color": "#78a000" }).end().siblings().find("dt a").css({ "marginLeft": "30px", "color": "#626252" });
        })

        //划入楼层商品列表显示加购物车按钮
        $("body").on("mouseenter","li.show-add-car",function () {
            $(this).find(".box").css("border", "4px solid #f8f8f6");
            $(this).find("p").eq(0).stop().animate({ marginTop: 10 }, 200);
            $(this).find("p").eq(1).stop().animate({ marginTop: 5 }, 200);
            $(this).find("p").eq(1).next().stop().animate({ marginTop: 2 }, 200);
            $(this).find(".addcar-btn").stop().animate({ top: 223 }, 200);
        })
        $("body").on("mouseleave","li.show-add-car",function () {
            $(this).find(".box").css("border", "4px solid #fff");
            $(this).find("p").eq(0).stop().animate({ marginTop: 15 }, 200);
            $(this).find("p").eq(1).stop().animate({ marginTop: 15 }, 200);
            $(this).find("p").eq(1).next().stop().animate({ marginTop: 7 }, 200);
            $(this).find(".addcar-btn").stop().animate({ top: 260 }, 200);
        })

        // //买家力荐导航
        function sparkle() {
            $(".main-b-nav dt .ico03").animate({ "width": 35, "height": 35, "opacity": .3, "marginTop": -6, "marginLeft": -5 }, 1000, "linear", function () {
                $(this).css({ "width": 1, "height": 1, "opacity": .7, "marginTop": 22, "marginLeft": 12 });
                sparkle();
            })
        }
        sparkle()

        $("main .main-b").on("click", "dd", function () {
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
            $("main .main-b-list ul").eq($index - 1).show().siblings().hide();
        })
        // //买手力荐列表
        $(".main-b").on("mouseenter","li",function () {
            $(this).css({ "background": "#fff", "boxShadow": "1px 1px 8px rgba(227,227,227,.9)" });
            $(this).find(".photo").stop().animate({ marginTop: 15 }, 200);
            $(this).find(".list-name").stop().animate({ marginTop: 10 }, 200);
            $(this).find(".price").stop().animate({ marginTop: 3 }, 200);
            $(this).find(".add-btn").stop().animate({ top: 242 }, 200);

        })
        $(".main-b").on("mouseleave","li",function () {
            $(this).css({ "background": "", "boxShadow": "none" });
            $(this).find(".photo").stop().animate({ marginTop: 25 }, 200);
            $(this).find(".list-name").stop().animate({ marginTop: 15 }, 200);
            $(this).find(".price").stop().animate({ marginTop: 7 }, 200);
            $(this).find(".add-btn").stop().animate({ top: 280 }, 200);
        })


        //某一楼层内的导航列表切换
        $(".goods").on("mouseenter","dt",function () {
            $(this).parents(".goods").find("dt").removeClass("on").siblings().hide();
            $(this).addClass("on").siblings().show();
        })
        //某一楼层内的广告下标签的切换
        $(".goods").on("mouseover","li.tag_li",function () {
            $(this).find("a").css({ "background": "#a6ca44", "color": "#fff" }).end().siblings().find("a").css({ "background": "#fff", "color": "#78a000" })
        })
        $(".goods").on("mouseout","li.tag_li",function () {
            $(".goods-banner li").find("a").css({ "background": "#fff", "color": "#78a000" });
        })



        //ajax获取数据
        let PageItem1 = false;//表示ajax没有请求第一页数据
        let PageItem2 = false;//表示ajax没有请求第二页数据
        let PageItem3 = false;//表示ajax没有请求第三页数据
        let PageItem4 = false;//表示ajax没有请求第四页数据
        $(window).scroll(function(){
            //满足条件渲染第一页
            if( $(this).scrollTop()>800 && !PageItem1 ){
                $.ajax({
                    url: `/GetPage_1?page=1&_=${Math.round(Math.random()*1000000000)}`,
                    success: function (data) {
                        // 买家力荐导航
                        var $str_main_b_nav = "";
                        for(var i=0;i<data[0].PageItem.length;i++){
                            $str_main_b_nav += `<dd><a>${data[0].PageItem[i].Name}</a></dd>`;
                        }
                        $(".main-b-nav dl").append($str_main_b_nav);
                        $("#temp_list").load("maijialijian.html",function(){
                            var $str_main_b_list = template("main-b-list-data",{
                                list: data
                            });
                            $(".main-b").append($str_main_b_list);
                        })
                        $("#temp_list").load("floor_1.html",function(){
                            var $str_floor_1_data = template("floor_1_data",{
                                list: data
                            })
                            $("#goods .goods_1").append($str_floor_1_data);
                            $("#goods .goods_1 dl").eq(0).find("dt").addClass("on");
                        })  
                        $("#temp_list").load("floor_2.html",function(){
                            var $str_floor_2_data = template("floor_2_data",{
                                list: data
                            })
                            $("#goods .goods_2").append($str_floor_2_data);
                            $("#goods .goods_2 dl").eq(0).find("dt").addClass("on");
                        })
        
                    }  
                })
                PageItem1 = true;
            }
            //满足条件渲染第二页
            if( $(this).scrollTop()>2700 && !PageItem2 ){
                console.log("page2");
                $.ajax({
                    url:`/GetPage_2?page=2&_=${Math.round(Math.random()*1000000000)}`,
                    success:function(data){
                        $("#temp_list").load("floor_0.html",function(){
                            var $str_floor_3_data = template("floor_0_data",{
                                list: data
                            })
                            $("#goods .goods_3").append($str_floor_3_data);
                            $("#goods .goods_3 dl").eq(0).find("dt").addClass("on");
                        })
                        $("#temp_list").load("floor_1.html",function(){
                            var $str_floor_4_data = template("floor_1_data",{
                                list: data
                            })
                            $("#goods .goods_4").append($str_floor_4_data.replace("时令鲜果","肉禽蛋品"));
                            $("#goods .goods_4 dl").eq(0).find("dt").addClass("on");
                        })
                        $("#temp_list").load("floor_2.html",function(){
                            var $str_floor_5_data = template("floor_2_data",{
                                list: data
                            })
                            $("#goods .goods_5").append($str_floor_5_data.replace("蔬菜菌菇","居家优选"));
                            $("#goods .goods_5 dl").eq(0).find("dt").addClass("on");
                        })
                    }
                })
                PageItem2 = true;
            }
            //满足条件渲染第三页
            if( $(this).scrollTop()>4900 && !PageItem3 ){
                console.log(3);
                $.ajax({
                    url:`/GetPage_3?page=3&_=${Math.round(Math.random()*1000000000)}`,
                    success:function(data){
                        $("#temp_list").load("floor_0.html",function(){
                            var $str_floor_6_data = template("floor_0_data",{
                                list: data
                            })
                            $("#goods .goods_6").append($str_floor_6_data.replace("水产海鲜","熟食面点"));
                            $("#goods .goods_6 dl").eq(0).find("dt").addClass("on");
                        })
                        $("#temp_list").load("floor_1.html",function(){
                            var $str_floor_7_data = template("floor_1_data",{
                                list: data
                            })
                            $("#goods .goods_7").append($str_floor_7_data.replace("时令鲜果","休闲零食"));
                            $("#goods .goods_7 dl").eq(0).find("dt").addClass("on");
                        })
                        $("#temp_list").load("floor_2.html",function(){
                            var $str_floor_8_data = template("floor_2_data",{
                                list: data
                            })
                            $("#goods .goods_8").append($str_floor_8_data.replace("蔬菜菌菇","酒水茶饮"));
                            $("#goods .goods_8 dl").eq(0).find("dt").addClass("on");
                        })                
                    }
                })
                PageItem3 = true;
            }
            //满足条件渲染第四页
            if( $(this).scrollTop()>7000 && !PageItem4 ){
                $.ajax({
                    url:`/GetPage_4?page=4&_=${Math.round(Math.random()*1000000000)}`,
                    success:function(data){
                        $("#temp_list").load("floor_0.html",function(){
                            var $str_floor_9_data = template("floor_0_data",{
                                list: data
                            })
                            $("#goods .goods_9").append($str_floor_9_data.replace("水产海鲜","厨房用品"));
                            $("#goods .goods_9 dl").eq(0).find("dt").addClass("on");
                        })
                    }
                })
                PageItem4 = true;
            }
        })
    })
})