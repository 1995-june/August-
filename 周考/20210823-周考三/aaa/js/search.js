/*
 * @Author: your name
 * @Date: 2021-08-23 18:48:46
 * @LastEditTime: 2021-08-23 20:34:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\周考\20210823-周考三\aaa\js\search.js
 */
var input = document.querySelector('input');
var listWrap = document.querySelector('.list-wrap');
var show = document.querySelector('.show');

input.addEventListener('blur', function() {
    var valueS = this.value.trim();
    console.log(valueS.length);
    // show.innerHTML = '';

    if (valueS) {
        getSearch(valueS)
    }

    localStorage.getItem('cac') || localStorage.setItem('cac', '[]');
    var arr = JSON.parse(localStorage.getItem('cac')); // 转成 js对象

    /* 判断 去重 去空格 */
    if (arr.indexOf(input.value.trim()) == -1 && input.value !== '') {
        arr.unshift(input.value); // 数值前面插入一个
    }

    // 设置存储 并转化为 JSON字符串
    localStorage.setItem('cac', JSON.stringify(arr));
    // map循环遍历 arr值 并写入 ul 里

    listWrap.innerHTML = arr.map((item) => {
        return `<li>${item}</li>`
    }).join(''); // map 循环遍历后 用 join 去掉 逗号

    var li = listWrap.querySelectorAll('li');
    li.forEach((val, i) => {
        // val.index = i;
        val.addEventListener('click', function() {

            var arr = JSON.parse(localStorage.getItem('cac'));
            var index = [...li].indexOf(this);
            console.log(index);
            arr.splice(arr[index], 1);
            localStorage.setItem('cac', JSON.stringify(arr));
            this.remove();
        })
    })

})

function getSearch(valueS) {
    ajax('../lib/data.json', 'get', {}, function(res) {
        var lis = res.list.data.filter(function(item) {
            return String(item.name).includes(valueS) ||
                String(item.text).includes(valueS)
        })

        show.innerHTML = lis.map(function(val) {
            return `
                <dl>
                    <dt>
                        <img src="${val.img}" alt="">
                    </dt>
                    <dd>
                        <p class="name">${val.name}</p>
                        <span>${val.text}</span>
                    </dd>
                </dl>`
        }).join('');
        // var dl = show.querySelectorAll('dl');
        // dl.forEach((item) => {
        //     item.addEventListener('click', function() {
        //         var obj = {
        //             'img': this.children[0].src,
        //             'name': this.children[1].children[0].innerHTML,
        //             'text': this.children[1].children[1].innerHTML,
        //         }
        //         localStorage.setItem('dl', JSON.stringify('obj'));
        //         location.href = './html/details.html'; //Location 接口表示其链接到的对象的位置（URL）。
        //         console.log(555);
        //     })
        // })
    })
}