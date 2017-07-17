 //点击看大图模式
 var showBig = (function() {
     var $showBigPic = $("#showBigPic");
     $("#pic-menu").on("click", ".list-menu", function() {
         //获得到src
         var $src = $(this).find("img").attr("src");
         $showBigPic.addClass("showBigPic").show().animate({
             height: "100%"
         }, 500)
         $showBigPic.find("img").attr("src", $src);
     })
     $showBigPic.click(function() {
         $showBigPic.removeClass("showBigPic").hide().animate({
             height: '375px'
         }, 500)

     })
 })();
 //点击看支付方式
 var showPayInfo = (function() {
         var $payInfo = $("#payinfo");
         //点击查看
         $("#more").click(function() {
                 // $payInfo.show().stop().animate({
                 //     // height: "675px"
                 //     transform:
                 // }, 500)
                 $payInfo.show().addClass("show").removeClass("hide visiblity")
             })
             //关闭
         $("#surebtn").click(function() {
             // $payInfo.hide().stop().animate({
             //     height: 0
             // }, 500)
             $payInfo.hide().removeClass("show").addClass("hide")
         })

     })()
     //选择颜色 品种打开和闭合
 var choiceObj = (function() {
         var $info = $("#choiceinfo");
         $("#moreflower").click(function() {
             $info.show().addClass("show").removeClass("hide visiblity")
         })
         $("#close").click(function() {
             $info.hide().removeClass("show").addClass("hide")
         })
     })()
     //选择信息里面的选择种类和品种
 var cgColor = (function() {
     //事件委托
     $("#item-menu").on("click", ".items", function() {
         //得到文本信息
         var $text = $(this).text();
         $("#choiceColor").text("已选择:" + $text);
         $("#choiceColor").css({
             "font-size": "0.14rem",
             color: "#999"
         });
         //得到data-img属性并换图片
         var dataImg = $(this).data("img")
             //更换图片
         $("#img").attr("src", dataImg)
             //是否带花盆
         var $flowerport = $("#flowerport").text();
         $("#flowerport").click(function() {
             $("#choiceFlowerport").text($flowerport);
             $("#choiceFlowerport").css({
                 "font-size": "0.14rem",
                 color: "#999"
             })
         });
         $("#refreshText").text("已选:" + $text + $flowerport);
     })


 })()

 //自加自减
 var calcul = (function() {
         //得到输入框里面的值
         var $inputvalue = $("#tel").val();
         // 自加
         $("#minus").click(function() {
             $inputvalue = parseInt($inputvalue) - 1;
             $("#tel")[0].value = $inputvalue;
         });
         //自减
         $("#add").click(function() {
             $inputvalue = parseInt($inputvalue) + 1;
             console.log($inputvalue)
             $("#tel")[0].value = $inputvalue;
         })
     })()
     //下面产品介绍切换
 var tabNav = (function() {
     //给Li绑定事件，事件委托
     $("#productUl").on("click", ".click", function() {
         //得到索引值
         var index = $(this).index();
         $(this).addClass("select").siblings().removeClass("select")
         $("#productUl span").stop(true, true).animate({
             left: index * 1.2 + "rem"
         }, 300)
         $("#contentALL>section").eq(index).show().siblings().hide()
             //改变样式

     })
 })();
 //导航条
 var navFixTop = (function() {
     $(window).scroll(function() {
         //获取到滚动高度
         var scrollTop = $(window).scrollTop();
         //获取到productUl offsetTop
         var ulScroll = $("#productUl").offset().top;
         if (scrollTop > 686) {
             $("#ul-warrper").addClass("fixed");
         } else {
             $("#ul-warrper").removeClass("fixed");
         }
     })
 })()
