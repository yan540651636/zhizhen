/*!function(){var a=function(){var a=function(){function a(a){var s=$("#slider ul li").eq(a);s.css({"z-index":i++}),s.hide(),s.fadeIn(1e3),t=a}var i=2,t=0,s=$("#slider ul li").length,n=null;$("#slider").hover(function(){clearInterval(n)},function(){n=setInterval(function(){t++,t==s&&(t=0),a(t)},2500)}).trigger("mouseleave")},i=function(){0==$("#markbg").length&&$('<div class="markbg" id="markbg"></div>').height($("body").height()).appendTo($("body"))},t=function(){$("#markbg").remove()},s=function(){function a(a){$("#content").stop().animate({width:0},400,function(){$("#product-page").stop().animate({opacity:1},600)}),$("#scroll").css("top",0),$("#btn").removeClass().addClass("jiantou-two").stop().animate({left:169},600)}function i(a){$("#product-page").stop().animate({opacity:0},600,function(){$("#content").stop().animate({width:1e3},400),$("#btn").removeClass().addClass("jiantou").stop().animate({left:966},600)})}var t=$("#btn");t.on("click",function(){$(this).is(".jiantou")?a($(this)):i($(this)),$(this).data("flag")?(i($(this)),$(this).data("flag",!1)):(a($(this)),$(this).data("flag",!0))}),$(".product-pic").on("mouseenter",".full",function(){var a=$(this).outerWidth(),i=$(this).outerHeight(),t='<p><a href="#" class="login-btn">登录</a><a href="#">申请试用</a></p>';$mask=$('<div class="mask"></div>'),$mask.width(a).height(i),$mask.html(t).appendTo($(this))}).on("mouseleave",".full",function(){$(this).children(".mask").remove()});var s=function(a){var i=$("#scroll").find("div#type"+a.data("id"));i.addClass("cur-type").siblings().removeClass("cur-type"),$("#scroll").css("top",0),c()},n=function(){$("#index-nav").on("mouseenter","a",function(){$(this).css("background",$(this).data("color")).siblings().css("background","none")}).on("click","a",function(){a();var i=$(this).data("color");$("#prodcut-nav").css("background",i),s($(this))})};n(),$("#list-nav").on("click","a",function(){s($(this))}),$("#pageNo").on("click","span",function(){var a=$(this).index(),i=$(".product-pic").outerHeight();$("#scroll").stop().animate({top:-i*a},500),$(this).addClass("curp").siblings().removeClass("curp")})},n=function(a,i){$('<a href="javascript:void(0)" data-id="'+i+'">'+a+"</a>").appendTo($("#list-nav")),$('<a href="javascript:void(0)" data-id="'+i+'">'+a+"</a>").appendTo($("#index-nav"))},o=function(a){for(var i=0,t=a.length;i<t;i++){var s=a[i];n(s.name,s.id);var o=s.template_type,e=s.products,c=e.length,r=Math.ceil(c/o),l=$('<div class="product-type" id="type'+s.id+'"></div>'),d=function(a){a="undefined"==typeof a?0:a;var i="",t=a*o;for(t;t<c;t++){var n=e[t];t<o*(a+1)&&(i+='<div class="pos product_'+o+"_"+t%o+'"><div class="full" data-login="'+n.login_flag+'"><p class="icon"><img src="http://localhost/zhizhen/img'+n.image+'"></p><h2><a href="'+n.site+'">'+n.name+"</a></h2><h3>"+n.summary+"</h3></div></div>")}var r=c-a*o;for(r;r<o;r++)i+='<div class="pos product_'+o+"_"+r+'" style="background:'+s.color+'"><div class="full"><p class="icon"></p><h2>敬请期待</h2><h3></h3></div></div>';return i};if(r>1)for(var p=0;p<r;p++){var u=d(p);$('<div class="product-pic"></div>').html(u).appendTo(l)}else $('<div class="product-pic"></div>').html(d()).appendTo(l);l.appendTo($("#scroll"))}$("#scroll>div.product-type:eq(0)").addClass("cur-type").siblings().removeClass("cur-type")},e=function(){$.ajax({url:"data.json",type:"get",async:!1,data:{},dataType:"json",success:function(a){o(a)}})},c=function(){var a,i=$("#scroll div.cur-type").children("div.product-pic").length,t="";for(a=0;a<i;a++)t+="<span></span>";$("#pageNo").html(t).children("span:first").addClass("curp").siblings().removeClass("curp")};return productSlider=function(){$("#my-pro-list>li").each(function(a){var i=a%6,t="";switch(i){case 0:case 5:t="gray";break;case 1:t="red";break;case 2:case 3:t="orange";break;case 4:t="gray-2"}$(this).addClass(t)});var a=$("#upbtn"),s=$("#downbtn"),n=$("#my-pro-list"),o=n.outerHeight(),e=$("#myprobox").outerHeight(),c=n.find("div[data-type=tip]"),r=e/2,l=function(){var a=Math.abs(n.position().top);return a!=o-e&&(!n.is(":animated")&&void n.stop().animate({top:"-="+r}))},d=function(){var a=Math.abs(n.position().top);return!(a<=0)&&(!n.is(":animated")&&void n.stop().animate({top:"+="+r}))},p=function(){i(),$("#pro-mask").css("display","block"),$("#mask-con").css("display","block"),$("#confirm").css("display","none"),$("#select li").eq(0).addClass("checked").siblings().removeClass(),$("#pro-mask div.tip").remove(),$("#select").on("click","li",function(){var a=$("#confirm");$(this).addClass("checked").siblings().removeClass(),0==$(this).index()?a.fadeOut():($("#nobuy").children().removeClass(),a.fadeIn())}),$("#nobuy").on("click","li",function(){$(this).addClass("checked").siblings().removeClass(),$("#select").children("li").last().removeClass()}),$("#close-mask").click(function(){t(),$("#pro-mask").css("display","none")}),$("#trybtn").on("click",function(){var a=$("#mask-con li").filter(".checked");"999"!=a.data("type")&&$.ajax({url:"submit.json",type:"get",data:a.data("type"),success:function(a){$("#mask-con").hide(),$('<div class="tip">'+a.msg+"</div>").appendTo($("#pro-mask"))}})})};s.on("click",l),a.on("click",d),c.on("click",p)},{index:function(){a(),s(),e(),c()},user:function(){productSlider()}}}();window.common=a}();*/
!
function() {
	var a = function() {
		var a = function() {
			function a(a) {
				var s = $("#slider ul li").eq(a);
				s.css({
					"z-index": i++
				}),
				s.hide(),
				s.fadeIn(1e3),
				t = a
			}
			var i = 2,
			t = 0,
			s = $("#slider ul li").length,
			n = null;
			$("#slider").hover(function() {
				clearInterval(n)
			},
			function() {
				n = setInterval(function() {
					t++,
					t == s && (t = 0),
					a(t)
				},
				2500)
			}).trigger("mouseleave")
		},
		i = function() {
			0 == $("#markbg").length && $('<div class="markbg" id="markbg"></div>').height($("body").height()).appendTo($("body"))
		},
		t = function() {
			$("#markbg").remove()
		},
		s = function() {
			function a(a) {
				$("#content").stop().animate({
					width: 0
				},
				400,
				function() {
					$("#product-page").stop().animate({
						opacity: 1
					},
					600)
				}),
				$("#scroll").css("top", 0),
				$("#btn").removeClass().addClass("jiantou-two").stop().animate({
					left: 169
				},
				600)
			}
			function i(a) {
				$("#product-page").stop().animate({
					opacity: 0
				},
				600,
				function() {
					$("#content").stop().animate({
						width: 1e3
					},
					400),
					$("#btn").removeClass().addClass("jiantou").stop().animate({
						left: 966
					},
					600)
				})
			}
			var t = $("#btn");
			t.on("click",
			function() {
				$(this).is(".jiantou") ? a($(this)) : i($(this)),
				$(this).data("flag") ? (i($(this)), $(this).data("flag", !1)) : (a($(this)), $(this).data("flag", !0))
			}),
			$(".product-pic").on("mouseenter", ".full",
			function() {
				var a = $(this).outerWidth(),
				i = $(this).outerHeight(),
				t = '<p><a href="#" class="login-btn">登录</a><a href="#">申请试用</a></p>';
				$mask = $('<div class="mask"></div>'),
				$mask.width(a).height(i),
				$mask.html(t).appendTo($(this))
			}).on("mouseleave", ".full",
			function() {
				$(this).children(".mask").remove()
			});
			var s = function(a) {
				var i = $("#scroll").find("div#type" + a.data("id"));
				i.addClass("cur-type").siblings().removeClass("cur-type"),
				$("#scroll").css("top", 0),
				c()
			},
			n = function() {
				$("#index-nav").on("mouseenter", "a",
				function() {
					$(this).css("background", $(this).data("color")).siblings().css("background", "none")
				}).on("click", "a",
				function() {
					a();
					var i = $(this).data("color");
					$("#prodcut-nav").css("background", i),
					s($(this))
				})
			};
			n(),
			$("#list-nav").on("click", "a",
			function() {
				s($(this))
			}),
			$("#pageNo").on("click", "span",
			function() {
				var a = $(this).index(),
				i = $(".product-pic").outerHeight();
				$("#scroll").stop().animate({
					top: -i * a
				},
				500),
				$(this).addClass("curp").siblings().removeClass("curp")
			})
		},
		n = function(a, i) {
			$('<a href="javascript:void(0)" data-id="' + i + '">' + a + "</a>").appendTo($("#list-nav")),
			$('<a href="javascript:void(0)" data-id="' + i + '">' + a + "</a>").appendTo($("#index-nav"))
		},
		o = function(a) {
			for (var i = 0,t = a.length; i < t; i++) {
				var s = a[i];
					n(s.name, s.id);
				var o = s.template_type,
					e = s.products,
					c = e.length,
					r = Math.ceil(c / o),
					l = $('<div class="product-type" id="type' + s.id + '"></div>'),
				d = function(a) {
						a = "undefined" == typeof a ? 0 : a;
					var i = "",
						t = a * o;
					for (t; t < c; t++) {
						var n = e[t];
						t < o * (a + 1) && (i += '<div class="pos product_' + o + "_" + t % o + '"><div class="full" data-login="' + n.login_flag + '"><p class="icon"><img src="http://localhost/zhizhen/img' + n.image + '"></p><h2><a href="' + n.site + '">' + n.name + "</a></h2><h3>" + n.summary + "</h3></div></div>")
					}
					var r = c - a * o;
					for (r; r < o; r++) i += '<div class="pos product_' + o + "_" + r + '" style="background:' + s.color + '"><div class="full"><p class="icon"></p><h2>敬请期待</h2><h3></h3></div></div>';
					return i
				};
				if (r > 1) for (var p = 0; p < r; p++) {
					var u = d(p);
					$('<div class="product-pic"></div>').html(u).appendTo(l)
				} else $('<div class="product-pic"></div>').html(d()).appendTo(l);
				l.appendTo($("#scroll"))
			}
			$("#scroll>div.product-type:eq(0)").addClass("cur-type").siblings().removeClass("cur-type")
		},
		e = function() {
			$.ajax({
				url: "data.json",
				type: "get",
				async: !1,
				data: {},
				dataType: "json",
				success: function(a) {
					o(a)
				}
			})
		},
		c = function() {
			var a, i = $("#scroll div.cur-type").children("div.product-pic").length,
			t = "";
			for (a = 0; a < i; a++) t += "<span></span>";
			$("#pageNo").html(t).children("span:first").addClass("curp").siblings().removeClass("curp")
		};
		return productSlider = function() {
			$("#my-pro-list>li").each(function(a) {
				var i = a % 6,
				t = "";
				switch (i) {
				case 0:
				case 5:
					t = "gray";
					break;
				case 1:
					t = "red";
					break;
				case 2:
				case 3:
					t = "orange";
					break;
				case 4:
					t = "gray-2"
				}
				$(this).addClass(t)
			});
			var a = $("#upbtn"),
			s = $("#downbtn"),
			n = $("#my-pro-list"),
			o = n.outerHeight(),
			e = $("#myprobox").outerHeight(),
			c = n.find("div[data-type=tip]"),
			r = e / 2,
			l = function() {
				var a = Math.abs(n.position().top);
				return a != o - e && (!n.is(":animated") && void n.stop().animate({
					top: "-=" + r
				}))
			},
			d = function() {
				var a = Math.abs(n.position().top);
				return ! (a <= 0) && (!n.is(":animated") && void n.stop().animate({
					top: "+=" + r
				}))
			},
			p = function() {
				i(),
				$("#pro-mask").css("display", "block"),
				$("#mask-con").css("display", "block"),
				$("#confirm").css("display", "none"),
				$("#select li").eq(0).addClass("checked").siblings().removeClass(),
				$("#pro-mask div.tip").remove(),
				$("#select").on("click", "li",
				function() {
					var a = $("#confirm");
					$(this).addClass("checked").siblings().removeClass(),
					0 == $(this).index() ? a.fadeOut() : ($("#nobuy").children().removeClass(), a.fadeIn())
				}),
				$("#nobuy").on("click", "li",
				function() {
					$(this).addClass("checked").siblings().removeClass(),
					$("#select").children("li").last().removeClass()
				}),
				$("#close-mask").click(function() {
					t(),
					$("#pro-mask").css("display", "none")
				}),
				$("#trybtn").on("click",
				function() {
					var a = $("#mask-con li").filter(".checked");
					"999" != a.data("type") && $.ajax({
						url: "submit.json",
						type: "get",
						data: a.data("type"),
						success: function(a) {
							$("#mask-con").hide(),
							$('<div class="tip">' + a.msg + "</div>").appendTo($("#pro-mask"))
						}
					})
				})
			};
			s.on("click", l),
			a.on("click", d),
			c.on("click", p)
		},
		{
			index: function() {
				a(),
				s(),
				e(),
				c()
			},
			user: function() {
				productSlider()
			}
		}
	} ();
	window.common = a
} ();