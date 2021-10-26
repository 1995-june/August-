function ajax(method, url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                callback(xhr.responseText);
            } else {
                /* console.log("Request was unsuccessful:" + xhr.status); */
            }
        }
    }
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    var postData = method === 'post' ? data : null;
    xhr.send(postData);
}
// return ajax;