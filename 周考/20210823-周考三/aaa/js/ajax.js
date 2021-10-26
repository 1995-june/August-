/*
 * @Author: your name
 * @Date: 2021-08-20 21:03:05
 * @LastEditTime: 2021-08-20 21:17:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\20210811-day-6\猫眼\js\ajax (4).js
 */
function ajax(url, method, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                callback && callback(JSON.parse(xhr.responseText));
            } else {
                /* console.log("Request was unsuccessful:" + xhr.status); */
            }
        }
    }
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var postData = method === 'post' ? data : null;
    xhr.send(postData);
}
// return ajax;