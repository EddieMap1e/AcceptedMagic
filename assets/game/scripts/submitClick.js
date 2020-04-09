cc.Class({
    extends: cc.Component,

    properties: {
        clickAudio:cc.AudioSource,
    },

    start () {

    },

    onClick(){
        this.clickAudio.play();
        topNodeZIndex = (topNodeZIndex + 1) % 999999;
        this.node.parent.zIndex = topNodeZIndex;
        cc.log('judge');
    }
});
