cc.Class({
    extends: cc.Component,

    properties: {

    },

    start () {
        talk_arr[0]=new Array();
        talk_arr[0][0]="喵~ 你好鸭~ "
        +"我是大魔法师的宠物埃文,"
        +"这里是大魔法师用神奇蜡笔创造的世界.";
        talk_arr[0][1]="你一定是新来的魔法练习生吧!"
        +"我来负责你的算法,呃...不,是魔法的学习~";
        myTalk();
    },
});
