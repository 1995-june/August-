var goodsWrap = document.querySelector('.goods-wrap')
var html = '';

ajax('./js/data.json', function(res) {
    renderPage(res)
})

// 页面渲染
function renderPage(res) {
    goodsWrap.innerHTML += res.map((itme) => {
        return `
            <div class="goods-list">
                <div class="checkbox-wrap">
                <div class="checks"></div>
                </div>
                <dl>
                    <dt><img src="${itme.img}" alt=""></dt>
                    <dd>
                        <p>${itme.text}</p>
                        <div class="quantity-wrap">
                            <div class="price"><span>￥${itme.price}</span><b>/袋</b></div>
                            <div class="number-wrap">
                                <div class="reduce">
                                    <button type="button">-</button>
                                </div>
                                <div class="num">
                                    <input type="text" name="num" value="1">
                                </div>
                                <div class="plus">
                                    <button type="button">+</button>
                                </div>
                            </div>
                        </div>
                    </dd>
                </dl>
            </div>`
    }).join('');
    var all = document.querySelector('.all');
    var checks = [...document.querySelectorAll('.checks')];
    var flag = true;

    all.addEventListener('touchend', function() {
        checks.forEach(function(val) {
            if (flag) {
                val.classList.add('temp')
                flag = false;
                console.log(44);
            } else {
                val.classList.remove('temp')
                flag = true
                console.log(666);

            }
        })

        // checks.forEach(function(val) {
        //     val.addEventListener('touchend', function() {
        //         var flag = true;
        //         checks.forEach(function(val) {
        //             if (!val.checked) {
        //                 flag = false;
        //             }
        //         })
        //         all.checked = flag
        //     })
        // })
    }, false);
}