cc.Class({
    extends: cc.Component,

    properties: {
        clickAudio: cc.AudioSource,
        calcNode: cc.Node,
    },

    start() {

    },

    onClick() {
        this.clickAudio.play();
        this.calcNode.active = !this.calcNode.active;
        if (this.calcNode.active) {
            topNodeZIndex = (topNodeZIndex + 1) % 999999;
            this.calcNode.zIndex = topNodeZIndex;
        }
    }
});