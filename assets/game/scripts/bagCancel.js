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
    },
});