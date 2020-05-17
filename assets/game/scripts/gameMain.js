cc.Class({
    extends: cc.Component,

    properties: {
        bgmAudio: {
            default: null,
            type: cc.AudioClip
        },
    },

    start() {
        this.bgm = cc.audioEngine.play(this.bgmAudio, true, 1);
        cc.director.getCollisionManager().enabled = true;
    },

    onLoad() {
        window.rootNode = this.node;
        window.timeScore = 0;
        window.spaceScore = 0;
        window.maxSpaceScore = 0;
        window.myAlert = this.myAlert;
        window.myTalk = this.myTalk;
        window.topNodeZIndex = 0;
        window.talk_scene = 0;
        window.talk_page = 0;
        window.talk_word = 0;
        window.talk_arr = new Array();
        talk_arr[0] = new Array();
        talk_arr[0][0] = "我是一只魔法小猫咪~我是一个粉刷匠粉刷本领强";
        talk_arr[0][1] = "这是第二页咧 噜啦啦啦啦拉拉阿里";
        talk_arr[0][2] = "这是第三页啦啦啦阿拉";
        talk_arr[0][3] = "这是最后一页啦 噜啦啦啦拉拉爱啦啦啦啦撒大声地撒打算大萨达阿萨德";
        talk_arr[1] = new Array();
        talk_arr[1][0] = "这是第二个谈话大内容哦";
        window.myAddTime = this.myAddTime;
        window.myAddSpace = this.myAddSpace;
        window.mySubSpace = this.mySubSpace;
    },

    onDestroy() {
        cc.audioEngine.stop(this.bgm);
    },

    myAlert(msg) {
        let alertNode = rootNode.getChildByName('alert');
        alertNode.getChildByName('text').getComponent(cc.Label).string = msg;
        alertNode.active = true;
    },

    myTalk() {
        let dialogNode = rootNode.getChildByName('dialog');
        let dialogJS = dialogNode.getComponent('dialog');
        dialogNode.runAction(
            cc.moveTo(0.5, 0, dialogNode.y)
        );
        dialogJS.talk();
    },

    myAddTime(x) {
        rootNode.getChildByName('score').getComponent('score').addTimeScore(x);
    },

    myAddSpace(x) {
        rootNode.getChildByName('score').getComponent('score').addSpaceScore(x);
    },

    mySubSpace(x) {
        spaceScore -= x;
    }
});