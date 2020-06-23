cc.Class({
    extends: cc.Component,

    properties: {
        clickAudio: cc.AudioSource,
    },

    start () {

    },

    onClick(){
        this.clickAudio.play();
        rootNode.getChildByName('array').active = !rootNode.getChildByName('array').active;
    }
});
