cc.Class({
    extends: cc.Component,

    properties: {},

    start() {
        this.node.on('touchmove', this.onTouchMove, this);
    },

    onTouchMove(event) {
        if (event.target.name != 'array') return;
        let dx = event.getDeltaX();
        let dy = event.getDeltaY();
        this.node.setPosition(this.node.x + dx, this.node.y + dy);
    },
});