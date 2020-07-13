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
        if(submitNum==level1Target){
            let level1=cc.sys.localStorage.getItem('level1');
            if(level1==null)level1=0;
            else level1=parseInt(level1);
            level1|=1;
            if(timeScore<=20)level1|=2;
            if(timeScore<=15)level1|=4;
            cc.sys.localStorage.setItem('level1',level1);
            if(timeScore<=8)cc.sys.localStorage.setItem('ac2','get');
            if(timeScore>=30)cc.sys.localStorage.setItem('ac3','get');
            cc.sys.localStorage.setItem('res','AC');
            cc.sys.localStorage.setItem('unlock2','yes');
            cc.sys.localStorage.setItem('unlock3','yes');
            cc.sys.localStorage.setItem('finalTime',timeScore);
            cc.sys.localStorage.setItem('finalSpace',maxSpaceScore);
            cc.director.loadScene('result1');
        }
        else {
            cc.sys.localStorage.setItem('res','WA');
            cc.sys.localStorage.setItem('finalTime',timeScore);
            cc.sys.localStorage.setItem('finalSpace',maxSpaceScore);
            cc.director.loadScene('result1');
        }
    }
});