cc.Class({
    extends: cc.Component,

    properties: {
        buttonAudio: cc.AudioSource,
    },

    start() {

    },

    onClick(){
        
        this.buttonAudio.play();
        this.node.parent.active = false;
    },
});