cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {
        this.node.getComponent('bag').addSecretStone(level7A);
        this.node.getComponent('bag').addSecretStone(level7B);
        this.node.getComponent('bag').addSecretStone(level7C);
    },
});