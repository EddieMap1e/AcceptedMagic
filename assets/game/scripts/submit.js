cc.Class({
    extends: cc.Component,

    properties: {

    },
    start() {
        this.node.on('touchmove', (event) => {
            this.node.setPosition(this.node.x + event.getDeltaX(), this.node.y + event.getDeltaY());
        }, this);
    },
});