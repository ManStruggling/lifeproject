require(["../scripts/config.js"],function(){
    require(["jquery","cookie","benlailife"],function($,cookie){

        //左边导航
        $(".user_home_list").on("click","a",function(){
            $(".user_home_list a").removeClass("on");
            $(this).addClass("on");
        })

        //昵称
        let create_name = true;
        $(".user_name_center input").blur(function(){
            let reg = /^.{4,16}$/;
            if( $(this).val() ){//不为空判断
                if( reg.test($(this).val()) ){
                    create_name = true;
                    $(".user_name_center span").html("");
                }else{
                    $(".user_name_center span").html("昵称必须为4~16位!");
                    create_name = false;
                }
            }else{//为空
                create_name = true;
                $(".user_name_center span").html("");
            }
        })
        //旧密码
        let old_true = false;
        $(".user_old_pass input").blur(function(){
            if( $(this).val() ){
                new Option( $(this).val() ).get_str().get_json().check();
                if( $(".user_old_pass .tips").html()=="" ){//判断看看旧密码有没有通过
                    old_true = true;
                }else{
                    old_true = false;
                }
            }else{
                $(".user_old_pass .tips").html("");
            }
            //新密码可用
            if( old_true ){//旧密码通过，才可设置新密码
                $(".user_new_pass input").removeAttr("disabled");
                $(".user_comfirm_pass input").removeAttr("disabled");
            }else{
                $(".user_new_pass input").attr("disabled","");
                $(".user_comfirm_pass input").attr("disabled","");
            }
        })

        //新密码
        let create_new_pass = false;
        $(".user_new_pass input").blur(function(){
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
                $(".user_new_pass .tips").html("");
                create_new_pass = true;
            }else{
                $(".user_new_pass .tips").html("密码须为8-16位大写字母,小写字母,数字两种组合以上!");
            }
        })

        //确认密码
        let comfirm_pass = false;
        $(".user_comfirm_pass input").blur(function(){
          if( $(this).val()==$(".user_new_pass input").val() ){
            $(".user_comfirm_pass .tips").html("");
            comfirm_pass = true;
          }else{
            $(".user_comfirm_pass .tips").html("密码输入不一致!");
          }
        })

        //保存修改的信息
        $(".save_user_info a").click(function(){
            if( create_name&&old_true&&create_new_pass&&comfirm_pass ){
                new Option().get_str().get_json().change();
                alert("修改成功!");
            }
        })

        class Option{
            constructor(str){
                this.str = "";
                this.json = [];
                this.input_str = str;
                this.has = true;
            }
            get_str(){
                this.str = cookie.getCookie("user_info");
                return this;
            }
            get_json(){
                this.json = JSON.parse(this.str);
                return this;
            }
            check(){
                for(var i=0;i<this.json.length;i++){
                    if( this.json[i].status && (this.json[i].pass==this.input_str) ){
                        $(".user_old_pass .tips").html("");
                        this.has = false;
                    }
                }
                if( this.has ){
                    $(".user_old_pass .tips").html("密码错误!");
                }
            }
            change(){
                for(var i=0;i<this.json.length;i++){
                    if( this.json[i].status ){//为当前账号修改昵称和密码
                        this.json[i].name = $(".user_name_center input").val();
                        this.json[i].pass = $(".user_comfirm_pass input").val();
                    }
                }
                cookie.setCookie("user_info",JSON.stringify(this.json),365);  
            }
            load(){
                for(var i=0;i<this.json.length;i++){
                    if( this.json[i].status ){
                        console.log(this.json)
                        $(".phone_num").html(this.json[i].num);
                    }
                }
            }

        }

        new Option().get_str().get_json().load();
    })
})