"use strict";var _createClass=function(){function t(o,n){for(var s=0;s<n.length;s++){var t=n[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}return function(o,n,s){return n&&t(o.prototype,n),s&&t(o,s),o}}();function _classCallCheck(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}require(["../scripts/config.js"],function(){require(["jquery","swiper","template","cookie","benlailife"],function(a,o,t,e){a("nav .all_type dl").mouseover(function(){a(this).find("dd").show().end().siblings().find("dd").hide()}),a("nav .all_type").mouseout(function(){a(this).find("dd").hide()});var n=0,s=null;function i(){clearInterval(s),s=setInterval(function(){6==(n+=1)&&(n=0),a("#banner .banner-pic a").eq(n).fadeIn(300).siblings().fadeOut(300),a("#banner .banner-pic ul li").eq(n).addClass("on").siblings().removeClass("on")},3e3)}a("#banner").on("click","dt",function(){-1==(n-=1)&&(n=5),a("#banner .banner-pic a").eq(n).fadeIn(300).siblings().fadeOut(300),a("#banner .banner-pic ul li").eq(n).addClass("on").siblings().removeClass("on")}),a("#banner").on("click","dd",function(){6==(n+=1)&&(n=0),a("#banner .banner-pic a").eq(n).fadeIn(300).siblings().fadeOut(300),a("#banner .banner-pic ul li").eq(n).addClass("on").siblings().removeClass("on")}),a("#banner .banner-pic").mouseover(function(){a("#banner .banner-btn dl").show(),a("#banner .banner-pic ul").stop().animate({top:370},400),a("#banner .banner-pic ul").find("span").css("background","rgba(255,255,255,.75)"),clearInterval(s),a("#banner .banner-pic ul li").mouseenter(function(){a(this).addClass("on").siblings().removeClass("on"),n=a(this).index(),a("#banner .banner-pic a").eq(n).fadeIn(300).siblings().fadeOut(300)})}),a("#banner").mouseleave(function(){a("#banner .banner-btn dl").hide(),a("#banner .banner-pic ul").stop().animate({top:396},400,function(){a("#banner .banner-pic ul").find("span").css("background","rgba(162,162,147,1)")}),i()}),i(),a("main .main-c .newbaby-list dl").mouseover(function(){a(this).find("dt").addClass("on").end().siblings().find("dt").removeClass("on"),a(this).find("dd").css("display","block").end().siblings().find("dd").css("display","none"),a(this).find("dt a").css({marginLeft:"26px",color:"#78a000"}).end().siblings().find("dt a").css({marginLeft:"30px",color:"#626252"})}),a("body").on("mouseenter","li.show-add-car",function(){a(this).find(".box").css("border","4px solid #f8f8f6"),a(this).find("p").eq(0).stop().animate({marginTop:10},200),a(this).find("p").eq(1).stop().animate({marginTop:5},200),a(this).find("p").eq(1).next().stop().animate({marginTop:2},200),a(this).find(".addcar-btn").stop().animate({top:223},200)}),a("body").on("mouseleave","li.show-add-car",function(){a(this).find(".box").css("border","4px solid #fff"),a(this).find("p").eq(0).stop().animate({marginTop:15},200),a(this).find("p").eq(1).stop().animate({marginTop:15},200),a(this).find("p").eq(1).next().stop().animate({marginTop:7},200),a(this).find(".addcar-btn").stop().animate({top:260},200)}),function o(){a(".main-b-nav dt .ico03").animate({width:35,height:35,opacity:.3,marginTop:-6,marginLeft:-5},1e3,"linear",function(){a(this).css({width:1,height:1,opacity:.7,marginTop:22,marginLeft:12}),o()})}(),a("main .main-b").on("click","dd",function(){var o=a(this).index();1==o&&a(this).siblings().eq(0).stop().animate({top:31,left:229},300),2==o&&a(this).siblings().eq(0).stop().animate({top:20,left:423},300),3==o&&a(this).siblings().eq(0).stop().animate({top:47,left:615},300),4==o&&a(this).siblings().eq(0).stop().animate({top:23,left:804},300),5==o&&a(this).siblings().eq(0).stop().animate({top:37,left:1017},300),a("main .main-b-list ul").eq(o-1).show().siblings().hide()}),a(".main-b").on("mouseenter","li",function(){a(this).css({background:"#fff",boxShadow:"1px 1px 8px rgba(227,227,227,.9)"}),a(this).find(".photo").stop().animate({marginTop:15},200),a(this).find(".list-name").stop().animate({marginTop:10},200),a(this).find(".price").stop().animate({marginTop:3},200),a(this).find(".addcar-btn").stop().animate({top:242},200)}),a(".main-b").on("mouseleave","li",function(){a(this).css({background:"",boxShadow:"none"}),a(this).find(".photo").stop().animate({marginTop:25},200),a(this).find(".list-name").stop().animate({marginTop:15},200),a(this).find(".price").stop().animate({marginTop:7},200),a(this).find(".addcar-btn").stop().animate({top:280},200)}),a(".goods").on("mouseenter","dt",function(){a(this).parents(".goods").find("dt").removeClass("on").siblings().hide(),a(this).addClass("on").siblings().show()}),a(".goods").on("mouseover","li.tag_li",function(){a(this).find("a").css({background:"#a6ca44",color:"#fff"}).end().siblings().find("a").css({background:"#fff",color:"#78a000"})}),a(".goods").on("mouseout","li.tag_li",function(){a(".goods-banner li").find("a").css({background:"#fff",color:"#78a000"})});var d=!1,l=!1,r=!1,c=!1;a(window).scroll(function(){800<a(this).scrollTop()&&!d&&(a.ajax({url:"/GetPage_1?page=1&_="+Math.round(1e9*Math.random()),success:function(n){for(var o="",s=0;s<n[0].PageItem.length;s++)o+="<dd><a>"+n[0].PageItem[s].Name+"</a></dd>";a(".main-b-nav dl").append(o),a("#temp_list").load("maijialijian.html",function(){var o=t("main-b-list-data",{list:n});a(".main-b").append(o)}),a("#temp_list").load("floor_1.html",function(){var o=t("floor_1_data",{list:n});a("#goods .goods_1").append(o),a("#goods .goods_1 dl").eq(0).find("dt").addClass("on")}),a("#temp_list").load("floor_2.html",function(){var o=t("floor_2_data",{list:n});a("#goods .goods_2").append(o),a("#goods .goods_2 dl").eq(0).find("dt").addClass("on")})}}),d=!0),2700<a(this).scrollTop()&&!l&&(a.ajax({url:"/GetPage_2?page=2&_="+Math.round(1e9*Math.random()),success:function(n){a("#temp_list").load("floor_0.html",function(){var o=t("floor_0_data",{list:n});a("#goods .goods_3").append(o),a("#goods .goods_3 dl").eq(0).find("dt").addClass("on")}),a("#temp_list").load("floor_1.html",function(){var o=t("floor_1_data",{list:n});a("#goods .goods_4").append(o.replace("时令鲜果","肉禽蛋品")),a("#goods .goods_4 dl").eq(0).find("dt").addClass("on")}),a("#temp_list").load("floor_2.html",function(){var o=t("floor_2_data",{list:n});a("#goods .goods_5").append(o.replace("蔬菜菌菇","居家优选")),a("#goods .goods_5 dl").eq(0).find("dt").addClass("on")})}}),a("#left_nav").append("<a></a><a></a><a></a>"),l=!0),4900<a(this).scrollTop()&&!r&&(a.ajax({url:"/GetPage_3?page=3&_="+Math.round(1e9*Math.random()),success:function(n){a("#temp_list").load("floor_0.html",function(){var o=t("floor_0_data",{list:n});a("#goods .goods_6").append(o.replace("水产海鲜","熟食面点")),a("#goods .goods_6 dl").eq(0).find("dt").addClass("on")}),a("#temp_list").load("floor_1.html",function(){var o=t("floor_1_data",{list:n});a("#goods .goods_7").append(o.replace("时令鲜果","休闲零食")),a("#goods .goods_7 dl").eq(0).find("dt").addClass("on")}),a("#temp_list").load("floor_2.html",function(){var o=t("floor_2_data",{list:n});a("#goods .goods_8").append(o.replace("蔬菜菌菇","酒水茶饮")),a("#goods .goods_8 dl").eq(0).find("dt").addClass("on")})}}),a("#left_nav").append("<a></a><a></a><a></a>"),r=!0),7e3<a(this).scrollTop()&&!c&&(a.ajax({url:"/GetPage_4?page=4&_="+Math.round(1e9*Math.random()),success:function(n){a("#temp_list").load("floor_0.html",function(){var o=t("floor_0_data",{list:n});a("#goods .goods_9").append(o.replace("水产海鲜","厨房用品")),a("#goods .goods_9 dl").eq(0).find("dt").addClass("on")})}}),a("#left_nav").append("<a></a>"),c=!0)}),a("#left_nav").on("click","a",function(){var o=a(this).index();a(this).addClass("on").siblings().removeClass("on"),1==o&&a("body,html").stop().animate({scrollTop:1800},500),2==o&&a("body,html").stop().animate({scrollTop:2500},500),3==o&&a("body,html").stop().animate({scrollTop:3200},500),4==o&&a("body,html").stop().animate({scrollTop:3900},500),5==o&&a("body,html").stop().animate({scrollTop:4700},500),6==o&&a("body,html").stop().animate({scrollTop:5400},500),7==o&&a("body,html").stop().animate({scrollTop:6100},500),8==o&&a("body,html").stop().animate({scrollTop:6900},500),9==o&&a("body,html").stop().animate({scrollTop:7600},500)});var p=null,f=[];a("body").on("click",".addcar-btn",function(){var o={sysno:a(this).attr("sysno"),src:a(this).siblings().eq(0).find("img").attr("src"),tit:a(this).siblings().eq(1).find("em").text(),price:a(this).siblings().eq(2).find("i").text(),count:1},n=e.getCookie("goods"),s=!0;if(n){f=JSON.parse(n);for(var t=0;t<f.length;t++)f[t].sysno==o.sysno&&(f[t].count+=1,e.setCookie("goods",JSON.stringify(f),365),s=!1);s&&(f.push(o),e.setCookie("goods",JSON.stringify(f),365))}else f.push(o),e.setCookie("goods",JSON.stringify(f),365);var i=0;for(t=0;t<f.length;t++)i+=f[t].count;a("#show_goods_msg img").attr("src",o.src),a("#show_goods_msg p").html(o.tit),a("#show_goods_msg em").html(o.price),a("#goTop .rigth_to_shopCar").html(i),a("header .shopcar-box .num").html(i),(new h).get_str().get_json().change(),a("#show_goods_msg").show().stop().animate({right:49},600,function(){var o=this;clearTimeout(p),p=setTimeout(function(){a(o).css({right:-252}).hide()},2500)})});var h=function(){function o(){_classCallCheck(this,o),this.str="",this.goods_list_str="",this.json=[],this.count=0,this.all_money=0}return _createClass(o,[{key:"get_str",value:function(){return this.str=e.getCookie("goods"),this}},{key:"get_json",value:function(){return this.json=JSON.parse(this.str),this}},{key:"storage",value:function(){return e.setCookie("goods",JSON.stringify(this.json),365),this}},{key:"change",value:function(){for(var o=0;o<this.json.length;o++)this.goods_list_str+='<li>\n                    <div class="car_img"><a href="#"><img src="'+this.json[o].src+'" alt=""></a></div>\n                    <div class="car_name"><a href="#"><img src="" alt="">'+this.json[o].tit+'</a></div>\n                    <div class="car_price"><span>'+this.json[o].price+"</span><s>x <em>"+this.json[o].count+"</em></s></div>\n                    </li>",this.count+=this.json[o].count,this.all_money+=Number(this.json[o].price.slice(1))*this.json[o].count;a(".cartListView ul").html(this.goods_list_str),a(".cartListView .tobuy s").html(this.count),a(".cartListView .tobuy i").html("￥"+this.all_money.toFixed(2)),a(".shopcar .shopcar-box .num").html(this.count),a("#goTop .rigth_to_shopCar").html(this.count),a(".cartListView .none_sku").hide()}}]),o}(),g=new h;3<g.get_str().str.length&&g.get_str().get_json().change()})});