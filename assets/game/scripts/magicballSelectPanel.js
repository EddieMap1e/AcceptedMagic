cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    start() {

    },

    deleteClick() {
        this.node.parent.getChildByName('magicball').getComponent(cc.AudioSource).play();
        setTimeout(() => {
            this.node.parent.getChildByName('magicball').getComponent('magicBall').deleteItem();
        }, 200);
    },

    cancelClick() {
        this.node.parent.getChildByName('magicball').getComponent(cc.AudioSource).play();
        this.node.active = false;
    }
});