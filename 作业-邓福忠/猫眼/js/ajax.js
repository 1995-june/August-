/*
 * @Author: your name
 * @Date: 2021-08-20 21:01:37
 * @LastEditTime: 2021-08-20 21:01:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\20210811-day-6\猫眼\js\ajax.js
 */
function ajax(url, callback) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
    xhr.open("get", url, true);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var data = xhr.response;
                callback && callback(JSON.parse(data))
            }
        }
    }
}