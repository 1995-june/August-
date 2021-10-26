
	
	
	
	/*
	 *  ajax方法
	 *  url [字符串型] 请求的地址
	 *  method [字符串型] 请求的方式: get 或 post等
	 *  data [json对象] 请求的数据，get请求会拼接成query
	 *  callback [function] 回调函数，用于在请求完成后(成功取回数据后)执行的函数，
	 * 
	 * 最后更新：20210730 chy 提升兼容性，并处理post提交数据的错误
	 */
	function ajax(url, method, data, callback) {
		
		//请求方法字串转为小写
		method = method.toLowerCase();
		
		// 1. 取得xml对象
		var xhr = new XMLHttpRequest()
	
		// 2.数据处理
		
		// 2.1 对象转为 query字串
		var objToQueryString = function  (obj) {
			var str = '';
			for (var key in obj) {
				str += key + '=' + obj[key] + '&';
			}
			return str.substr(0, str.length - 1);
		}
		
		// 2.2 data为对象时转为 链值对字串
		if(typeof data =='object'){
			data = objToQueryString(data);
		}
		
		
		//2.2 为get请求时 拼接query字串
		if( method  == 'get' ) {
			if(url.indexOf('?')==-1) url+="?";//判断url中有无?
		
			// console.log(url, data);
			url += "&"+data;
		}
		
		// console.log(url);return;
	
		// 3.发送请求
		xhr.open(method, url, true);//method,url,async
	
		// 4.监听状态
		xhr.onreadystatechange = function (e) {
			
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
						// 成功的回调函数
						callback && callback(JSON.parse(xhr.responseText));
				} else {
						console.error('请求失败');
				}
			}
			
		}
	
		//5. 设置请求头
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
		//post请求 ，发送数据
		var postData = method == 'post' ? data : null;
		xhr.send(postData);
	}
	
	








