cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {
        this.node.getComponent('bag').addMagicBall(0);
        this.node.getComponent('bag').addSecretStone(level6A);
        this.node.getComponent('bag').addSecretStone(level6B);
    },
});