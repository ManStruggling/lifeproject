"use strict";require(["../scripts/config.js"],function(){require(["jquery","swiper","benlailife"],function(f,n){f("#goods .goods-nav dl").find("dt").mouseover(function(){f(this).parents(".goods").find("dt").removeClass("on").siblings().hide(),f(this).addClass("on").siblings().show()}),f(".goods-banner").on("mouseover","li",function(){f(this).find("a").css({background:"#a6ca44",color:"#fff"}).end().siblings().find("a").css({background:"#fff",color:"#78a000"})}),f(".goods-banner").on("mouseout","li",function(){f(".goods-banner li").find("a").css({background:"#fff",color:"#78a000"})}),f("nav .all_type dl").mouseover(function(){f(this).find("dd").show().end().siblings().find("dd").hide()}),f("nav .all_type").mouseout(function(){f(this).find("dd").hide()});var a=1,i=null;function t(){clearInterval(i),i=setInterval(function(){f("#banner .banner-pic a").eq(a).fadeIn(300).siblings().fadeOut(300),f("#banner .banner-pic ul li").eq(a).addClass("on").siblings().removeClass("on"),6==(a+=1)&&(a=0)},3e3)}f("#banner .banner-pic").mouseover(function(){f("#banner .banner-btn dl").show(),f("#banner .banner-pic ul").stop().animate({top:370},400),f("#banner .banner-pic ul").find("span").css("background","rgba(255,255,255,.75)"),clearInterval(i),f("#banner .banner-pic ul li").mouseenter(function(){f(this).addClass("on").siblings().removeClass("on");var n=f(this).index();a=n,f("#banner .banner-pic a").eq(a).fadeIn(300).siblings().fadeOut(300)})}),f("#banner").mouseleave(function(){f("#banner .banner-btn dl").hide(),f("#banner .banner-pic ul").stop().animate({top:396},400,function(){f("#banner .banner-pic ul").find("span").css("background","rgba(162,162,147,1)")}),t()}),t(),f("main .main-c .newbaby-list dl").mouseover(function(){f(this).find("dt").addClass("on").end().siblings().find("dt").removeClass("on"),f(this).find("dd").css("display","block").end().siblings().find("dd").css("display","none"),f(this).find("dt a").css({marginLeft:"26px",color:"#78a000"}).end().siblings().find("dt a").css({marginLeft:"30px",color:"#626252"})}),f("ul").on("mouseenter","li.show-add-car",function(){f(this).find(".box").css("border","4px solid #f8f8f6"),f(this).find("p").eq(0).stop().animate({marginTop:10},200),f(this).find("p").eq(1).stop().animate({marginTop:5},200),f(this).find("p").eq(1).next().stop().animate({marginTop:2},200),f(this).find(".addcar-btn").stop().animate({top:223},200)}),f("ul").on("mouseleave","li.show-add-car",function(){f(this).find(".box").css("border","4px solid #fff"),f(this).find("p").eq(0).stop().animate({marginTop:15},200),f(this).find("p").eq(1).stop().animate({marginTop:15},200),f(this).find("p").eq(1).next().stop().animate({marginTop:7},200),f(this).find(".addcar-btn").stop().animate({top:260},200)}),function n(){f(".main-b-nav dt .ico03").animate({width:35,height:35,opacity:.3,marginTop:-6,marginLeft:-5},1e3,"linear",function(){f(this).css({width:1,height:1,opacity:.7,marginTop:22,marginLeft:12}),n()})}(),f("main .main-b").on("click","dd",function(){var n=f(this).index();1==n&&f(this).siblings().eq(0).stop().animate({top:31,left:229},300),2==n&&f(this).siblings().eq(0).stop().animate({top:20,left:423},300),3==n&&f(this).siblings().eq(0).stop().animate({top:47,left:615},300),4==n&&f(this).siblings().eq(0).stop().animate({top:23,left:804},300),5==n&&f(this).siblings().eq(0).stop().animate({top:37,left:1017},300),f("main .main-b-list ul").eq(n-1).show().siblings().hide()}),f(".main-b").on("mouseenter","li",function(){f(this).css({background:"#fff",boxShadow:"1px 1px 8px rgba(227,227,227,.9)"}),f(this).find(".photo").stop().animate({marginTop:15},200),f(this).find(".list-name").stop().animate({marginTop:10},200),f(this).find(".price").stop().animate({marginTop:3},200),f(this).find(".add-btn").stop().animate({top:242},200)}),f(".main-b").on("mouseleave","li",function(){f(this).css({background:"",boxShadow:"none"}),f(this).find(".photo").stop().animate({marginTop:25},200),f(this).find(".list-name").stop().animate({marginTop:15},200),f(this).find(".price").stop().animate({marginTop:7},200),f(this).find(".add-btn").stop().animate({top:280},200)}),f.ajax({url:"/GetOnlineHomePage",success:function(n){console.log(n);for(var a,i="",t=0;t<n[0].PageItem.length;t++)i+="<dd><a>"+n[0].PageItem[t].Name+"</a></dd>";var e="",s="",o="",d="",r="";for(t=0;t<n[0].PageItem[0].ProductList.length;t++)e+='                   \n                        <li>\n                            <div class="photo">\n                                <a href="#"><img src="'+n[0].PageItem[0].ProductList[t].ProductImageLink+'"\n                                        alt=""></a>\n                            </div>\n                            <div class="list-name"><a href="#">'+n[0].PageItem[0].ProductList[t].ProductName+'</a></div>\n                <p class="price">￥'+n[0].PageItem[0].ProductList[t].ProductNowPrice+"<span>￥"+n[0].PageItem[0].ProductList[t].ProductOldPrice+'</span></p>\n                            <div class="add-btn"><a href="#"></a></div>\n                        </li>\n                    ';for(t=0;t<n[0].PageItem[1].ProductList.length;t++)s+='          \n                    <li>\n                        <div class="photo">\n                            <a href="#"><img src="'+n[0].PageItem[1].ProductList[t].ProductImageLink+'"\n                                    alt=""></a>\n                        </div>\n                        <div class="list-name"><a href="#">'+n[0].PageItem[1].ProductList[t].ProductName+'</a></div>\n                <p class="price">￥'+n[0].PageItem[1].ProductList[t].ProductNowPrice+"<span>￥"+n[0].PageItem[1].ProductList[t].ProductOldPrice+'</span></p>\n                        <div class="add-btn"><a href="#"></a></div>\n                    </li>';for(t=0;t<n[0].PageItem[2].ProductList.length;t++)o+='          \n                    <li>\n                        <div class="photo">\n                            <a href="#"><img src="'+n[0].PageItem[2].ProductList[t].ProductImageLink+'"\n                                    alt=""></a>\n                        </div>\n                        <div class="list-name"><a href="#">'+n[0].PageItem[2].ProductList[t].ProductName+'</a></div>\n                <p class="price">￥'+n[0].PageItem[2].ProductList[t].ProductNowPrice+"<span>￥"+n[0].PageItem[2].ProductList[t].ProductOldPrice+'</span></p>\n                        <div class="add-btn"><a href="#"></a></div>\n                    </li>';for(t=0;t<n[0].PageItem[3].ProductList.length;t++)d+='          \n                    <li>\n                        <div class="photo">\n                            <a href="#"><img src="'+n[0].PageItem[3].ProductList[t].ProductImageLink+'"\n                                    alt=""></a>\n                        </div>\n                        <div class="list-name"><a href="#">'+n[0].PageItem[3].ProductList[t].ProductName+'</a></div>\n                <p class="price">￥'+n[0].PageItem[3].ProductList[t].ProductNowPrice+"<span>￥"+n[0].PageItem[3].ProductList[t].ProductOldPrice+'</span></p>\n                        <div class="add-btn"><a href="#"></a></div>\n                    </li>';for(t=0;t<n[0].PageItem[4].ProductList.length;t++)r+='          \n                    <li>\n                        <div class="photo">\n                            <a href="#"><img src="'+n[0].PageItem[4].ProductList[t].ProductImageLink+'"\n                                    alt=""></a>\n                        </div>\n                        <div class="list-name"><a href="#">'+n[0].PageItem[4].ProductList[t].ProductName+'</a></div>\n                <p class="price">￥'+n[0].PageItem[4].ProductList[t].ProductNowPrice+"<span>￥"+n[0].PageItem[4].ProductList[t].ProductOldPrice+'</span></p>\n                        <div class="add-btn"><a href="#"></a></div>\n                    </li>\n                ';a='     \n                <div class="main-b-list">\n                    <ul>\n                        '+e+"\n                    </ul>\n                    <ul>\n                        "+s+"\n                    </ul>\n                    <ul>\n                        "+o+"\n                    </ul>\n                    <ul>\n                        "+d+"\n                    </ul>\n                    <ul>\n                        "+r+"\n                    </ul>\n                </div>",f(".main-b-nav dl").append(i),f("main .main-b").append(a);var c="";for(t=0;t<n[1].KeyWords.length;t++)c+='\n                    <li><a href="#" class="four">'+n[1].KeyWords[t].Name+"</a></li>\n                    ";f(".goods-banner ul").append(c);var l;l='<a href="#"><img src="//image4.benlailife.com/'+n[1].ADImgUrl+'"alt=""></a>',f(".goods-t").append(l);var m;m='<img src="//image5.benlailife.com/'+n[1].ImgUrl+'"\n                alt="">',f(".goods-banner-img a").append(m);for(t=0;t<n[1].PageItem.length;t++)f(".goods-nav dt").eq(t).find("a").append(n[1].PageItem[t].Name);var p="",P="",u="",g="";for(t=0;t<n[1].PageItem[0].ProductList.length;t++)p+='<li class="show-add-car">\n                    <div class="box">\n                    <p>\n                    <a href="#"><img src="'+n[1].PageItem[0].ProductList[t].ProductImageLink+'"\n                    alt=""></a>\n                    </p>\n                    <p>\n                    <a href="#">\n                    <em>'+n[1].PageItem[0].ProductList[t].ProductName+"</em>\n                    <span>"+n[1].PageItem[0].ProductList[t].ProductPromotionWord+"</span>\n                    </a>\n                    </p>\n                    <span>￥"+n[1].PageItem[0].ProductList[t].ProductNowPrice+"<s>￥"+n[1].PageItem[0].ProductList[t].ProductOldPrice+'</s></span>\n                    <div class="addcar-btn"><a href="#"></a></div>\n                    </div>\n                    </li>';for(t=0;t<n[1].PageItem[1].ProductList.length;t++)P+='<li class="show-add-car">\n                    <div class="box">\n                    <p>\n                    <a href="#"><img src="'+n[1].PageItem[1].ProductList[t].ProductImageLink+'"\n                    alt=""></a>\n                    </p>\n                    <p>\n                    <a href="#">\n                    <em>'+n[1].PageItem[1].ProductList[t].ProductName+"</em>\n                    <span>"+n[1].PageItem[1].ProductList[t].ProductPromotionWord+"</span>\n                    </a>\n                    </p>\n                    <span>￥"+n[1].PageItem[1].ProductList[t].ProductNowPrice+"<s>￥"+n[1].PageItem[1].ProductList[t].ProductOldPrice+'</s></span>\n                    <div class="addcar-btn"><a href="#"></a></div>\n                    </div>\n                    </li>';for(t=0;t<n[1].PageItem[2].ProductList.length;t++)u+='<li class="show-add-car">\n                    <div class="box">\n                    <p>\n                    <a href="#"><img src="'+n[1].PageItem[2].ProductList[t].ProductImageLink+'"\n                    alt=""></a>\n                    </p>\n                    <p>\n                    <a href="#">\n                    <em>'+n[1].PageItem[2].ProductList[t].ProductName+"</em>\n                    <span>"+n[1].PageItem[2].ProductList[t].ProductPromotionWord+"</span>\n                    </a>\n                    </p>\n                    <span>￥"+n[1].PageItem[2].ProductList[t].ProductNowPrice+"<s>￥"+n[1].PageItem[2].ProductList[t].ProductOldPrice+'</s></span>\n                    <div class="addcar-btn"><a href="#"></a></div>\n                    </div>\n                    </li>';for(t=0;t<n[1].PageItem[3].ProductList.length;t++)g+='<li class="show-add-car">\n                    <div class="box">\n                    <p>\n                    <a href="#"><img src="'+n[1].PageItem[3].ProductList[t].ProductImageLink+'"\n                    alt=""></a>\n                    </p>\n                    <p>\n                    <a href="#">\n                    <em>'+n[1].PageItem[3].ProductList[t].ProductName+"</em>\n                    <span>"+n[1].PageItem[3].ProductList[t].ProductPromotionWord+"</span>\n                    </a>\n                    </p>\n                    <span>￥"+n[1].PageItem[3].ProductList[t].ProductNowPrice+"<s>￥"+n[1].PageItem[3].ProductList[t].ProductOldPrice+'</s></span>\n                    <div class="addcar-btn"><a href="#"></a></div>\n                    </div>\n                    </li>';f(".goods-nav dl").eq(0).find(".goods-list").append(p),f(".goods-nav dl").eq(1).find(".goods-list").append(P),f(".goods-nav dl").eq(2).find(".goods-list").append(u),f(".goods-nav dl").eq(3).find(".goods-list").append(g)}})})});