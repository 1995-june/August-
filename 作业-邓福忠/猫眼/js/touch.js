/*
 * @Author: your name
 * @Date: 2021-08-13 11:02:20
 * @LastEditTime: 2021-08-14 08:16:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\20210813-day-7\touch事件\js\touch.js
 */
var myTouch = {
    tap: function(ele, callback) {
        var startTime = 0; // 开始时间
        var endTime = 0; // 结束时间
        var isMove = false; // 是否移动 默认否

        // 判断是否为 元素节点类型
        if (ele.nodeType == 1) {
            // 监听开始事件
            ele.addEventListener('touchstart', function() {
                startTime = new Date() * 1;
            })

            // 监听移动事件
            ele.addEventListener('touchmove', function() {
                isMove = true; // 移动
            })

            // 监听结束事件
            ele.addEventListener('touchend', function(event) {
                endTime = new Date() * 1;

                if (!isMove && endTime - startTime < 150) {
                    callback && callback(event) // 回调函数
                }
                startTime = 0; // 初始化开始时间
                endTime = 0; //  初始化结束时间
                isMove = false; // 初始化是否移动
            })
        }
    },

    // 滑动上下左右事件
    swiper: function(ele, dir, callback) {
        // 判断当前触摸节点是否是元素节点，不是则不执行下面的代码
        if (ele.nodeType != 1) return;
        var startSeat = null; // 开始位置
        var endSeat = null; // 结束位置

        // 监听手指触摸开始事件 获取 到开始的位置
        ele.addEventListener('touchstart', function(event) {
            startSeat = {
                x: event.touches[0].pageX,
                y: event.touches[0].pageY
            }
        })

        // 监听手指触摸离开事件 获取 到结束的位置
        ele.addEventListener('touchend', function(event) {
            endSeat = {
                x: event.changedTouches[0].pageX,
                y: event.changedTouches[0].pageY
            }

            // 如果  startSeat && endSeat && dir == 参数里的值
            if (startSeat && endSeat && dir === getDir(startSeat, endSeat)) {
                callback && callback(event); // 调用回调函数
            }
        })

        // 分装一个判断不同方向位置的函数
        function getDir(startSeat, endSeat) {
            // 获取到 开始时间的位置 - 结束时间 位置 的一个位置差
            var dirX = startSeat.x - endSeat.x;
            var dirY = startSeat.y - endSeat.y;

            // 把获取到的位置差 转换为绝对值
            var AbsX = Math.abs(dirX);
            var AbsY = Math.abs(dirY);

            // 定义一个滑动生效的位置范围
            if (AbsX > 30 || AbsY > 30) {
                // 用绝对值位置 x y 判断 走的是水平位置还是绝对位置

                if (AbsX > AbsY) {
                    // 判断 若 dirX > 0 向左划 dirX < 0 向右划
                    return dirX > 0 ? 'left' : 'right';
                } else {
                    // 判断 若 dirY > 0 向上划 dirY < 0 向下划
                    return dirY > 0 ? 'up' : 'down';
                }
                //函数最后返回上下左右中的一个值  //函数最后返回上下左右中的一个值
            }
        }
    }
}