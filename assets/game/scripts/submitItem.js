cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {

    },

    onCollisionEnter(other, self) {
        cc.log(other.node.getComponent('magicBall').number);
    },
});