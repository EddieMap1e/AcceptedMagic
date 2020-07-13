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
        if (submitItem.name != 'secretStone') {
            myAlert('请放入神秘石进行审判');
            return;
        }
        let submitNum = submit.itemData;
        if (submitNum == level3Max) {

            let level3 = cc.sys.localStorage.getItem('level3');
            if (level3 == null) level3 = 0;
            else level3 = parseInt(level3);
            level3 |= 1;
            if (timeScore <= 16) level3 |= 2;
            if (maxSpaceScore <= 10) level3 |= 4;
            cc.sys.localStorage.setItem('level3', level3);
            cc.sys.localStorage.setItem('unlock4', 'yes');
            if (timeScore == 1) cc.sys.localStorage.setItem('ac6', 'get');
            cc.sys.localStorage.setItem('res', 'AC');
            cc.sys.localStorage.setItem('finalTime', timeScore);
            cc.sys.localStorage.setItem('finalSpace', maxSpaceScore);
            cc.director.loadScene('result3');
        } else {
            cc.sys.localStorage.setItem('res', 'WA');
            cc.sys.localStorage.setItem('finalTime', timeScore);
            cc.sys.localStorage.setItem('finalSpace', maxSpaceScore);
            cc.director.loadScene('result3');
        }
    }
});