cc.Class({
    extends: cc.Component,

    properties: {
        clickAudio: cc.AudioSource,
        taskNode: cc.Node,
    },

    start() {

    },

    onClick() {
        this.clickAudio.play();
        this.taskNode.active = !this.taskNode.active;
        if (this.taskNode.active) {
            topNodeZIndex = (topNodeZIndex + 1) % cc.macro.MAX_ZINDEX;
            this.taskNode.zIndex = topNodeZIndex;
        }
    }
});