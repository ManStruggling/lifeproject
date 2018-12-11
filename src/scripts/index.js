require(["../scripts/config.js"], function () {
    require(["jquery", "swiper", "benlailife"], function ($, swiper) {
        //某一楼层内的导航列表切换
        $("#goods .goods-nav dl").find("dt").mouseover(function () {
            $(this).parents(".goods").find("dt").removeClass("on").siblings().hide();
            $(this).addClass("on").siblings().show();
        })
        //某一楼层内的广告下标签的切换
        $(".goods-banner").on("mouseover","li",function () {
            $(this).find("a").css({ "background": "#a6ca44", "color": "#fff" }).end().siblings().find("a").css({ "background": "#fff", "color": "#78a000" })
        })
        $(".goods-banner").on("mouseout","li",function () {
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

        //划入商品列表显示加购物车按钮
        $("ul").on("mouseenter","li.show-add-car",function () {
            $(this).find(".box").css("border", "4px solid #f8f8f6");
            $(this).find("p").eq(0).stop().animate({ marginTop: 10 }, 200);
            $(this).find("p").eq(1).stop().animate({ marginTop: 5 }, 200);
            $(this).find("p").eq(1).next().stop().animate({ marginTop: 2 }, 200);
            $(this).find(".addcar-btn").stop().animate({ top: 223 }, 200);
        })
        $("ul").on("mouseleave","li.show-add-car",function () {
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

        //ajax获取数据【买家力荐】
        $.ajax({
            url: "/GetOnlineHomePage",
            success: function (data) {
                console.log(data);
                var $main_bStr = "";//买家力荐模块结构
                var $mainbnav = "";//买家力荐导航模块
                for (var i = 0; i < data[0].PageItem.length; i++) {
                    $mainbnav += `<dd><a>${data[0].PageItem[i].Name}</a></dd>`;
                }
                var $mainblist = "";//买家力荐商品列表模块
                var $mainblist2 = "";//产品直供商品列表模块
                var $mainblist3 = "";//家庭购商品列表模块
                var $mainblist4 = "";//健康有机商品列表模块
                var $mainblist5 = "";//全球买手商品列表模块
                //尖货优选商品列表
                for (var i = 0; i < data[0].PageItem[0].ProductList.length; i++) {
                    $mainblist += `                   
                        <li>
                            <div class="photo">
                                <a href="#"><img src="${data[0].PageItem[0].ProductList[i].ProductImageLink}"
                                        alt=""></a>
                            </div>
                            <div class="list-name"><a href="#">${data[0].PageItem[0].ProductList[i].ProductName}</a></div>
                <p class="price">￥${data[0].PageItem[0].ProductList[i].ProductNowPrice}<span>￥${data[0].PageItem[0].ProductList[i].ProductOldPrice}</span></p>
                            <div class="add-btn"><a href="#"></a></div>
                        </li>
                    `
                }
                //产品直供商品列表模块
                for (var i = 0; i < data[0].PageItem[1].ProductList.length; i++) {
                    $mainblist2 += `          
                    <li>
                        <div class="photo">
                            <a href="#"><img src="${data[0].PageItem[1].ProductList[i].ProductImageLink}"
                                    alt=""></a>
                        </div>
                        <div class="list-name"><a href="#">${data[0].PageItem[1].ProductList[i].ProductName}</a></div>
                <p class="price">￥${data[0].PageItem[1].ProductList[i].ProductNowPrice}<span>￥${data[0].PageItem[1].ProductList[i].ProductOldPrice}</span></p>
                        <div class="add-btn"><a href="#"></a></div>
                    </li>`
                }
                //家庭购商品列表模块
                for (var i = 0; i < data[0].PageItem[2].ProductList.length; i++) {
                    $mainblist3 += `          
                    <li>
                        <div class="photo">
                            <a href="#"><img src="${data[0].PageItem[2].ProductList[i].ProductImageLink}"
                                    alt=""></a>
                        </div>
                        <div class="list-name"><a href="#">${data[0].PageItem[2].ProductList[i].ProductName}</a></div>
                <p class="price">￥${data[0].PageItem[2].ProductList[i].ProductNowPrice}<span>￥${data[0].PageItem[2].ProductList[i].ProductOldPrice}</span></p>
                        <div class="add-btn"><a href="#"></a></div>
                    </li>`
                }
                //健康有机商品列表模块
                for (var i = 0; i < data[0].PageItem[3].ProductList.length; i++) {
                    $mainblist4 += `          
                    <li>
                        <div class="photo">
                            <a href="#"><img src="${data[0].PageItem[3].ProductList[i].ProductImageLink}"
                                    alt=""></a>
                        </div>
                        <div class="list-name"><a href="#">${data[0].PageItem[3].ProductList[i].ProductName}</a></div>
                <p class="price">￥${data[0].PageItem[3].ProductList[i].ProductNowPrice}<span>￥${data[0].PageItem[3].ProductList[i].ProductOldPrice}</span></p>
                        <div class="add-btn"><a href="#"></a></div>
                    </li>`
                }
                //全球买手商品列表模块
                for (var i = 0; i < data[0].PageItem[4].ProductList.length; i++) {
                    $mainblist5 += `          
                    <li>
                        <div class="photo">
                            <a href="#"><img src="${data[0].PageItem[4].ProductList[i].ProductImageLink}"
                                    alt=""></a>
                        </div>
                        <div class="list-name"><a href="#">${data[0].PageItem[4].ProductList[i].ProductName}</a></div>
                <p class="price">￥${data[0].PageItem[4].ProductList[i].ProductNowPrice}<span>￥${data[0].PageItem[4].ProductList[i].ProductOldPrice}</span></p>
                        <div class="add-btn"><a href="#"></a></div>
                    </li>
                `
                }
                $main_bStr = `     
                <div class="main-b-list">
                    <ul>
                        ${$mainblist}
                    </ul>
                    <ul>
                        ${$mainblist2}
                    </ul>
                    <ul>
                        ${$mainblist3}
                    </ul>
                    <ul>
                        ${$mainblist4}
                    </ul>
                    <ul>
                        ${$mainblist5}
                    </ul>
                </div>`;
                $(".main-b-nav dl").append($mainbnav);
                $("main .main-b").append($main_bStr);

                //第一楼商品
                var $goodsbannerStr = "";//商品楼层标签栏
                for(var i=0;i<data[1].KeyWords.length;i++){
                    $goodsbannerStr += `
                    <li><a href="#" class="four">${data[1].KeyWords[i].Name}</a></li>
                    `                                  
                }
                $(".goods-banner ul").append($goodsbannerStr);
                var $goods_t = "";//楼层顶部广告
                $goods_t = `<a href="#"><img src="//image4.benlailife.com/${data[1].ADImgUrl}"alt=""></a>`;
                $(".goods-t").append($goods_t);
                var $goodsbannerimg = "";//楼层广告
                $goodsbannerimg = `<img src="//image5.benlailife.com/${data[1].ImgUrl}"
                alt="">`;
                $(".goods-banner-img a").append($goodsbannerimg);
                //楼层导航
                for(var i=0;i<data[1].PageItem.length;i++){
                    $(".goods-nav dt").eq(i).find("a").append(data[1].PageItem[i].Name);
                }
                var $goodslist = "";//楼层商品列表
                var $goodslist2 = "";
                var $goodslist3 = "";
                var $goodslist4 = "";
                for(var i=0;i<data[1].PageItem[0].ProductList.length;i++){
                    $goodslist += `<li class="show-add-car">
                    <div class="box">
                    <p>
                    <a href="#"><img src="${data[1].PageItem[0].ProductList[i].ProductImageLink}"
                    alt=""></a>
                    </p>
                    <p>
                    <a href="#">
                    <em>${data[1].PageItem[0].ProductList[i].ProductName}</em>
                    <span>${data[1].PageItem[0].ProductList[i].ProductPromotionWord}</span>
                    </a>
                    </p>
                    <span>￥${data[1].PageItem[0].ProductList[i].ProductNowPrice}<s>￥${data[1].PageItem[0].ProductList[i].ProductOldPrice}</s></span>
                    <div class="addcar-btn"><a href="#"></a></div>
                    </div>
                    </li>`;
                }
                for(var i=0;i<data[1].PageItem[1].ProductList.length;i++){
                    $goodslist2 += `<li class="show-add-car">
                    <div class="box">
                    <p>
                    <a href="#"><img src="${data[1].PageItem[1].ProductList[i].ProductImageLink}"
                    alt=""></a>
                    </p>
                    <p>
                    <a href="#">
                    <em>${data[1].PageItem[1].ProductList[i].ProductName}</em>
                    <span>${data[1].PageItem[1].ProductList[i].ProductPromotionWord}</span>
                    </a>
                    </p>
                    <span>￥${data[1].PageItem[1].ProductList[i].ProductNowPrice}<s>￥${data[1].PageItem[1].ProductList[i].ProductOldPrice}</s></span>
                    <div class="addcar-btn"><a href="#"></a></div>
                    </div>
                    </li>`;
                }
                for(var i=0;i<data[1].PageItem[2].ProductList.length;i++){
                    $goodslist3 += `<li class="show-add-car">
                    <div class="box">
                    <p>
                    <a href="#"><img src="${data[1].PageItem[2].ProductList[i].ProductImageLink}"
                    alt=""></a>
                    </p>
                    <p>
                    <a href="#">
                    <em>${data[1].PageItem[2].ProductList[i].ProductName}</em>
                    <span>${data[1].PageItem[2].ProductList[i].ProductPromotionWord}</span>
                    </a>
                    </p>
                    <span>￥${data[1].PageItem[2].ProductList[i].ProductNowPrice}<s>￥${data[1].PageItem[2].ProductList[i].ProductOldPrice}</s></span>
                    <div class="addcar-btn"><a href="#"></a></div>
                    </div>
                    </li>`;
                }
                for(var i=0;i<data[1].PageItem[3].ProductList.length;i++){
                    $goodslist4 += `<li class="show-add-car">
                    <div class="box">
                    <p>
                    <a href="#"><img src="${data[1].PageItem[3].ProductList[i].ProductImageLink}"
                    alt=""></a>
                    </p>
                    <p>
                    <a href="#">
                    <em>${data[1].PageItem[3].ProductList[i].ProductName}</em>
                    <span>${data[1].PageItem[3].ProductList[i].ProductPromotionWord}</span>
                    </a>
                    </p>
                    <span>￥${data[1].PageItem[3].ProductList[i].ProductNowPrice}<s>￥${data[1].PageItem[3].ProductList[i].ProductOldPrice}</s></span>
                    <div class="addcar-btn"><a href="#"></a></div>
                    </div>
                    </li>`;
                }
                $(".goods-nav dl").eq(0).find(".goods-list").append($goodslist);
                $(".goods-nav dl").eq(1).find(".goods-list").append($goodslist2);
                $(".goods-nav dl").eq(2).find(".goods-list").append($goodslist3);
                $(".goods-nav dl").eq(3).find(".goods-list").append($goodslist4);
            }

            
        })



    })
})