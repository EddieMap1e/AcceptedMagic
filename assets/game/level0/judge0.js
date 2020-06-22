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
        let submitNum = this.node.parent.getChildByName('item').getComponent('submitItem').itemData;
        if(parseInt(submitNum)==66){
            let level0=cc.sys.localStorage.getItem('level0');
            if(level0==null)level0=0;
            else level0=parseInt(level0);
            level0|=1;
            if(timeScore<=8)level0|=2;
            if(maxSpaceScore<=8)level0|=4;
            cc.sys.localStorage.setItem('level0',level0);
            if(timeScore<=4&&maxSpaceScore<=3)cc.sys.localStorage.setItem('ac1','get');
            cc.sys.localStorage.setItem('res','AC');
            cc.sys.localStorage.setItem('unlock1','yes');
            cc.sys.localStorage.setItem('finalTime',timeScore);
            cc.sys.localStorage.setItem('finalSpace',maxSpaceScore);
            cc.director.loadScene('result0');
        }
        else myAlert('念你为初学者,吾再给你尝试的机会,回去重新尝试吧!');
    }
});