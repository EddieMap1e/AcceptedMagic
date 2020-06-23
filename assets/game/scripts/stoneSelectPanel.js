cc.Class({
    extends: cc.Component,

    properties: {

    },

    start () {

    },

    deleteClick() {
        this.node.parent.getComponent(cc.AudioSource).play();
        setTimeout(() => {
            this.node.parent.getComponent('secretStone').deleteItem();
        }, 200);
    },

    cancelClick() {
        this.node.parent.getComponent(cc.AudioSource).play();
        this.node.active = false;
    }
});
