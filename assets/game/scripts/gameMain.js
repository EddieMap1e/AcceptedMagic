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
        window.rootNode = this.node;
        window.topNodeZIndex = 0;
        window.myAlert = this.myAlert;
    },

    onDestroy() {
        cc.audioEngine.stop(this.bgm);
    },

    myAlert(msg) {
        let alertNode = rootNode.getChildByName('alert');
        alertNode.getChildByName('text').getComponent(cc.Label).string = msg;
        alertNode.active = true;
    }
});