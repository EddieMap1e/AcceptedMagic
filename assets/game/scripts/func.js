cc.Class({
    extends: cc.Component,

    properties: {
        buttonAudio: cc.AudioSource,
    },

    start () {
        this.node.on('touchmove', this.onTouchMove, this);
    },

    onTouchMove(event) {
        if (event.target.name == 'listBG') return;
        let dx = event.getDeltaX();
        let dy = event.getDeltaY();
        this.node.setPosition(this.node.x + dx, this.node.y + dy);
    },

    getBall(){
        this.buttonAudio.play();
        topNodeZIndex = (topNodeZIndex + 1) % cc.macro.MAX_ZINDEX;
        rootNode.getChildByName('getBall').zIndex = topNodeZIndex;
        rootNode.getChildByName('getBall').setPosition(0, 0);
        rootNode.getChildByName('getBall').active = true;
        this.node.active = false;
    },
});
