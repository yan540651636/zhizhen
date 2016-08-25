var myApp = angular.module("myApp",[]);

myApp.controller("myCon",function($scope,$http)
{
	$scope.toLeft=function()
	{
		if($('#btn').hasClass("jiantou"))
		{
			$("#content").stop().animate({width: 0},400,function() 
			{
				$("#product-page").stop().animate({opacity: 1},600)
			}),

			$("#scroll").css("top", 0),
	
			$("#btn").removeClass().addClass("jiantou-two").stop().animate({left: 169},600)
		}else
		{
			$("#product-page").stop().animate({opacity: 0},600,function() 
				{
					$("#content").stop().animate({width: 1e3},400),
					$("#btn").removeClass().addClass("jiantou").stop().animate({left: 966},600)
				})
		} 

	};
	$http.get('../data.json')
		 .success(function(response)
		 {
		 	$scope.y_name=response[0].name;
		 	$scope.j_name=response[1].name;
		 	$scope.products0=response[0].products;
		 	$scope.products1=response[1].products;

		 	var y_n=Math.ceil(response[0].products.length/response[0].template_type),
				j_n=Math.ceil(response[1].products.length/response[1].template_type);

			var newData = [],
				newData2 = [];

   		    for (var i = 0; i < y_n; i++) {
   		      newData[i] = [];
   		      for(var j=0 ;j<response[0].template_type; j++)
   		      {
   		      	if(response[0].products[i * (response[0].template_type)+j]!=null)
   		      	{
   		      		newData[i].push(response[0].products[i * (response[0].template_type)+j]);
   		      	}else{
   		      		newData[i].push({"summary":'敬请期待'})
   		      	}
   		      	
   		      }  		      
   		    }

   		    for (var i = 0; i < j_n; i++) {
   		      newData2[i] = [];
   		      for(var j=0 ;j<response[1].template_type; j++)
   		      {
   		      	if(response[1].products[i * (response[1].template_type)+j]!=null)
   		      	{
   		      		newData2[i].push(response[1].products[i * (response[1].template_type)+j]);
   		      	}else{
   		      		newData2[i].push({"summary":'敬请期待'})
   		      	}
   		      	
   		      }  		      
   		    }


   		    $scope.y_data=newData;
   		    $scope.j_data=newData2;
   		   /* console.log(newData2)
   		    console.log(newData)*/
		 });
	$scope.tab=function(a)
	{
		$('.tab').eq(a).show().siblings('.tab').hide();
		$('.slide_btn').eq(a).show().siblings('.slide_btn').hide();
	}

	$scope.slide=function(a,b)
	{
		$('.tab').eq(b).stop().animate({'margin-top':-a*$('.scroll').height()+'px'},2000);
		$('.slide_btn span').eq(a).addClass('curp').siblings().removeClass('curp');
	}

})