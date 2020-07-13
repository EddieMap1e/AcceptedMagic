cc.Class({
    extends: cc.Component,

    properties: {
        adNode: cc.Node,
        textNode: cc.Node,
    },

    start() {
        this.node.on('touchmove', this.onTouchMove, this);
    },

    onTouchMove(event) {
        if (event.target.name != 'solve') return;
        let dx = event.getDeltaX();
        let dy = event.getDeltaY();
        this.node.setPosition(this.node.x + dx, this.node.y + dy);
    },

    onClick() {
        this.adNode.active = false;
        this.textNode.active = true;
    }
});