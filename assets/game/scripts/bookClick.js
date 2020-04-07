cc.Class({
    extends: cc.Component,

    properties: {
        clickAudio: cc.AudioSource,
    },

    start () {

    },

    onClick(){
        this.clickAudio.play();
        cc.log('book被点击了');
    }
});
