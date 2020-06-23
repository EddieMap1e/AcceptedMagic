cc.Class({
    extends: cc.Component,

    properties: {
        clickAudio: cc.AudioSource,
    },

    start() {

    },

    onClick() {
        this.clickAudio.play();
        topNodeZIndex = (topNodeZIndex + 1) % cc.macro.MAX_ZINDEX;
        this.node.parent.zIndex = topNodeZIndex;
        let submit = this.node.parent.getChildByName('item').getComponent('submitItem');
        let submitItem=submit.item;
        let submitNum=submit.itemData;
        myAlert(submitItem.name+submitNum);
    }
});