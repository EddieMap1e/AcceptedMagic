cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {

    },

    onClick() {
        this.node.parent.active = false;
    },
});