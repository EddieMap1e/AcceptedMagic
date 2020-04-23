cc.Class({
    extends: cc.Component,

    properties: {
        clickAudio: cc.AudioSource,
    },

    start() {
        this.node.on('touchmove', (event) => {
            this.node.setPosition(this.node.x + event.getDeltaX(), this.node.y + event.getDeltaY());
        }, this);
        this.node.zIndex = cc.macro.MAX_ZINDEX
    },

    ok() {
        this.clickAudio.play();
        this.node.active = false;
    },
});