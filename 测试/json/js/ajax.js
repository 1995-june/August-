/*
 * @Author: your name
 * @Date: 2021-08-15 02:40:41
 * @LastEditTime: 2021-08-15 02:40:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\测试\json\js\ajax.js
 */
/**
 * 
 * @param {*} obj 
 * @returns 
 */
function objToQueryString(obj) {
    var str = ''
    for (var key in obj) {
        str += key + '=' + obj[key] + '&'
    }
    return str.substr(0, str.length - 1)
}



function ajax(url, method, data, callback) {
    var xhr = new XMLHttpRequest()

    if (method === 'get') {
        url += '?' + objToQueryString(data)
    }
    xhr.open(method, url, true)

    xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // 成功的回调函数
                callback && callback(xhr.responseText);
            } else {

            }
        }
    }

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    var postData = method === 'post' ? data : null;
    xhr.send(postData)
}