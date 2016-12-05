　$.ajax({
			  type:"get",
			  url:"data/ad.json",
			  dataType:"json",
			  success:function(data){
			　　　　　//这里的success方法是不会执行的，会调用上传pandoraCall方法，该方法名和服务器回传内容的方法名一致
			   	 //console.log(data.value[0].background);
		   	 	// var ImgSrc = data.value[0].background;
		   	 	// var Url = data.value[0].url;
		   	 	console.log($('.slide-img').length);
		   	 	
		   	 	for(var i=0;i<$('.slide-img').length;i++){	
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