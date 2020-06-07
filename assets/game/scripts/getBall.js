cc.Class({
    extends: cc.Component,

    properties: {
        buttonAudio: cc.AudioSource,
    },

    start() {
        this.node.on('touchmove',this.onTouchMove,this);
    },

    getBall(event, number) {
        this.buttonAudio.play();
        bagNode.getComponent('bag').addMagicBall(number);
        myAddTime(1);
        this.node.active = false;
    },

    onTouchMove(event) {
        let dx = event.getDeltaX();
        let dy = event.getDeltaY();
        this.node.setPosition(this.node.x + dx, this.node.y + dy);
    },
});