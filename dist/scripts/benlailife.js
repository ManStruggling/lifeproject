"use strict";var _createClass=function(){function n(s,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}return function(s,t,o){return t&&n(s.prototype,t),o&&n(s,o),s}}();function _classCallCheck(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}define(["jquery"],function(){require(["cookie"],function(i){$("#appstore_banner_close").on("click",function(){$("#appstore_banner").hide()});var s=1;setInterval(function(){$("header .head-bar a").eq(s).stop().animate({opacity:1},200).siblings().stop().animate({opacity:0},200),9==++s&&(s=0)},3e3),$("nav .all_type dl").mouseover(function(){$(this).find("dd").show().end().siblings().find("dd").hide()}),$("nav .all_type").mouseout(function(){$(this).find("dd").hide()}),$("header .search-box .txt").on("input",function(){$.ajax({url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+$(this).val()+"&json=1&p=3&sid=22084_1436_13548_21120_22036_22073&req=2&csor=0",dataType:"jsonp",jsonp:"cb",success:function(s){$("header .search-box ul").empty(),s.s.forEach(function(s){$("header .search-box ul").append("<li>"+s+"</li>")})}})}),$(".two_code").click(function(){$(".twoCode").toggle()}),$(window).scroll(function(){500<$(this).scrollTop()?($("#goTop .go_top").show(),$("#left_nav").show()):($("#goTop .go_top").hide(),$("#left_nav").hide()),7600<=$(this).scrollTop()?$("#left_nav a").eq(9).addClass("on").siblings().removeClass("on"):6900<=$(this).scrollTop()?$("#left_nav a").eq(8).addClass("on").siblings().removeClass("on"):6100<=$(this).scrollTop()?$("#left_nav a").eq(7).addClass("on").siblings().removeClass("on"):5400<=$(this).scrollTop()?$("#left_nav a").eq(6).addClass("on").siblings().removeClass("on"):4700<=$(this).scrollTop()?$("#left_nav a").eq(5).addClass("on").siblings().removeClass("on"):3900<=$(this).scrollTop()?$("#left_nav a").eq(4).addClass("on").siblings().removeClass("on"):3200<=$(this).scrollTop()?$("#left_nav a").eq(3).addClass("on").siblings().removeClass("on"):2500<=$(this).scrollTop()?$("#left_nav a").eq(2).addClass("on").siblings().removeClass("on"):1800<=$(this).scrollTop()&&$("#left_nav a").eq(1).addClass("on").siblings().removeClass("on")}),$("#goTop .go_top").click(function(){$("body,html").stop().animate({scrollTop:0},500)}),$("#left_nav a").eq(0).click(function(){$("body,html").stop().animate({scrollTop:0},500)});var a=null,l=[];$("body").on("click",".addcar-btn",function(){var s={sysno:$(this).attr("sysno"),src:$(this).siblings().eq(0).find("img").attr("src"),tit:$(this).siblings().eq(1).find("em").text(),price:$(this).siblings().eq(2).find("i").text(),count:1},t=i.getCookie("goods"),o=!0;if(t){l=JSON.parse(t);for(var n=0;n<l.length;n++)l[n].sysno==s.sysno&&(l[n].count+=1,i.setCookie("goods",JSON.stringify(l),365),o=!1);o&&(l.push(s),i.setCookie("goods",JSON.stringify(l),365))}else l.push(s),i.setCookie("goods",JSON.stringify(l),365);var e=0;for(n=0;n<l.length;n++)e+=l[n].count;$("#show_goods_msg img").attr("src",s.src),$("#show_goods_msg p").html(s.tit),$("#show_goods_msg em").html(s.price),$("#goTop .rigth_to_shopCar").html(e),$("header .shopcar-box .num").html(e),(new r).get_str().get_json().change(),$("#show_goods_msg").show().stop().animate({right:49},600,function(){var s=this;clearTimeout(a),a=setTimeout(function(){$(s).css({right:-252}).hide()},2500)})});var r=function(){function s(){_classCallCheck(this,s),this.str="",this.goods_list_str="",this.json=[],this.count=0,this.all_money=0}return _createClass(s,[{key:"get_str",value:function(){return this.str=i.getCookie("goods"),this}},{key:"get_json",value:function(){return this.json=JSON.parse(this.str),this}},{key:"storage",value:function(){return i.setCookie("goods",JSON.stringify(this.json),365),this}},{key:"change",value:function(){for(var s=0;s<this.json.length;s++)this.goods_list_str+='<li>\n                    <div class="car_img"><a href="#"><img src="'+this.json[s].src+'" alt=""></a></div>\n                    <div class="car_name"><a href="#"><img src="" alt="">'+this.json[s].tit+'</a></div>\n                    <div class="car_price"><span>'+this.json[s].price+"</span><s>x <em>"+this.json[s].count+"</em></s></div>\n                    </li>",this.count+=this.json[s].count,this.all_money+=Number(this.json[s].price.slice(1))*this.json[s].count;$(".cartListView ul").html(this.goods_list_str),$(".cartListView .tobuy s").html(this.count),$(".cartListView .tobuy i").html("￥"+this.all_money.toFixed(2)),$(".shopcar .shopcar-box .num").html(this.count),$("#goTop .rigth_to_shopCar").html(this.count),$(".cartListView .none_sku").hide()}}]),s}(),t=new r;3<t.get_str().str.length&&t.get_str().get_json().change();var o=function(){function s(){_classCallCheck(this,s),this.str="",this.json=""}return _createClass(s,[{key:"get_str",value:function(){return this.str=i.getCookie("user_info"),this}},{key:"get_json",value:function(){return this.json=JSON.parse(this.str),this}},{key:"check_status",value:function(){for(var s=0;s<this.json.length;s++)this.json[s].status&&(this.json[s].name?$(".top-l-1").html("<dl><dt>您好,<span>"+this.json[s].name+'<span></dt><dd><a href="userHome.html">'+this.json[s].name+"</a><em>[退出登录]</em><s></s></dd></dl>"):$(".top-l-1").html("<dl><dt>您好,<span>"+this.json[s].num+'<span></dt><dd><a href="userHome.html">'+this.json[s].num+"</a><em>[退出登录]</em><s></s></dd></dl>"))}},{key:"out_login",value:function(){for(var s=0;s<this.json.length;s++)this.json[s].status=!1;i.setCookie("user_info",JSON.stringify(this.json),365),$(".top-l-1").html('您好,<a href="login.html" target="_blank">[登录]</a>\n                <a href="register.html" target="_blank">[注册]</a>\n                <a href="#">[机构会员]</a>')}}]),s}(),n=new o;n.get_str().str&&n.get_str().get_json().check_status(),$(".top-l-1").on("click","em",function(){(new o).get_str().get_json().out_login()}),$(".close_active").click(function(){$("#to_active").hide()})})});