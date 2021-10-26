var imgs = document.querySelectorAll('.banner > a');
var banner = document.querySelector('.banner'); // banner 盒子
var Pager = document.querySelectorAll('.Pager'); // 分页器按钮
var index = 0; // 标记

// 通过 touch 事件 给 banner 盒子添加 向左滑动事件
myTouch.swiper(banner, 'left', function() {
    index = index++ >= imgs.length - 1 ? 0 : index++;

    banner.style.transform = `translateX(-${index * imgs[0].offsetWidth}px)`; // 根据第一张图片的宽度 * 数量 实现移动
    banner.style.transition = 'all 2s';

    // 分页器按钮
    Pager.forEach(function(val) {
        val.classList.remove('active');
    })
    Pager[index].classList.add('active');
})

// 通过 touch 事件 给 banner 盒子添加 向右滑动事件
myTouch.swiper(banner, 'right', function() {
    index = index-- <= 0 ? imgs.length - 1 : index--;

    banner.style.transform = `translateX(-${index * imgs[0].offsetWidth}px)`; // 根据第一张图片的宽度 * 数量 实现移动
    banner.style.transition = 'all 2s';

    // 分页器按钮
    Pager.forEach(function(val) {
        val.classList.remove('active');
    })
    Pager[index].classList.add('active');
})