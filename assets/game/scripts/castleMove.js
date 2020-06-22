cc.Class({
    extends: cc.Component,

    properties: {

    },

    update (dt) {
        if(this.node.x>-100)this.node.setPosition(-360,-640);
        else this.node.setPosition(this.node.x+0.5,this.node.y+0.385);
    },
});
