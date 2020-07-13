cc.Class({
    extends: cc.Component,

    properties: {},

    start() {
        cc.sys.localStorage.setItem('nowlevel', 'level7');
        window.level7A = this.getRandomNumber(19, 100);
        window.level7B = this.getRandomNumber(19, 100);
        window.level7C = this.getRandomNumber(19, 100);
        window.level7Ans = level7A*level7B/this.gcd(level7A, level7B);
        window.level7Ans = level7Ans*level7C/this.gcd(level7Ans,level7C);
        talk_arr[0] = new Array();
        talk_arr[0][0] = "做得不错嘛,你已经对魔法(算法)有了一定的造诣了~";
        talk_arr[0][1] = "通过上个问题,你已经学会了『最大公因数』魔法.";
        talk_arr[0][2] = "那么这次,我要考考你会不会『最小公倍数』魔法!";
        talk_arr[0][3] = "我给了你三个『神秘石』,告诉我他们的的『最小公倍数吧』!";
        talk_arr[0][4] = "顺便一提,你的『最大公因数』魔法已经记录在『魔法卷轴』了."
        window.talk_finished = function (scene) {
            if (scene == 0) {
                myAlert('求出三法力值的最小公倍数\n魔法棒新增了魔法');
            }
        };
        myTalk();
    },

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    },

    gcd(a, b) {
        var t;
        while (b != 0) {
            t = b;
            b = a % b;
            a = t;
        }
        return a;
    }
});