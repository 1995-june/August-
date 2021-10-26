/*
 * @Author: your name
 * @Date: 2021-08-28 23:00:15
 * @LastEditTime: 2021-08-29 21:47:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\周末作业\20210828-第四周\淘票票\js\index.js
 */
// 视频播放控件
function controlVideoPlayback() {
    var mask = document.querySelector('.mask');
    var video = document.querySelector('video');
    var videoWrap = document.querySelector('.mask-wrap');

    mask.addEventListener('touchend', function() {
        video.play();
        videoWrap.style.display = 'none';
    });

    video.onended = function() {
        videoWrap.style.display = 'block';
    }
}
controlVideoPlayback();

// 分类详情
function classifyDetailsNav() {
    var classify = document.querySelector('.classify');
    var classifyTwo = document.querySelector('.classify-two');
    ajax('./lib/data.json', 'get', {}, function(res) {
        classify.innerHTML += res.movieList.map(item => {
            return `
                <dl>
                    <dt>
                        <img src="${item.img}" alt="">
                    </dt>
                    <dd>
                        <h6>${item.nm}</h6>
                        <p>${item.star}</p>
                        <a href="#">购票</a>
                    </dd>
                </dl>`
        }).join('')

        classifyTwo.innerHTML += res.movieList.map(item => {
            return `
                <dl>
                    <dt>
                        <img src="${item.img}" alt="">
                    </dt>
                    <dd>
                        <h6>${item.nm}</h6>
                        <p>${item.star}</p>
                        <a href="#">想看</a>
                    </dd>
                </dl>`
        }).join('')
    })
}
classifyDetailsNav();

// 切换内容显示隐藏

function conShowHide() {
    var navTab = document.querySelectorAll('nav a');
    var panel = document.querySelectorAll('.panel');
    var bottomRed = document.querySelector('.bottom-red span')
    console.log(navTab);

    navTab.forEach((time, i) => {
        time.index = i;
        time.addEventListener('touchend', function() {
            this.classList.add('active')
            var _left = this.offsetLeft;
            bottomRed.style.left = _left + 'px';

            panel.forEach((val, i) => {
                if (i == this.index) {
                    val.classList.add('active');
                } else {
                    val.classList.remove('active');
                }
            })

            var children = [...this.parentNode.children];
            console.log(children);
            children.forEach((li) => {
                if (li != this) {
                    li.classList.remove('active')
                }
            })
        })
    })
}
conShowHide()