cc.Class({
    extends: cc.Component,

    properties: {
        clickAudio: cc.AudioSource,
        submitNode: cc.Node,
    },
    start() {

    },

    update(dt) {
        this.node.angle++;
    },

    onClick() {
        this.clickAudio.play();
        this.submitNode.active = !this.submitNode.active;
        if (this.submitNode.active) {
            topNodeZIndex = (topNodeZIndex + 1) % cc.macro.MAX_ZINDEX;
            this.submitNode.zIndex = topNodeZIndex;
        }
    }
});