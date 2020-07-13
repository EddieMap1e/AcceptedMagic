cc.Class({
    extends: cc.Component,

    properties: {
        bgmAudio: {
            default: null,
            type: cc.AudioClip
        },
        starCnt:cc.Label,
    },

    start () {
        this.bgm = cc.audioEngine.play(this.bgmAudio, true, 1);
        let cnt=0;
        for(var i=0;i<=7;i++){
            let lv = 'level'+i;
            let stars=cc.sys.localStorage.getItem(lv);
            if(stars&1)cnt++;
            if(stars&2)cnt++;
            if(stars&4)cnt++;
        }
        this.starCnt.string=cnt+' / 24';
    },

    onDestroy() {
        cc.audioEngine.stop(this.bgm);
    },
});
