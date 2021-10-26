/*
 * @Author: your name
 * @Date: 2021-08-14 21:21:35
 * @LastEditTime: 2021-08-15 14:40:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\周末作业\20210814-第二周\房天下\js\swiper.js
 */
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var myTouch = {
    swiper: function(ele, dir, callback) {
        if (ele.nodeType != 1) return;

        var startSeat = null;
        var endSeat = null;
        ele.addEventListener('touchstart', function(event) {
            startSeat = {
                x: event.touches[0].pageX,
                y: event.touches[0].pageY,
            }
        })

        ele.addEventListener('touchend', function(event) {
            endSeat = {
                x: event.changedTouches[0].pageX,
                y: event.changedTouches[0].pageY,
            }
            if (startSeat && endSeat && dir === getDir(startSeat, endSeat)) {
                callback && callback(event)
            }
        })

        function getDir(startSeat, endSeat) {
            var dirX = startSeat.x - endSeat.x;
            var dirY = startSeat.y - endSeat.y;

            var absX = Math.abs(dirX);
            var absY = Math.abs(dirY);
            if (absX > 30 || absY > 30) {
                if (absX > absY) {
                    return dirX > 0 ? 'left' : 'right';
                } else {
                    return dirY > 0 ? 'up' : 'down';
                }
            }
        }
    }
}

var navIcons = document.querySelectorAll('.slide-rotation > .nav-icons');
var slideRotation = document.querySelector('.slide-rotation');
var Pager = document.querySelectorAll('.Pager');
var PagerWrap = document.querySelectorAll('.Pager-wrap');
var index = 0;

myTouch.swiper(slideRotation, 'left', function() {
    index = index++ >= navIcons.length - 1 ? navIcons.length - 1 : index++;

    slideRotation.style.transform = `translateX(-${index * navIcons[0].offsetWidth}px)`;
    slideRotation.style.transition = 'all 2s';
    Pager.forEach(function(val) {
        val.classList.remove('active');
    })
    Pager[index].classList.add('active');
    Pager[index].style.transition = 'all 2s';
})

myTouch.swiper(slideRotation, 'right', function() {
    slideRotation.style.transform = `translateX(-${index-=10}px)`;

    index = index-- <= 0 ? 0 : index--;

    slideRotation.style.transform = `translateX(-${index * navIcons[0].offsetWidth}px)`;
    slideRotation.style.transition = 'all 2s';

    Pager.forEach(function(val) {
        val.classList.remove('active');
    })
    Pager[index].classList.add('active');
    Pager[index].style.transition = 'all 2s';
})