### 网站使用说明
    主页+商品列表
        左下角悬浮框跳转到活动页
        退出登录功能
        根据滚动高度，到达对应高度，请求对应楼层的ajax数据，出现对应的楼层的楼梯。滚动网页对应楼层导航高亮，点击楼层导航缓冲到达对应楼层
        数据有时候刷不出来，重新刷新一下试试
        轮播图：左右按钮：可点击  底部导航：可点击  进入banner停止轮播   划出开始轮播  底部导航对应高亮
        二级菜单：划入显示商品菜单
        主页购物车：点击加入购物车按钮，右侧购物车数量对应变化，商品信息弹出，页头购物车数量也对应变化，划入出现购物车列表，划出隐藏
        买家力荐模块：导航可点击，出现对应的商品
    注册
        手机号：不符合手机号正则，失去焦点，提示信息，
        验证码：输入不正确，失去焦点，提示信息
        密码：不符合两种组合的密码，失去焦点，提示信息
        确认密码：于密码不同，失去焦点，提示信息
        同意协议：勾选
        注册：验证手机号码是否已经注册，注册则不跳转，
        以上都正确，才注册成功，跳转登录页面
    登录
        手机号：验证手机号正则
        密码：验证密码
        登录：验证手机号和密码是否是已注册的账号并且正确，
        正确才跳转主页
    
    购物车
        购物车没有商品，提示用户为空，给出链接去跳转逛商品
        有商品渲染页面，可以增加减少对应商品数量，同时计算出对应的价格
        左侧有勾选框，只计算勾选的商品的总金额
    用户中心
        点击用户信息跳转到用户中心，
        修改昵称，密码
        密码必须验证通过才解锁新密码设置表单，才可以保存修改，不修改密码不能保存用户信息
        昵称和真实姓名选填
        如果设置了昵称，主页则显示昵称而不显示手机号
    
    活动页
        倒计时活动
