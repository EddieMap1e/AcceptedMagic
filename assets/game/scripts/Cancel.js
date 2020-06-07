cc.Class({
    extends: cc.Component,

    properties: {
        buttonAudio: cc.AudioSource,
    },

    start() {

    },

    onClick() {
        this.node.parent.active = false;
        this.buttonAudio.play();
        topNodeZIndex = (topNodeZIndex + 1) % cc.macro.MAX_ZINDEX;
        this.node.parent.zIndex = topNodeZIndex;
    },
});