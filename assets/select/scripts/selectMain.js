cc.Class({
    extends: cc.Component,

    properties: {
        bgmAudio: {
            default: null,
            type: cc.AudioClip
        },
    },

    start () {
        this.bgm = cc.audioEngine.play(this.bgmAudio, true, 1);
    },

    onDestroy() {
        cc.audioEngine.stop(this.bgm);
    },
});
