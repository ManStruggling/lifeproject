define(["jquery"], function () {
    require(["cookie"], function (cookie) {


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
        $("header .search-box .txt").on("input", function () {
            $.ajax({
                url: `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${$(this).val()}&json=1&p=3&sid=22084_1436_13548_21120_22036_22073&req=2&csor=0`,
                dataType: "jsonp",
                jsonp: "cb",
                success: function (data) {
                    $("header .search-box ul").empty();
                    data.s.forEach(item => {
                        $("header .search-box ul").append(`<li>${item}</li>`)
                    });

                }
            })
        })

        //显示隐藏二维码
        $(".two_code").click(function () {
            $(".twoCode").toggle();
        })

        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $("#goTop .go_top").show();
                $("#left_nav").show();
            } else {
                $("#goTop .go_top").hide();
                $("#left_nav").hide();
            }
            if ($(this).scrollTop() >= 7600) {
                $("#left_nav a").eq(9).addClass("on").siblings().removeClass("on");
            } else if ($(this).scrollTop() >= 6900) {
                $("#left_nav a").eq(8).addClass("on").siblings().removeClass("on");
            } else if ($(this).scrollTop() >= 6100) {
                $("#left_nav a").eq(7).addClass("on").siblings().removeClass("on");
            } else if ($(this).scrollTop() >= 5400) {
                $("#left_nav a").eq(6).addClass("on").siblings().removeClass("on");
            } else if ($(this).scrollTop() >= 4700) {
                $("#left_nav a").eq(5).addClass("on").siblings().removeClass("on");
            } else if ($(this).scrollTop() >= 3900) {
                $("#left_nav a").eq(4).addClass("on").siblings().removeClass("on");
            } else if ($(this).scrollTop() >= 3200) {
                $("#left_nav a").eq(3).addClass("on").siblings().removeClass("on");
            } else if ($(this).scrollTop() >= 2500) {
                $("#left_nav a").eq(2).addClass("on").siblings().removeClass("on");
            } else if ($(this).scrollTop() >= 1800) {
                $("#left_nav a").eq(1).addClass("on").siblings().removeClass("on");
            }
        })
        $("#goTop .go_top").click(function () {
            $("body,html").stop().animate({ scrollTop: 0 }, 500);
        });
        $("#left_nav a").eq(0).click(function () {
            $("body,html").stop().animate({ scrollTop: 0 }, 500);
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

        //登录状态获取
        class status_cookie{
            constructor(){
                this.str = "";
                this.json = "";
            }
            get_str(){
                this.str = cookie.getCookie("user_info");
                return this;
            }
            get_json(){
                this.json = JSON.parse(this.str);
                return this;
            }
            check_status(){
                for(var i=0;i<this.json.length;i++){
                    if( this.json[i].status ){
                        $(".top-l-1").html("您好，"+this.json[i].num);
                    }
                }
            }

        }
        var my_status = new status_cookie();
        if( my_status.get_str().str ){
            my_status.get_str().get_json().check_status();
        }
    })
})