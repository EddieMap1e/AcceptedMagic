cc.Class({
    extends: cc.Component,

    properties: {
        clickAudio: cc.AudioSource,
        bagNode: cc.Node,
    },

    start() {

    },

    onClick() {
        this.clickAudio.play();
        this.bagNode.active = !this.bagNode.active;
        if (this.bagNode.active) {
            topNodeZIndex = (topNodeZIndex + 1) % cc.macro.MAX_ZINDEX;
            this.bagNode.zIndex = topNodeZIndex;
        }
    }
});