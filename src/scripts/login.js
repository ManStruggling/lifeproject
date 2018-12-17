require(["../scripts/config.js"],function(){
    require(["jquery","cookie","benlailife"],function($,cookie){
        //登录用户名
        $(".login_user_num input").blur(function(){
            let reg = /^1\d{10}$/;
            if( reg.test($(this).val()) ){
                $(".login_user_num s").css("backgroundPosition","0 -102px");
                $(".login_user_num p").html("");
            }else{
                $(".login_user_num s").css("backgroundPosition","0 -137px");
                $(".login_user_num p").html("账号格式不正确，请重新输入！");
            }
        })

        //密码
        $(".login_password input").blur(function(){
            let reg = /^\w{8,16}$/;
            if( reg.test($(this).val()) ){
                $(".login_password s").css("backgroundPosition","0 -102px");
                $(".login_password p").html("");
            }else{
                $(".login_password s").css("backgroundPosition","0 -137px");
                $(".login_password p").html("密码至少8位，最多16位!");
            }
        })

        $(".login_btn").click(function(){
            let my_check = new Check_Cookie();
            if(my_check.get_str().str == ""){
                $(".login_user_num p").html("用户名不存在");
            }else{
                my_check.get_str().get_json().check();
            }
        })

        class Check_Cookie{
            constructor(){
                this.str = "";
                this.json = [];
            }
            get_str(){
                this.str = cookie.getCookie("user_info");
                return this;
            }
            get_json(){
                this.json = JSON.parse(this.str);
                return this;
            }
            storage(){
                cookie.setCookie("user_info",JSON.stringify(this.json),365);
            }
            check(){
                for(var i=0;i<this.json.length;i++){
                    this.json[i].status = false;//把其他账号的状态改为未登录
                    if( $(".login_user_num input").val()==this.json[i].num ){
                        if( $(".login_password input").val()==this.json[i].pass ){
                            this.json[i].status = true;//该账号为登录状态
                            this.storage();
                            open("benlailife.html");
                        }else{
                            $(".login_password p").html("密码不匹配!");
                        }
                    }else{
                        $(".login_user_num p").html("用户名不存在");
                    }
                }
            }

        }
    })
})