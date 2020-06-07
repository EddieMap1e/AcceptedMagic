cc.Class({
    extends: cc.Component,

    properties: {
        clickAudio: cc.AudioSource,
        funcNode: cc.Node,
    },

    start() {

    },

    onClick() {
        this.clickAudio.play();
        this.funcNode.active = !this.funcNode.active;
        if (this.funcNode.active) {
            topNodeZIndex = (topNodeZIndex + 1) % cc.macro.MAX_ZINDEX;
            this.funcNode.zIndex = topNodeZIndex;
        }
    }
});