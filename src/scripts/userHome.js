require(["../scripts/config.js"],function(){
    require(["jquery","cookie","benlailife"],function($,cookie){
        //左边导航
        $(".user_home_list").on("click","a",function(){
            $(".user_home_list a").removeClass("on");
            $(this).addClass("on");
        })
    })
})