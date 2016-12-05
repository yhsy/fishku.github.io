	// 默认载入
		//载入国内城市列表
		cityTab("change-city");

		//默认获取输入框焦点
		setTimeout(function(){
		  	try{
			    var t = $('#search_ipt')
				    t.focus();
				    t.select();
			  	} catch(e){
			  		
			  	}
		}, 200);

		// 城市列表函数
			function cityTab(url){
				var strCity = "";
				// 获取国内城市
				$.ajax({
				  type:"get",
				  // url:"http://192.168.1.223:8080/city/list",
				  url:"data/"+url+".json",
				  dataType:"json",
				  success:function(data){
				  	for(var i=0;i<data.value.length;i++){
				  			strCity +='<li><a href="index.html"><img src="'+data.value[i].imageUrl+'"class="m-city-img"><p><i></i><span class="m-city-name">'+data.value[i].name+'</span></p></a></li>';
				  	}
				  	$('.m-city-list').html(strCity);
				  }
				});
			}

		$(function(){
			// 联想搜索功能
				// 当输入关键词时
				$("#search_ipt").bind("keyup",function(event){ 
					// 显示删除按钮
					$("#btn_sch_close").show();

					// 联想搜索
						/*
							1.每次输入的时候获取输入的值
							2.获取完之后马上Ajax提交,返回所需的data数据
							3.把获得的数据循环插入到 ul中
						*/ 
					// 过滤关键词:中文输入的内容不能为空格" ",英文输入长度要大于等于1
					if($(this).val().length>=1 & $(this).val()!== " "){
						var strHtml = "";

						$.ajax({
							type:"get",
							// url:"http://192.168.1.223:8080/search/restaurant/do?cityId=3&lat=27.973375&lng=120.734327&keyword="+$("#search_ipt").val(),
							url:"data/change-city.json",
							dataType:"json",
							success:function(data){
								// console.log(data.value.length);
								/*
									餐厅名:data.value[0].restaurant.name
									餐厅数量:暂无
								*/ 

								// 循环取出数据
								for(var i=0;i<data.value.length;i++){
									strHtml = strHtml + '<li class="sch-think"><a href="index.html" class="sch-items"><i class="icon-schs"></i><span class="u-restaurant-name">'+data.value[i].name+'</span></a><div class="u-sch-count"><em>12</em>&nbsp;个结果</div></li>';
								}

								// 显示搜索联想列表
								$(".m-mask-bd").show();
								//插入数据到列表
								$('#think_list').html(strHtml);
								// console.log(strHtml);

								// 点击联想搜索列表
								// $('.sch-think').click(function(){
								// 	// restaurantList($(this).children('span').html());

								// })

								


								// 按回车(表示关键词输入完成)
								if(event.keyCode == "13"){  
									restaurantList($("#search_ipt").val());
				        		}
								
								
							}
						})
					}				

				}); 

				// 点击清空按钮--输入的内容清空
				$("#btn_sch_close").click(function(){
					// console.log($("#search_ipt").val());
					// 清空输入框里的内容
					$("#search_ipt").val('');	
					// 隐藏清空按钮
					$(this).hide();
					// 联想搜索列表的内容清空
					$('#think_list').html('');	
					// 隐藏联想搜索列表
					$(".m-mask-bd").hide();
				})
			// 联想搜索结束


			// 点击tab标签页,切换选中样式
			for(var i=0;i<$(".m-country-tab1 li").length;i++){
				$(".m-country-tab1 li").click(function(){
					$(".m-country-tab1 li").removeClass('tab-active');
					$(this).addClass('tab-active');
				})

			}

				
			// 国内城市列表
				$("#btn_internal").click(function(){
					cityTab("change-city");
				})

			// 获取国外城市列表
				$("#btn_abroad").click(function(){
					cityTab("change-city-abroad");
				})

			

		})