cc.Class({
    extends: cc.Component,

    properties: {
        clickAudio: cc.AudioSource,
        qNode: cc.Node,
    },

    start() {

    },

    onClick() {
        this.clickAudio.play();
        this.qNode.active = !this.qNode.active;
        if (this.qNode.active) {
            topNodeZIndex = (topNodeZIndex + 1) % cc.macro.MAX_ZINDEX;
            this.qNode.zIndex = topNodeZIndex;
        }
    }
});