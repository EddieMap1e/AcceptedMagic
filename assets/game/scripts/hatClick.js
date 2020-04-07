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
    }
});