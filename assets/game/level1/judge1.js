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
        if(submitItem.name!='magicball'){
            myAlert('请放入魔法球进行审判');
            return;
        }
        let submitNum=submit.itemData;
        if(submitNum==level1Target)myAlert('ok');
        else myAlert('fail');
    }
});