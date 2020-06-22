cc.Class({
    extends: cc.Component,

    properties: {
        buttonAudio: cc.AudioSource,
    },

    start() {

    },

    onClick() {
        this.node.parent.getChildByName('achievement').active = !this.node.parent.getChildByName('achievement').active;
        this.buttonAudio.play();
    }
});