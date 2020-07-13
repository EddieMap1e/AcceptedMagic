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
        if (rootNode.getChildByName('array').active) {
            topNodeZIndex = (topNodeZIndex + 1) % 999999;
            rootNode.getChildByName('array').zIndex = topNodeZIndex;
        }
    }
});
