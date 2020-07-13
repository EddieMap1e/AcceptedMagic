cc.Class({
    extends: cc.Component,

    properties: {
    },

    start() {
        cc.sys.localStorage.setItem('nowlevel', 'level1');
        window.level1Target = this.getRandomNumber(1, 20);
        talk_arr[0] = new Array();
        talk_arr[0][0] = "喵~ 在魔法学校学魔法好累啊~";
        talk_arr[0][1] = "呀! 你就是新来的魔法练习生对吧!";
        talk_arr[0][2] = "初次见面喵~我是埃文的妹妹艾米.";
        talk_arr[0][3] = "学习好无聊哦~ 来陪我玩个游戏喵~";
        talk_arr[0][4] = "我这里有一个『神秘石』,你来猜猜这块神秘石的法力值是多少叭~用对应法力值的『魔法球』告诉我就行啦~";
        talk_arr[0][5] = "我已经把神秘石传送到你的『魔法次元袋』啦~小声告诉你,这块神秘石的法力值是1~20之间的!";
        talk_arr[0][6] = "嘻嘻~我作为大魔法师埃迪的宠物当然知道里面蕴含多少法力值啦~快去快去~";
        talk_arr[0][7] = "还有不要把我的神秘石弄丢哦!!!";
        talk_arr[1] = new Array();
        talk_arr[1][0] = "我偷偷往你的魔法书写上了一些魔法~";
        talk_arr[1][1] ="它们在最后面,有助于你猜到神秘石的法力值哦~";
        talk_arr[1][2] = "噢对了,『神秘石』和『魔法球』如果进行加减乘除魔法,都会得到神秘石的呢!";
        window.talk_finished = function (scene) {
            if(scene==0){
                myAlert('获取和神秘石一样法力值的魔法球\n神秘石法力值在1~20');
            }
            else if(scene==1){
                myAlert('新增了法力值比较魔法');
            }
        };
        myTalk();
    },

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    },
});