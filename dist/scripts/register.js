"use strict";var _createClass=function(){function e(s,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(s,e.key,e)}}return function(s,t,r){return t&&e(s.prototype,t),r&&e(s,r),s}}();function _classCallCheck(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}require(["../scripts/config.js"],function(){require(["jquery","cookie","benlailife","randomCode"],function(e,s){var t=!1,i=!1,r=!1,n=!1;function o(){t&&i&&r&&e("#memory").is(":checked")&&n?(e(".register_btn").css("background","#ff6900"),e(".register_btn").click(function(){var s=new a(e(".register_user_txt").val());""==s.get_str().str?(s.storage(),open("login.html")):"手机号已注册！"==s.get_str().get_json().search()?s.get_str().get_json().search():(s.get_str().get_json().search().storage(),open("login.html"))})):e(".register_btn").css("background","#bbb")}e(".register_user_txt").blur(function(){/^1\d{10}$/.test(e(this).val())?(e(".register_user_p").html(""),e(".register_user").eq(0).find("s").css("backgroundPosition","0 -102px"),t=!0):""==e(this).val()?e(".register_user_p").html("请输入手机号！"):(e(".register_user_p").html("手机号码格式不正确，请重新输入！"),e(".register_user").eq(0).find("s").css("backgroundPosition","0 -137px")),o()}),e(".register_yzm span").createCode({len:6}),e(".register_yzm input").blur(function(){n=e(this).val().toLowerCase()!=e(".register_yzm span").children("input").val().toLowerCase()?(e(".register_yzm p").html("验证码输入有误!"),!1):(e(".register_yzm p").html(""),!0),o()}),e(".register_password_txt").blur(function(){var s=!1,t=!1,r=!1;/\d/.test(e(this).val())&&(s=!0),/[a-z]/.test(e(this).val())&&(t=!0),/[A-Z]/.test(e(this).val())&&(r=!0),2<=s+t+r&&/^\w{8,16}$/.test(e(this).val())?(e(".register_password p").html(""),e(".register_password s").css("backgroundPosition","0 -102px"),i=!0):(e(".register_password p").html("密码须为8-16位大写字母,小写字母,数字,两种组合以上!"),e(".register_password s").css("backgroundPosition","0 -137px")),o()}),e(".confirm_password_txt").blur(function(){e(this).val()===e(".register_password_txt").val()?(e(".confirm_password p").html(""),e(".confirm_password s").css("backgroundPosition","0 -102px"),r=!0):(e(".confirm_password p").html("两次输入的密码不一致!"),e(".confirm_password s").css("backgroundPosition","0 -137px")),o()}),e("#memory").click(function(){o()});var a=function(){function t(s){_classCallCheck(this,t),this.str="",this.json=[],this.num=s,this.obj={}}return _createClass(t,[{key:"get_str",value:function(){return this.str=s.getCookie("user_info"),this}},{key:"get_json",value:function(){return this.json=JSON.parse(this.str),this}},{key:"search",value:function(){for(var s=0;s<this.json.length;s++)if(this.num==this.json[s].num)return e(".register_user_p").html("手机号已注册！"),"手机号已注册！";return this}},{key:"storage",value:function(){e(".register_user_p").html(""),this.obj={num:this.num,pass:e(".register_password_txt").val(),status:!1},this.json.push(this.obj),s.setCookie("user_info",JSON.stringify(this.json),365)}}]),t}()})});