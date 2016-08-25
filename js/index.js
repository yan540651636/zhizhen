$(function(){
	var data;
	init();
function init(){
	addEvent();
	slider();
	renderPage();
}
//封装一个图片轮播插件
$.fn.SliderBox=function(opt){
	var settins=$.extend({
		pre:"",
		next:"",
		rows:1
	},opt)
}
//绑定单击事件
function addEvent(){
	var $left_btn=$("#left_btn"),
		$scroll=$("#scroll");

		//封装一个改变产品分页的函数
		function changePage(){
			//获取每一个产品类下的产品页的个数，就是分页的个数
			var pagecount=$(".product-current").find(".product-page").size(),
				pagenoHtml="";
			for(var c=0;c<pagecount;c++){
				pagenoHtml+="<span></span>";
			}
			$(".product-pageno").html(pagenoHtml);
			$("#product-scroller").css("top",0);
			$(".product-pageno").children("span:first").addClass("curp");
			$(".product").animate({
					"opacity":1
				},1000)
		}
		//单击btn实现页面切换效果
		/*$left_btn.on("click",function(){
			if($(this).hasClass("jiantou")){
				$scroll.animate({"left":"-1000px"},300);
				$(this).animate({"right":"970px"},300).removeClass().addClass("jiantou-two");
				changePage();
			}else{
				$scroll.animate({"left":"0"},300);
				$(this).animate({"right":"170px"},300).removeClass().addClass("jiantou")
				$("#index_nav").css("background","#333")
				$(".product").animate({
					"opacity":1
				},1000)
			}
		})*/
		$("#index_nav").on("mouseenter","a",function(){
			this.style.background=$(this).data("bg");
		}).on("mouseleave","a",function(){
			this.style.background="";
		}).on("click","a",function(){
			$scroll.animate({"left":"-1000px"},300);
			$left_btn.animate({"right":"970px"},300).removeClass().addClass("jiantou-two");
			changePage();
		})
		
		$("#scroll").on("click","a[data-id]",function(){
			var id=$(this).data("id"),
				$current=$("#product"+id);
				$current.addClass("product-current").siblings().removeClass("product-current");
				$("#product-nav").css("background",$(this).data("bg"));
				changePage();
		})
		//点击分页按钮改变产品
		$("#product-pageno").on("click","span",function(){
			var index=$(this).index(),
				h=$(".product-page").outerHeight();
			if(!$("#product-scroller").is(":animated")){
				$("#product-scroller").animate({
					"top":-index*h
				},500) 
			}
			$(this).addClass("curp").siblings().removeClass("curp");
		})
		//划过显示遮罩层
		$("#product-scroller").on("mouseover",".pos",function(){
			var	text="",
				loginFlag=$(this).find(".full").data("login"),
				width=$(this).outerWidth(),
				he=$(this).outerHeight();
				mask=$("<div class='mask' id='mask'></div>");
				if(loginFlag==1){
					text="<p><a href='javascript:void(0);'>申请试用</a></p>";
				}else{
					text="<p><a href='javascript:void(0);'>登录</a></p>"
				}
				mask.width(width).height(he).html(text);
				if($("#mask").length==0){
					mask.appendTo($(this));
				}
		}).on("mouseleave",".pos",function(){
				$(".mask").remove();
		})
			
}

//焦点图
function slider(){
	var index=0,
		len=$("#pic li").size(),
		nowIndex=1,
		timer=null,
		leftindex=5;
		$("#slider").hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(function(){
				index++
				if(index==len) index=0;
				changeImg(index);
				$("#left_btn").css({
					"z-index":leftindex++
				});
			},2000)
		}).trigger("mouseleave")

		function changeImg(curindex){
			var curpic=$("#pic li").eq(curindex);
				curpic.css({
					"z-index":nowIndex++
				}); 
				curpic.hide().fadeIn(1000);
				index=curindex;
		}
}
//渲染数据

function renderProductToDom(data){
	var navhtml="",//导航里的内容
		$productBox,
		count,
		$pagetotal=0;//先定义一个变量产品页总共被分成的页数
	for(var i=0,obj;obj=data[i];i++){
	var count=obj.template_type,//每一页要显示的产品数
		productTotal=obj.products.length;//json数据里总共的产品的总长度
		navhtml+="<a href='javascript:void(0);' data-bg="+obj.color+" data-id='"+obj.id+"'>"+obj.name+"</a>";//渲染导航里的nav
		$productBox=$('<div class="product-container" id="product'+obj.id+'"></div>');
		$($productBox).appendTo($("#product-scroller"));
		$pagetotal=Math.ceil(productTotal/count);//计算出每个产品页里的总共页数
		//生成每一页的产品信息
		function getProductHtml(n){//n表示当前的页数
			n=typeof(n)==="undefined"?0:n;
			//对n进行判断，如果它的类型为undefined;就输出0；否则输出n
			//每一页的产品的起始索引，规律为当前页(n)乘以每页要显示的产品数(count)
			var start=n*count,
				product,
				baseHtml="";
			//遍历所有的产品信息
			for(start;start<(n+1)*count;start++){
				//(n+1)*count;循环的结束索引
				if(obj.products[start]){
					product=obj.products[start]
					baseHtml+="<div class='pos product_"+count+"_"+start%count+"'>"
							  +"<div class='full' data-login='"+product.login_flag+"'>"
								  +"<p class='icon'>"
								  		+"<img src='"+product.image+"'>"
								  +"</p>"
								  +"<h2>"
								  		+"<a href='"+product.site+"'>"+product.name+"</a>"
								  +"</h2>"
								  +"<h3>"+product.summary+"</h3>"
							  +"</div>"
							+"</div>";
				}else{
					baseHtml+="<div class='pos product_"+count+"_"+start%count+"' style='background:"+obj.color+"'>"
							  +"<div class='full' data-login='"+product.login_flag+"'>"
								  +"<p class='icon'></p>"
								  +"<h2>"
								  		+"<a href=''></a>"
								  +"</h2>"
								  +"<h3>敬请期待</h3>"
							  +"</div>"
							+"</div>";
				}
			}
			return baseHtml;
		}

		//先判断是一页还是多页，渲染内容
		if($pagetotal>1){//当有多页的时候
			for(var p=0;p<$pagetotal;p++){
				$("<div class='product-page'></div>").html(getProductHtml(p)).appendTo($productBox);
				//console.log(p);
			}
		}else{//只有一页的时候
			$("<div class='product-page'></div>").html(getProductHtml()).appendTo($productBox);
		}
		
	}
	$("#product-scroller").children("div:first").addClass("product-current");
	$("#index-nav").html(navhtml);
	$("#left-nav").html(navhtml);
	$("#product-nav").css("background",data[0].color);
}

//渲染产品页面
function renderPage(){
	$.ajax({
		url:"data.json",
		type:"get",
		success:function(data){
			data=data;

			renderProductToDom(data);
		}
	})
}

})
