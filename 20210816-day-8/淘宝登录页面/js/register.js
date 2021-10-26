/*
 * @Author: your name
 * @Date: 2021-08-17 14:25:49
 * @LastEditTime: 2021-08-17 22:19:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\20210816-day-8\淘宝登录页面\js\register.js
 */
function RegisterPage(options) {
    this.tel = document.querySelector(options.tel);
    this.getCode = document.querySelector(options.getCode);
    this.input = document.querySelector(options.input);
    this.telPrompWwrap = document.querySelector(options.telPrompWwrap);
    this.registerRen = document.querySelector(options.registerRen) || false;
    this.prompt = document.querySelector(options.prompt);
    this.cancel = document.querySelector(options.cancel);
    this.chooseCodeWrap = document.querySelector(options.chooseCodeWrap);
    this.div = document.querySelector(options.div);
    this.signIn = document.querySelector(options.signIn);

    this.flag = options.flag || false;
    this.flag2 = options.flag2 || false;
    this.flag3 = options.flag3 || false;
    this.time = '';
    this.init();
}

RegisterPage.prototype = {
    init() {
        this.getTimer();
        this.getVerificationCode();
        this.registers();
        this.mask()
        this.signInPage()
    },

    // 获取验证码
    getVerificationCode: function() {
        var that = this;
        this.getCode.addEventListener('click', function() {
            if (formValidation.cellPhoneNumber(that.tel.value) == false || that.tel.value == '') {
                that.telPrompWwrap.style.display = 'block';
            } else {
                that.setCountDown();
                that.getCode.setAttribute('disabled', true) // 按钮禁用
                that.prompt.style.visibility = 'visible';
            }
        })
    },

    // 注册登录
    registers: function(val) {
        var that = this;
        if (this.flag2 == true) {
            this.registerRen.addEventListener('click', function() {
                if (that.tel.value == '' || that.input.value == '') {
                    that.telPrompWwrap.style.display = 'block';
                }
                if (formValidation.cellPhoneNumber(that.tel.value) == true && that.input.value == val) {
                    var news = {
                        "tal": that.tel.value,
                        "code": that.input.value
                    }
                    localStorage.setItem('register', JSON.stringify(news));
                    location.href = '../index.html';
                } else {
                    that.telPrompWwrap.style.display = 'block';
                }
            })
        }
    },

    // 倒计时隐藏弹出框
    getTimer: function() {
        var that = this;
        // 设置定时器 隐藏弹出框
        this.time = setInterval(function() {
            that.telPrompWwrap.style.display = 'none';
        }, 2500)
    },

    // 验证码倒计时
    setCountDown: function() {
        var that = this;
        var count = 5;
        var time2 = '';
        var val = that.RandomRange(6, 6)
        that.registers(val);
        that.signInPage(val);
        time2 = setInterval(function() {
            count--
            that.getCode.innerHTML = `${count} 秒后重发`;
            if (count < 1) {
                count = 1;
                that.input.value = val;
                that.getCode.innerHTML = `重新发送验证码`;
                that.prompt.style.visibility = 'hidden';
                that.getCode.removeAttribute('disabled') // 按钮禁用
                clearInterval(time2);
            }
        }, 1000)
    },

    // 遮罩层
    mask: function() {
        var that = this;
        if (this.flag == true) {
            this.cancel.addEventListener('click', function() {
                that.chooseCodeWrap.style.display = 'none';
            })

            this.div.addEventListener('click', function() {
                that.chooseCodeWrap.style.display = 'block';
            })
        }
    },

    // 字母数字随机数
    RandomRange(min, max) {
        var returnStr = "",
            range = (max ? Math.round(Math.random() * (max - min)) + min : min),
            arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for (var i = 0; i < range; i++) {
            var index = Math.round(Math.random() * (arr.length - 1));
            returnStr += arr[index];
        }
        return returnStr;
    },

    signInPage: function(val) {
        var that = this;
        if (this.flag3 == true) {
            this.signIn.addEventListener('click', function() {
                if (that.tel.value == '' || that.input.value == '') {
                    that.telPrompWwrap.style.display = 'block';
                }
                if (formValidation.cellPhoneNumber(that.tel.value) == true && that.input.value == val) {
                    var news = {
                        "tal": that.tel.value,
                        "code": that.input.value
                    }
                    localStorage.setItem('register', JSON.stringify(news));
                    location.href = '../html/index4.html';
                } else {
                    that.telPrompWwrap.style.display = 'block';
                }
            })
        }
    }
}