"use strict";define(["jquery"],function(){$.ajax({url:"/GetOnlineHomePage",success:function(e){console.log(e)}}),$("#appstore_banner_close").on("click",function(){$("#appstore_banner").hide()});var e=1;setInterval(function(){$("header .head-bar a").eq(e).stop().animate({opacity:1},200).siblings().stop().animate({opacity:0},200),9==++e&&(e=0)},3e3)});