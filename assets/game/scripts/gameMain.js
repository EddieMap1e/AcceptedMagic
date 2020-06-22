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
        window.bagNode = this.node.getChildByName('bagTitle').getChildByName('bagScrollView').getChildByName('view').getChildByName('bagLayout');
        window.timeScore = 0;
        window.spaceScore = 0;
        window.maxSpaceScore = 0;
        window.talk_arr = new Array();
        window.myAlert = this.myAlert;
        window.myTalk = this.myTalk;
        window.topNodeZIndex = 0;
        window.talk_scene = 0;
        window.talk_page = 0;
        window.talk_word = 0;
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
    }
});