"use strict";var _createClass=function(){function n(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}return function(s,t,e){return t&&n(s.prototype,t),e&&n(s,e),s}}();function _classCallCheck(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}require(["../scripts/config.js"],function(){require(["jquery","cookie","benlailife"],function(e,s){var t=function(){function t(s){_classCallCheck(this,t),this.str="",this.goods_list_str="",this.json=[],this.count=0,this.all_money=0,this.no=s}return _createClass(t,[{key:"get_str",value:function(){return this.str=s.getCookie("goods"),this}},{key:"get_json",value:function(){return 3<this.str.length?this.json=JSON.parse(this.str):(this.no_goods='<h5 style="padding:50px 0;text-align:center;font: 400 14px/60px \'Microsoft YaHei\';">\n                    您还没有购买过商品，<a href="benlailife.html" style="color: #abd13e;cursor:pointer;">去逛逛吧</a>\n                    </h5>',e(".shopCar_show_goods ul").append(this.no_goods)),this}},{key:"storage",value:function(){return s.setCookie("goods",JSON.stringify(this.json),365),this}},{key:"change",value:function(){if(this.str){e(".shopCar_show_goods ul").empty();for(var s=0;s<this.json.length;s++)this.goods_list_str+='<li class="clear">\n                        <div class="check"> <input type="checkbox" name="cbxSelectProduct" id="cbxSelectProduct278847"\n                                data-type="SelectProduct" checked="checked"> </div>\n                        <div class="pic"> <a> <img src="'+this.json[s].src+'">\n                            </a> </div>\n                        <div class="name"> <a href="#">'+this.json[s].tit+'</a>\n                            <div class="icon"> </div>\n                        </div>\n                        <div class="price">'+this.json[s].price+'</div>\n                        <div class="c_quantity">\n                            <p class="reduce" sysno="'+this.json[s].sysno+'"> <a>\n                                    <img src="//image.benlailife.com/webStatic/images/goods/dey_03_0c4d2417.gif" width="15"\n                                        height="15"> </a> </p>\n                            <p class="mt0"> <input type="text" class="textgt_n" data-type="input" data-producttype="0"\n                                    data-productid="278847" data-productvalue="2" value="'+this.json[s].count+'" maxlength="3"> </p>\n                            <p class="increase" sysno="'+this.json[s].sysno+'"> <a> <img src="//image.benlailife.com/webStatic/images/goods/dey_04_0e745786.gif" width="15"\n                                        height="15"> </a> </p>\n                        </div>\n                        <div class="subtotal">￥'+Number(this.json[s].price.slice(1))*this.json[s].count+'</div>\n                        <div class="operating"> <a>收藏</a> <br> <a class="delete_goods" sysno="'+this.json[s].sysno+'">删除</a> </div>\n                        </li>',this.all_money+=Number(this.json[s].price.slice(1))*this.json[s].count,this.count+=this.json[s].count;e(".shopCar_show_goods ul").append(this.goods_list_str),e(".Settlement span").html("￥"+this.all_money.toFixed(2)),e("#goTop .rigth_to_shopCar").html(this.count)}}},{key:"reduce_num",value:function(){for(var s=0;s<this.json.length;s++)this.no==this.json[s].sysno&&(this.json[s].count<=1?this.json[s].count=1:this.json[s].count-=1);return this}},{key:"increase_num",value:function(){for(var s=0;s<this.json.length;s++)this.no==this.json[s].sysno&&(this.json[s].count+=1);return this}},{key:"delete_goods",value:function(){for(var s=0;s<this.json.length;s++)this.no==this.json[s].sysno&&this.json.splice(s,1);return this}}]),t}(),n=new t;3<n.get_str().str.length?n.get_str().get_json().change():n.get_str().get_json(),e(".shopCar_show_goods ul").on("click",".reduce",function(){var s=e(this).attr("sysno");new t(s).get_str().get_json().reduce_num().storage().get_str().get_json().change()}),e(".shopCar_show_goods ul").on("click",".increase",function(){var s=e(this).attr("sysno");new t(s).get_str().get_json().increase_num().storage().get_str().get_json().change()}),e(".shopCar_show_goods ul").on("click",".delete_goods",function(){var s=e(this).attr("sysno");new t(s).get_str().get_json().delete_goods().storage().get_str().get_json().change(),(new t).get_str().str.length<3&&(new t).get_str().get_json()})})});