cc.Class({
    extends: cc.Component,

    properties: {},

    start() {
        cc.sys.localStorage.setItem('nowlevel', 'level5');
        talk_arr[0] = new Array();
        talk_arr[0][0] = "喵~ 这节课我们来解决一个有趣的问题~";
        talk_arr[0][1] = "喵~ 猫咪喜欢爬楼梯这你是知道的~";
        talk_arr[0][2] = "本喵每次可以爬『1级』或者『2级』~";
        talk_arr[0][3] = "本喵想知道我要爬上『12级』楼梯有多少种方法呢~";
        talk_arr[0][4] = "举个例子叭~";
        talk_arr[0][5] = "我想爬上『3级』楼梯,那本喵一共有三种方法上去~";
        talk_arr[0][6] = "第一种是一步一步一步爬上去~";
        talk_arr[0][7] = "第二种是一步两步爬上去~";
        talk_arr[0][8] = "第三种是两步一步爬上去~";
        talk_arr[0][9] = "就像这样子,『12级』楼梯有多少种呢,我懒得算了...";
        talk_arr[0][10] = "你来告诉我叭,魔法阵会告诉我们对不对的~ 我去午睡啦~";
        window.talk_finished = function (scene) {
            if (scene == 0) {
                myAlert('每次能爬1级或2级\n爬上12级有多少种方法');
            }
        };
        myTalk();
    },

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    },
});