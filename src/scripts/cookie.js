define([],function(){
	return {
		setCookie:	function(k,v,num){
			if(num == 0){
				document.cookie = k + "=" + v;
			}else{
				var d = new Date();
				d.setDate(d.getDate()+num);
				document.cookie = k + "=" + v + ";expires=" + d;	
			}
		},
		removeCookie: function(k){
			setCookie(k,1,-1);
		},
		getCookie:function(k){
			var str = document.cookie;
			var arr = str.split("; ");
			for(var i=0;i<arr.length;i++){
				if(arr[i].split("=")[0] == k){
					return arr[i].split("=")[1];
				}
			}
			return "";
		}
	}
})