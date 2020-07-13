cc.Class({
    extends: cc.Component,

    properties: {},

    start() {
        cc.sys.localStorage.setItem('nowlevel', 'level3');
        window.level3Arr = new Array();
        window.level3Max = 0;
        for (let i = 1; i <= 8; i++) {
            level3Arr[i] = this.getRandomNumber(1, 100);
            level3Max = Math.max(level3Max, level3Arr[i]);
        }
        talk_arr[0] = new Array();
        talk_arr[0][0] = "喵~这好像是第二节正式的课.";
        talk_arr[0][1] = "本喵给你看一些新东西~看到那个『蓝色的瓶子』了吗?";
        talk_arr[0][2] = "那其实是不同的『魔法容器』,是类似于你的次元包一样的东西~这你不用管~(数据结构)";
        talk_arr[0][3] = "你快去看看那是什么叭~这节课的内容都在那~";
        talk_arr[1] = new Array();
        talk_arr[1][0] = "这是这节课要用到的容器~一个你不能动的『魔法盒子』~";
        talk_arr[1][1] = "你可以看到这有好多块『神秘石』,这些都是本喵提前转移进去的喵~";
        talk_arr[1][2] = "你只可以把它们的『复制』拿出来,你目前还没有能力改变里面的东西~";
        talk_arr[1][3] = "下面听好啦~";
        talk_arr[1][4] = "这节课的任务就是把这几块『神秘石』中法力值最大的找出来喵!";
        talk_arr[1][5] = "这次『直接审判神秘石』就好了,你也不需要知道里面是多少对吧~";
        talk_arr[1][5] = "虽然有点简单喵~毕竟是刚接触嘛~";
        talk_arr[1][6] = "哈哈哈喵~你不要被全部看上去都是一样的神秘石弄昏啦~";
        window.talk_finished = function (scene) {
            if (scene == 0) {
                myAlert('点击蓝色的瓶子按钮');
            } else if (scene == 1) {
                myAlert('找出法力值最大的神秘石\n提交它的复制');
            }
        };
        myTalk();
    },

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    },
});