require(["../scripts/config.js"],function(){
    require(["jquery","benlailife"],function($){
        //放大镜功能
        $(".details_img_box").mouseenter(function(){//划入显示对应模块
            $(".details_img_big_box").css("display","block"); 
            $(".details_img_box span").css("display","block");
            $(".details_img_box").mousemove(function(e){//移动放大
                var l = $(".details_img_box").offset().left;//小图片框距离页面顶部的距离
                var t = $(".details_img_box").offset().top;//小图片框距离页面左边的距离
                var toLeft = Math.max(0,e.pageX-l-$(".details_img_box span").width()/2) && Math.min($(".details_img_box").width()-$(".details_img_box span").width(),e.pageX-l-$(".details_img_box span").width()/2);//滑块边界限定
                var toTop = Math.max(0,e.pageY-t-$(".details_img_box span").height()/2) && Math.min($(".details_img_box").height()-$(".details_img_box span").height(),e.pageY-t-$(".details_img_box span").height()/2);//滑块边界限定
                $(".details_img_box span").css({"left":toLeft,"top":toTop});
                var ratX = toLeft/($(".details_img_box").width()-$(".details_img_box span").width());
                var ratY = toTop/($(".details_img_box").height()-$(".details_img_box span").height());
                var bigLeft = ratX*($(".details_img_big_box").width()-$(".details_img_big_box img").width());
                var bigTop = ratY*($(".details_img_big_box").height()-$(".details_img_big_box img").height());
                $(".details_img_big_box img").css({"left":bigLeft,"top":bigTop});
            })
        })
        $(".details_img_box").mouseout(function(){//划出隐藏对应模块
            $(".details_img_big_box").css("display","none");
            $(".details_img_box span").css("display","none");
        })
        //图片导航的进入事件
        $(".details_img_nav li").mouseenter(function(){
            $(this).css("border","1px solid #8ab800").siblings().css("border","1px solid #c9c9c9");
            var $imgurl = $(this).find("img").attr("src");
            $(".details_img_box img").attr({src:$imgurl});
            $(".details_img_big_box img").attr({src:$imgurl});
        })

        //详情页导航的滚动定位
        $(window).scroll(function(){
            if($(this).scrollTop() >= 832){
                $(".details_look_nav").css({
                    position:"fixed",
                    right:74,
                    top:0,
                })
            }else{
                $(".details_look_nav").css({
                    position:"static"
                })   
            }
        })
        //点击效果1278
        $(".details_look_nav .details_service").click(function(){
            $("body,html").stop().animate({scrollTop:2050},400);
        })
        $(".details_look_nav .details_start").click(function(){
            $("body,html").stop().animate({scrollTop:830},400);
        })


    })
})