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
        let submitItem = submit.item;
        if (submitItem.name != 'magicball') {
            myAlert('请放入魔法球进行审判');
            return;
        }
        let submitNum = submit.itemData;
        if (submitNum == level4Ans) {
            let level4 = cc.sys.localStorage.getItem('level4');
            if (level4 == null) level4 = 0;
            else level4 = parseInt(level4);
            level4 |= 1;
            if (timeScore <= 20) level4 |= 2;
            if (timeScore <= 10) level4 |= 4;
            cc.sys.localStorage.setItem('level4', level4);
            cc.sys.localStorage.setItem('unlock5', 'yes');
            if (clickStar==false) cc.sys.localStorage.setItem('ac7', 'get');
            cc.sys.localStorage.setItem('res', 'AC');
            cc.sys.localStorage.setItem('finalTime', timeScore);
            cc.sys.localStorage.setItem('finalSpace', maxSpaceScore);
            cc.director.loadScene('result4');
        } else {
            cc.sys.localStorage.setItem('res', 'WA');
            cc.sys.localStorage.setItem('finalTime', timeScore);
            cc.sys.localStorage.setItem('finalSpace', maxSpaceScore);
            cc.director.loadScene('result4');
        }
    }
});