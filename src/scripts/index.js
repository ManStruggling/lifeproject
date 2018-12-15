require(["../scripts/config.js"], function () {
    require(["jquery", "swiper", "template","cookie", "benlailife"], function ($, swiper, template,cookie) {
        //商品分类列表切换
        $("nav .all_type dl").mouseover(function () {
            $(this).find("dd").show().end().siblings().find("dd").hide();
        })
        $("nav .all_type").mouseout(function () {
            $(this).find("dd").hide();
        })

        //banner 广告轮播图
        var $bannerIndex = 0;//轮播图的索引
        var $bannerAutoPlay = null;
        function AutoPlay() {
            clearInterval($bannerAutoPlay);
            $bannerAutoPlay = setInterval(() => {
                $bannerIndex = $bannerIndex + 1;
                if ($bannerIndex == 6) {
                    $bannerIndex = 0;
                }
                $("#banner .banner-pic a").eq($bannerIndex).fadeIn(300).siblings().fadeOut(300);//显示索引图片
                $("#banner .banner-pic ul li").eq($bannerIndex).addClass("on").siblings().removeClass("on");//对应导航变色 
            }, 3000);
        }
        //轮播图左按钮事件
        $("#banner").on("click", "dt", function () {
            $bannerIndex -= 1;
            if ($bannerIndex == -1) {
                $bannerIndex = 5;
            }
            $("#banner .banner-pic a").eq($bannerIndex).fadeIn(300).siblings().fadeOut(300);//显示索引图片
            $("#banner .banner-pic ul li").eq($bannerIndex).addClass("on").siblings().removeClass("on");
        })
        //轮播图右按钮事件
        $("#banner").on("click", "dd", function () {
            $bannerIndex += 1;
            if ($bannerIndex == 6) {
                $bannerIndex = 0;
            }
            $("#banner .banner-pic a").eq($bannerIndex).fadeIn(300).siblings().fadeOut(300);//显示索引图片
            $("#banner .banner-pic ul li").eq($bannerIndex).addClass("on").siblings().removeClass("on");
        })
        //鼠标进入banner图停止轮播,显示按钮+导航
        $("#banner .banner-pic").mouseover(function () {
            $("#banner .banner-btn dl").show();//显示左右按钮
            $("#banner .banner-pic ul").stop().animate({ "top": 370 }, 400);//导航栏弹出
            $("#banner .banner-pic ul").find("span").css("background", "rgba(255,255,255,.75)")//导航列表变色
            clearInterval($bannerAutoPlay);//停止轮播
            //底部导航栏划入效果
            $("#banner .banner-pic ul li").mouseenter(function () {
                $(this).addClass("on").siblings().removeClass("on");//划入li改变li的样式
                $bannerIndex = $(this).index();
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
        $("body").on("mouseenter", "li.show-add-car", function () {
            $(this).find(".box").css("border", "4px solid #f8f8f6");
            $(this).find("p").eq(0).stop().animate({ marginTop: 10 }, 200);
            $(this).find("p").eq(1).stop().animate({ marginTop: 5 }, 200);
            $(this).find("p").eq(1).next().stop().animate({ marginTop: 2 }, 200);
            $(this).find(".addcar-btn").stop().animate({ top: 223 }, 200);
        })
        $("body").on("mouseleave", "li.show-add-car", function () {
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
        $(".main-b").on("mouseenter", "li", function () {
            $(this).css({ "background": "#fff", "boxShadow": "1px 1px 8px rgba(227,227,227,.9)" });
            $(this).find(".photo").stop().animate({ marginTop: 15 }, 200);
            $(this).find(".list-name").stop().animate({ marginTop: 10 }, 200);
            $(this).find(".price").stop().animate({ marginTop: 3 }, 200);
            $(this).find(".addcar-btn").stop().animate({ top: 242 }, 200);

        })
        $(".main-b").on("mouseleave", "li", function () {
            $(this).css({ "background": "", "boxShadow": "none" });
            $(this).find(".photo").stop().animate({ marginTop: 25 }, 200);
            $(this).find(".list-name").stop().animate({ marginTop: 15 }, 200);
            $(this).find(".price").stop().animate({ marginTop: 7 }, 200);
            $(this).find(".addcar-btn").stop().animate({ top: 280 }, 200);
        })


        //某一楼层内的导航列表切换
        $(".goods").on("mouseenter", "dt", function () {
            $(this).parents(".goods").find("dt").removeClass("on").siblings().hide();
            $(this).addClass("on").siblings().show();
        })
        //某一楼层内的广告下标签的切换
        $(".goods").on("mouseover", "li.tag_li", function () {
            $(this).find("a").css({ "background": "#a6ca44", "color": "#fff" }).end().siblings().find("a").css({ "background": "#fff", "color": "#78a000" })
        })
        $(".goods").on("mouseout", "li.tag_li", function () {
            $(".goods-banner li").find("a").css({ "background": "#fff", "color": "#78a000" });
        })



        //ajax获取数据
        let PageItem1 = false;//表示ajax没有请求第一页数据
        let PageItem2 = false;//表示ajax没有请求第二页数据
        let PageItem3 = false;//表示ajax没有请求第三页数据
        let PageItem4 = false;//表示ajax没有请求第四页数据
        $(window).scroll(function () {
            //满足条件渲染第一页
            if ($(this).scrollTop() > 800 && !PageItem1) {
                $.ajax({
                    url: `/GetPage_1?page=1&_=${Math.round(Math.random() * 1000000000)}`,
                    success: function (data) {
                        // 买家力荐导航
                        var $str_main_b_nav = "";
                        for (var i = 0; i < data[0].PageItem.length; i++) {
                            $str_main_b_nav += `<dd><a>${data[0].PageItem[i].Name}</a></dd>`;
                        }
                        $(".main-b-nav dl").append($str_main_b_nav);
                        $("#temp_list").load("maijialijian.html", function () {
                            var $str_main_b_list = template("main-b-list-data", {
                                list: data
                            });
                            $(".main-b").append($str_main_b_list);
                        })
                        $("#temp_list").load("floor_1.html", function () {
                            var $str_floor_1_data = template("floor_1_data", {
                                list: data
                            })
                            $("#goods .goods_1").append($str_floor_1_data);
                            $("#goods .goods_1 dl").eq(0).find("dt").addClass("on");
                        })
                        $("#temp_list").load("floor_2.html", function () {
                            var $str_floor_2_data = template("floor_2_data", {
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
            if ($(this).scrollTop() > 2700 && !PageItem2) {
                $.ajax({
                    url: `/GetPage_2?page=2&_=${Math.round(Math.random() * 1000000000)}`,
                    success: function (data) {
                        $("#temp_list").load("floor_0.html", function () {
                            var $str_floor_3_data = template("floor_0_data", {
                                list: data
                            })
                            $("#goods .goods_3").append($str_floor_3_data);
                            $("#goods .goods_3 dl").eq(0).find("dt").addClass("on");
                        })
                        $("#temp_list").load("floor_1.html", function () {
                            var $str_floor_4_data = template("floor_1_data", {
                                list: data
                            })
                            $("#goods .goods_4").append($str_floor_4_data.replace("时令鲜果", "肉禽蛋品"));
                            $("#goods .goods_4 dl").eq(0).find("dt").addClass("on");
                        })
                        $("#temp_list").load("floor_2.html", function () {
                            var $str_floor_5_data = template("floor_2_data", {
                                list: data
                            })
                            $("#goods .goods_5").append($str_floor_5_data.replace("蔬菜菌菇", "居家优选"));
                            $("#goods .goods_5 dl").eq(0).find("dt").addClass("on");
                        })
                    }
                })
                $("#left_nav").append("<a></a><a></a><a></a>");
                PageItem2 = true;
            }
            //满足条件渲染第三页
            if ($(this).scrollTop() > 4900 && !PageItem3) {
                $.ajax({
                    url: `/GetPage_3?page=3&_=${Math.round(Math.random() * 1000000000)}`,
                    success: function (data) {
                        $("#temp_list").load("floor_0.html", function () {
                            var $str_floor_6_data = template("floor_0_data", {
                                list: data
                            })
                            $("#goods .goods_6").append($str_floor_6_data.replace("水产海鲜", "熟食面点"));
                            $("#goods .goods_6 dl").eq(0).find("dt").addClass("on");
                        })
                        $("#temp_list").load("floor_1.html", function () {
                            var $str_floor_7_data = template("floor_1_data", {
                                list: data
                            })
                            $("#goods .goods_7").append($str_floor_7_data.replace("时令鲜果", "休闲零食"));
                            $("#goods .goods_7 dl").eq(0).find("dt").addClass("on");
                        })
                        $("#temp_list").load("floor_2.html", function () {
                            var $str_floor_8_data = template("floor_2_data", {
                                list: data
                            })
                            $("#goods .goods_8").append($str_floor_8_data.replace("蔬菜菌菇", "酒水茶饮"));
                            $("#goods .goods_8 dl").eq(0).find("dt").addClass("on");
                        })
                    }
                })
                $("#left_nav").append("<a></a><a></a><a></a>");
                PageItem3 = true;
            }
            //满足条件渲染第四页
            if ($(this).scrollTop() > 7000 && !PageItem4) {
                $.ajax({
                    url: `/GetPage_4?page=4&_=${Math.round(Math.random() * 1000000000)}`,
                    success: function (data) {
                        $("#temp_list").load("floor_0.html", function () {
                            var $str_floor_9_data = template("floor_0_data", {
                                list: data
                            })
                            $("#goods .goods_9").append($str_floor_9_data.replace("水产海鲜", "厨房用品"));
                            $("#goods .goods_9 dl").eq(0).find("dt").addClass("on");
                        })
                    }
                })
                $("#left_nav").append("<a></a>");
                PageItem4 = true;
            }
        })

        //左边导航事件
        $("#left_nav").on("click", "a", function () {
            let $left_index = $(this).index();
            $(this).addClass("on").siblings().removeClass("on");
            if ($left_index == 1) {
                $("body,html").stop().animate({ scrollTop: 1800 }, 500);
            }
            if ($left_index == 2) {
                $("body,html").stop().animate({ scrollTop: 2500 }, 500);
            }
            if ($left_index == 3) {
                $("body,html").stop().animate({ scrollTop: 3200 }, 500);
            }
            if ($left_index == 4) {
                $("body,html").stop().animate({ scrollTop: 3900 }, 500);
            }
            if ($left_index == 5) {
                $("body,html").stop().animate({ scrollTop: 4700 }, 500);
            }
            if ($left_index == 6) {
                $("body,html").stop().animate({ scrollTop: 5400 }, 500);
            }
            if ($left_index == 7) {
                $("body,html").stop().animate({ scrollTop: 6100 }, 500);
            }
            if ($left_index == 8) {
                $("body,html").stop().animate({ scrollTop: 6900 }, 500);
            }
            if ($left_index == 9) {
                $("body,html").stop().animate({ scrollTop: 7600 }, 500);
            }
        })

        //加购物车
        let to_delay = null;
        let $goods_json = [];
        $("body").on("click", ".addcar-btn", function () {
            let $this_goods = {//创建新的商品对象
                sysno:$(this).attr("sysno"),//商品编号
                src:$(this).siblings().eq(0).find("img").attr("src"),//需要存的图片地址
                tit:$(this).siblings().eq(1).find("em").text(),//商品的描述
                price:$(this).siblings().eq(2).find("i").text(),//商品的价格
                count:1 //商品的数量
            }
            let goods_str = cookie.getCookie("goods");//取出cookie内的goods信息
            let status = true;
            if(goods_str){
                $goods_json = JSON.parse(goods_str);//取出cookie内的商品数据转换为json对象
                for(var i=0;i<$goods_json.length;i++){
                    if( $goods_json[i].sysno==$this_goods.sysno ){//检测到该商品存在于cookie内
                        $goods_json[i].count += 1;//给cookie内的该商品的数量加1
                        cookie.setCookie("goods",JSON.stringify($goods_json),365);
                        status = false;
                    }
                }
                if(status){//检测到该点击商品不在cookie内
                    $goods_json.push($this_goods);
                    cookie.setCookie("goods",JSON.stringify($goods_json),365);
                }
            }else{//cookie内goods为空时
                $goods_json.push($this_goods);
                cookie.setCookie("goods",JSON.stringify($goods_json),365);
            }
            let $count = 0;
            for(var i=0;i<$goods_json.length;i++){//计算商品数量
                $count += $goods_json[i].count
            }
            $("#show_goods_msg img").attr("src",$this_goods.src);//主页加入购物车弹出效果
            $("#show_goods_msg p").html($this_goods.tit);//主页加入购物车弹出效果
            $("#show_goods_msg em").html($this_goods.price);//主页加入购物车弹出效果
            $("#goTop .rigth_to_shopCar").html($count);//主页加入购物车数量变化
            $("header .shopcar-box .num").html($count);//页头购物车数量变化
            new Operation_cookie().get_str().get_json().change();
            $("#show_goods_msg").show().stop().animate({right:49},600,function(){
                clearTimeout(to_delay);       
                to_delay = setTimeout(() => {
                    $(this).css({right:-252}).hide();
                }, 2500);
            }); 
        })


        class Operation_cookie{
            constructor(){
                this.str = "";//cookie取出的数据
                this.goods_list_str = "";//购物车商品列表
                this.json = [];//cookie数据转换的json
                this.count = 0;//商品的总数量
                this.all_money = 0;//商品总价格
            }
            get_str(){
                this.str = cookie.getCookie("goods");//取出cookie中商品的数据
                return this;
            }
            get_json(){
                this.json = JSON.parse(this.str); 
                return this;
            }
            storage(){
                cookie.setCookie("goods",JSON.stringify(this.json),365);//把商品信息存到cookie中
                return this;
            }
            change(){ 
                for(var i=0;i<this.json.length;i++){//遍历cookie中的商品信息，渲染到页面
                    this.goods_list_str += `<li>
                    <div class="car_img"><a href="#"><img src="${this.json[i].src}" alt=""></a></div>
                    <div class="car_name"><a href="#"><img src="" alt="">${this.json[i].tit}</a></div>
                    <div class="car_price"><span>${this.json[i].price}</span><s>x <em>${this.json[i].count}</em></s></div>
                    </li>`;
                    this.count += this.json[i].count;
                    this.all_money += Number(this.json[i].price.slice(1))*this.json[i].count;//购物车中商品的总价格
                }
                $(".cartListView ul").html(this.goods_list_str);
                $(".cartListView .tobuy s").html(this.count);
                $(".cartListView .tobuy i").html("￥"+this.all_money.toFixed(2));
                $(".shopcar .shopcar-box .num").html(this.count);
                $("#goTop .rigth_to_shopCar").html(this.count);
                $(".cartListView .none_sku").hide();

            }
        }
        let my_car = new Operation_cookie();
        if(my_car.get_str().str.length>3){
            my_car.get_str().get_json().change();
        }
    })
})