cc.Class({
    extends: cc.Component,

    properties: {
        clickAudio: cc.AudioSource,
    },

    start () {

    },

    onClick(){
        this.clickAudio.play();
        cc.log('bottle被点击了');
    }
});
