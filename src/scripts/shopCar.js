require(["../scripts/config.js"], function () {
    require(["jquery", "cookie", "benlailife"], function ($,cookie) {
        //添加和减少商品数量
        class Operation_cookie{
            constructor(no){
                this.str = "";//cookie取出的数据
                this.goods_list_str = "";//购物车商品列表
                this.json = [];//cookie数据转换的json
                this.count = 0;//商品的总数量
                this.all_money = 0;//商品总价格
                this.no = no;//接收操作的元素的商品编号
            }
            get_str(){
                this.str = cookie.getCookie("goods");//取出cookie中商品的数据
                return this;
            }
            get_json(){
                if( this.str.length>3 ){
                    this.json = JSON.parse(this.str); 
                }else{//没有存cookie的时候把，提示用户，购物车没有商品
                    this.no_goods = `<h5 style="padding:50px 0;text-align:center;font: 400 14px/60px 'Microsoft YaHei';">
                    您还没有购买过商品，<a href="benlailife.html" style="color: #abd13e;cursor:pointer;">去逛逛吧</a>
                    </h5>`;
                    $(".shopCar_show_goods ul").append(this.no_goods);
                }
                return this;
            }
            storage(){
                cookie.setCookie("goods",JSON.stringify(this.json),365);//把商品信息存到cookie中
                return this;
            }
            change(){
                if(this.str){
                    $(".shopCar_show_goods ul").empty(); 
                    for(var i=0;i<this.json.length;i++){//遍历cookie中的商品信息，渲染到页面
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
                        <div class="operating"> <a>收藏</a> <br> <a class="delete_goods" sysno="${this.json[i].sysno}">删除</a> </div>
                        </li>`;//商品列表
                        this.all_money += Number(this.json[i].price.slice(1))*this.json[i].count;//购物车中商品的总价格
                        this.count += this.json[i].count;//购物车中商品的总数量
                    }
                    $(".shopCar_show_goods ul").append(this.goods_list_str);
                    $(".Settlement span").html("￥"+this.all_money.toFixed(2));
                    $("#goTop .rigth_to_shopCar").html(this.count);
                }
            }
            reduce_num(){
                for(var i=0;i<this.json.length;i++){
                    if(this.no == this.json[i].sysno){//找到操作的商品在cookie中的数据
                        if( this.json[i].count<=1 ){//如果数量小于等于1，则数量定为1
                            this.json[i].count = 1;
                        }else{
                            this.json[i].count -= 1;//修改数量-1
                        }
                    }
                }
                return this;
            }
            increase_num(){
                for(var i=0;i<this.json.length;i++){//找到操作的商品在cookie中的数据
                    if(this.no == this.json[i].sysno){
                        this.json[i].count += 1;//给对应商品里的数量+1
                    }
                }
                return this;
            }
            delete_goods(){
                for(var i=0;i<this.json.length;i++){
                    if(this.no == this.json[i].sysno){//找到对应商品的数据
                        this.json.splice(i,1);//把该商品的数据从cookie中删除
                    }
                }
                return this;
            }
        }
        let my_oparetion_cookie = new Operation_cookie();
        if( my_oparetion_cookie.get_str().str.length>3 ){//如果cookie中有商品信息
            my_oparetion_cookie.get_str().get_json().change();//渲染到页面上
        }else{//如果cookie中没有商品信息,提示用户没有商品
            my_oparetion_cookie.get_str().get_json();
        }

        //加减对应数量商品
        $(".shopCar_show_goods ul").on("click",".reduce",function(){
            let $this_no_sub = $(this).attr("sysno");           
            new Operation_cookie($this_no_sub).get_str().get_json().reduce_num().storage().get_str().get_json().change();
        })
        $(".shopCar_show_goods ul").on("click",".increase",function(){
            let $this_no_add = $(this).attr("sysno");           
            new Operation_cookie($this_no_add).get_str().get_json().increase_num().storage().get_str().get_json().change();
        })
        //删除对应商品
        $(".shopCar_show_goods ul").on("click",".delete_goods",function(){
            let $del_goods_no = $(this).attr("sysno");
            new Operation_cookie($del_goods_no).get_str().get_json().delete_goods().storage().get_str().get_json().change();
            if( new Operation_cookie().get_str().str.length<3 ){//判断一下有没有把商品都删除光了，删除光了要提示用户，购物车没有商品，推荐去商品列表逛逛
                new Operation_cookie().get_str().get_json();
            }
        })
        //以上判断商品有没有删除光 ：取出cookie商品信息，如果有信息的话length肯定在3以上所以取巧用了个3，商品为空的时候是空对象[]
        // []的长度为2 所以用length<3来判断是否没有商品



    })
})