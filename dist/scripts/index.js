"use strict";require(["../scripts/config.js"],function(){require(["jquery","swiper","template","benlailife"],function(i,n,s){i("nav .all_type dl").mouseover(function(){i(this).find("dd").show().end().siblings().find("dd").hide()}),i("nav .all_type").mouseout(function(){i(this).find("dd").hide()});var o=0,a=null;function t(){clearInterval(a),a=setInterval(function(){6==(o+=1)&&(o=0),i("#banner .banner-pic a").eq(o).fadeIn(300).siblings().fadeOut(300),i("#banner .banner-pic ul li").eq(o).addClass("on").siblings().removeClass("on")},3e3)}i("#banner").on("click","dt",function(){-1==(o-=1)&&(o=5),i("#banner .banner-pic a").eq(o).fadeIn(300).siblings().fadeOut(300),i("#banner .banner-pic ul li").eq(o).addClass("on").siblings().removeClass("on")}),i("#banner").on("click","dd",function(){6==(o+=1)&&(o=0),i("#banner .banner-pic a").eq(o).fadeIn(300).siblings().fadeOut(300),i("#banner .banner-pic ul li").eq(o).addClass("on").siblings().removeClass("on")}),i("#banner .banner-pic").mouseover(function(){i("#banner .banner-btn dl").show(),i("#banner .banner-pic ul").stop().animate({top:370},400),i("#banner .banner-pic ul").find("span").css("background","rgba(255,255,255,.75)"),clearInterval(a),i("#banner .banner-pic ul li").mouseenter(function(){i(this).addClass("on").siblings().removeClass("on"),o=i(this).index(),i("#banner .banner-pic a").eq(o).fadeIn(300).siblings().fadeOut(300)})}),i("#banner").mouseleave(function(){i("#banner .banner-btn dl").hide(),i("#banner .banner-pic ul").stop().animate({top:396},400,function(){i("#banner .banner-pic ul").find("span").css("background","rgba(162,162,147,1)")}),t()}),t(),i("main .main-c .newbaby-list dl").mouseover(function(){i(this).find("dt").addClass("on").end().siblings().find("dt").removeClass("on"),i(this).find("dd").css("display","block").end().siblings().find("dd").css("display","none"),i(this).find("dt a").css({marginLeft:"26px",color:"#78a000"}).end().siblings().find("dt a").css({marginLeft:"30px",color:"#626252"})}),i("body").on("mouseenter","li.show-add-car",function(){i(this).find(".box").css("border","4px solid #f8f8f6"),i(this).find("p").eq(0).stop().animate({marginTop:10},200),i(this).find("p").eq(1).stop().animate({marginTop:5},200),i(this).find("p").eq(1).next().stop().animate({marginTop:2},200),i(this).find(".addcar-btn").stop().animate({top:223},200)}),i("body").on("mouseleave","li.show-add-car",function(){i(this).find(".box").css("border","4px solid #fff"),i(this).find("p").eq(0).stop().animate({marginTop:15},200),i(this).find("p").eq(1).stop().animate({marginTop:15},200),i(this).find("p").eq(1).next().stop().animate({marginTop:7},200),i(this).find(".addcar-btn").stop().animate({top:260},200)}),function n(){i(".main-b-nav dt .ico03").animate({width:35,height:35,opacity:.3,marginTop:-6,marginLeft:-5},1e3,"linear",function(){i(this).css({width:1,height:1,opacity:.7,marginTop:22,marginLeft:12}),n()})}(),i("main .main-b").on("click","dd",function(){var n=i(this).index();1==n&&i(this).siblings().eq(0).stop().animate({top:31,left:229},300),2==n&&i(this).siblings().eq(0).stop().animate({top:20,left:423},300),3==n&&i(this).siblings().eq(0).stop().animate({top:47,left:615},300),4==n&&i(this).siblings().eq(0).stop().animate({top:23,left:804},300),5==n&&i(this).siblings().eq(0).stop().animate({top:37,left:1017},300),i("main .main-b-list ul").eq(n-1).show().siblings().hide()}),i(".main-b").on("mouseenter","li",function(){i(this).css({background:"#fff",boxShadow:"1px 1px 8px rgba(227,227,227,.9)"}),i(this).find(".photo").stop().animate({marginTop:15},200),i(this).find(".list-name").stop().animate({marginTop:10},200),i(this).find(".price").stop().animate({marginTop:3},200),i(this).find(".addcar-btn").stop().animate({top:242},200)}),i(".main-b").on("mouseleave","li",function(){i(this).css({background:"",boxShadow:"none"}),i(this).find(".photo").stop().animate({marginTop:25},200),i(this).find(".list-name").stop().animate({marginTop:15},200),i(this).find(".price").stop().animate({marginTop:7},200),i(this).find(".addcar-btn").stop().animate({top:280},200)}),i(".goods").on("mouseenter","dt",function(){i(this).parents(".goods").find("dt").removeClass("on").siblings().hide(),i(this).addClass("on").siblings().show()}),i(".goods").on("mouseover","li.tag_li",function(){i(this).find("a").css({background:"#a6ca44",color:"#fff"}).end().siblings().find("a").css({background:"#fff",color:"#78a000"})}),i(".goods").on("mouseout","li.tag_li",function(){i(".goods-banner li").find("a").css({background:"#fff",color:"#78a000"})});var e=!1,d=!1,l=!1,r=!1;i(window).scroll(function(){800<i(this).scrollTop()&&!e&&(i.ajax({url:"/GetPage_1?page=1&_="+Math.round(1e9*Math.random()),success:function(o){for(var n="",a=0;a<o[0].PageItem.length;a++)n+="<dd><a>"+o[0].PageItem[a].Name+"</a></dd>";i(".main-b-nav dl").append(n),i("#temp_list").load("maijialijian.html",function(){var n=s("main-b-list-data",{list:o});i(".main-b").append(n)}),i("#temp_list").load("floor_1.html",function(){var n=s("floor_1_data",{list:o});i("#goods .goods_1").append(n),i("#goods .goods_1 dl").eq(0).find("dt").addClass("on")}),i("#temp_list").load("floor_2.html",function(){var n=s("floor_2_data",{list:o});i("#goods .goods_2").append(n),i("#goods .goods_2 dl").eq(0).find("dt").addClass("on")})}}),e=!0),2700<i(this).scrollTop()&&!d&&(i.ajax({url:"/GetPage_2?page=2&_="+Math.round(1e9*Math.random()),success:function(o){i("#temp_list").load("floor_0.html",function(){var n=s("floor_0_data",{list:o});i("#goods .goods_3").append(n),i("#goods .goods_3 dl").eq(0).find("dt").addClass("on")}),i("#temp_list").load("floor_1.html",function(){var n=s("floor_1_data",{list:o});i("#goods .goods_4").append(n.replace("时令鲜果","肉禽蛋品")),i("#goods .goods_4 dl").eq(0).find("dt").addClass("on")}),i("#temp_list").load("floor_2.html",function(){var n=s("floor_2_data",{list:o});i("#goods .goods_5").append(n.replace("蔬菜菌菇","居家优选")),i("#goods .goods_5 dl").eq(0).find("dt").addClass("on")})}}),i("#left_nav").append("<a></a><a></a><a></a>"),d=!0),4900<i(this).scrollTop()&&!l&&(i.ajax({url:"/GetPage_3?page=3&_="+Math.round(1e9*Math.random()),success:function(o){i("#temp_list").load("floor_0.html",function(){var n=s("floor_0_data",{list:o});i("#goods .goods_6").append(n.replace("水产海鲜","熟食面点")),i("#goods .goods_6 dl").eq(0).find("dt").addClass("on")}),i("#temp_list").load("floor_1.html",function(){var n=s("floor_1_data",{list:o});i("#goods .goods_7").append(n.replace("时令鲜果","休闲零食")),i("#goods .goods_7 dl").eq(0).find("dt").addClass("on")}),i("#temp_list").load("floor_2.html",function(){var n=s("floor_2_data",{list:o});i("#goods .goods_8").append(n.replace("蔬菜菌菇","酒水茶饮")),i("#goods .goods_8 dl").eq(0).find("dt").addClass("on")})}}),i("#left_nav").append("<a></a><a></a><a></a>"),l=!0),7e3<i(this).scrollTop()&&!r&&(i.ajax({url:"/GetPage_4?page=4&_="+Math.round(1e9*Math.random()),success:function(o){i("#temp_list").load("floor_0.html",function(){var n=s("floor_0_data",{list:o});i("#goods .goods_9").append(n.replace("水产海鲜","厨房用品")),i("#goods .goods_9 dl").eq(0).find("dt").addClass("on")})}}),i("#left_nav").append("<a></a>"),r=!0)}),i("#left_nav").on("click","a",function(){var n=i(this).index();i(this).addClass("on").siblings().removeClass("on"),1==n&&i("body,html").stop().animate({scrollTop:1800},500),2==n&&i("body,html").stop().animate({scrollTop:2500},500),3==n&&i("body,html").stop().animate({scrollTop:3200},500),4==n&&i("body,html").stop().animate({scrollTop:3900},500),5==n&&i("body,html").stop().animate({scrollTop:4700},500),6==n&&i("body,html").stop().animate({scrollTop:5400},500),7==n&&i("body,html").stop().animate({scrollTop:6100},500),8==n&&i("body,html").stop().animate({scrollTop:6900},500),9==n&&i("body,html").stop().animate({scrollTop:7600},500)});var p=[];i("body").on("click",".addcar-btn",function(){var n={sysno:i(this).attr("sysno"),src:i(this).siblings().eq(0).find("img").attr("src"),tit1:i(this).siblings().eq(1).find("em").text(),tit2:i(this).siblings().eq(1).find("span").text(),price:i(this).siblings().eq(2).find("i").text()};p.push(n),console.log(p)})})});