/*
 * @Author: your name
 * @Date: 2021-08-23 10:20:15
 * @LastEditTime: 2021-08-23 14:00:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\周考\20210823-周考三\aaa\js\index.js
 */
/* 必听推荐渲染页面 */
function recommendRender() {
    var recommendCon = document.querySelector('.recommend-con');

    ajax('./lib/data.json', 'get', {

    }, function(res) {
        var lis = res.list.data;
        var arr = []

        recommendCon.innerHTML += lis.map((val) => {
            arr.push({
                img: val.img,
                name: val.name,
                text: val.text
            })
            return `
                <dl>
                    <dt>
                        <img src="${val.img}" alt="">
                    </dt>
                    <dd>
                        <p>${val.name}</p>
                        <span>${val.text}</span>
                    </dd>
                </dl>`
        }).join('')


        function renderPage(arr) {
            recommendCon.innerHTML = arr.map((val) => {
                console.log(val.text);
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
            }).join('')
        }
        var maxPage = Math.ceil(arr.length / 6);
        var page = 1;
        var changeIt = document.querySelector('.change-it-wrap');
        changeIt.addEventListener('touchend', function() {
            renderPage(arr.slice(0, 6))

            page = page++ >= maxPage ? 1 : page++;
            renderPage(arr.slice((page - 1) * 6, page * 6))
        })
    })
}
recommendRender()