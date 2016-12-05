
		window.onload = function(){
			<!--var xhr = null;-->
			var xhr = null;
			if(window.XMLHttpRequest){
				// 标准浏览器用XMLHttpRequest()对象
				xhr = new XMLHttpRequest();
			}else{
				// IE6及以下用这个插件 Microsoft.XMLHTTP
				xhr = new ActiveXobject('Microsoft.XMLHTTP');
			}

			// xhr.open('get','1.txt',true);
			// 在地址栏里输入地址
			xhr.open('get','data/ad.json',true);
//			xhr.open('get','http://192.168.1.77:8080/index/ad/list.json',true);
			// 提交
			xhr.send();
			
				// 等待服务器返回内容
			xhr.onreadystatechange = function(){
					if(xhr.readyState == 4){
						// oJson = new() ;
//						var oJson = xhr.responseText;
						// json数据重新排列
//						var TextJson = eval( "(" + oJson + ")" );//转换后的JSON对象
//						// alert(TextJson.succeed)				// 取得单个数据
//						 alert(TextJson.value[0].title);		// 取得嵌套数据
//						alert(TextJson.value[1].title);		// 取得嵌套数据

						// alert(xhr.responseText);
						// alert(xhr.responseXML);

						 if(xhr.status == 200){
						 	var Text = xhr.responseText;
						 	var TextJson = JSON.parse(Text);	//使用json2中的parse方法将data转换成json格式
						 	alert(TextJson.value[0].title);

						 }
					}
				}
			}
