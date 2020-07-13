cc.Class({
    extends: cc.Component,

    properties: {},

    start() {
        cc.sys.localStorage.setItem('nowlevel', 'level6');
        window.level6A = this.getRandomNumber(19, 200);
        window.level6B = this.getRandomNumber(19, 200);
        window.level6Ans = this.gcd(level6A, level6B);
        talk_arr[0] = new Array();
        talk_arr[0][0] = "嘿~你能把小猫他们的问题都通过了,很厉害嘛!";
        talk_arr[0][1] = "我是谁?我就是创造这个世界的大魔法师埃迪.";
        talk_arr[0][2] = "前面的问题对你来说应该都是小儿科吧.";
        talk_arr[0][3] = "我来给你个有挑战性的问题.";
        talk_arr[0][4] = "我现在给你两个『神秘石』.";
        talk_arr[0][5] = "你告诉我它们法力值的『最大公因数』是多少吧!";
        talk_arr[0][6] = "你不知道『最大公因数』是什么?那我可帮不了你,这就是你要学的内容!";
        talk_arr[0][7] = "去吧,我相信你能够做到的~";
        talk_arr[0][8] = "我还额外给了你一个法力值为0的魔法球,我相信会有用的."
        window.talk_finished = function (scene) {
            if (scene == 0) {
                myAlert('求出两法力值的最大公因数');
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