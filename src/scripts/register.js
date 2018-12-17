require(["../scripts/config.js"],function(){
    require(["jquery","cookie","benlailife"],function($,cookie){
        let phone_success = false;
        let password_success = false;
        let pass_comfirm_success =false;
        //手机号的正则验证
        $(".register_user_txt").blur(function(){
            let reg =/^1\d{10}$/;
            if( reg.test($(this).val()) ){
                $(".register_user_p").html("");
                $(".register_user").eq(0).find("s").css("backgroundPosition","0 -102px");
                phone_success = true;
            }else if( $(this).val()==="" ){
                $(".register_user_p").html("请输入手机号！");
            }else{
                $(".register_user_p").html("手机号码格式不正确，请重新输入！");
                $(".register_user").eq(0).find("s").css("backgroundPosition","0 -137px");
            }
            register();
        })

        //密码的正则验证
        $(".register_password_txt").blur(function(){
            let reg = /^\w{8,16}$/;
            let has_num = false;
            let has_small = false;
            let has_large = false; 
            if( /\d/.test($(this).val()) ){
                has_num = true;
            }
            if( /[a-z]/.test($(this).val()) ){
                has_small = true;
            }
            if( /[A-Z]/.test($(this).val()) ){
                has_large = true;
            }
            if( (has_num+has_small+has_large>=2) && reg.test($(this).val()) ){
                $(".register_password p").html("");
                $(".register_password s").css("backgroundPosition","0 -102px");
                password_success = true;
            }else{
                $(".register_password p").html("密码须为8-16位字母,数字,下划线两种组合以上!");
                $(".register_password s").css("backgroundPosition","0 -137px");
            }
            register();
        })

        //密码确认
        $(".confirm_password_txt").blur(function(){
            // if( $(".register_password_txt").val()==="" ){
            //     $(".register_password p").html("密码须为8-16位字母,数字,下划线两种组合以上!");
            // }
            if( $(this).val() === $(".register_password_txt").val() ){
                $(".confirm_password p").html("");
                $(".confirm_password s").css("backgroundPosition","0 -102px");
                pass_comfirm_success = true;

            }else{
                $(".confirm_password p").html("两次输入的密码不一致!");
                $(".confirm_password s").css("backgroundPosition","0 -137px");
            }
            register();
        })

        //同意协议
        $("#memory").click(function(){
            register();
        })

        function register(){
            if( phone_success&&password_success&&pass_comfirm_success&&$("#memory").is(':checked') ){
                $(".register_btn").css("background","#ff6900");
                $(".register_btn").click(function(){
                    let my_oparat = new operat_Cookie( $(".register_user_txt").val() );
                    if( my_oparat.get_str().str=="" ){
                        my_oparat.storage();
                        open("login.html");
                    }else if(my_oparat.get_str().get_json().search()=="手机号已注册！"){
                        my_oparat.get_str().get_json().search();
                    }else{
                        my_oparat.get_str().get_json().search().storage();
                        open("login.html");
                    }
                })
            }else{
                $(".register_btn").css("background","#bbb");
            }
        }

        class operat_Cookie{
            constructor(num){
                this.str = "";//取出cookie的注册信息
                this.json = [];//转换为json
                this.num = num;//注册的用户名
                this.obj = {};//存储注册的用户名的对象
            }
            get_str(){
                this.str = cookie.getCookie("user_info");//取出cookie中注册的数据
                return this;
            }
            get_json(){
                this.json = JSON.parse(this.str);
                return this;
            }
            search(){
                for(var i=0;i<this.json.length;i++){
                    if(this.num===this.json[i].num){
                        $(".register_user_p").html("手机号已注册！");
                        return "手机号已注册！";
                    }
                }
                return this;
            }
            storage(){
                $(".register_user_p").html("");
                this.obj = {
                    num : this.num,
                    pass : $(".register_password_txt").val(),
                    status : false
                }
                this.json.push(this.obj);
                cookie.setCookie("user_info",JSON.stringify(this.json),365);
            }
        }
    })
})