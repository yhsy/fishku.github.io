		/*轮播图效果*/
    	function iSlide(){
    		var swiper1 = new Swiper('.swiper-container1', {
		        nextButton: '.swiper-button-next',
		        prevButton: '.swiper-button-prev'
		    });
		    
		    var swiper2 = new Swiper('.swiper-container2', {
		    	autoplay: 2000,
		    	paginationClickable: true,
		        pagination: '.swiper-pagination'
		    });
		    
			swiper1.params.control = swiper1;	//
			swiper2.params.control = swiper2;	//
    	}
    	
    	/* 页面载入-获取数据-集合函数 */
    	function iAjax(){	
			//获取-banner广告-数据
			　　	$.ajax({
				  type:"get",
				  url:"http://192.168.1.223:8080/index/ad/list",
				  dataType:"json",
				  success:function(data){
				　　　　　//这里的success方法是不会执行的，会调用上传pandoraCall方法，该方法名和服务器回传内容的方法名一致
				   	 //console.log(data.value[0].background);
			   	 	// var ImgSrc = data.value[0].background;
			   	 	// var Url = data.value[0].url;
					//		   	 	console.log($('.slide-img').length);
			   	 	
			   	 	for(var i=0;i<data.value.length;i++){	
			   	 		//改变图片URL地址 
			   	 		$('.slide-img').eq(i).attr('src',data.value[i].background);
			   	 		//改变图片链接地址
			   	 		$('.slide-url').eq(i).attr('href',data.value[i].url);
			   	 		
			   	 	}
				  },
				  error:function(e){
				  　　alert(e.value[0].title);
				  }
			});
		
			//获取-附近商家-数据
			$.ajax({
			  type:"get",
			  url:"http://192.168.1.223:8080/index/nearby/list?cityId=3&radii=3000&lng=120.728326&lat=27.967599&page=1&size=10",
			  dataType:"json",
			  success:function(data){
			　	 // 这里的success方法是不会执行的，会调用上传pandoraCall方法，该方法名和服务器回传内容的方法名一致
				for(var i=0;i<data.value.length;i++){
					//图片地址
					 $('.i-business-list img').eq(i).attr('src',data.value[i].restaurant.previewUrl);
					 //商家名称
					 $('.i-business-name').eq(i).html(data.value[i].restaurant.name);
					 //商家描述
					 $('.i-business-explain').eq(i).html(data.value[i].restaurant.content);
					 //距离
					 $('.i-business-distance em').eq(i).html(data.value[i].distance);	
				}  	
			  }
			});		
		
			//获取-精品推荐-数据
			$.ajax({
			  type:"get",
			  url:"http://192.168.1.223:8080/index/recommend/list?cityId=3&lng=120.734327&lat=27.973375",
			  dataType:"json",
			  success:function(data){
			　	 // 这里的success方法是不会执行的，会调用上传pandoraCall方法，该方法名和服务器回传内容的方法名一致
				for(var i=0;i<data.value.length;i++){
					 $('.i-recommend-list img').eq(i).attr('src',data.value[i].restaurant.previewUrl);
					 $('.i-recommend-list p').eq(i).html(data.value[i].restaurant.name);
				}  	
			  }
			});
			
			//获取-主题聚会-数据
			$.ajax({
			  type:"get",
			  url:"http://192.168.1.223:8080/index/theme/list?cityId=3&page=1&size=10",
			  dataType:"json",
			  success:function(data){
			　	 // 这里的success方法是不会执行的，会调用上传pandoraCall方法，该方法名和服务器回传内容的方法名一致
				for(var i=0;i<data.value.list.length;i++){
					 $('.i-scene img').eq(i).attr('src',data.value.list[i].imageUrl);
					 $('.i-scene h3').eq(i).html(data.value.list[i].name);
					 $('.i-scene p').eq(i).html(data.value.list[i].describe);
				}  	
			  }
			});
			
			
    	}