require(["../scripts/config.js"], function () {
    require(["jquery", "cookie", "benlailife"], function ($, cookie) {
        //取出cookie渲染购物车列表
        // let $get_cookie_str = cookie.getCookie("goods");
        // let $goods_count = 0;
        // let $goods_list_str = "";
        // let $all_money = 0;
        // if ($get_cookie_str) {
        //     let $get_cookie_json = JSON.parse($get_cookie_str);
        //     $(".shopCar_show_goods ul").empty();
        //     for (var i = 0; i < $get_cookie_json.length; i++) {
        //         $goods_count += $get_cookie_json[i].count;//计算购物车总数量
        //         $goods_list_str += `<li class="clear">
        //         <div class="check"> <input type="checkbox" name="cbxSelectProduct" id="cbxSelectProduct278847"
        //                 data-type="SelectProduct" checked="checked"> </div>
        //         <div class="pic"> <a> <img src="${$get_cookie_json[i].src}">
        //             </a> </div>
        //         <div class="name"> <a href="#">${$get_cookie_json[i].tit}</a>
        //             <div class="icon"> </div>
        //         </div>
        //         <div class="price">${$get_cookie_json[i].price}</div>
        //         <div class="c_quantity">
        //             <p class="reduce" sysno="${$get_cookie_json[i].sysno}"> <a>
        //                     <img src="//image.benlailife.com/webStatic/images/goods/dey_03_0c4d2417.gif" width="15"
        //                         height="15"> </a> </p>
        //             <p class="mt0"> <input type="text" class="textgt_n" data-type="input" data-producttype="0"
        //                     data-productid="278847" data-productvalue="2" value="${$get_cookie_json[i].count}" maxlength="3"> </p>
        //             <p class="increase" sysno="${$get_cookie_json[i].sysno}"> <a> <img src="//image.benlailife.com/webStatic/images/goods/dey_04_0e745786.gif" width="15"
        //                         height="15"> </a> </p>
        //         </div>
        //         <div class="subtotal">￥${Number($get_cookie_json[i].price.slice(1))*$get_cookie_json[i].count}</div>
        //         <div class="operating"> <a>收藏</a> <br> <a>删除</a> </div>
        //     </li>`;
        //     $all_money += Number($get_cookie_json[i].price.slice(1))*$get_cookie_json[i].count;
        //     }
        //     $(".shopCar_show_goods ul").append($goods_list_str);
        //     $(".Settlement span").html("￥"+$all_money);
        //     $("#goTop .rigth_to_shopCar").html($goods_count);//渲染右侧定的购物车的对应数量
        // }

        //添加和减少商品数量
        class Operation_cookie{
            constructor(no){
                this.str = "";//cookie取出的数据
                this.goods_list_str = "";//购物车商品列表
                this.json = [];//cookie数据转换的json
                this.count = 0;//商品的总数量
                this.all_money = 0;//商品总价格
                this.no = no;
            }
            get_str(){
                this.str = cookie.getCookie("goods");
                return this;
            }
            get_json(){
                if(this.str){
                    this.json = JSON.parse(this.str); 
                }else{
                    return;
                }
                return this;
            }
            storage(){
                cookie.setCookie("goods",JSON.stringify(this.json),365);
                return this;
            }
            change(){
                if(this.str){
                    $(".shopCar_show_goods ul").empty(); 
                    for(var i=0;i<this.json.length;i++){
                        this.goods_list_str += `<li class="clear">
                        <div class="check"> <input type="checkbox" name="cbxSelectProduct" id="cbxSelectProduct278847"
                                data-type="SelectProduct" checked="checked"> </div>
                        <div class="pic"> <a> <img src="${this.json[i].src}">
                            </a> </div>
                        <div class="name"> <a href="#">${this.json[i].tit}</a>
                            <div class="icon"> </div>
                        </div>
                        <div class="price">${this.json[i].price}</div>
                        <div class="c_quantity">
                            <p class="reduce" sysno="${this.json[i].sysno}"> <a>
                                    <img src="//image.benlailife.com/webStatic/images/goods/dey_03_0c4d2417.gif" width="15"
                                        height="15"> </a> </p>
                            <p class="mt0"> <input type="text" class="textgt_n" data-type="input" data-producttype="0"
                                    data-productid="278847" data-productvalue="2" value="${this.json[i].count}" maxlength="3"> </p>
                            <p class="increase" sysno="${this.json[i].sysno}"> <a> <img src="//image.benlailife.com/webStatic/images/goods/dey_04_0e745786.gif" width="15"
                                        height="15"> </a> </p>
                        </div>
                        <div class="subtotal">￥${Number(this.json[i].price.slice(1))*this.json[i].count}</div>
                        <div class="operating"> <a>收藏</a> <br> <a>删除</a> </div>
                        </li>`;
                        this.all_money += Number(this.json[i].price.slice(1))*this.json[i].count;
                        this.count += this.json[i].count;
                    }
                    $(".shopCar_show_goods ul").append(this.goods_list_str);
                    $(".Settlement span").html("￥"+this.all_money.toFixed(2));
                    $("#goTop .rigth_to_shopCar").html(this.count);
                }
            }
            reduce_num(){
                for(var i=0;i<this.json.length;i++){
                    if(this.no == this.json[i].sysno){
                        if( this.json[i].count<=1 ){
                            this.json[i].count = 1;
                        }else{
                            this.json[i].count -= 1;
                        }
                    }
                }
                return this;
            }
            increase_num(){
                for(var i=0;i<this.json.length;i++){
                    if(this.no == this.json[i].sysno){
                        this.json[i].count += 1;
                    }
                }
                return this;
            }
        }
        let my_oparetion_cookie = new Operation_cookie();
        if(my_oparetion_cookie.get_str().str){
            my_oparetion_cookie.get_str().get_json().change();
        }

        //加减对应商品
        $(".shopCar_show_goods ul").on("click",".reduce",function(){
            let $this_no_sub = $(this).attr("sysno");           
            new Operation_cookie($this_no_sub).get_str().get_json().reduce_num().storage().get_str().get_json().change();
        })
        $(".shopCar_show_goods ul").on("click",".increase",function(){
            let $this_no_add = $(this).attr("sysno");           
            new Operation_cookie($this_no_add).get_str().get_json().increase_num().storage().get_str().get_json().change();
        })


    })
})