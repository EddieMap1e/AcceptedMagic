cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {
        this.node.getComponent('bag').addSecretStone(level1Target);
    },
});